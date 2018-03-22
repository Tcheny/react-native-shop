import React from 'react';
import { ScrollView, StyleSheet, View, Image } from 'react-native';
import { Text, Header } from 'react-native-elements';

import Items from './comp/Items';
import List from './comp/List';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
      <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'CLOSETS', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
          outerContainerStyles={{ backgroundColor: '#000' }}
      />
        <Image
          style={styles.image}
          source={{ uri: 'https://i.ytimg.com/vi/qA9eSd15GXU/maxresdefault.jpg' }}
          />
          <Text style={styles.title} h1>Shop</Text>
          <Items/>
          <List/>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: { 
    width: '100 %',
    height: 230
  },
  title: {
    textAlign: 'center'
  }
});
