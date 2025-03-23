import { IconProps } from '@/interfaces'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

const ClipBoardIcon = ({ color = '#fff', style }: IconProps) => {
  return (
    <Svg width={12} height={14} viewBox='0 0 12 14' fill='none' style={style}>
      <Path
        d='M0.666503 6.24992L0.666504 9.99997C0.666505 11.6568 2.00967 13 3.66654 13L7.4165 12.9999M4.6665 0.999922L9.1665 0.99992C9.99493 0.99992 10.6665 1.67149 10.6665 2.49992L10.6665 8.99992C10.6665 9.82835 9.99493 10.4999 9.1665 10.4999L4.6665 10.4999C3.83808 10.4999 3.1665 9.82835 3.1665 8.99992L3.1665 2.49992C3.1665 1.67149 3.83808 0.999922 4.6665 0.999922Z'
        stroke={color}
        strokeWidth='1.2'
        strokeLinecap='round'
      />
    </Svg>
  )
}

export default ClipBoardIcon
