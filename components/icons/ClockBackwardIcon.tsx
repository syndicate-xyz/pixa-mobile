import { IconProps } from '@/interfaces'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

const ClockBackwardIcon = ({ color = '#7B7979', style }: IconProps) => {
  return (
    <Svg width={10} height={10} viewBox='0 0 10 10' fill='none' style={style}>
      <Path
        d='M8.12695 5C8.12695 7.07107 6.44758 8.75 4.37597 8.75C2.30437 8.75 0.625 7.07107 0.625 5C0.625 2.92893 2.30437 1.25 4.37597 1.25C5.76436 1.25 6.97657 2.00412 7.62513 3.125M7.09795 5.41152L8.03569 4.47402L8.97344 5.41152M5.78125 6.02255L4.375 5.5538V3.59375'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}

export default ClockBackwardIcon
