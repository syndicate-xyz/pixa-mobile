import { PrimaryButton } from '@/components/ui/PixaButton'
import {
  BarcodeScanningResult,
  CameraType,
  CameraView,
  useCameraPermissions,
} from 'expo-camera'
import { useState } from 'react'
import {
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

interface ScanModalProps {
  visible: boolean
  onClose: () => void
}

const ScanModal = ({ visible, onClose }: ScanModalProps) => {
  const [scannedData, setScannedData] = useState<string | null>(null)
  const [facing, setFacing] = useState<CameraType>('back')
  const [permission, requestPermission] = useCameraPermissions()

  // In a real app, you would integrate with a camera/QR code scanner
  // For this example, we'll just simulate the scanning process

  const handleScan = () => {
    // Simulate scanning a QR code
    setTimeout(() => {
      setScannedData('Gh5KcTk...t3X')
    }, 1000)
  }

  const handleContinue = () => {
    // Handle the scanned data (e.g., navigate to send screen with pre-filled address)
    console.log('Continuing with scanned data:', scannedData)
    onClose()
  }

  const handleBarCodeScanned = (scanningResult: BarcodeScanningResult) => {
    if (scanningResult.data) {
      setScannedData(scanningResult.data)
      console.log('Scanned data:', scanningResult.data)
    }
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === 'back' ? 'front' : 'back'))
  }

  if (!permission) {
    // Camera permissions are still loading.
    return <View />
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <SafeAreaView className='flex-1 bg-primary'>
        <View className='p-[24px] flex-1 justify-center items-center'>
          <View className='bg-[#1A1A1A] p-[24px] rounded-[12px] items-center mb-[24px] w-[90%]'>
            <Text className='text-white font-pressStart2PRegular text-[16px] mb-[16px] text-center'>
              Camera Access Required
            </Text>
            <Text className='text-light font-ibmPlexMonoMedium text-center mb-[24px]'>
              We need permission to use your camera to scan QR codes. Your
              camera is only used while the app is open.
            </Text>
            <TouchableOpacity
              className='bg-[#F40000] px-[24px] py-[12px] rounded-[12px] w-full'
              onPress={requestPermission}
            >
              <Text className='text-white font-ibmPlexMonoMedium text-center'>
                Grant Permission
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    )
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
              Scan QR Code
            </Text>
            <TouchableOpacity onPress={onClose}>
              <Text className='text-light font-ibmPlexMonoMedium'>Close</Text>
            </TouchableOpacity>
          </View>

          <View className='flex-1 justify-center items-center'>
            <View className='w-[250px] h-[250px] rounded-[12px] overflow-hidden mb-[24px]'>
              <CameraView
                facing={facing}
                className='flex-1 w-96 h-96'
                barcodeScannerSettings={{
                  barcodeTypes: ['qr'],
                }}
                onBarcodeScanned={handleBarCodeScanned}
              >
                <TouchableOpacity
                  className='absolute top-2 right-2 bg-[#1A1A1A] p-2 rounded-full'
                  onPress={toggleCameraFacing}
                >
                  <Text className='text-white font-ibmPlexMonoMedium'>⟲</Text>
                </TouchableOpacity>
              </CameraView>
            </View>
            {/* This would be replaced with an actual camera view in a real app */}
            {/* <View className='w-[250px] h-[250px] bg-[#1A1A1A] rounded-[12px] justify-center items-center mb-[24px]'>
              {scannedData ? (
                <Text className='text-white font-ibmPlexMonoMedium'>
                  ✓ Scanned Successfully
                </Text>
              ) : (
                <Text className='text-light font-ibmPlexMonoMedium text-center'>
                  Position QR code within frame to scan
                </Text>
              )}
            </View> */}

            {scannedData ? (
              <>
                <Text className='text-white font-ibmPlexMonoMedium mb-[8px]'>
                  Wallet Address:
                </Text>
                <Text className='text-light font-ibmPlexMonoMedium mb-[24px]'>
                  {scannedData}
                </Text>
                <TouchableOpacity
                  className='bg-[#F40000] px-[24px] py-[12px] rounded-[12px]'
                  onPress={handleContinue}
                >
                  <Text className='text-white font-ibmPlexMonoMedium'>
                    Continue
                  </Text>
                </TouchableOpacity>
              </>
            ) : (
              <PrimaryButton text='Scan' onPress={handleScan} />
              // <TouchableOpacity
              //   className='bg-[#F40000] px-[24px] py-[12px] rounded-[12px]'
              //   onPress={handleScan}
              // >
              //   <Text className='text-white font-ibmPlexMonoMedium'>
              //     Simulate Scan
              //   </Text>
              // </TouchableOpacity>
            )}
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  )
}

export default ScanModal

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
})
