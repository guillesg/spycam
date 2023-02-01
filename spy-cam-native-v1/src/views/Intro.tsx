import { View, Image, StyleSheet, ToastAndroid, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamsList } from '../../App'

export default function Intro() {
    const navigation = useNavigation<StackNavigationProp<RootStackParamsList>>()

    return (
    <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Auth')}>
            <Image 
                source={require('../../assets/logo.png')}
                style={styles.logo}
                
            />
        </TouchableWithoutFeedback>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131313',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: '100%',
      height: '20%',
    }
  });