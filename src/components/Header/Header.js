
import React from 'react';
import  styles from './HeaderStyles'
import {
  View,
  Text,
} from 'react-native';

const header = props => {
    console.log("props",props);
    const{name,address}=props;

    return (
        <View style={styles.container}>
        {/* <Text>{props.name}</Text>
        <Text>{props.address}</Text>  */}
        <Text>{name}</Text>
        <Text>{address}</Text>
        </View>
    );
};

export default header;