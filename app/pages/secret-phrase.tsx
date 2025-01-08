import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { PixaButton } from "@/components/ui/PixaButton";
import { Ionicons } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";

const SecretPhrase = () => {
  const phrases = [
    "apple",
    "banana",
    "carrot",
    "dolphin",
    "elephant",
    "forest",
    "guitar",
    "hammer",
    "island",
    "jungle",
    "kettle",
    "lemon",
  ];
  const [copied, setcopied] = useState(false);

  const copyToClipboard = async () => {
    const text = phrases
      .map((phrase, index) => `${index + 1}. ${phrase}`)
      .join("\n");
    await Clipboard.setStringAsync(text);
    setcopied(true);
    setTimeout(() => setcopied(false), 500);
  };

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 items-center justify-between px-4">
        <View className="w-full items-center pt-[64px]">
          <Text className="font-pressStart2PRegular text-center text-white text-[16px]">
            Secret Phrase
          </Text>
          <Text className="text-[12px] text-light text-center font-IbmMedium leading-[14px] mt-2 px-8 max-w-[320px]">
            Store these phrases somewhere safe as this is the only way you might
            be able to recover your account.
          </Text>

          <View className="mt-8 p-6 rounded-lg w-full max-w-[340px] items-center justify-center">
            <View className="w-full flex flex-row flex-wrap justify-center gap-x-4">
              {phrases.map((phrase, index) => (
                <View key={index} className="w-[45%] mb-4 flex-row items-center justify-center">
                  <Text className="text-white font-pressStart2PRegular text-[16px] leading-[32px] mr-2">
                    {index + 1}.
                  </Text>
                  <Text className="text-white font-IbmMedium text-[13px] leading-[12px]">
                    {phrase}
                  </Text>
                </View>
              ))}
            </View>

            <TouchableOpacity
              onPress={copyToClipboard}
              className="mt-6 flex-row items-center justify-center gap-2"
            >
              <Ionicons name="copy-outline" size={24} color="white" />
              <Text className="text-white font-IbmMedium">
                {copied ? "Copied" : "Copy"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="w-full max-w-[340px] mb-8">
          <PixaButton
            text="Saved, continue"
            onPress={() => router.push("./sign-up")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SecretPhrase;