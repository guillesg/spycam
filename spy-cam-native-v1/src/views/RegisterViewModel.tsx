import { StyleSheet, Text, View } from 'react-native'
import React, { useState} from 'react'
import { ApiDelivery } from '../Data/sources/remote/api/ApiDelivery'

const RegisterViewModel = () => {

    const [values, setValues] = useState({
        name: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    })

    const register = async () => {
        try {
            const response = await ApiDelivery.post('/users', values)
            console.log('RESPONSE: ' + JSON.stringify(response))
        } catch (error) {
            console.log(error)
        }
        // console.log(JSON.stringify(values))
    }

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value })
    }

    return {
        ...values,
        onChange,
        register
    }
}

export default RegisterViewModel

const styles = StyleSheet.create({

})