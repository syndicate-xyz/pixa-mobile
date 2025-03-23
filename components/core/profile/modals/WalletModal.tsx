import { Modal, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'

interface WalletModalProps {
  visible: boolean
  onClose: () => void
}

const WalletModal = ({ visible, onClose }: WalletModalProps) => {
  const wallets = [
    { id: 'wallet1', name: 'Wallet 1' },
    { id: 'wallet2', name: 'Wallet 2' },
    { id: 'wallet3', name: 'Wallet 3' },
  ]

  return (
    <Modal
      animationType='slide'
      transparent={false}
      visible={visible}
      onRequestClose={onClose}
    >
      <SafeAreaView className='flex-1 bg-primary'>
        <View className='p-[24px] flex-1'>
          <View className='flex-row justify-between items-center mb-[16px]'>
            <Text className='text-white font-pressStart2PRegular text-[14px]'>
              Select Wallet
            </Text>
            <TouchableOpacity onPress={onClose}>
              <Text className='text-white text-[20px]'>✕</Text>
            </TouchableOpacity>
          </View>

          <View className='gap-[12px]'>
            {wallets.map((wallet) => (
              <TouchableOpacity
                key={wallet.id}
                className='flex-row items-center p-[12px] bg-[#1A1A1A] rounded-[12px]'
                onPress={() => {
                  // Handle wallet selection here
                  onClose()
                }}
              >
                <Text className='text-white font-ibmPlexMonoMedium'>
                  {wallet.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  )
}

export default WalletModal
