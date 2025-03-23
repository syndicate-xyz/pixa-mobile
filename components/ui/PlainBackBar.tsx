import { router } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'
import ChevronLeftIcon from '../icons/ChevronLeftIcon'

interface Props {
  title: string
}

const PlainBackBar = ({ title }: Props) => {
  return (
    <View className='flex-row items-center gap-2 bg-primary p-[24px]'>
      <TouchableOpacity onPress={() => router.back()}>
        <ChevronLeftIcon />
      </TouchableOpacity>

      <Text className='text-white text-lg font-ibmPlexMonoMedium'>{title}</Text>
    </View>
  )
}

export default PlainBackBar
