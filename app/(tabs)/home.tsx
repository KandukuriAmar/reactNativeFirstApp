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


const Home = () => {
    return(
        <View style={styles.layout}>
            <Image source={{uri: "https://media.tenor.com/cRTQk6N_FxMAAAAM/swag-cat-swagbilli-cutecat-cats-cat-swag-ok-yooo-yo.gif"}} style={styles.image}/>
            <Text style={styles.text}>Hello Home</Text>
            <Text style={styles.text}>dhummu lechipodhi</Text>
            <TouchableOpacity style={{backgroundColor: "lightgray", padding: 10, borderRadius: 5}} onPress={(e) => {
                router.push("/contact");
            }}>
                <Text style={styles.text}>Contact</Text>
            </TouchableOpacity><br/>

            <TouchableOpacity style={{backgroundColor: "lightgray", padding: 10, borderRadius: 5}} onPress={(e) => {
                router.push("/about");
            }}>
                <Text style={styles.text}>About</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Home;