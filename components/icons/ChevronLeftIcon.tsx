import { IconProps } from '@/interfaces'
import React from 'react'
import { Path, Svg } from 'react-native-svg'

const ChevronLeftIcon = ({ color = 'white', style }: IconProps) => {
  return (
    <Svg width={24} height={24} viewBox='0 0 24 24' fill='none' style={style}>
      <Path
        d='M15 17L10 12L15 7'
        stroke={color}
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}

export default ChevronLeftIcon
