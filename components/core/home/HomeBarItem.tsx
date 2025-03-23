import { cn } from '@/lib/utils'
import { ReactNode } from 'react'
import { View } from 'react-native'

interface HomeItemProps {
  children: ReactNode
  isDark?: boolean
  className?: string
}

export const HomeItem = ({ children, isDark, className }: HomeItemProps) => {
  return (
    <View
      className={cn(
        'bg-[#252525] p-[10px] rounded-[12px]',
        isDark && 'bg-[#1A1A1A]',
        className
      )}
    >
      {children}
    </View>
  )
}
