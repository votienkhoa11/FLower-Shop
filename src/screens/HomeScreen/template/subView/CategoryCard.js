import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, {useState} from 'react';
import styles from '../../styles';
import { config } from '../../../../configurations';

const CategoryCard = ({data = {}}) => {
    const imageSource = {uri: config.endPoint + data.images[0].file_path};

    const [valid, setValid] = useState(true);

  return (
    data ? (
        <TouchableOpacity>
            <View style={styles.categoryCard}>
                <Image
                onError={() => setValid(!valid)}
                source={valid ? imageSource : config.noImage}
                style={styles.categoryImage}
                />
                <Text style={styles.categoryName}>{data.name}</Text>
            </View>
        </TouchableOpacity>
      ) : null
  );
};

export default CategoryCard;
