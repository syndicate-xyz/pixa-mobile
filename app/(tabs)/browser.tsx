import DefaultSafeAreaLayout from '@/components/SafeAreaView'
import Browser from '@/components/browser/Browser'
import { useBottomTabOverflow } from '@/components/ui/TabBarBackground'
import { View } from 'react-native'

export default function BrowserScreen() {
  const tabBarOverflow = useBottomTabOverflow()

  return (
    <DefaultSafeAreaLayout>
      <View className='flex-1' style={{ marginBottom: tabBarOverflow }}>
        <Browser />
      </View>
    </DefaultSafeAreaLayout>
  )
}
