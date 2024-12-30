import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import { PixaButton } from '@/components/ui/PixaButton'

const SecretPhrase = () => {
  return (
    <SafeAreaView>
      <View className='pt-[64px] min-h-screen items-center'>
        <Text className='font-pressStart2PRegular text-white text-[16px]'>
          Secret Phrase
        </Text>
        <Text className='text-[12px] text-light text-center font-IbmMedium leading-[14px] mt-2 px-8'>
          Store these phrases somewhere safe as this is the only way you might be able to recover your account.
        </Text>

        <View className='mt-[108px] w-[90%]'>
          <PixaButton
            text='Saved, continue'
            onPress={() => router.push('/pages/done-page')}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SecretPhrase