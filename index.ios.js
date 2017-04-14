import React from 'react';
import { AppRegistry, View, ScrollView } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

const App = () => (
  <View>
    <ScrollView>
      <Header headerText={'Albums!'} />
      <AlbumList />
    </ScrollView>
  </View>
);

AppRegistry.registerComponent('albums', () => App);
