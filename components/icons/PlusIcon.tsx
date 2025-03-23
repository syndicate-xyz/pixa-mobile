import { IconProps } from '@/interfaces'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const PlusIcon = ({
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
        d='M12.3748 4.80005L12.3748 19.2M19.5748 12L5.1748 12'
        stroke={color}
        strokeWidth={2}
        strokeLinecap='round'
      />
    </Svg>
  )
}

export default PlusIcon
