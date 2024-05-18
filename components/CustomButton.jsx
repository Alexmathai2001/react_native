import { TouchableOpacity,Text } from 'react-native'
import React from 'react'

const CustomButton = ({title , handlePress , containerStyles , textStyles , isLoading}) => {
  return (
    <TouchableOpacity className={`bg-orange-700 px-3 py-2 rounded-lg ${containerStyles} ${isLoading ? 'opacity-50' : ''}`} disabled={isLoading} onPress={handlePress} activeOpacity={0.7} >
        <Text className='text-white text-md capitalize'>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton