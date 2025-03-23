import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import 'react-native-reanimated'
import './global.css'

import { useColorScheme } from '@/hooks/useColorScheme'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const colorScheme = useColorScheme()
  const [loaded] = useFonts({
    'PressStart2P-Regular': require('../assets/fonts/PressStart2P-Regular.ttf'),
    'IBMPlexMono-Medium': require('../assets/fonts/IBMPlexMono-Medium.ttf'),
    pixelade: require('../assets/fonts/pixelade.ttf'),
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ contentStyle: { backgroundColor: '#1E1E1E' } }}>
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        <Stack.Screen name='onboarding' options={{ headerShown: false }} />
        <Stack.Screen name='profile' options={{ headerShown: false }} />
        <Stack.Screen name='+not-found' options={{ headerShown: false }} />
      </Stack>
      <StatusBar style='auto' />
    </ThemeProvider>
  )
}
