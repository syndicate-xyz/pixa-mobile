import TokenCard from '@/components/ui/TokenCard'
import { Text, View } from 'react-native'

const TokenListTab = () => {
  // Array of token data with different values
  const tokens = [
    {
      title: 'Solana',
      subTitle: '3.5 SOL',
      secondaryTitle: '$600',
      secondarySubTitle: '$171.43/SOL',
      imgUri: 'https://cryptologos.cc/logos/solana-sol-logo.png',
    },
    {
      title: 'Bonk',
      subTitle: '1,250,000 BONK',
      secondaryTitle: '$125',
      secondarySubTitle: '$0.0001/BONK',
      imgUri:
        'https://bonkcoin.com/static/media/bonkog_200.e87b5d92088ca7a75178.png',
    },
    {
      title: 'Raydium',
      subTitle: '45 RAY',
      secondaryTitle: '$90',
      secondarySubTitle: '$2.00/RAY',
      imgUri: 'https://cryptologos.cc/logos/raydium-ray-logo.png',
    },
    {
      title: 'Serum',
      subTitle: '120 SRM',
      secondaryTitle: '$84',
      secondarySubTitle: '$0.70/SRM',
      imgUri: 'https://cryptologos.cc/logos/serum-srm-logo.png',
    },
    {
      title: 'Marinade',
      subTitle: '75 MNDE',
      secondaryTitle: '$37.50',
      secondarySubTitle: '$0.50/MNDE',
      imgUri: 'https://s2.coinmarketcap.com/static/img/coins/64x64/13803.png',
    },
    {
      title: 'Send',
      subTitle: '500 SEND',
      secondaryTitle: '$50',
      secondarySubTitle: '$0.10/SEND',
      imgUri:
        'https://assets.coingecko.com/coins/images/39222/standard/photo1719676966.jpeg?1721182505',
    },
    {
      title: 'Sonic',
      subTitle: '200 SONIC',
      secondaryTitle: '$60',
      secondarySubTitle: '$0.30/SONIC',
      imgUri:
        'https://assets.coingecko.com/coins/images/53061/standard/Token.png?1735169618',
    },
    {
      title: 'Jupiter',
      subTitle: '25 JUP',
      secondaryTitle: '$112.50',
      secondarySubTitle: '$4.50/JUP',
      imgUri: 'https://s2.coinmarketcap.com/static/img/coins/64x64/29210.png',
    },
    {
      title: 'Solid',
      subTitle: '150 SOLID',
      secondaryTitle: '$75',
      secondarySubTitle: '$0.50/SOLID',
      imgUri: 'https://s2.coinmarketcap.com/static/img/coins/64x64/34790.png',
    },
    {
      title: 'Stream',
      subTitle: '300 STREAM',
      secondaryTitle: '$30',
      secondarySubTitle: '$0.10/STREAM',
      imgUri: 'https://s2.coinmarketcap.com/static/img/coins/64x64/34687.png',
    },
  ]

  return (
    <View className='flex-col gap-[12px] bg-dark p-[10px] mb-12 rounded-[12px]'>
      <View className='flex-row justify-between'>
        <Text className='font-ibmPlexMonoMedium text-[10px] text-light'>
          Pinned Tokens
        </Text>

        {/* <Text className='font-pixelade text-[14px] text-orange'>See all</Text> */}
      </View>

      <View className='flex-col gap-[15px]'>
        {tokens.map((token, index) => (
          <TokenCard
            key={index}
            title={token.title}
            subTitle={token.subTitle}
            secondaryTitle={token.secondaryTitle}
            secondarySubTitle={token.secondarySubTitle}
            imgUri={token.imgUri}
          />
        ))}
      </View>
    </View>
  )
}

export default TokenListTab
