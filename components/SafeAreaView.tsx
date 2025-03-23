import { cn } from '@/lib/utils'
import { KeyboardAvoidingView, Platform } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

interface Props {
  children?: React.ReactNode | React.ReactNode[]
  className?: string
}

const DefaultSafeAreaLayout = ({ children, className }: Props) => {
  return (
    <GestureHandlerRootView className={'flex-1'}>
      <SafeAreaView
        edges={['top', 'bottom', 'left', 'right']}
        className={cn('flex-1 bg-primary', className)}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}
        >
          {children}
        </KeyboardAvoidingView>
      </SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default DefaultSafeAreaLayout
