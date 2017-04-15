/* eslint react/prop-types: 0 */
import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  headerTextStyle: {
    fontSize: 18,
  },
  largeImageStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
};

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image } = album;
  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    largeImageStyle,
  } = styles;
  console.log('Inside AlbumDetail');

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
          style={largeImageStyle}
          source={{ uri: image }}
        />
      </CardSection>
      <CardSection>
        <Button />
      </CardSection>
    </Card>

  );
};


export default AlbumDetail;
