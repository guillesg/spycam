import { Image, StyleSheet, View, Text, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { RoundedButton } from '../components/RoundedButton'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamsList } from '../../App'
import useViewModel from './AuthViewModel'
import { CustomTextInput } from '../components/CustomTextInput'

export default function Auth() {
  
  const { email, password, onChange } = useViewModel()

  const navigation = useNavigation<StackNavigationProp<RootStackParamsList>>()

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image 
          source={ require('../../assets/logo.png') }
          style={styles.logo}
        />
        <Text style={styles.logoText}>Welcome back</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.formText}>SIGN IN</Text>

        <CustomTextInput 
          image={require('../../assets/assets-udemy/email.png')}
          placeholder='Email'
          keyboardType='email-address'
          property='email'
          onChangeText={ onChange}
          value={ email }
        />

        <CustomTextInput 
          image={require('../../assets/assets-udemy/confirm_password.png')}
          placeholder='Password'
          keyboardType='default'
          property='password'
          onChangeText={ onChange }
          value={ password }
          secureTextEntry={ true }
        />



        <View style={{ marginTop: 30 }}>
          <RoundedButton text="GO IN" onPress={() => {
            console.log(email)
            console.log(password)
          }} />
        </View>

        <View style={styles.formRegister}>
          <Text>You don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.formRegisterText}>Sign up</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131313',
  },
  logoContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: '25%'
  },
  logo: {
    width: 200,
    height: 100,
  },
  logoText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold'
  },
  form: {
    width: '100%',
    height: '40%',
    backgroundColor: '#282828',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20
  },
  formText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16
  },
  formTextInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#AAAAAA',
    marginLeft: 15
  },
  formInput: {
    flexDirection: 'row',
    marginTop: 35,
  },
  formImageInput: {
    width: 25,
    height: 25,
    marginTop: 5
  },
  formRegister: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  formRegisterText: {
    fontStyle: 'italic',
    color: '#AAAAAA',
    borderBottomWidth: 1,
    borderBottomColor: '#AAAAAA',
    fontWeight: 'bold',
    marginLeft: 10
  }
})