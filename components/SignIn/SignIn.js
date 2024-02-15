import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { TextInput, Icon } from "react-native-paper";
import React from "react";
import { useState } from "react";

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const firstInputForDaysInterestTextInputRef = React.useRef();
  const secondInputForDaysInterestTextInputRef = React.useRef();

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
      }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{
            flex: 1,
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/log-in.png")}
            style={{ width: 300, height: 200, marginTop: 50 }}
            resizeMode="contain"
          />

          <TextInput
            ref={firstInputForDaysInterestTextInputRef}
            outlined
            label="Email address"
            value={email}
            textContentType="emailAddress"
            returnKeyType="next"
            onSubmitEditing={() =>
              secondInputForDaysInterestTextInputRef.current?.focus()
            }
            autoCompleteType="email"
            onChangeText={(text) => {
              setEmail(text);
            }}
            selectionColor="red"
            style={styles.input}
          />

          <TextInput
            ref={secondInputForDaysInterestTextInputRef}
            returnKeyType="done"
            label="Password"
            textContentType="password"
            value={password}
            selectionColor="red"
            style={styles.input}
            onChangeText={(text) => {
              setPassword(text);
            }}
            secureTextEntry
          />

          <Text
            style={{
              fontSize: 11,
              alignSelf: "center",
              color: "#8f8f8f",
              textAlign: "center",
            }}
          >
            Forgot your Password?
          </Text>

          <Pressable
            style={styles.buttonLogin}
            onPress={() => navigation.navigate("DrawNavigation", { email })}
          >
            <Text style={styles.textStyle}>Log In</Text>
          </Pressable>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    width: "80%",
    backgroundColor: "whitesmoke",
  },
  textStyle: {
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonLogin: {
    borderRadius: 20,
    padding: 10,
    width: 100,
    backgroundColor: "#e5d5da",
  },
});
