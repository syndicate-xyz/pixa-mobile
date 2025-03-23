import { IconProps } from '@/interfaces'
import React from 'react'
import { Path, Svg } from 'react-native-svg'

const HomeIcon = ({ color = 'white', style }: IconProps) => {
  return (
    <Svg width={20} height={21} viewBox='0 0 20 21' fill='none' style={style}>
      <Path
        d='M1 7.91605C1 7.54665 1.18802 7.2001 1.50457 6.98603L9.30457 1.71117C9.72092 1.42961 10.2791 1.42961 10.6954 1.71117L18.4954 6.98603C18.812 7.20011 19 7.54665 19 7.91605V17.7882C19 18.7336 18.1941 19.5 17.2 19.5H2.8C1.80589 19.5 1 18.7336 1 17.7882V7.91605Z'
        stroke={color}
        strokeWidth={2}
      />
    </Svg>
  )
}

export default HomeIcon
