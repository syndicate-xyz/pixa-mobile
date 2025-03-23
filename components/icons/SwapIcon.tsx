import { IconProps } from '@/interfaces'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export function SwapIcon({ color = '#FFFFFF', style }: IconProps) {
  return (
    <Svg width={19} height={20} viewBox='0 0 19 20' fill='none' style={style}>
      <Path
        d='M3.48959 16.0104C0.170135 12.691 0.170136 7.30905 3.48959 3.98959C5.58797 1.89121 8.51052 1.11932 11.2152 1.6739M16.3525 4.96871C18.801 8.29488 18.5203 13.0005 15.5104 16.0104C13.3451 18.1757 10.3022 18.9286 7.52667 18.269M14.6684 6.33484V3.14734L17.8559 3.14734L14.6684 6.33484ZM4.24035 13.5742V16.7617H1.05285L4.24035 13.5742Z'
        stroke={color}
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
