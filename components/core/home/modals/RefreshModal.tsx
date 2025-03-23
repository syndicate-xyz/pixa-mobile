import { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

interface RefreshModalProps {
  visible: boolean
  onClose: () => void
}

const RefreshModal = ({ visible, onClose }: RefreshModalProps) => {
  const [isRefreshing, setIsRefreshing] = useState(true)
  const [refreshComplete, setRefreshComplete] = useState(false)

  useEffect(() => {
    if (visible) {
      // Simulate refresh process
      const timer = setTimeout(() => {
        setIsRefreshing(false)
        setRefreshComplete(true)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [visible])

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
              Refresh
            </Text>
            <TouchableOpacity onPress={onClose}>
              <Text className='text-light font-ibmPlexMonoMedium'>Close</Text>
            </TouchableOpacity>
          </View>

          <View className='flex-1 justify-center items-center'>
            {isRefreshing ? (
              <>
                <ActivityIndicator size='large' color='#F40000' />
                <Text className='text-white font-ibmPlexMonoMedium mt-[16px]'>
                  Refreshing wallet data...
                </Text>
                <Text className='text-light font-ibmPlexMonoMedium text-[12px] mt-[8px]'>
                  This may take a moment
                </Text>
              </>
            ) : (
              <>
                <Text className='text-white font-ibmPlexMonoMedium text-[20px]'>
                  {refreshComplete ? '✓ Refresh Complete' : '✗ Refresh Failed'}
                </Text>
                <Text className='text-light font-ibmPlexMonoMedium text-[14px] mt-[16px] text-center'>
                  {refreshComplete
                    ? 'Your wallet data has been updated with the latest information.'
                    : 'There was an issue refreshing your wallet data. Please try again.'}
                </Text>
                <TouchableOpacity
                  className='bg-[#F40000] px-[24px] py-[12px] rounded-[12px] mt-[24px]'
                  onPress={onClose}
                >
                  <Text className='text-white font-ibmPlexMonoMedium'>
                    {refreshComplete ? 'Done' : 'Try Again'}
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  )
}

export default RefreshModal
