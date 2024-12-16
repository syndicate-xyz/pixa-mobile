import { View } from 'react-native'

import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'

export default function HomeScreen() {
  return (
    <View>
      <ThemedView>
        <ThemedText type='title'>Welcome!</ThemedText>
      </ThemedView>
    </View>
  )
}
