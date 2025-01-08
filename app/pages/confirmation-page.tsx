import { View, Text, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import InputField from "@/components/ui/InputField";
import { PixaButton } from "@/components/ui/PixaButton";
import { router } from "expo-router";

const ConfirmationPage = () => {
  const [digit, setDigit] = useState("");
  const [destructive, setdestructive] = useState(false)
  const [success, setsuccess] = useState(false)

  useEffect(() => {
    const delay = () => {
        setTimeout(() => {
            router.push('./import')
        }, 1000);
    }
    delay();
  }, [])
  
  return (
    <View className="pt-[64px] items-center justify-center">
      <Text className="text-white font-pressStart2PRegular text-[16px] leading-8">
        Enter Confirmation
      </Text>

      <View className="mt-[24px] flex-row gap-[24px] grid grid-cols-4">
        <InputField
          styles="h-[46px] w-[46px]"
          numeric={true}
          maxLength={1}
          onChange={(e) => setDigit(e.nativeEvent.text)}
          placeholder=""
          destructive={destructive}
          success={success}
        />
         <InputField
          styles="h-[46px] w-[46px]"
          numeric={true}
          maxLength={1}
          onChange={(e) => setDigit(e.nativeEvent.text)}
          placeholder=""
          destructive={destructive}
          success={success}
        />
         <InputField
          styles="h-[46px] w-[46px]"
          numeric={true}
          maxLength={1}
          onChange={(e) => setDigit(e.nativeEvent.text)}
          placeholder=""
          destructive={destructive}
          success={success}
        />
         <InputField
          styles="h-[46px] w-[46px]"
          numeric={true}
          maxLength={1}
          onChange={(e) => setDigit(e.nativeEvent.text)}
          placeholder=""
          destructive={destructive}
          success={success}
        />
      </View>
    </View>
  );
};

export default ConfirmationPage;
