import { View, Text, Pressable, Image, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import InputField from "@/components/ui/InputField";
import { Images } from "@/constants/Images.constant";
import { PixaButton } from "@/components/ui/PixaButton";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { router } from "expo-router";

const ImportPage = () => {
  const [email, setemail] = useState("");
  const inputRef = React.useRef(null)

  useEffect(() => {
    const delay = () => {
        setTimeout(() => {
            router.push('./import-secret')
        }, 10000);
    }
    delay();
  }, [])

  return (
    <View className="mt-12 gap-2">
      <Text className="font-pressStart2PRegular font-normal text-center text-white text-[16px] leading-[32px]">
        Import Existing 
      </Text>
      <Text className="font-IbmMedium text-light text-center -mt-2 leading-[14px]">
          Restore Exisiting Wallet
        </Text>

      <View className="justify-center items-center">
         <Pressable onPress={() => inputRef.current?.focus()} className="h-[250px] w-4/5 border-2 border-[#7B7979] rounded-xl text-white">
           <TextInput 
             ref={inputRef} 
             style={{ fontFamily: 'IBM-Medium', fontSize: 12, color: '#FFFFFF', height: '100%', width: '100%', padding: 10, textAlignVertical: 'top' }} 
             multiline={true} 
             numberOfLines={10} 
           />
         </Pressable>

         <View className="w-4/5 gap-[12px] mt-[108px]">
          <PixaButton
            text="continue"
            onPress={() => router.push("./import-secret")}
            light={true}
          />
          </View>
      </View>
    </View>
  );
};

export default ImportPage;
