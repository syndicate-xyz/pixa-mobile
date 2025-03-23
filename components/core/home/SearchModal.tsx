import { Images } from '@/constants/Images.constant'
import { useState } from 'react'
import {
  Image,
  Modal,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { HomeItem } from './HomeBarItem'

// Separate modal content component
export const SearchModalContent = ({
  visible,
  onClose,
  searchQuery,
  setSearchQuery,
}: {
  visible: boolean
  onClose: () => void
  searchQuery: string
  setSearchQuery: (query: string) => void
}) => {
  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <SafeAreaView className='flex-1 bg-primary'>
        <View className='p-[24px] flex-1'>
          {/* Header with close button */}
          <View className='flex-row justify-between items-center mb-[24px]'>
            <Text className='text-white font-pressStart2PRegular text-[16px]'>
              Search
            </Text>
            <TouchableOpacity onPress={onClose}>
              <Text className='text-light font-ibmPlexMonoMedium'>Close</Text>
            </TouchableOpacity>
          </View>

          {/* Search input */}
          <View className='bg-dark rounded-[12px] p-[12px] flex-row items-center mb-[24px]'>
            <Image
              source={Images.searchIcon}
              resizeMode='contain'
              className='w-[20px] h-[20px] mr-[12px]'
            />
            <TextInput
              className='flex-1 text-white font-ibmPlexMonoMedium'
              placeholder='Search tokens, addresses, dapps...'
              placeholderTextColor='#7B7979'
              value={searchQuery}
              onChangeText={setSearchQuery}
              autoFocus
            />
            {searchQuery.length > 0 && (
              <TouchableOpacity onPress={() => setSearchQuery('')}>
                <Text className='text-light'>✕</Text>
              </TouchableOpacity>
            )}
          </View>

          {/* Search results area */}
          <View className='flex-1'>
            {searchQuery.length > 0 ? (
              <Text className='text-light font-ibmPlexMonoMedium text-[12px]'>
                Showing results for "{searchQuery}"
              </Text>
            ) : (
              <Text className='text-light font-ibmPlexMonoMedium text-[12px] text-center mt-[48px]'>
                Enter a search term to find tokens, addresses, transactions or
                dapps
              </Text>
            )}

            {/* Search results would go here */}
            {/* This is where you would map through search results */}
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  )
}

// Separate search button component
export const SearchButton = ({ onPress }: { onPress: () => void }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <HomeItem>
        <Image
          source={Images.searchIcon}
          resizeMode='contain'
          className='w-[24px] h-[24px]'
        />
      </HomeItem>
    </TouchableOpacity>
  )
}

// Main component that combines both
const SearchModal = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const openSearchModal = () => {
    setModalVisible(true)
  }

  const closeSearchModal = () => {
    setModalVisible(false)
    setSearchQuery('')
  }

  return (
    <View>
      {/* Search Button */}
      <SearchButton onPress={openSearchModal} />

      {/* Search Modal - only render when visible */}
      {modalVisible && (
        <SearchModalContent
          visible={modalVisible}
          onClose={closeSearchModal}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      )}
    </View>
  )
}

export default SearchModal
