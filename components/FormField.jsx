import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import {
  NativeViewGestureHandler,
  TextInput,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";
import { icons } from "../constants";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View className="space-y-2 mt-5 min-w-full">
        <Text className="text-base text-gray-100 ">{title}</Text>
        <View className="w-full h-16 px-4 bg-black border-2 focus:border-red-500 rounded-xl items-center flex-row">
          <TextInput
            className="flex-1 text-white text-base w-full"
            value={value}
            placeholder={placeholder}
            placeholderTextColor="#7b7b8b"
            onChangeText={handleChangeText}
            secureTextEntry={title === "Password" && !showPassword}
          />
          {title === "Password" && (
            <TouchableOpacity
              onPress={() => {
                setShowPassword(!showPassword);
              }}
            >
              <Image source={!showPassword ? icons.eye : icons.eyeHide} className='w-6 h-6' resizeMode="contain" />
            </TouchableOpacity>
          )}

        </View>
      </View>
    </GestureHandlerRootView>
  );
};

export default FormField;
