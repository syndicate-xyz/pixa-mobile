import { Animated } from 'react-native'

interface LoadingProgressBarProps {
  progressAnim: Animated.Value
}

export function LoadingProgressBar({ progressAnim }: LoadingProgressBarProps) {
  return (
    <Animated.View
      className='h-[2px] bg-[#F40000] mt-[4px]'
      style={{
        width: progressAnim.interpolate({
          inputRange: [0, 1],
          outputRange: ['0%', '100%'],
        }),
      }}
    />
  )
}
