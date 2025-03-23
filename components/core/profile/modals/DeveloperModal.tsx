import { useState } from 'react'
import {
  Modal,
  SafeAreaView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

interface DeveloperModalProps {
  visible: boolean
  onClose: () => void
}

const DeveloperModal = ({ visible, onClose }: DeveloperModalProps) => {
  const [testnetEnabled, setTestnetEnabled] = useState(false)
  const [logsEnabled, setLogsEnabled] = useState(false)

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
              Developer Options
            </Text>
            <TouchableOpacity onPress={onClose}>
              <Text className='text-white text-[20px]'>✕</Text>
            </TouchableOpacity>
          </View>

          <View className='gap-[12px]'>
            <View className='flex-row justify-between items-center p-[12px] bg-[#1A1A1A] rounded-[12px]'>
              <Text className='text-white font-ibmPlexMonoMedium'>
                Enable Testnet
              </Text>
              <Switch
                value={testnetEnabled}
                onValueChange={setTestnetEnabled}
                trackColor={{ false: '#767577', true: '#F40000' }}
              />
            </View>

            <View className='flex-row justify-between items-center p-[12px] bg-[#1A1A1A] rounded-[12px]'>
              <Text className='text-white font-ibmPlexMonoMedium'>
                Debug Logs
              </Text>
              <Switch
                value={logsEnabled}
                onValueChange={setLogsEnabled}
                trackColor={{ false: '#767577', true: '#F40000' }}
              />
            </View>

            <TouchableOpacity className='p-[12px] bg-[#1A1A1A] rounded-[12px]'>
              <Text className='text-white font-ibmPlexMonoMedium'>
                Export Logs
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className='p-[12px] bg-[#1A1A1A] rounded-[12px]'>
              <Text className='text-white font-ibmPlexMonoMedium'>
                RPC Configuration
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  )
}

export default DeveloperModal
