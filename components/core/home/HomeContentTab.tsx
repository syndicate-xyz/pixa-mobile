import ClockBackwardIcon from '@/components/icons/ClockBackwardIcon'
import ListIcon from '@/components/icons/ListIcon'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import TokenHistoryTab from './TokenHistoryTab'
import TokenListTab from './TokenListTab'

const HomeContentTab = () => {
  const [activeTab, setActiveTab] = useState<'token-list' | 'recent'>(
    'token-list'
  )

  const isActive = (current: typeof activeTab) => activeTab === current

  return (
    <View className='flex-col gap-[12px]'>
      <View className='flex-row gap-[12px] items-center'>
        <TabItem
          title='Token List'
          icon={
            <ListIcon
              color={activeTab === 'token-list' ? 'white' : '#7B7979'}
            />
          }
          isActive={isActive('token-list')}
          onClick={() => setActiveTab('token-list')}
        />
        <TabItem
          title='Recent'
          icon={
            <ClockBackwardIcon
              color={isActive('recent') ? 'white' : '#7B7979'}
            />
          }
          isActive={activeTab === 'recent'}
          onClick={() => setActiveTab('recent')}
        />
      </View>

      {activeTab === 'token-list' ? <TokenListTab /> : <TokenHistoryTab />}
    </View>
  )
}

const TabItem = ({
  title,
  icon,
  isActive,
  onClick,
}: {
  title: string
  icon: React.ReactNode
  isActive: boolean
  onClick: () => void
}) => {
  return (
    <TouchableOpacity
      className={cn(
        'flex-row items-center gap-[4px] px-[12px] py-[10px] bg-dark rounded-[12px]'
      )}
      onPress={onClick}
    >
      <Text className={!isActive ? 'text-light' : 'text-white'}>{title}</Text>
      {icon}
    </TouchableOpacity>
  )
}

export default HomeContentTab
