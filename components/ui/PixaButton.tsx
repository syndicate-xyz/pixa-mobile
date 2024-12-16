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

// /* Inside auto layout */
// flex: none;
// order: 0;
// align-self: stretch;
// flex-grow: 0;
