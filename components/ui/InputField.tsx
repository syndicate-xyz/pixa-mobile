import { View, Text, TextInput, NativeSyntheticEvent, TextInputChangeEventData, Image } from 'react-native'
import React from 'react'

interface Props {
    placeholder: string,
    onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void,
    icon?: string,
    styles: string,
    image: string
}
const InputField = ({placeholder, onChange, icon, styles, image} : Props) => {
  return (
    <View className={`px-[6px] py-[4px] bg-primary border-[4px] border-white rounded-[12px] shadow-[0px_6px_0px_#FFFFFF] text-white flex flex-row items-center ${styles}`}>
      <Image source={image} className='ml-[12px]' height={24} width={24}/>    
      <TextInput 
        placeholder={placeholder}
        placeholderTextColor="#7B7979"
        style={{
          fontFamily: 'PressStart2P-Regular',
          color: '#FFFFFF',
          height: 44,
          marginLeft: 12
        }}
        onChange={onChange}
      />
    </View>
  )
}

export default InputField