import { IconProps } from '@/interfaces'
import React from 'react'
import { Path, Svg } from 'react-native-svg'

const ScanIcon = ({ color = 'white', style }: IconProps) => {
  return (
    <Svg width={25} height={24} viewBox='0 0 25 24' fill='none' style={style}>
      <Path
        d='M9.4249 2.3999H5.15824C3.98003 2.3999 3.0249 3.35503 3.0249 4.53324V8.7999M9.4249 21.5999H5.15824C3.98003 21.5999 3.0249 20.6448 3.0249 19.4666V15.1999M15.8249 2.3999H20.0916C21.2698 2.3999 22.2249 3.35503 22.2249 4.53324V8.7999M22.2249 15.1999V19.4666C22.2249 20.6448 21.2698 21.5999 20.0916 21.5999H15.8249M3.0249 12.0002H22.2249'
        stroke={color}
        strokeWidth={2}
        strokeLinecap='round'
      />
    </Svg>
  )
}

export default ScanIcon
