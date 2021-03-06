import React from 'react'
import {Button, StyleSheet, TextInput, View} from 'react-native'
import contacts from './contacts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    minWidth: 100,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
  },
})

export default class AddContactForm extends React.Component {
  state = {
    name: '',
    phone: '',
    isFormValid: false,
  }

  handleNameChange = name => {
    this.setState({name})
  }

  handlePhoneChange = phone => {
    phone = phone.replace(/[.\s]/g, '');
    if(!isNaN(phone)){
      this.setState({phone});
      if (phone) {
        this.setState({isFormValid: true});
      } else {
        this.setState({isFormValid: false});
      }
    }
  }

  onSaveContact = () => {
    if (this.state.isFormValid) {
      contacts.push({name: this.state.name, phone: this.state.phone});
      this.props.showForm(false);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.name}
          onChangeText={this.handleNameChange}
          placeholder="Name"
        />
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          value={this.state.phone}
          onChangeText={this.handlePhoneChange}
          placeholder="Phone"
        />
        <Button title="Submit" onPress={this.onSaveContact}/>
      </View>
    )
  }
}
