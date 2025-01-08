import { View, Text, SafeAreaView } from 'react-native'
import React, {useEffect, useState, useRef} from 'react'
import LottieView from 'lottie-react-native'
import confirmed from '@/assets/lotties/confirmed.json'

const FullyImported = () => {
    const animation = useRef<LottieView>(null);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    animation.current?.play();
  }, []);
  return (
    <SafeAreaView className='bg-primary min-h-screen px-[24px] py-[64px] justify-center items-center'>
       <LottieView
              ref={animation}
              source={confirmed}
              style={{
                width: "100%",
                height: "100%",
              }}
              loop={true}
              autoPlay={true}
              resizeMode="center"
            />
    </SafeAreaView>
  )
}

export default FullyImported