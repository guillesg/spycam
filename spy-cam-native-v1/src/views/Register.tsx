import {
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { RoundedButton } from "../components/RoundedButton";
import { NavigationHelpersContext, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../App";
import useViewModel from "./RegisterViewModel";
import { CustomTextInput } from "../components/CustomTextInput";

const Register = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamsList>>();

  const { name, lastName, email, phone, password, confirmPassword, onChange, register } =
  useViewModel();

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <Text style={styles.logoText}>Welcome</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.formText}>SIGN UP</Text>

        <CustomTextInput
          image={require("../../assets/assets-udemy/user.png")}
          placeholder="Name"
          keyboardType="default"
          property='name'
          value={ name }
          onChangeText={ onChange }
        />

        <CustomTextInput
          image={require("../../assets/assets-udemy/my_user.png")}
          placeholder="Last name"
          keyboardType="default"
          property='lastName'
          value={ lastName }
          onChangeText={ onChange }
        />

        <CustomTextInput
          image={require("../../assets/assets-udemy/email.png")}
          placeholder="Email"
          keyboardType="email-address"
          property='email'
          value={ email }
          onChangeText={ onChange }
        />
        
        <CustomTextInput
          image={require("../../assets/assets-udemy/phone.png")}
          placeholder="Phone"
          keyboardType="numeric"
          property='phone'
          value={ phone }
          onChangeText={ onChange }
        />

        <CustomTextInput
          image={require("../../assets/assets-udemy/password.png")}
          placeholder="Password"
          keyboardType="default"
          property='password'
          value={ password }
          onChangeText={ onChange }
          secureTextEntry={ true }
        />

        <CustomTextInput
          image={require("../../assets/assets-udemy/confirm_password.png")}
          placeholder="Confirm assword"
          keyboardType="default"
          property='confirmPassword'
          value={ confirmPassword }
          onChangeText={ onChange }
          secureTextEntry={ true }
        />

        <View style={{ marginTop: 30 }}>
          <RoundedButton text="GO IN" onPress={() =>  register() } />
        </View>

        <View style={styles.formRegister}>
          <Text>Do you have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Auth')}>
            <Text style={styles.formRegisterText}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131313",
  },
  logoContainer: {
    position: "absolute",
    alignSelf: "center",
    top: "5%",
  },
  logo: {
    width: 200,
    height: 100,
  },
  logoText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    marginTop: 10,
    fontWeight: "bold",
  },
  form: {
    width: "100%",
    height: "75%",
    backgroundColor: "#282828",
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
  },
  formText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 16,
  },
  formTextInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#AAAAAA",
    marginLeft: 15,
  },
  formInput: {
    flexDirection: "row",
    marginTop: 35,
  },
  formImageInput: {
    width: 25,
    height: 25,
    marginTop: 5,
  },
  formRegister: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  formRegisterText: {
    fontStyle: "italic",
    color: "#AAAAAA",
    borderBottomWidth: 1,
    borderBottomColor: "#AAAAAA",
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default Register;
