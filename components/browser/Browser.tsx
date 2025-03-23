import { useRef, useState } from 'react'
import { Animated, View } from 'react-native'
import { WebView, WebViewNavigation } from 'react-native-webview'

import { BrowserHeader } from '@/components/browser/BrowserHeader'
import BrowserHomePage from '@/components/browser/BrowserHomePage'
import { LoadingProgressBar } from '@/components/browser/LoadingProgressBar'
import { OptionsMenu } from '@/components/browser/OptionsMenu'

export default function Browser() {
  const [url, setUrl] = useState<string>('')
  const [currentUrl, setCurrentUrl] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [loadingProgress, setLoadingProgress] = useState<number>(0)
  const [showOptions, setShowOptions] = useState<boolean>(false)
  const webViewRef = useRef<WebView>(null)
  const progressAnim = useRef(new Animated.Value(0)).current
  const [canGoBack, setCanGoBack] = useState<boolean>(false)

  const handleUrlSubmit = (): void => {
    if (!url.trim()) {
      // If URL is empty, reset to home page
      setCurrentUrl('')
      return
    }

    // Add https if not present
    let formattedUrl = url
    if (!/^https?:\/\//i.test(url)) {
      formattedUrl = 'https://' + url
      setUrl(formattedUrl)
    }
    setCurrentUrl(formattedUrl)
  }

  const navigateToUrl = (newUrl: string): void => {
    setUrl(newUrl)
    setCurrentUrl(newUrl)
  }

  const goBack = (): void => {
    if (!canGoBack) {
      setIsLoading(false)
      setLoadingProgress(0)
      return navigateToUrl('')
    }

    if (!currentUrl) {
      return // Already on home page
    }
    webViewRef.current?.goBack()
  }

  const goForward = (): void => {
    webViewRef.current?.goForward()
  }

  const reload = (): void => {
    if (!currentUrl) {
      return // No need to reload home page
    }
    webViewRef.current?.reload()
  }

  const updateLoadingProgress = (progress: number): void => {
    setLoadingProgress(progress)
    Animated.timing(progressAnim, {
      toValue: progress,
      duration: 200,
      useNativeDriver: false,
    }).start()
  }

  const toggleOptions = (): void => {
    setShowOptions(!showOptions)
  }

  const isHomePage = !currentUrl.trim()

  return (
    <View className='flex-1'>
      <BrowserHeader
        url={url}
        setUrl={setUrl}
        isLoading={isLoading}
        handleUrlSubmit={handleUrlSubmit}
        goBack={goBack}
        toggleOptions={toggleOptions}
        canGoBack={canGoBack}
      />

      {showOptions && (
        <OptionsMenu
          goForward={goForward}
          reload={reload}
          closeMenu={() => setShowOptions(false)}
        />
      )}

      {isLoading && <LoadingProgressBar progressAnim={progressAnim} />}

      {/* WebView container */}
      <View className='flex-1 overflow-hidden'>
        {isHomePage ? (
          <BrowserHomePage onNavigate={navigateToUrl} />
        ) : (
          <WebView
            ref={webViewRef}
            source={{ uri: currentUrl }}
            onLoadStart={() => {
              setIsLoading(true)
              updateLoadingProgress(0)
            }}
            onLoadEnd={() => setIsLoading(false)}
            onLoadProgress={({ nativeEvent }) => {
              updateLoadingProgress(nativeEvent.progress)
            }}
            onNavigationStateChange={(navState: WebViewNavigation) => {
              setUrl(navState.url)
              setCurrentUrl(navState.url)
              setCanGoBack(navState.canGoBack)
            }}
            style={{ backgroundColor: '#252525' }}
          />
        )}
      </View>
    </View>
  )
}
