export const products = [
    {
        id: 1,
        name: 'Bó hoa hồng trắng',
        description: 'Bao gồm 10 cành',
        price: 200000,
        salePercentage: 15,
        like: 347,
        sold: 22,
        rating: 2.8,
        image: [require('../assets/imgs/products/whiterosebracket.jpg')],
    },

    {
        id: 2,
        name: 'Giỏ hoa',
        description: 'Đầy đủ các loại hoa và màu sắc',
        price: 300000,

        salePercentage: 15,
        like: 106,
        sold: 49,
        rating: 3.4,
        image: [require('../assets/imgs/products/flowerbracket.jpg')],
    },

    {
        id: 3,
        name: 'Flowers Box',
        description: 'Nhỏ gọn, tiện lợi. Dùng để làm quà tặng.',
        price: 150000,
        salePercentage: 0,
        like: 63,
        sold: 47,
        rating: 3.5,
        image: [require('../assets/imgs/products/flowerbox.jpg')],
    },

    {
        id: 4,
        name: 'Bó hoa hồng',
        description: 'Bó hoa hồng gồm 15 cành.',
        price: 150000,
        salePercentage: 0,
        like: 246,
        sold: 47,
        rating: 3.4,
        image: [require('../assets/imgs/products/bohoahong.png')],
    },

    {
        id: 5,
        name: 'Bình hoa',
        description: 'Trang trí cho không gian phòng.',
        price: 100000,
        salePercentage: 10,
        like: 286,
        sold: 31,
        rating: 4.2,
        image: [require('../assets/imgs/products/flowerJar.jpg')],
    },

    {
        id: 6,
        name: 'Hoa Hướng Dương',
        description: 'Một bó gồm 10 cành lớn.',
        price: 400000,
        salePercentage: 0,
        like: 422,
        sold: 39,
        rating: 3.5,
        image: [
            require('../assets/imgs/products/sunflowerbracket.jpg'),
            require('../assets/imgs/products/sunflowerbracket2.jpg'),
            require('../assets/imgs/products/sunflowerbracket3.jpg'),
        ],
    },

    {
        id: 7,
        name: 'Hoa Lan',
        description: 'Trang trí cho vườn hoa trước nhà.',
        price: 300000,
        salePercentage: 10,
        like: 126,
        sold: 47,
        rating: 5.0,
        image: [require('../assets/imgs/products/chauhoalan.jpg')],
    },
];

export const user = {
    id: 1,
    name: 'Võ Tiến Khoa',
    address: '81, Dã Tượng, phường 9, Quận 8, Hồ Chí Minh',
    phone: '+84869115716',
    email: 'votienkhoa16vl@gmail.com',
    gender: 'Nam',
    birthday: '03/09/1999',
    member: 'sliver',
    avatar: '',
    broughtProducts: [6, 3, 2, 5],
    delivery: 'Giao hàng trong 25 phút',
    promotion: 'Giảm đến 135k cho đơn hàng',
};

export const users = [
    {
        id: 1,
        name: 'Nguyễn Văn A',
        avatar: require('../assets/imgs/avatars/avatar1.jpg'),
    },

    {
        id: 2,
        name: 'Trần Thị C',
        avatar: require('../assets/imgs/avatars/avatar2.jpg'),
    },

    {
        id: 3,
        name: 'Kafuu Chino',
        avatar: require('../assets/imgs/avatars/avatar3.png'),
    },
];

let reviewText = 'Hoa đẹp, dịch vụ tốt';

export const reviews = [
    {
        id: 1,
        userID: 3,
        rating: 4.8,
        review: reviewText,
        date: new Date(2023, 8, 10, 11, 50),

    },

    {
        id: 2,
        userID: 1,
        rating: 5,
        review: '',
        date: new Date(2023, 8, 12, 20, 50),
    },

    {
        id: 3,
        userID: 2,
        rating: 4.3,
        review: reviewText,
        date: new Date(2023, 8, 13, 10, 22),
    },

    {
        id: 4,
        userID: 3,
        rating: 4.6,
        review: '',
        date: new Date(2023, 8, 14, 12, 5),
    },
];

export const categories = [
    {
        id: 1,
        name: 'Hoa Hồng',
        image: require('../assets/imgs/categories/rose.png'),
    },

    {
        id: 2,
        name: 'Hoa Hồng Trắng',
        image: require('../assets/imgs/categories/whiterose.jpg'),
    },
    {
        id: 3,
        name: 'Hoa Cúc',
        image: require('../assets/imgs/categories/hoacuc.jpg'),
    },
    {
        id: 4,
        name: 'Hoa Hướng Dương',
        image: require('../assets/imgs/categories/sunflower.jpg'),
    },
    {
        id: 5,
        name: 'Hoa Lan',
        image: require('../assets/imgs/categories/hoalan.jpg'),
    },
];

