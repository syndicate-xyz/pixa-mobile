import React from 'react'
import { Text, TouchableOpacity, Image } from 'react-native'

interface SecondaryButtonProps {
  text: string
  onPress: () => void
  image: string
}

export const SecondaryButton = ({ text, onPress, image }: SecondaryButtonProps) => {
  return (
    <TouchableOpacity
      className='px-[6px] py-[12px] border-[4px] border-gray-500 rounded-[12px] flex-row w-[324px] h-[44px] items-center space-x-[12px] space-y-[6px]'
      onPress={onPress}
    >
          <Image source={image} className='ml-4' height={24} width={24}/>
      <Text
        className={
          'text-white text-center text-[10px] font-pressStart2PRegular ml-4'
        }
      >
        {text}
      </Text>
    </TouchableOpacity>
  )
}

// /* Inside auto layout */
// flex: none;
// order: 0;
// align-self: stretch;
// flex-grow: 0;
