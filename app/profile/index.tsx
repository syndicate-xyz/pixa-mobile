import DefaultSafeAreaLayout from '@/components/SafeAreaView'
import PlainBackBar from '@/components/ui/PlainBackBar'
import { View } from 'react-native'
import ProfileMenuList from '../../components/core/profile/ProfileMenuList'

const ProfileScreen = () => {
  return (
    <DefaultSafeAreaLayout className='bg-dark'>
      <View className='flex-col gap-[12px]'>
        <PlainBackBar title='Profile' />
        <ProfileMenuList />
      </View>
    </DefaultSafeAreaLayout>
  )
}

export default ProfileScreen
