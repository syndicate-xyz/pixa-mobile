import { IconProps } from '@/interfaces'
import React from 'react'
import { Path, Svg } from 'react-native-svg'

const ReloadIcon = ({ color = 'white', style }: IconProps) => {
  return (
    <Svg width={24} height={24} viewBox='0 0 24 24' fill='none' style={style}>
      <Path
        d='M19.1288 14.5C18.1109 17.6939 15.1954 20 11.7576 20C7.47318 20 4 16.4183 4 12C4 7.58172 7.47318 4 11.7576 4C14.629 4 17.136 5.60879 18.4773 8M16.1212 9H20V5'
        stroke={color}
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}

export default ReloadIcon
