import { useState } from 'react'
import {
  Modal,
  SafeAreaView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

interface SecurityModalProps {
  visible: boolean
  onClose: () => void
}

const SecurityModal = ({ visible, onClose }: SecurityModalProps) => {
  const [biometricEnabled, setBiometricEnabled] = useState(false)
  const [autoLockEnabled, setAutoLockEnabled] = useState(true)

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
              Security Settings
            </Text>
            <TouchableOpacity onPress={onClose}>
              <Text className='text-white text-[20px]'>✕</Text>
            </TouchableOpacity>
          </View>

          <View className='gap-[12px]'>
            <View className='flex-row justify-between items-center p-[12px] bg-[#1A1A1A] rounded-[12px]'>
              <Text className='text-white font-ibmPlexMonoMedium'>
                Biometric Authentication
              </Text>
              <Switch
                value={biometricEnabled}
                onValueChange={setBiometricEnabled}
                trackColor={{ false: '#767577', true: '#F40000' }}
              />
            </View>

            <View className='flex-row justify-between items-center p-[12px] bg-[#1A1A1A] rounded-[12px]'>
              <Text className='text-white font-ibmPlexMonoMedium'>
                Auto-Lock After 5 Minutes
              </Text>
              <Switch
                value={autoLockEnabled}
                onValueChange={setAutoLockEnabled}
                trackColor={{ false: '#767577', true: '#F40000' }}
              />
            </View>

            <TouchableOpacity className='p-[12px] bg-[#1A1A1A] rounded-[12px]'>
              <Text className='text-white font-ibmPlexMonoMedium'>
                Change Password
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className='p-[12px] bg-[#1A1A1A] rounded-[12px]'>
              <Text className='text-white font-ibmPlexMonoMedium'>
                View Recovery Phrase
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  )
}

export default SecurityModal
