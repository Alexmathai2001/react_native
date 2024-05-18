import { View, Text, ScrollView, Image} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Link } from 'expo-router'

const SignIn = () => {

  const [form,setForm] = useState({
    email : '',
    password : ''
  })

  const [isSubmitting,setIsSubmitting] = useState(false)

  const submit = () => {

  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center items-center h-auto px-4 my-6 space-y-12">
          <Image source={images.logo} resizeMode='contain' className="w-[115px] h-[35px]"/>
          <Text className="text-2xl text-white font-semibold ">Log in to Aora</Text>
          <FormField 
          title="Email"
          value={form.email}
          handleChangeText={(e) => setForm({...form,email:e})}
          otherStyles = "mt-7"
          keyboardType = "email-address"
          />
          <FormField 
          title="Password"
          value={form.password}
          handleChangeText={(e) => setForm({...form,password:e})}
          otherStyles = "mt-7"
          />

        <CustomButton title="Sign In "
        handlePress={submit}
        containerStyles="mt-7"
        isLoading={isSubmitting}
        />

        <View className="items-center flex-row gap-4">
          <Text className=" text-lg font-light text-gray-300">Dont have an accoutn?</Text>
          <Link href={'SignUp'} className='text-red-500 font-semibold'>Sign Up</Link>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn