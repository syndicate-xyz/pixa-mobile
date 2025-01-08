import { View, Text, Pressable, Image } from "react-native";
import React, { useState } from "react";
import InputField from "@/components/ui/InputField";
import { Images } from "@/constants/Images.constant";
import { PixaButton } from "@/components/ui/PixaButton";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { router } from "expo-router";

const SignUp = () => {
  const [email, setemail] = useState("");
  return (
    <View className="mt-12 gap-3">
      <Text className="font-pressStart2PRegular font-normal text-center text-white text-[16px] leading-[32px]">
        Sign up with
      </Text>

      <View className="justify-center items-center">
        <View className="flex-row gap-4">
          <InputField
            placeholder="Hi"
            onChange={(e) => setemail(e.nativeEvent.text)}
            styles="w-3/5 h-[44px]"
            image={Images.mail}
          />
          <PixaButton text="Next" onPress={() => router.push('./confirmation-page')} />
        </View>

        <View className="pt-4 gap-2">
          <Text className="font-IbmMedium text-light text-center">or</Text>

          <Pressable
            onPress={() => console.log("Continue with Google clicked")}
            className={`w-[327px] h-[44px]  py-[4px] bg-primary border-[4px] border-white rounded-[12px] shadow-[0px_6px_0px_#FFFFFF] text-white flex flex-row items-center`}
          >
            <Image
              source={Images.gmail}
              className="ml-[12px] object-fill"
              height={12}
              width={12}
            />
            <Text
              className="pt-4"
              style={{
                fontFamily: "PressStart2P-Regular",
                color: "#7B7979",
                height: 44,
                marginLeft: 12,
              }}
            >
              Gmail
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
