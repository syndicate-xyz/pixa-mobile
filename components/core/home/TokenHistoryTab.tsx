import TokenCard from '@/components/ui/TokenCard'
import { Text, View } from 'react-native'

const TokenHistoryTab = () => {
  // Array of transaction history data
  const transactions = [
    {
      title: 'Solana',
      subTitle: '3 SOL',
      secondaryTitle: '$600',
      secondarySubTitle: '2mins ago',
      imgUri: 'https://cryptologos.cc/logos/solana-sol-logo.png',
      action: 'receive',
    },
    {
      title: 'Bonk',
      subTitle: '50,000 BONK',
      secondaryTitle: '$5',
      secondarySubTitle: '15mins ago',
      imgUri:
        'https://bonkcoin.com/static/media/bonkog_200.e87b5d92088ca7a75178.png',
      action: 'send',
    },
    {
      title: 'Solana',
      subTitle: '2 SOL',
      secondaryTitle: '$400',
      secondarySubTitle: '20mins ago',
      imgUri: 'https://cryptologos.cc/logos/solana-sol-logo.png',
      action: 'receive',
    },
    {
      title: 'Raydium',
      subTitle: '10 RAY',
      secondaryTitle: '$20',
      secondarySubTitle: '1hr ago',
      imgUri: 'https://cryptologos.cc/logos/raydium-ray-logo.png',
      action: 'swap',
    },
    {
      title: 'Serum',
      subTitle: '25 SRM',
      secondaryTitle: '$17.50',
      secondarySubTitle: '3hrs ago',
      imgUri: 'https://cryptologos.cc/logos/serum-srm-logo.png',
      action: 'receive',
    },
    {
      title: 'Solana',
      subTitle: '1.5 SOL',
      secondaryTitle: '$300',
      secondarySubTitle: '5hrs ago',
      imgUri: 'https://cryptologos.cc/logos/solana-sol-logo.png',
      action: 'send',
    },
    {
      title: 'Bonk',
      subTitle: '50,000 BONK',
      secondaryTitle: '$5',
      secondarySubTitle: '15mins ago',
      imgUri:
        'https://bonkcoin.com/static/media/bonkog_200.e87b5d92088ca7a75178.png',
      action: 'send',
    },
    {
      title: 'Bonk',
      subTitle: '50,000 BONK',
      secondaryTitle: '$5',
      secondarySubTitle: '15mins ago',
      imgUri:
        'https://bonkcoin.com/static/media/bonkog_200.e87b5d92088ca7a75178.png',
      action: 'send',
    },
    {
      title: 'Solana',
      subTitle: '3 SOL',
      secondaryTitle: '$600',
      secondarySubTitle: '2mins ago',
      imgUri: 'https://cryptologos.cc/logos/solana-sol-logo.png',
      action: 'receive',
    },
    {
      title: 'Bonk',
      subTitle: '50,000 BONK',
      secondaryTitle: '$5',
      secondarySubTitle: '15mins ago',
      imgUri:
        'https://bonkcoin.com/static/media/bonkog_200.e87b5d92088ca7a75178.png',
      action: 'send',
    },
    {
      title: 'Solana',
      subTitle: '2 SOL',
      secondaryTitle: '$400',
      secondarySubTitle: '20mins ago',
      imgUri: 'https://cryptologos.cc/logos/solana-sol-logo.png',
      action: 'receive',
    },
  ]

  return (
    <View className='flex-col gap-[12px] bg-dark p-[10px] rounded-[12px] mb-12'>
      <View className='flex-row justify-between'>
        <Text className='font-ibmPlexMonoMedium text-[10px] text-light'>
          Transactions
        </Text>

        <Text className='font-pixelade text-[14px] text-orange'>See all</Text>
      </View>

      <View className='flex-col gap-[15px]'>
        {transactions.map((transaction, index) => (
          <TokenCard
            key={index}
            title={transaction.title}
            subTitle={transaction.subTitle}
            secondaryTitle={transaction.secondaryTitle}
            secondarySubTitle={transaction.secondarySubTitle}
            imgUri={transaction.imgUri}
            action={transaction.action as 'receive' | 'send' | 'swap'}
          />
        ))}
      </View>
    </View>
  )
}

export default TokenHistoryTab
