import { Images } from '@/constants/Images.constant'
import { router } from 'expo-router'
import { Image, TouchableOpacity, View } from 'react-native'
import { HomeItem } from './HomeBarItem'
import NetworkChanger from './NetworkModal'
import SearchModal from './SearchModal'

const HomeBar = () => {
  return (
    <View className='flex-row justify-between items-center gap-[12px]'>
      <NetworkChanger />

      <View className='flex-row gap-[12px]'>
        <SearchModal />

        <HomeItem>
          <TouchableOpacity onPress={() => router.push('/profile')}>
            <Image
              source={Images.profileIcon}
              resizeMode='contain'
              className='w-[29px] h-[22px]'
            />
          </TouchableOpacity>
        </HomeItem>
      </View>
    </View>
  )
}

export default HomeBar
