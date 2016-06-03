import React from 'react';
import {
  Alert,
  AppRegistry,
  Image,
  ScrollView,
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
      urls: [
        'http://i.imgur.com/Efd7QWA.png',
        'http://i.imgur.com/hqBpjBD.png',
      ],
    }
  },

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.topText}>Add an image URL below:</Text>
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
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContent}>
          {
            this.state.urls.map(url => {
              return <Image style={styles.image} source={{uri: url}} />
            })
          }
        </ScrollView>
      </View>
    );
  },

  onAddPress: function() {
    var { urls, input } = this.state;
    if (!/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(input)) {
      return Alert.alert("Invalid URL","That ain't no URL I ever seen!" )
    }
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
  topText: {
    alignSelf: 'center',
    marginTop: 30,
  },
  inputAndButton: {
    flexDirection: 'row',
    marginTop: 5,
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
    borderColor: '#5cb85c',
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 10,
    backgroundColor: '#5cb85c',
  },
  buttonText: {
    padding: 4,
    color: 'white'
  },
  image: {
    height: 80,
    width: 80,
    borderColor: 'black',
    borderWidth: 1,
    margin: 3
  },
  scrollView: {
    flex: 1,
    marginTop: 10,
    height: 300,
  },
  scrollViewContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});

AppRegistry.registerComponent('urlimagegallery', () => urlimagegallery);
