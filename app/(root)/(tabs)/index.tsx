import { Text, View } from "react-native";
import { Link } from "expo-router";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="my-10  font-rubik text-3xl">Hello MFS</Text>
      <Link href={'/signIn'}>Sign In</Link>
      <Link href={'/explore'}>Explore</Link>
      <Link href={'/profile'}>Profile</Link>
      <Link href={'/properties/1'}>Property</Link>
    </View>
  );
}
