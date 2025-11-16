import { View, Text, ScrollView,TouchableOpacity } from 'react-native'
import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from 'react'
import { categories } from '@/constants/data';

const Filters = () => {
    const params = useLocalSearchParams<{ query?: string; filter?: string }>();
    const[selectedCategory,setSelectedCategory]=useState<string|undefined>(params.filter?.toString() ||"All");
    const handleCategoryPress = (category: string) => {
        if (category === selectedCategory) {
            setSelectedCategory("All");
            router.setParams({ filter: "All" });
            return;
        }
        setSelectedCategory(category);
        router.setParams({ filter: category });
    }
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className='mt-5'>
        {categories.map((item,index)=>(
            <TouchableOpacity
                key={index}
                onPress={()=>handleCategoryPress(item.category)}
                className={`flex flex-col items-start mr-4 px-4 py-2 rounded-full border ${selectedCategory===item.category ? 'bg-primary-300 border-primary-300' : 'bg-white border-black-100' }`}
            >
                <Text className={`text-sm ${selectedCategory===item.category ? 'text-white font-rubik-bold mt-0.5' : 'text-black-300 font-rubik' }`}>{item.title}</Text>
            </TouchableOpacity>
        ))}

    </ScrollView>
  )
}

export default Filters