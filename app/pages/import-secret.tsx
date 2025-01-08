import { View, Text, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import { router } from "expo-router";
import { PixaButton } from "@/components/ui/PixaButton";

const ImportSecretPhrase = () => {
  const [seedPhrases, setSeedPhrases] = useState(Array(12).fill(""));

  const handlePhraseChange = (index, value) => {
    const newPhrases = [...seedPhrases];
    newPhrases[index] = value;
    setSeedPhrases(newPhrases);
    console.log(seedPhrases);
  };

  useEffect(() => {
    const delay = () => {
      setTimeout(() => {
        router.push("./imported");
      }, 10000);
    };
    delay();
  }, []);

  return (
    <View className="flex-1 bg-primary px-6">
      <View className="mt-12">
        <Text className="font-pressStart2PRegular text-center text-white text-[16px] leading-[32px]">
          Import existing
        </Text>
        <Text className="font-IbmMedium text-gray-400 text-center text-sm mb-8">
          Restore existing wallet
        </Text>

        <View className="flex-row flex-wrap justify-between">
          <View className="w-[40%]">
            {[...Array(6)].map((_, index) => (
              <View key={index} className="mb-4 flex-row items-center">
                <Text className="text-white font-pressStart2PRegular mr-2 w-8">
                  {index + 1}.
                </Text>
                <TextInput
                  value={seedPhrases[index]}
                  onChangeText={(value) => handlePhraseChange(index, value)}
                  className="flex-1 h-10 px-3 bg-primary border border-light rounded-xl text-white font-IbmMedium"
                  placeholderTextColor="#666666"
                />
              </View>
            ))}
          </View>

          <View className="w-[40%]">
            {[...Array(6)].map((_, index) => (
              <View key={index} className="mb-4 flex-row items-center">
                <Text className="text-white font-pressStart2PRegular mr-2 w-8">
                  {index + 7}.
                </Text>
                <TextInput
                  value={seedPhrases[index + 6]}
                  onChangeText={(value) => handlePhraseChange(index + 6, value)}
                  className="flex-1 h-10 px-3 bg-primary border border-light rounded-xl text-white font-IbmMedium"
                  placeholderTextColor="#666666"
                />
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

export default ImportSecretPhrase;
