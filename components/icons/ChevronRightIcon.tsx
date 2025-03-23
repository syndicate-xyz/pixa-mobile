import { IconProps } from '@/interfaces'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

const ChevronRightIcon = ({ color = 'white', style }: IconProps) => {
  return (
    <Svg width={24} height={24} viewBox='0 0 24 24' fill='none' style={style}>
      <Path
        d='M10 7L15 12L10 17'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}

export default ChevronRightIcon
