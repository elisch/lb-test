import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './ad.styles';

const house = require('../../assets/images/house.png');

const Ad = ({item}) => {
  const {street_address: address, picture_first_filename: image} = item.Ad1;
  return (
    <View
      accessible={true}
      accessibilityRole="imagebutton"
      acessibilityLabel={address}
      accessibilityHint={`Klicka för att navigera till detalj-skärm för ${address}`}
      style={styles.ad}>
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

const areEqual = (prevProps, nextProps) => {
  return prevProps !== nextProps;
};

export default React.memo(Ad, areEqual);
