import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Models } from 'react-native-appwrite'
import icons from '@/constants/icons';
import images from '@/constants/images';

interface Props{
  //item:Models.Document;
  onPress?: ()=>void;
  image?:string;
}

export const FeaturedCards = ({onPress,image}:Props) => {
  return (
    <TouchableOpacity onPress={onPress} className='flex flex-col items-start w-60 h-80 relative'>
      <Image source={image ? image : images.japan} className='size-full rounded-2xl'/>
      <Image source={images.cardGradient} className='size-full rounded-2xl absolute bottom-0'/>
      <View className='flex flex-row items-center bg-white/90 px-3 py-1.5 rounded-full absolute top-5 right-5'>
        <Image source={icons.star} className='size-3.5'/>
        <Text className='text-xs font-rubik-bold text-primary-300 ml-1'>4.8</Text>
      </View>
      <View className='flex flex-col items-start absolute bottom-5 inset-x-5'>
        <Text className='text-xl font-rubik-extrabold text-white' numberOfLines={1} >Modern Apartment</Text>
        <Text className='text-base font-rubik text-white' numberOfLines={1} >SAE,1200,Batna</Text>
        <View className='flex flex-row items-center justify-between w-full'>
          <Text className='text-xl font-rubik-extrabold text-white'>12,000 DZD</Text>
          <Image source={icons.heart} className='size-5'/>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const Cards = ({onPress,image}:Props) => {
  return (
    <TouchableOpacity onPress={onPress} className='flex-1 w-full mt-4 px-3 py-4 rounded-lg bg-white shadow-lg shadow-black-100/70 relative'>
      <View className='flex flex-row items-center absolute top-5 left-5 px-2 bg-white/90 rounded-full z-50'>
        <Image source={icons.star} className='size-2.5'/>
        <Text className='text-xs font-rubik-bold text-primary-300 ml-0.5'>4.8</Text>  
      </View>
      <Image source={image ? image : images.newYork} className='w-full h-40 rounded-lg'/>
      <View className='flex flex-col mt-2'>
        <Text className='text-base font-rubik-bold text-black-300' numberOfLines={1}>Luxury Villa</Text>
        <Text className='text-xs font-rubik text-black-100' numberOfLines={1}>New York, USA</Text>
        <View className='flex flex-row items-center justify-between mt-2'>
          <Text className='text-base font-rubik-bold text-black-300'>25,000 DZD</Text>
          <Image source={icons.heart} className='size-5'/>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default Cards