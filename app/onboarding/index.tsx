import { PixaButton } from '@/components/ui/PixaButton'
import React, { useState } from 'react'
import {
  Dimensions,
  FlatList,
  Image,
  ImageSourcePropType,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

interface OnboardingItem {
  id: string
  title: string
  description: string
  image: ImageSourcePropType
}

const onboardingData: OnboardingItem[] = [
  {
    id: '1',
    title: 'Disposable Wallets for Quick Use',
    description:
      'Generate burner wallets instantly for secure, one-time transactions.',
    image: require('../../assets/images/onboarding1.png'),
  },
  {
    id: '2',
    title: 'Secure Wallet Encryption',
    description: 'Your private keys are securely encrypted and stored locally.',
    image: require('../../assets/images/onboarding2.png'),
  },
  {
    id: '3',
    title: 'Multi-Wallet Management',
    description: 'Ready to begin your adventure',
    image: require('../../assets/images/onboarding3.png'),
  },
]

const { width: SCREEN_WIDTH } = Dimensions.get('window')

const OnboardingScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const renderItem = ({ item }: { item: OnboardingItem }) => (
    <View className='gap-[48px] w-screen items-center justify-center'>
      <Image
        source={item.image}
        resizeMode='contain'
        className=' w-[271px] h-[271px]'
      />

      <View className='gap-[12px] items-center justify-center'>
        <Text className='font-pressStart2PRegular text-white leading-[32px] text-[16px] text-center'>
          {item.title}
        </Text>
        <Text className='text-base text-gray-600 text-center'>
          {item.description}
        </Text>
      </View>
    </View>
  )

  const renderDots = () => (
    <View className='flex-row justify-center items-center gap-[10px]'>
      {onboardingData.map((_, index) => (
        <View
          key={index}
          className={`h-[16px] ${
            index === activeIndex
              ? 'w-[32px] bg-white'
              : 'w-[16px] bg-white opacity-25'
          }`}
        />
      ))}
    </View>
  )

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollPosition = event.nativeEvent.contentOffset.x
    const index = Math.round(scrollPosition / SCREEN_WIDTH)
    setActiveIndex(index)
  }

  return (
    <SafeAreaView>
      <View className='gap-[48px] min-h-screen justify-center items-center relative'>
        <View className='h-[410px]'>
          <FlatList
            data={onboardingData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            snapToInterval={SCREEN_WIDTH}
            decelerationRate='fast'
          />
        </View>

        {renderDots()}

        <View className='px-[24px] w-full gap-[18px]'>
          <PixaButton
            text='Create a new wallet'
            onPress={async () => {
              console.log('Create a new burner')
            }}
          />
          <Text className='text-white text-center font-pressStart2PRegular text-[10px] mt-4'>
            Import an existing wallet
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default OnboardingScreen
