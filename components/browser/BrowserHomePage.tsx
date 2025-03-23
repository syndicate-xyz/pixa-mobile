import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

interface BookmarkProps {
  title: string
  url: string
  icon?: string
  onPress: (url: string) => void
}

const Bookmark = ({ title, url, icon, onPress }: BookmarkProps) => {
  return (
    <TouchableOpacity style={styles.bookmarkItem} onPress={() => onPress(url)}>
      <View style={styles.bookmarkIcon}>
        {icon ? (
          <Image source={{ uri: icon }} style={styles.bookmarkIconImage} />
        ) : (
          <View style={styles.defaultIcon}>
            <Text style={styles.defaultIconText}>{title[0]}</Text>
          </View>
        )}
      </View>
      <Text style={styles.bookmarkTitle} numberOfLines={1}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

interface BrowserHomePageProps {
  onNavigate: (url: string) => void
}

const BrowserHomePage = ({ onNavigate }: BrowserHomePageProps) => {
  // Sample bookmarks - these could come from a storage system in a real app
  const bookmarks = [
    { title: 'AirBillsPay', url: 'https://app.airbillspay.com' },
    { title: 'ScaleX', url: 'https://checkout.scalex.africa/' },
    { title: 'XDegen', url: 'https://xdegen.xyz/home' },
    { title: 'Paw', url: 'https://paws.community' },
    { title: 'Raydium', url: 'https://raydium.io' },
    { title: 'Jupiter', url: 'https://jup.ag' },
    { title: 'Orca', url: 'https://orca.so' },
    { title: 'Magic Eden', url: 'https://magiceden.io' },
  ]

  return (
    <ScrollView style={styles.container}>
      {/* <View style={styles.header}> */}
      {/* <Text style={styles.title}>Pixa</Text> */}
      {/* </View> */}

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Bookmarks</Text>
        <View style={styles.bookmarksGrid}>
          {bookmarks.map((bookmark, index) => (
            <Bookmark
              key={index}
              title={bookmark.title}
              url={bookmark.url}
              onPress={onNavigate}
            />
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.quickActions}>
          <TouchableOpacity
            style={styles.quickActionButton}
            onPress={() => {
              /* Add bookmark functionality */
            }}
          >
            <Ionicons name='bookmark-outline' size={24} color='#F40000' />
            <Text style={styles.quickActionText}>Bookmarks</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.quickActionButton}
            onPress={() => {
              /* Add history functionality */
            }}
          >
            <Ionicons name='time-outline' size={24} color='#F40000' />
            <Text style={styles.quickActionText}>History</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.quickActionButton}
            onPress={() => {
              /* Add downloads functionality */
            }}
          >
            <Ionicons name='download-outline' size={24} color='#F40000' />
            <Text style={styles.quickActionText}>Trending</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252525',
    padding: 16,
  },
  header: {
    marginTop: 20,
    marginBottom: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F40000',
    fontFamily: 'IBMPlexMono-Medium',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    color: 'white',
    marginBottom: 16,
    fontFamily: 'IBMPlexMono-Medium',
  },
  bookmarksGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  bookmarkItem: {
    width: '23%',
    alignItems: 'center',
    marginBottom: 16,
  },
  bookmarkIcon: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: '#1A1A1A',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  bookmarkIconImage: {
    width: 32,
    height: 32,
    borderRadius: 4,
  },
  defaultIcon: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: '#F40000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultIconText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  bookmarkTitle: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'IBMPlexMono-Medium',
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  quickActionButton: {
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    width: '30%',
  },
  quickActionText: {
    color: 'white',
    marginTop: 8,
    fontSize: 12,
    fontFamily: 'IBMPlexMono-Medium',
  },
})

export default BrowserHomePage
