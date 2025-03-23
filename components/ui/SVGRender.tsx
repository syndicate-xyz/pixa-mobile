import { ViewStyle } from 'react-native'
import { QrCodeSvg } from 'react-native-qr-svg'

interface SVGRenderProps {
  value: string
  size: number
  style?: ViewStyle
}

const RenderSVG = ({ value, size, style }: SVGRenderProps) => {
  return (
    <QrCodeSvg
      style={{ backgroundColor: 'transparent', ...style }}
      gradientColors={['#ED750C', '#ff0000']}
      value={value}
      frameSize={size}
    />
  )
}

export default RenderSVG
