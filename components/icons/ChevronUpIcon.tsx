import { IconProps } from '@/interfaces'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

const ChevronUpIcon = ({ color = 'white', style }: IconProps) => {
  return (
    <Svg width={24} height={24} viewBox='0 0 24 24' fill='none' style={style}>
      <Path
        d='M7 14.5834L12.0008 10L17 14.5834'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}

export default ChevronUpIcon
