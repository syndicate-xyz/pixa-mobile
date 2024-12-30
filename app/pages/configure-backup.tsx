import { View, Text, SafeAreaView, TextInput } from 'react-native'
import React, {useState} from 'react'
import { PixaButton } from '@/components/ui/PixaButton'
import InputField from '@/components/ui/InputField'
import { Images } from '@/constants/Images.constant'

const ConfigureBackup = () => {
    const [text, settext] = useState('')
  return (
    <SafeAreaView className='min-h-screen justify-center items-center'>
    <View className='w-[90%] items-center gap-2'>    
      <Text className='text-white text-center font-pressStart2PRegular text-2xl'>Configure Backup</Text>
      <Text className='font-IbmMedium text-light text-center -mt-2 leading-[14px]'>configure a safe wallet for mayday</Text>
      <Text className='text-white font-pressStart2PRegular text-2xl'>{text}</Text>
       
       <View>
        <InputField 
          placeholder='Hi' 
          onChange={(e) => settext(e.nativeEvent.text)} 
          styles='w-[327px] h-[44px]'
          image={Images.eyeIcon}
        />
       </View>
       

      <View className='w-full gap-[12px] mt-[108px]'>
          <PixaButton
            text='Continue'
            onPress={() => console.log("Hi")}
            light={true}
          />
          <Text className='text-white text-center font-pressStart2PRegular text-[10px] mt-4'>
            continue without backup
          </Text>
        </View>
        </View>
    </SafeAreaView>
  )
}

export default ConfigureBackup