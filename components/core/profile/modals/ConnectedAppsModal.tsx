import { Modal, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'

interface ConnectedAppsModalProps {
  visible: boolean
  onClose: () => void
}

const ConnectedAppsModal = ({ visible, onClose }: ConnectedAppsModalProps) => {
  const apps = [
    { id: 'app1', name: 'Jupiter Exchange' },
    { id: 'app2', name: 'Magic Eden' },
    { id: 'app3', name: 'Solana FM' },
    { id: 'app4', name: 'Tensor' },
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
              Connected Apps
            </Text>
            <TouchableOpacity onPress={onClose}>
              <Text className='text-white text-[20px]'>✕</Text>
            </TouchableOpacity>
          </View>

          <View className='gap-[12px]'>
            {apps.map((app) => (
              <View
                key={app.id}
                className='flex-row justify-between items-center p-[12px] bg-[#1A1A1A] rounded-[12px]'
              >
                <Text className='text-white font-ibmPlexMonoMedium'>
                  {app.name}
                </Text>
                <TouchableOpacity>
                  <Text className='text-light font-ibmPlexMonoMedium'>
                    Disconnect
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  )
}

export default ConnectedAppsModal
