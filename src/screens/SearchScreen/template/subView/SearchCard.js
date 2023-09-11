import { View, Text } from 'react-native';
import React from 'react';

//import style
import styles from '../../styles';

const SearchCard = ({searchItem = {}}) => {
  return (
      searchItem ? (
      <View style={styles.searchItem}>
          <Text style={styles.searchText}>{searchItem}</Text>
      </View>
      ) : null
  );
};

export default SearchCard;
