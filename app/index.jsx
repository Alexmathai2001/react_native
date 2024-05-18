import { StatusBar } from "expo-status-bar";
import { Text,View } from "react-native";
import { Link } from "expo-router";

export default function App () {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="font-bold text-3xl">Alex Mathai</Text>
      <Link href={'/home'} className="">Go to home</Link>
      <StatusBar style="auto" />
    </View>
  )
}

