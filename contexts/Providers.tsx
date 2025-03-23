import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ClusterProvider } from './ClusterProvider'
import { ConnectionProvider } from './ConnectionProvider'

const Providers = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ClusterProvider>
        <ConnectionProvider>{children}</ConnectionProvider>
      </ClusterProvider>
    </QueryClientProvider>
  )
}

export default Providers
