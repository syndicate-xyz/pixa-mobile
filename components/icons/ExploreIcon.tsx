import { IconProps } from '@/interfaces'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export function ExploreIcon({ color = '#000', style }: IconProps) {
  return (
    <Svg width={23} height={23} viewBox='0 0 22 23' fill='none' style={style}>
      <Path
        d='M11 21.1c5.302 0 9.6-4.298 9.6-9.6 0-5.302-4.298-9.6-9.6-9.6-5.302 0-9.6 4.298-9.6 9.6 0 5.302 4.298 9.6 9.6 9.6Z'
        stroke={color}
        strokeWidth={2}
        strokeLinejoin='round'
      />
      <Path
        d='m14.498 8.003-.849 5.649-5.648.848.848-5.648 5.649-.849Z'
        stroke={color}
        strokeWidth={2}
        strokeLinejoin='round'
      />
    </Svg>
  )
}
