import { Ionicons } from '@expo/vector-icons'
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native'

interface OptionsMenuProps {
  goForward: () => void
  reload: () => void
  closeMenu: () => void
}

export function OptionsMenu({
  goForward,
  reload,
  closeMenu,
}: OptionsMenuProps) {
  return (
    <TouchableWithoutFeedback onPress={closeMenu}>
      <View className='absolute inset-0 z-10'>
        <View className='absolute right-[12px] top-[60px] bg-[#1A1A1A] rounded-[12px] shadow-lg'>
          <TouchableOpacity
            className='flex-row items-center p-[12px]'
            onPress={() => {
              goForward()
              closeMenu()
            }}
          >
            <Ionicons
              name='arrow-forward'
              size={18}
              color='white'
              className='mr-[8px]'
            />
            <Text className='text-white font-ibmPlexMonoMedium ml-[8px]'>
              Forward
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className='flex-row items-center p-[12px]'
            onPress={() => {
              reload()
              closeMenu()
            }}
          >
            <Ionicons
              name='refresh'
              size={18}
              color='white'
              className='mr-[8px]'
            />
            <Text className='text-white font-ibmPlexMonoMedium ml-[8px]'>
              Refresh
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className='flex-row items-center p-[12px]'
            onPress={() => {
              // Add bookmark functionality here
              closeMenu()
            }}
          >
            <Ionicons
              name='bookmark'
              size={18}
              color='white'
              className='mr-[8px]'
            />
            <Text className='text-white font-ibmPlexMonoMedium ml-[8px]'>
              Bookmark
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}
