import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    // this is trick which allows the style to the right 'props.style'
    // to override the style on the left 'styles.containerStyle'

    // we use this when we want custom style of CardSection somewhere
    <View style={[styles.containerStyle, props.style]}>
    {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardSection };
