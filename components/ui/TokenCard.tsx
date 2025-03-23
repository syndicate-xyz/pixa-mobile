import { Image, ImageSourcePropType, Text, View } from 'react-native'
import ArrowUpRight from '../icons/ArrowUpRightIcon'
import PlusIcon from '../icons/PlusIcon'
import SwitchIcon from '../icons/SwitchIcon'

interface Props {
  title: string
  subTitle: string
  secondaryTitle: string
  secondarySubTitle: string
  imgSource?: ImageSourcePropType
  imgUri?: string
  action?: 'swap' | 'receive' | 'send'
}

const TokenCard = ({
  title,
  subTitle,
  secondaryTitle,
  secondarySubTitle,
  imgSource,
  imgUri,
  action,
}: Props) => {
  return (
    <View className='flex-row gap-[10px]'>
      <View className='relative'>
        <Image
          source={imgUri ? { uri: imgUri } : imgSource}
          resizeMode='contain'
          className='w-[36px] h-[36px]'
        />
        {action && (
          <View className='absolute bottom-0 right-0 p-[3px] bg-primary rounded-full items-center'>
            {action === 'receive' && <PlusIcon height={12} width={12} />}
            {action === 'send' && <ArrowUpRight height={12} width={12} />}
            {action === 'swap' && <SwitchIcon height={8} width={8} />}
          </View>
        )}
      </View>

      <View className='flex-row justify-between items-center flex-1'>
        <View className='flex-col gap-[4px]'>
          <Text className='font-pressStart2PRegular text-[12px] text-white'>
            {title}
          </Text>
          <Text className='text-light font-ibmPlexMonoMedium text-[10px]'>
            {subTitle}
          </Text>
        </View>
        <View className='flex-col items-end gap-[4px]'>
          <Text className='font-pixelade text-[20px] text-white'>
            {secondaryTitle}
          </Text>
          <Text className='text-light font-ibmPlexMonoMedium text-[10px]'>
            {secondarySubTitle}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default TokenCard
