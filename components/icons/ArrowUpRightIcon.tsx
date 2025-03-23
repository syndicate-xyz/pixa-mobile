import { IconProps } from '@/interfaces'
import React from 'react'
import { Path, Svg } from 'react-native-svg'

const ArrowUpRight = ({
  color = 'white',
  style,
  height = 24,
  width = 25,
}: IconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox='0 0 25 24'
      fill='none'
      style={style}
    >
      <Path
        d='M8.58326 7.08056L17.1053 7.08044M17.1053 7.08044L17.1053 15.4812M17.1053 7.08044L7.20576 16.9799'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}

export default ArrowUpRight
