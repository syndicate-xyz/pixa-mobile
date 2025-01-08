import {
  View,
  Text,
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  Image,
} from "react-native";
import React from "react";

interface Props {
  placeholder: string;
  onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  icon?: string;
  styles: string;
  image?: string;
  maxLength?: number;
  numeric?: boolean;
  success?: boolean;
  destructive?: boolean;
}
const InputField = ({
  placeholder,
  onChange,
  icon,
  styles,
  image,
  maxLength,
  numeric,
  success,
  destructive,
}: Props) => {
  let borderColor = success
    ? "border-[#4BC002]"
    : destructive
    ? "border-[#F40000]"
    : "border-white";
  let shadow = success
    ? "shadow-[0px_6px_0px_#4BC002]"
    : destructive
    ? "shadow-[0px_6px_0px_#F40000]"
    : "shadow-[0px_6px_0px_#FFFFFF]";
  let textColor = success
    ? "text-[#4BC002]"
    : destructive
    ? "text-[#F40000]"
    : "text-white";
  let hexCode = success ? "#4BC002" : destructive ? "#F40000" : "#FFFFFF";

  return (
    <View
      className={`px-[6px] py-[4px] bg-primary border-[4px] ${borderColor} rounded-[12px] ${shadow} ${textColor} flex flex-row items-center ${styles}`}
    >
      {image && (
        <Image source={image} className="ml-[12px]" height={24} width={24} />
      )}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#7B7979"
        style={{
          fontFamily: "PressStart2P-Regular",
          color: hexCode,
          height: 44,
          marginLeft: 12,
        }}
        maxLength={maxLength}
        keyboardType={numeric ? "numeric" : "default"}
        onChange={onChange}
      />
    </View>
  );
};

export default InputField;
