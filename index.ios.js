import React from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

var urlimagegallery = React.createClass({
  getInitialState: function() {
    return {
      input: '',
      urls: ['http://i.imgur.com/Efd7QWA.png','http://i.imgur.com/Efd7QWA.png','http://i.imgur.com/Efd7QWA.png'],
    }
  },

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputAndButton}>
          <TextInput
            style={styles.input}
            value={this.state.input}
            onChangeText={input => this.setState({input})}
          />
          <TouchableHighlight
            style={styles.button}
            underlayColor={'gray'}
            onPress={this.onAddPress}
            >
            <Text style={styles.buttonText}>+</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{uri: 'http://i.imgur.com/Efd7QWA.png'}}
        />
        {
          this.state.urls.map(url => {
            return <Image style={styles.image} source={{uri: url}} />
          })
        }
        </View>
      </View>
    );
  },

  onAddPress: function() {
    var { urls, input } = this.state;
    console.log(this.state.input);
    console.log(this.state.urls);
    this.setState({urls: urls.concat(input), input: ''});
  },

  renderImages: function() {
    this.state.urls.map(url => {
      return <Image style={styles.image} source={{uri: url}} />
    })
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  inputAndButton: {
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    height: 35,
    width: 250,
  },
  button: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 10
  },
  buttonText: {
    padding: 4
  },
  image: {
    height: 75,
    width: 75,
    borderColor: 'black',
    borderWidth: 1,
    margin: 3
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10,
    justifyContent: 'space-around',
  }
});

AppRegistry.registerComponent('urlimagegallery', () => urlimagegallery);
