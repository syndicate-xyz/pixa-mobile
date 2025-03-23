import ClipBoardIcon from '@/components/icons/ClipBoardIcon'
import { PrimaryButton } from '@/components/ui/PixaButton'
import RenderSVG from '@/components/ui/SVGRender'
import { previewAddress } from '@/lib/utils'
import * as Clipboard from 'expo-clipboard'
import { useEffect, useState } from 'react'
import {
  Modal,
  SafeAreaView,
  ScrollView,
  Share,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

interface ReceiveModalProps {
  visible: boolean
  onClose: () => void
}

const ReceiveModal = ({ visible, onClose }: ReceiveModalProps) => {
  // In a real app, this would come from your wallet context/provider
  const walletAddress = previewAddress(
    '5QDwYS1CtHzN1oJ2eij8Crka4D2eJcUavMcyuvwNRM9'
  )

  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(walletAddress)
    setCopied(true)
  }

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false)
      }, 3000) // Reset after 3 seconds
      return () => clearTimeout(timer)
    }
  }, [copied])

  const handleShare = async () => {
    try {
      await Share.share({
        message: `${walletAddress}`,
      })
    } catch (error) {
      console.error('Error sharing address:', error)
    }
  }

  return (
    <Modal
      animationType='slide'
      transparent={false}
      visible={visible}
      onRequestClose={onClose}
    >
      <SafeAreaView className='flex-1 bg-primary'>
        <ScrollView
          className='flex-1'
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
        >
          <View className='p-[24px] flex-1'>
            {/* Header */}
            <View className='flex-row justify-between items-center mb-[32px]'>
              <Text className='text-white font-pressStart2PRegular text-[16px]'>
                Receive
              </Text>
              <TouchableOpacity onPress={onClose}>
                <Text className='text-light font-ibmPlexMonoMedium'>Close</Text>
              </TouchableOpacity>
            </View>

            <View className='flex-1 justify-center'>
              {/* QR Code - Moved to top for better visibility */}
              <View className='items-center mb-[32px]'>
                <RenderSVG
                  value={walletAddress}
                  size={220}
                  style={{ alignItems: 'center' }}
                />
                <Text className='text-light font-ibmPlexMonoMedium text-[12px] mt-[12px]'>
                  Scan to receive
                </Text>
              </View>

              {/* Wallet Address */}
              <View className='bg-dark rounded-[12px] p-[16px] mb-[32px]'>
                <Text className='text-light font-ibmPlexMonoMedium text-[12px] mb-[12px] text-center'>
                  Your Wallet Address
                </Text>
                <TouchableOpacity
                  className='bg-[#1A1A1A] p-[16px] rounded-[8px] flex-row justify-between items-center'
                  onPress={copyToClipboard}
                >
                  <Text className='text-white font-ibmPlexMonoMedium flex-1 text-center'>
                    {walletAddress}
                  </Text>
                  <View className='flex-row items-center absolute right-[16px]'>
                    {copied ? (
                      <Text className='text-[#F40000] font-ibmPlexMonoMedium text-[10px] mr-[4px]'>
                        Copied!
                      </Text>
                    ) : null}
                    <ClipBoardIcon color={copied ? '#F40000' : '#fff'} />
                  </View>
                </TouchableOpacity>
              </View>

              {/* Share Button */}
              <PrimaryButton text='Share Address' onPress={handleShare} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  )
}

export default ReceiveModal
