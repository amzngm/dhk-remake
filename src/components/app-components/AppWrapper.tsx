import ThemeProviderWrapper from '@/components/app-components/ThemeProvider'
import ScrollProvider from '@/components/app-components/ScrollProvider'
import Banner from '@/components/app-components/banner'
import Navbar from '@/components/nav-components/Navbar'

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProviderWrapper>
      <ScrollProvider>
        <Banner />
        {/* <Navbar /> */}
        {children}
      </ScrollProvider>
    </ThemeProviderWrapper>
  )
}
