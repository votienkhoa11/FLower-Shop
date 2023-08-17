import React, { useEffect, useState } from 'react';
import { callToast } from '../../Components/Toast';

//import data
import { user } from '../../database/MockData';
import { userData } from '../../api/userData';
import { data } from '../../database/MockData';

//import template
import HomeMainView from './template/HomeMainView';

const HomeContainer = (props) => {
    const {
        navigation,
    } = props;

    //set data
    const [product, setProduct] = useState([]);
    const [popularProduct, setPopularProduct] = useState([]);
    const [broughtProducts, setBroughtProduct] = useState([]);
    const [userInfo, setUser] = useState([]);

    const [loading, setLoading] = useState(true);
    const [favorite, setFavorite] = useState(false);

    //get data from the database
    const getDatafromDB = async () => {
        //get user
        setUser(await userData());
        //get product
        const productList = [...data];

        productList.sort(() => 0.5 - Math.random());
        setProduct(productList.slice(0, 5));

        //get popular products by sorting productList's like
        //the idea is use the sort function to sort based on comapring like products from (from highest to lowest)
        const popularProductList = productList.sort(function(a, b) {
            const keyA = a.like || 0;
            const keyB = b.like || 0;
            //compare the 2 like of the products
            return keyB - keyA;
        });

        //set the popular product with top 5 item
        setPopularProduct(popularProductList.slice(0, 5));

        //get products that the users has brought before to ask them to buy again
        const broughtProductList = data.filter((productItem) =>
            user.broughtProducts.includes(productItem.id));

        //set 5 brought products
        setBroughtProduct(broughtProductList.slice(0, 5));

        //set loading to false when the app finised loading data
        setLoading(false);
    };

    //on press functions
    const setFavoriteButton = () => {
        if (favorite) {
            setFavorite(false);
            callToast('Unfavorite');
        } else {
            setFavorite(true);
            callToast('Favorite');
        }
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getDatafromDB();
        });

        return unsubscribe;
    }, [navigation]);

    const homeProps = {
        navigation,
        loading,
        userInfo,
        favorite,
        setFavoriteButton,
        popularProduct,
        broughtProducts,
        product,
    };

  return <HomeMainView  {...homeProps} />;
};

export default HomeContainer;
