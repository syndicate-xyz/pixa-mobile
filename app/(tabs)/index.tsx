import DefaultSafeAreaLayout from '@/components/SafeAreaView'
import ActionBar from '@/components/core/home/ActionBar'
import HomeBar from '@/components/core/home/HomeBar'
import HomeContentTab from '@/components/core/home/HomeContentTab'
import WalletCard from '@/components/ui/WalletCard'
import { FlatList, View } from 'react-native'

export default function HomeScreen() {
  const renderItem = () => {
    return (
      <View className='flex-col gap-[24px] p-[24px]'>
        <HomeBar />

        <WalletCard
          balance={500}
          stats={{ percentage: 5, statType: 'decrement' }}
          walletAddress='Ghkc4Tk...t3X'
          walletName='Wallet 1'
        />

        <ActionBar />

        <HomeContentTab />
      </View>
    )
  }

  return (
    <DefaultSafeAreaLayout>
      <FlatList
        data={[{ key: 'content' }]} // Single item to render the content once
        renderItem={renderItem}
      />
    </DefaultSafeAreaLayout>
  )
}
