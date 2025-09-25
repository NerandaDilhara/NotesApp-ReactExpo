import { Stack } from "expo-router";

const RootLayout = () => {
  return <Stack 
    screenOptions={{
      headerStyle: {
        backgroundColor : "rgba(255, 162, 63, 0.53)"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold"
      },
      contentStyle: {
        paddingHorizontal: 10,
        paddingTop: 10,
        backgroundColor: "#999"
      }
    }}
  >
    <Stack.Screen name="index" options={{title: 'Home'}}/>
  </Stack>;
}

export default RootLayout;
