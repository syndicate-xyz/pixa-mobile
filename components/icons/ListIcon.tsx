import { IconProps } from '@/interfaces'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

const ListIcon = ({ color = 'white', style }: IconProps) => {
  return (
    <Svg width={10} height={10} viewBox='0 0 10 10' fill='none' style={style}>
      <Path
        d='M3.63333 2.5H9M3.63333 5.2H9M3.63333 7.9H9M1.5 2.5V2.50533M1.5 5.2V5.20533M1.5 7.9V7.90533'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}

export default ListIcon
