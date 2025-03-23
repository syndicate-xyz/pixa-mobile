import ArrowRefresh from '@/components/icons/ArrowRefreshIcon'
import ArrowUpRight from '@/components/icons/ArrowUpRightIcon'
import PlusIcon from '@/components/icons/PlusIcon'
import ScanIcon from '@/components/icons/ScanIcon'
import { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import ReceiveTokenModal from './modals/ReceiveModal'
import RefreshModal from './modals/RefreshModal'
import ScanModal from './modals/ScanModal'
import SendModal from './modals/SendModal'

const ActionBar = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null)

  const openModal = (modalName: string) => {
    setActiveModal(modalName)
  }

  const closeModal = () => {
    setActiveModal(null)
  }

  return (
    <View className='flex-row gap-[12px] justify-between'>
      <ActionItem icon={<PlusIcon />} onPress={() => openModal('add')} />
      <ActionItem icon={<ArrowUpRight />} onPress={() => openModal('send')} />
      <ActionItem
        icon={<ArrowRefresh />}
        onPress={() => openModal('refresh')}
      />
      <ActionItem icon={<ScanIcon />} onPress={() => openModal('scan')} />

      {/* Modals */}
      {activeModal === 'add' && (
        <ReceiveTokenModal visible={true} onClose={closeModal} />
      )}
      {activeModal === 'send' && (
        <SendModal visible={true} onClose={closeModal} />
      )}
      {activeModal === 'refresh' && (
        <RefreshModal visible={true} onClose={closeModal} />
      )}
      {activeModal === 'scan' && (
        <ScanModal visible={true} onClose={closeModal} />
      )}
    </View>
  )
}

export default ActionBar

const ActionItem = ({
  icon,
  onPress,
}: {
  icon: React.ReactNode
  onPress: () => void
}) => {
  return (
    <TouchableOpacity
      className='items-center p-[10px] border-2 border-light rounded-[12px] flex-1'
      onPress={onPress}
    >
      {icon}
    </TouchableOpacity>
  )
}
