import { NetworkChangerModalContent } from '@/components/core/home/NetworkModal'
import ConnectedAppsModal from '@/components/core/profile/modals/ConnectedAppsModal'
import DeveloperModal from '@/components/core/profile/modals/DeveloperModal'
import SecurityModal from '@/components/core/profile/modals/SecurityModal'
import SupportModal from '@/components/core/profile/modals/SupportModal'
import WalletModal from '@/components/core/profile/modals/WalletModal'
import ChevronDownIcon from '@/components/icons/ChevronDownIcon'
import ChevronRightIcon from '@/components/icons/ChevronRightIcon'
import { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const ProfileMenuList = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null)

  const closeModal = () => {
    setActiveModal(null)
  }

  const menuItems = [
    {
      id: 'network',
      title: 'Network',
      rightContent: 'Solana',
      modal: (
        <NetworkChangerModalContent
          visible={activeModal === 'network'}
          onClose={closeModal}
        />
      ),
    },
    {
      id: 'wallet',
      title: 'Wallet 1',
      rightIcon: <ChevronDownIcon />,
      modal: (
        <WalletModal visible={activeModal === 'wallet'} onClose={closeModal} />
      ),
    },
    {
      id: 'connected-apps',
      title: 'Connected Apps',
      rightContent: '[4]',
      modal: (
        <ConnectedAppsModal
          visible={activeModal === 'connected-apps'}
          onClose={closeModal}
        />
      ),
    },
    {
      id: 'security',
      title: 'Security',
      modal: (
        <SecurityModal
          visible={activeModal === 'security'}
          onClose={closeModal}
        />
      ),
    },
    {
      id: 'developer',
      title: 'Developer',
      modal: (
        <DeveloperModal
          visible={activeModal === 'developer'}
          onClose={closeModal}
        />
      ),
    },
    {
      id: 'support',
      title: 'Support',
      modal: (
        <SupportModal
          visible={activeModal === 'support'}
          onClose={closeModal}
        />
      ),
    },
  ]

  return (
    <View className='flex-col gap-[12px] p-[24px]'>
      {menuItems.map((item) => (
        <TouchableOpacity
          key={item.id}
          className='bg-[#1A1A1A] p-[16px] rounded-[12px] flex-row justify-between items-center'
          onPress={() => setActiveModal(item.id)}
        >
          <Text className='text-white font-pressStart2PRegular text-[14px]'>
            {item.title}
          </Text>
          <View className='flex-row items-center gap-[8px]'>
            {item.rightContent && (
              <Text className='text-white font-ibmPlexMonoMedium text-[14px]'>
                {item.rightContent}
              </Text>
            )}
            {item.rightIcon || <ChevronRightIcon />}
          </View>
        </TouchableOpacity>
      ))}

      {/* Render active modal */}
      {activeModal && menuItems.find((item) => item.id === activeModal)?.modal}
    </View>
  )
}

export default ProfileMenuList
