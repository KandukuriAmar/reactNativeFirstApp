import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { router } from 'expo-router';

const styles = StyleSheet.create({
  layout: {
    backgroundColor: "white",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

  },
  text: {
    fontWeight: "bold",
    color: "red",
    fontFamily: "cursive",
  }, image: {
    width: 50,
    height: 50,
  },
});

const Contact= () => {
  return (
    <View style={styles.layout}>
      <Image source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2j1FBqBHFw39xwxOqVCC2KcbZ4Tdd_I9ko90iKvSyfg&s"}} style={styles.image}/>
      <Text style={styles.text}>Hello Contact</Text>
      <Text style={styles.text}>aeee phone chesthavaa naku.contact loki vachav</Text>
      <TouchableOpacity style={{backgroundColor: "lightgray", padding: 10, borderRadius: 5}} onPress={(e) => {
        router.push("/home");
      }}>
        <Text style={styles.text}>home</Text>
      </TouchableOpacity><br/>
       <TouchableOpacity style={{backgroundColor: "lightgray", padding: 10, borderRadius: 5}} onPress={(e) => {
            router.push("/about");
        }}>
            <Text style={styles.text}>About</Text>
        </TouchableOpacity>
    </View>
  );
}

export default Contact;