/* eslint react/prop-types: 0 */

import React from 'react';
import { Text, View } from 'react-native';
import AlbumList from './AlbumList';

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
  },
};

const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}> {props.headerText} </Text>
      <AlbumList />
    </View>
  );
};

export default Header;
