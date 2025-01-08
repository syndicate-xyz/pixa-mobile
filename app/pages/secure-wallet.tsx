import { View, Text, SafeAreaView } from "react-native";
import React, { useRef, useEffect } from "react";
import { PixaButton } from "@/components/ui/PixaButton";
import { Image } from "react-native";
import { router } from "expo-router";
import LottieView from "lottie-react-native";
import gh from "../../assets/lotties/securewallet.json";

const securewallet = () => {
  const animation = useRef<LottieView>(null);

  useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    animation.current?.play();
  }, []);

  return (
    <SafeAreaView className="flex items-center justify-center min-h-screen">
      <View className="w-[90%] items-center ">
        {/* <Image source={require('@/assets/images/secure-wallet-icon.png')} width={271} height={187}/> */}
        <View className="w-[271px] h-[187px] flex items-center justify-center">
        <LottieView
          ref={animation}
          source={gh}
          style={{
            width: 271,
            height: 187,
          }}
          loop={true}
          autoPlay={true}
          resizeMode="cover"
        />
        </View>
        
        <Text className="text-center text-white font-pressStart2PRegular leading-[32px] text-[16px]">
          Secure Your Wallet
        </Text>
        <Text className="font-IbmMedium text-light text-center -mt-2 leading-[14px]">
          Add on device biometrics to your wallet to make sure only you have
          access to your wallet even if you device has been compromised.
        </Text>

        <View className="w-full gap-[12px] mt-[108px]">
          <PixaButton
            text="Use Device Authentication"
            onPress={() => router.push("./configure-backup")}
            light={false}
          />
          <Text className="text-white text-center font-pressStart2PRegular text-[10px] mt-4">
            continue without biometrics
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default securewallet;
