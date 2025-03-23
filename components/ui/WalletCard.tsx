import { Text, View } from 'react-native'
import ClipBoardIcon from '../icons/ClipBoardIcon'

interface Props {
  walletName: string
  walletAddress: string
  balance: number
  stats: {
    statType: 'increment' | 'decrement'
    percentage: number
  }
}

const WalletCard = ({ balance, stats, walletAddress, walletName }: Props) => {
  return (
    <View className='flex-col gap-[48px] bg-[#252525] px-[24px] py-[12px] rounded-[12px]'>
      <View className='flex-col gap-[12px]'>
        <Text className='text-[10px] font-medium text-light font-ibmPlexMonoMedium'>
          {walletName}
        </Text>
        <Text className='text-[24px] font-pressStart2PRegular text-orange'>
          ${balance}
        </Text>
        <Text className='font-pixelade text-[16px] text-light'>
          {stats?.statType === 'increment' ? '+' : '-'}
          {stats?.percentage}%
        </Text>
      </View>

      {/* Wallet text section */}
      <View className='flex-row items-center justify-between'>
        <Text className='text-[12px] font-ibmPlexMonoMedium  font-medium text-light'>
          {walletAddress}
        </Text>

        <ClipBoardIcon />
      </View>
    </View>
  )
}

export default WalletCard
