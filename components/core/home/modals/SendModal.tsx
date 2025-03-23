import ScanIcon from '@/components/icons/ScanIcon'
import { useState } from 'react'
import {
  Modal,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

interface SendModalProps {
  visible: boolean
  onClose: () => void
}

const SendModal = ({ visible, onClose }: SendModalProps) => {
  const [recipient, setRecipient] = useState('')
  const [amount, setAmount] = useState('')
  const [selectedToken, setSelectedToken] = useState('SOL')

  const handleSend = () => {
    // Logic to send tokens
    console.log('Sending', amount, selectedToken, 'to', recipient)
    onClose()
  }

  const handleScanPress = () => {
    // Logic to open QR code scanner
    console.log('Opening QR scanner')
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
          <View className='flex-row justify-between items-center mb-[24px]'>
            <Text className='text-white font-pressStart2PRegular text-[16px]'>
              Send
            </Text>
            <TouchableOpacity onPress={onClose}>
              <Text className='text-light font-ibmPlexMonoMedium'>Close</Text>
            </TouchableOpacity>
          </View>

          {/* Recipient Address */}
          <View className='bg-dark rounded-[12px] p-[12px] mb-[16px]'>
            <Text className='text-light font-ibmPlexMonoMedium text-[12px] mb-[8px]'>
              Recipient Address
            </Text>
            <View className='flex-row items-center'>
              <TextInput
                className='text-white font-ibmPlexMonoMedium flex-1'
                placeholder='Enter wallet address'
                placeholderTextColor='#7B7979'
                value={recipient}
                onChangeText={setRecipient}
                autoFocus
              />
              <TouchableOpacity onPress={handleScanPress} className='ml-[8px]'>
                <ScanIcon color='#7B7979' />
              </TouchableOpacity>
            </View>
          </View>

          {/* Token Selection */}
          <View className='bg-dark rounded-[12px] p-[12px] mb-[16px]'>
            <Text className='text-light font-ibmPlexMonoMedium text-[12px] mb-[8px]'>
              Token
            </Text>
            <View className='flex-row flex-wrap gap-[8px]'>
              {['SOL', 'BONK', 'JUP', 'RAY'].map((token) => (
                <TouchableOpacity
                  key={token}
                  className={`px-[12px] py-[8px] rounded-[8px] ${
                    selectedToken === token ? 'bg-[#F40000]' : 'bg-[#1A1A1A]'
                  }`}
                  onPress={() => setSelectedToken(token)}
                >
                  <Text className='text-white font-ibmPlexMonoMedium'>
                    {token}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Amount */}
          <View className='bg-dark rounded-[12px] p-[12px] mb-[24px]'>
            <Text className='text-light font-ibmPlexMonoMedium text-[12px] mb-[8px]'>
              Amount
            </Text>
            <TextInput
              className='text-white font-ibmPlexMonoMedium text-[24px]'
              placeholder='0.0'
              placeholderTextColor='#7B7979'
              value={amount}
              onChangeText={setAmount}
              keyboardType='numeric'
            />
            <Text className='text-light font-ibmPlexMonoMedium text-[12px] mt-[8px]'>
              Available: 3.5 {selectedToken}
            </Text>
          </View>

          {/* Send Button */}
          <TouchableOpacity
            className='bg-[#F40000] p-[12px] rounded-[12px]'
            onPress={handleSend}
            disabled={!recipient.trim() || !amount.trim()}
          >
            <Text className='text-white font-ibmPlexMonoMedium text-center'>
              Send {amount} {selectedToken}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  )
}

export default SendModal
