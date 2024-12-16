import { View } from 'react-native'

import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'

export default function TabTwoScreen() {
  return (
    <View>
      <ThemedView>
        <ThemedText type='title'>Explore</ThemedText>
      </ThemedView>
    </View>
  )
}