export const searchResult = [
    {
        id : 1,
        search: 'Giỏ hoa',
        searchTime: 13,
    },

    {
        id : 2,
        search: 'Hoa hồng',
        searchTime: 311,
    },

    {
        id : 3,
        search: 'Hoa Hướng Dương',
        searchTime: 169,
    },

    {
        id : 4,
        search: 'Giỏ hoa',
        searchTime: 13,
    },

    {
        id : 5,
        search: 'Hoa Ly Ly',
        searchTime: 54,
    },

    {
        id : 6,
        search: 'Bó hoa',
        searchTime: 250,
    },

    {
        id : 7,
        search: 'Giỏ hoa đẹp',
        searchTime: 62,
    },

    {
        id : 8,
        search: 'Hoa hồng trắng',
        searchTime: 201,
    },

    {
        id : 9,
        search: 'Chậu hoa',
        searchTime: 269,
    },

    {
        id : 10,
        search: 'Hoa Lan',
        searchTime: 171,
    },

    {
        id : 11,
        search: 'Chậu hoa Lan',
        searchTime: 14,
    },

    {
        id : 12,
        search: 'Giỏ hoa hồng',
        searchTime: 211,
    },

    {
        id : 13,
        search: 'Hộp hoa',
        searchTime: 234,
    },

    {
        id : 14,
        search: 'Bó hoa hồng trắng',
        searchTime: 100,
    },

    {
        id : 15,
        search: 'Hoa tươi',
        searchTime: 81,
    },
];

export const order = [
    {
        id: 1,
        customerAddress: user.address,
        customerPhone: user.phone,
        productID: 3,
        quantity: 2,
        price: priceCalculator(3, 2),
        datePurchase: new Date(2023, 1, 17, 12, 0),
        orderStatus: 'delivered',
        currency: 'VND',
    },

    {
        id: 2,
        customerAddress: user.address,
        customerPhone: user.phone,
        productID: 2,
        quantity: 4,
        price: priceCalculator(2, 4),
        datePurchase: new Date(2023, 2, 10, 14, 54),
        orderStatus: 'delivered',
        currency: 'VND',
    },

    {
        id: 3,
        customerAddress: user.address,
        customerPhone: user.phone,
        productID: 5,
        quantity: 1,
        price: priceCalculator(5, 1),
        datePurchase: new Date(2023, 2, 29, 17, 59),
        orderStatus: 'delivered',
        currency: 'VND',
    },

    {
        id: 4,
        customerAddress: user.address,
        customerPhone: user.phone,
        productID: 6,
        quantity: 7,
        price: priceCalculator(6, 7),
        datePurchase: new Date(2023, 3, 9, 13, 9),
        orderStatus: 'canceled',
        currency: 'VND',
    },

    {
        id: 5,
        customerAddress: user.address,
        customerPhone: user.phone,
        productID: 7,
        quantity: 5,
        price: priceCalculator(7, 5),
        datePurchase: new Date(2023, 5, 10, 9, 57),
        orderStatus: 'delivering',
        currency: 'VND',
    },

    {
        id: 6,
        customerAddress: user.address,
        customerPhone: user.phone,
        productID: 4,
        quantity: 2,
        price: priceCalculator(4, 2),
        datePurchase: new Date(2023, 6, 12, 16, 13),
        orderStatus: 'delivering',
        currency: 'VND',
    },

    {
        id: 7,
        customerAddress: user.address,
        customerPhone: user.phone,
        productID: 5,
        quantity: 1,
        price: priceCalculator(5, 1),
        datePurchase: new Date(2023, 6, 27, 15, 8),
        orderStatus: 'delivering',
        currency: 'VND',
    },

    {
        id: 8,
        customerAddress: user.address,
        customerPhone: user.phone,
        productID: 3,
        quantity: 4,
        price: priceCalculator(3, 4),
        datePurchase: new Date(2023, 7, 1, 6, 10),
        orderStatus: 'canceled',
        currency: 'VND',
    },

    {
        id: 9,
        customerAddress: user.address,
        customerPhone: user.phone,
        productID: 2,
        quantity: 2,
        price: priceCalculator(2, 2),
        datePurchase: new Date(2023, 7, 1, 10, 36),
        orderStatus: 'processing',
        currency: 'VND',
    },
];

function priceCalculator(productID, quantity) {
    for (let productIndex = 0; productIndex < products.length; productIndex++) {
        if (products[productIndex].id === productID) {
            return products[productIndex].price * quantity;
        }
    }
}
