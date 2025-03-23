import { Ionicons } from '@expo/vector-icons'
import {
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

interface BrowserHeaderProps {
  url: string
  setUrl: (url: string) => void
  isLoading: boolean
  handleUrlSubmit: () => void
  goBack: () => void
  toggleOptions: () => void
  canGoBack: boolean
}

export function BrowserHeader({
  url,
  setUrl,
  isLoading,
  handleUrlSubmit,
  goBack,
  toggleOptions,
}: BrowserHeaderProps) {
  return (
    <View className='px-[12px] pt-[12px] pb-[4px]'>
      <View className='flex-row items-center gap-[8px]'>
        {/* Back Button */}
        <TouchableOpacity onPress={goBack}>
          <View className='bg-[#1A1A1A] p-[8px] rounded-[8px]'>
            <Ionicons name='arrow-back' size={18} color='white' />
          </View>
        </TouchableOpacity>

        {/* URL Input */}
        <View className='flex-1 flex-row items-center bg-dark rounded-[12px] p-[10px]'>
          <TextInput
            className='flex-1 text-white font-ibmPlexMonoMedium'
            value={url}
            onChangeText={setUrl}
            placeholder='Enter URL or search'
            placeholderTextColor='#7B7979'
            autoCapitalize='none'
            autoCorrect={false}
            onSubmitEditing={handleUrlSubmit}
            keyboardType='url'
          />
          {isLoading ? (
            <ActivityIndicator color='#F40000' />
          ) : (
            <TouchableOpacity onPress={handleUrlSubmit}>
              <Ionicons name='arrow-forward' size={20} color='#F40000' />
            </TouchableOpacity>
          )}
        </View>

        {/* Menu Button with Options */}
        <TouchableOpacity onPress={toggleOptions}>
          <View className='bg-[#1A1A1A] p-[8px] rounded-[8px]'>
            <Ionicons name='ellipsis-vertical' size={18} color='white' />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}
