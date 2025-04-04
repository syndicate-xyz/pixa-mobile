import { View } from 'react-native'

import DefaultSafeAreaLayout from '@/components/SafeAreaView'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'

export default function TabTwoScreen() {
  return (
    <DefaultSafeAreaLayout>
      <View>
        <ThemedView>
          <ThemedText type='title'>Explore</ThemedText>
        </ThemedView>
      </View>
    </DefaultSafeAreaLayout>
  )
}
