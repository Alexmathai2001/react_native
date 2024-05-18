import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs,Redirect } from 'expo-router'
import { icons } from '../../constants'

const TabIcon = ({icon,color,name, focused}) => {
    return (
        <View className='justify-center items-center gap-2'>
            <Image source={icon}
            resizeMode='contain'
            style={[{ tintColor: color }]}
            className = " w-6 h-6"/>
            <Text className='text-xs capitalize' style={{color : color}}>{name}</Text>
        </View>
    )
}

const tabsLayout = () => {
  return (
    <>
    <Tabs
    screenOptions={{
        tabBarShowLabel : false,
        tabBarActiveTintColor:'tomato',
        tabBarStyle : {
            backgroundColor : '#000000',
            borderStartWidth : 1,
            borderTopColor: '#232533',
            height : 60
        }
    }}>
        <Tabs.Screen name='home' options={{
            title : 'home',
            headerShown : false,
            tabBarIcon : ({color,focused}) => (
                <TabIcon 
                icon={icons.home} 
                color={color}
                name={'home'}
                focused={focused}/>
            )
        }} />
        <Tabs.Screen name='Create' options={{
            title : 'Create',
            headerShown : false,
            tabBarIcon : ({color,focused}) => (
                <TabIcon 
                icon={icons.plus} 
                color={color}
                name={'create'}
                focused={focused}/>
            )
        }} />
        <Tabs.Screen name='Bookmarks' options={{
            title : 'Bookmarks',
            headerShown : false,
            tabBarIcon : ({color,focused}) => (
                <TabIcon 
                icon={icons.bookmark} 
                color={color}
                name={'bookmarks'}
                focused={focused}/>
            )
        }} />
        <Tabs.Screen name='profile' options={{
            title : 'Profile',
            headerShown : false,
            tabBarIcon : ({color,focused}) => (
                <TabIcon 
                icon={icons.profile} 
                color={color}
                name={'profile'}
                focused={focused}/>
            )
        }} />
    </Tabs>
    </>
  )
}

export default tabsLayout