import { IconProps } from '@/interfaces'
import React from 'react'
import { Path, Svg } from 'react-native-svg'

const ArrowRefresh = ({ color = 'white', style }: IconProps) => {
  return (
    <Svg width={25} height={24} viewBox='0 0 25 24' fill='none' style={style}>
      <Path
        d='M20.2971 8.01389C18.9072 5.61438 16.3093 4 13.3338 4C9.96013 4 7.07186 6.07535 5.87933 9.01736M17.8556 9.01736H21.875V5.00347M6.45287 16.0417C7.84282 18.4412 10.4407 20.0556 13.4162 20.0556C16.7899 20.0556 19.6781 17.9802 20.8707 15.0382M8.8944 15.0382H4.875V19.0521'
        stroke={color}
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}

export default ArrowRefresh
