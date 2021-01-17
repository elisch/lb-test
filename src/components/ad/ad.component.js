import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './ad.styles';

const house = require('../../assets/images/house.png');

const Ad = ({item}) => {
  const {street_address: address, picture_first_filename: image} = item.Ad1;
  return (
    <View style={styles.ad}>
      <View style={styles.header}>
        <Text style={styles.title}>{address ? address : 'Adress saknas'}</Text>
      </View>
      <Image
        source={image ? {uri: image} : house}
        resizeMode={image ? 'cover' : 'contain'}
        style={styles.image}
      />
    </View>
  );
};

export default Ad;
