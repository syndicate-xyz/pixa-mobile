import {
  Linking,
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

interface SupportModalProps {
  visible: boolean
  onClose: () => void
}

const SupportModal = ({ visible, onClose }: SupportModalProps) => {
  const supportOptions = [
    { id: 'docs', name: 'Documentation', url: 'https://pixawallet.live' },
    // { id: 'discord', name: 'Join Discord', url: 'https://discord.gg/example' },
    { id: 'twitter', name: 'X', url: 'https://x.com/pixa_fun' },
    // { id: 'email', name: 'Email Support', url: 'mailto:support@example.com' },
  ]

  const handleOpenLink = (url: string) => {
    Linking.openURL(url)
    // onClose()
  }

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
              Support
            </Text>
            <TouchableOpacity onPress={onClose}>
              <Text className='text-white text-[20px]'>✕</Text>
            </TouchableOpacity>
          </View>

          <View className='gap-[12px]'>
            {supportOptions.map((option) => (
              <TouchableOpacity
                key={option.id}
                className='p-[12px] bg-[#1A1A1A] rounded-[12px]'
                onPress={() => handleOpenLink(option.url)}
              >
                <Text className='text-white font-ibmPlexMonoMedium'>
                  {option.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  )
}

export default SupportModal
