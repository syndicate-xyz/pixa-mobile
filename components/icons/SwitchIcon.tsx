import { IconProps } from '@/interfaces'
import React from 'react'
import { Path, Svg } from 'react-native-svg'

const SwitchIcon = ({
  color = 'white',
  style,
  width = 8,
  height = 8,
}: IconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox='0 0 8 8'
      fill='none'
      style={style}
    >
      <Path
        d='M2.125 3.25L1 2.125M1 2.125L2.125 1M1 2.125H7M5.875 4.75L7 5.875M7 5.875L5.875 7M7 5.875H1'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}

export default SwitchIcon
