import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

interface PixaButtonProps {
  text: string
  onPress: () => void
}

export const PixaButton = ({ text, onPress }: PixaButtonProps) => {
  return (
    <TouchableOpacity
      className='px-[6px] py-[12px] bg-red border-[4px] border-white rounded-[12px] shadow-[0px_6px_0px_#FFFFFF]'
      onPress={onPress}
    >
      <Text
        className={
          'text-white text-center text-[10px] font-pressStart2PRegular'
        }
      >
        {text}
      </Text>
    </TouchableOpacity>
  )
}

export const PrimaryButton = ({ text, onPress }: PixaButtonProps) => {
  return (
    <TouchableOpacity
      className='bg-[#F40000] p-[16px] rounded-[12px] mb-[24px]'
      onPress={onPress}
    >
      <Text className='text-white font-ibmPlexMonoMedium text-center'>
        {text}
      </Text>
    </TouchableOpacity>
  )
}
