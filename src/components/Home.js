import React from 'react'

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import {
  Actions
} from 'react-native-router-flux'

class Home extends React.Component {
  state = {
    userName: ''
  }
  render () {
    return (
      <View>
        <Text style={styles.title}>
          Enter your name:
        </Text>
        <TextInput
          style={styles.nameInput}
          placeholder='John Doe'
          onChangeText={(text) => {
            this.setState({
              userName: text
            })
          }}
          />
          <TouchableOpacity
           style={styles.button}
           onPress={() => {
             //navigate to the second screen, and to pass in the name
             Actions.chat({
               userName: this.state.userName
             })
           }}
         >
           <Text> Touch Here </Text>
         </TouchableOpacity>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  title: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 30
  },
  nameInput: {
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    margin: 20,
    padding: 5
  },
  button: {
   alignItems: 'center',
   backgroundColor: '#DDDDDD',
   padding: 10
 },
})
export default Home
