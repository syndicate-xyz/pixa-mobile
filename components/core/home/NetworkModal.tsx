import { Images } from '@/constants/Images.constant'
import { useState } from 'react'
import {
  Image,
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

// Separate modal content component
export const NetworkChangerModalContent = ({
  visible,
  onClose,
}: {
  visible: boolean
  onClose: () => void
}) => {
  // Available networks
  const networks = [
    { id: 'solana', name: 'Solana', image: Images.solanaBadge },
    // Add more networks as needed
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
              Select Network
            </Text>
            <TouchableOpacity onPress={onClose}>
              <Text className='text-white text-[20px]'>✕</Text>
            </TouchableOpacity>
          </View>

          <View className='gap-[12px]'>
            {networks.map((network) => (
              <TouchableOpacity
                key={network.id}
                className='flex-row items-center p-[12px] bg-[#1A1A1A] rounded-[12px]'
                onPress={() => {
                  // Handle network selection here
                  onClose()
                }}
              >
                <Image
                  source={network.image}
                  resizeMode='contain'
                  className='w-[32px] h-[32px] mr-[12px]'
                />
                <Text className='text-white font-ibmPlexMonoMedium'>
                  {network.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  )
}

// Separate network button component
export const NetworkButton = ({ onPress }: { onPress: () => void }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={Images.solanaBadge}
        resizeMode='contain'
        className='w-[44px] h-[44px]'
      />
    </TouchableOpacity>
  )
}

// Main component that combines both
const NetworkChanger = () => {
  const [modalVisible, setModalVisible] = useState(false)

  const openNetworkModal = () => {
    setModalVisible(true)
  }

  const closeNetworkModal = () => {
    setModalVisible(false)
  }

  return (
    <View>
      {/* Network Button */}
      <NetworkButton onPress={openNetworkModal} />

      {/* Network Modal */}
      {modalVisible && (
        <NetworkChangerModalContent
          visible={modalVisible}
          onClose={closeNetworkModal}
        />
      )}
    </View>
  )
}

export default NetworkChanger
