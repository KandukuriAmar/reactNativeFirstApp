import { router } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    marginVertical: 5,
    color: "white",
  },
  view: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  insideView: {
    backgroundColor: "black",
    padding: 20,
    borderRadius: 10,
    color: "white",
  },
  buttons: {
    fontWeight: "bold",
    color: "red",
    fontFamily: "cursive",
  },
});

const About = () => {
  return (
    <View style={styles.view}>
      <Text style={{ color: "black" }}>About me</Text>
      <View style={styles.insideView}>
        <Text style={styles.text}>Email: kiii@gmail.com</Text>
        <Text style={styles.text}>Phone: 1234567890</Text>
      </View>
      <TouchableOpacity
        style={{ backgroundColor: "lightgray", padding: 10, borderRadius: 5 }}
        onPress={(e) => {
          router.push("/home");
        }}
      >
        <Text style={styles.buttons}>home</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={{ backgroundColor: "lightgray", padding: 10, borderRadius: 5 }}
        onPress={(e) => {
          router.push("/about");
        }}
      >
        <Text style={styles.buttons}>About</Text>
      </TouchableOpacity>
    </View>
  );
};

export default About;
