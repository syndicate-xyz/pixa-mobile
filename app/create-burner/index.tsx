import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SecondaryButton } from '@/components/ui/SecondaryButton'
import { Images } from '@/constants/Images.constant'
import { router } from 'expo-router'

const index = () => {
  return (
    <SafeAreaView>
        <View className='pt-[64px]  min-h-screen items-center relative'>
          <Text className='font-pressStart2PRegular text-white text-[16px] '>Create a new burner</Text>
          <Text className='text-[12px] text-base text-light text-center font-IbmMedium font-medium space-x-10 leading-[12px] mt-2'>Choose an option that suits your purpose, considering security and anonymousity level</Text>

          <View className='pt-[48px] w-[85%] flex-row'>
          <SecondaryButton
            text='Create with seedphrase'
            onPress={async () => {
              console.log('Create with seedphrase')
            }}
            image={Images.eyeIcon}
            />
        </View>

        <View className='pt-[24px] w-[85%]'>
          <SecondaryButton
            text='Create with email'
            onPress={() => router.push('/pages/secure-wallet')}
            image={Images.shield}
            />
        </View>
        </View>

    </SafeAreaView>
  )
}

export default index