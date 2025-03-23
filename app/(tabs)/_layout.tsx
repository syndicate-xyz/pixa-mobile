import { Tabs } from 'expo-router'
import React from 'react'
import { Platform } from 'react-native'

import { HapticTab } from '@/components/HapticTab'
import BrowserIcon from '@/components/icons/BrowserIcon'
import { ExploreIcon } from '@/components/icons/ExploreIcon'
import HomeIcon from '@/components/icons/HomeIcon'
import { SwapIcon } from '@/components/icons/SwapIcon'
import { useColorScheme } from '@/hooks/useColorScheme'

export default function TabLayout() {
  const colorScheme = useColorScheme()

  return (
    <Tabs
      screenOptions={{
        // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarActiveTintColor: '#F40000',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarShowLabel: false,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
            backgroundColor: '#1E1E1E',
          },
          default: {
            backgroundColor: '#1E1E1E',
          },
        }),
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          // title: 'Home',
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name='swap'
        options={{
          // title: 'Swap',
          tabBarIcon: ({ color }) => <SwapIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name='explore'
        options={{
          // title: 'Explore',
          tabBarIcon: ({ color }) => <ExploreIcon color={color} />,
          href: null,
        }}
      />
      <Tabs.Screen
        name='browser'
        options={{
          // title: 'Browser',
          tabBarIcon: ({ color }) => <BrowserIcon color={color} />,
          // href: null,
        }}
      />
    </Tabs>
  )
}
