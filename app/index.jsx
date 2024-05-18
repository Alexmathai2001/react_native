import { StatusBar } from "expo-status-bar";
import { Text,View ,Image} from "react-native";
import { Link , Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { images } from "../constants";
import CustomButton from "../components/CustomButton";

export default function App () {
  return (
    <SafeAreaView className = 'bg-primary h-full'>
        <GestureHandlerRootView>

        <ScrollView contentContainerStyle={{height: '100%'}}>
            <View
             className='w-full items-center min-h-[100vh] px-4'>
                <Image source={images.logo} className="w-[130px] h-[80px]" resizeMode="contain"></Image>
                <Image source={images.cards} className="max-w-[380px] w-full h-[300px]" resizeMode="contain"/>
                <CustomButton title={'continue with email'} handlePress={() => {router.push('/SignIn')}} containerStyle = "w-full mt-7 text-black"/>
            </View>
        </ScrollView>
        </GestureHandlerRootView>
        
    </SafeAreaView>
  )
}

