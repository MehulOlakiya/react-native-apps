import { TextInput, View, Text, StyleSheet } from "react-native";

function Input({ label, textInputConfig, style, inValid }) {
  const inputStyle = [styles.textInput];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyle.push(styles.inputMultiline);
  }
  if (inValid) {
    inputStyle.push(styles.inValidInput);
  }
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, inValid && styles.inValidLabel]}>
        {label}
      </Text>
      <TextInput style={inputStyle} {...textInputConfig} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 16,
  },
  label: {
    fontSize: 12,
    color: "white",
    marginBottom: 4,
  },
  textInput: {
    backgroundColor: "#424040",
    padding: 6,
    color: "white",
    borderRadius: 6,
    fontSize: 18,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  inValidLabel: {
    color: "#b83f3f",
  },
  inValidInput: {
    backgroundColor: "#653434",
  },
});
