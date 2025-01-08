import { View, Text, SafeAreaView } from "react-native";
import React, { useRef, useEffect, useState } from "react";
import { PixaButton } from "@/components/ui/PixaButton";
import { Pressable } from "react-native";
import { router } from "expo-router";
import LottieView from "lottie-react-native";
import confirmed from "../../assets/lotties/confirmed.json";

const DonePage = () => {
  const animation = useRef<LottieView>(null);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    animation.current?.play();
  }, []);

  return (
    <SafeAreaView className="flex items-center justify-center min-h-screen">
      <View className="w-[90%] items-center ">
        {/* <Image source={require('@/assets/images/secure-wallet-icon.png')} width={271} height={187}/> */}
        <View className="w-[327px] h-[339px] justify-center items-center">
          <View className="w-[271px] h-[187px] flex items-center justify-center">
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
          </View>

          <View className="mt-[96px]">
            <Text className="text-center text-white font-pressStart2PRegular leading-[32px] text-[16px]">
              Done, let’s hop in!
            </Text>
            <View className="flex-row items-center gap-2 px-8 text-center">
              <Pressable
                onPress={() => setIsChecked(!isChecked)}
                className={`w-4 h-4 border border-light rounded-sm ${
                  isChecked ? "bg-red" : ""
                }`}
              />
              <Text className="font-IbmMedium text-light leading-[14px]">
                By continuing you therefore agree to our terms and conditions
              </Text>
            </View>
          </View>
        </View>

        <View className="w-full gap-[12px] mt-[108px]">
          <PixaButton
            text="Create a new wallet"
            onPress={() => router.push("./secret-phrase")}
            light={!isChecked}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DonePage;
