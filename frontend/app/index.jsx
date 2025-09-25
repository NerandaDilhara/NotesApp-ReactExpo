import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import ImageIcon from "@/assets/images/team.jpeg";
import { useRouter } from "expo-router"; 

const HomePage = () => {

  const router = useRouter();

  return (
    <View style={styles.container} >
      <Image source={ImageIcon} style={styles.image}/>
      <Text style={styles.title}>Welcome to Notes App</Text>
      <Text style={styles.subTitle}>Capture your thoughts anytime..</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/notes')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image : {
    width: 200,
    height: 200,
    borderRadius: 100,
    margin: 10,
    marginBottom: 40
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#000"
  }, 
  subTitle: {
    fontSize: 20,
    fontWeight: "200",
    marginBottom: 10,
    color: "#444"
  },
  button: {
    backgroundColor: "#bc9015ff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginTop: 30
  },
  buttonText: {
    color:"#fff",
    fontSize: 20,
    fontWeight: "bold"
  }
})

export default HomePage;
