import { PixaButton } from '@/components/ui/PixaButton'
import React, { useEffect, useRef, useState } from 'react'
import {
  AnimatableStringValue,
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router, Router } from 'expo-router'
import LottieView from 'lottie-react-native'

interface OnboardingItem {
  id: string
  title: string
  description: string
  lottie: any
}

const onboardingData: OnboardingItem[] = [
  {
    id: '1',
    title: 'Disposable Wallets for Quick Use',
    description:
      'Generate burner wallets instantly for secure, one-time transactions.',
    lottie: require('@/assets/lotties/onboarding1.json'),
  },
  {
    id: '2',
    title: 'Secure Wallet Encryption',
    description: 'Your private keys are securely encrypted and stored locally.',
    lottie: require('@/assets/lotties/onboarding2.json'),
  },
  {
    id: '3',
    title: 'Multi-Wallet Management',
    description: 'Ready to begin your adventure',
    lottie: require('@/assets/lotties/onboarding3.json'),
  },
]

const { width: SCREEN_WIDTH } = Dimensions.get('window')

const OnboardingScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const flatListRef = useRef<FlatList>(null)
  const animation = useRef<LottieView>(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (activeIndex < onboardingData.length - 1) {
        flatListRef.current?.scrollToIndex({
          index: activeIndex + 1,
          animated: true,
        })
      } else {
        flatListRef.current?.scrollToIndex({
          index: 0,
          animated: true,
        })
      }
    }, 3500)

    return () => clearInterval(scrollInterval)
    animation.current?.play();
  }, [activeIndex])

  const renderItem = ({ item }: { item: OnboardingItem }) => (
    <View className='gap-[48px] w-screen items-center justify-center'>
          <LottieView
          ref={animation}
          source={item.lottie}
          style={{
            width: 271,
            height: 271,
          }}
          loop={true}
          autoPlay={true}
          resizeMode="contain"
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
            ref={flatListRef}
            data={onboardingData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            snapToInterval={SCREEN_WIDTH}
            decelerationRate='fast'
            getItemLayout={(data, index) => ({
              length: SCREEN_WIDTH,
              offset: SCREEN_WIDTH * index,
              index,
            })}
          />
        </View>

        {renderDots()}

        <View className='px-[24px] w-full gap-[18px]'>
          {/* <PixaButton
            text='Create a new wallet'
            onPress={async () => {
              console.log('Create a new burner')
            }}
          /> */}
          <PixaButton
            text='Create a new wallet'
            onPress={() => router.push('/create-burner')}
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
