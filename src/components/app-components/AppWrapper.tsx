import ThemeProviderWrapper from '@/components/app-components/ThemeProvider'
import ScrollProvider from '@/components/app-components/ScrollProvider'
import Banner from '@/components/app-components/banner'
import NavbarWrapper from '@/components/nav-components/NavbarWrapper'

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProviderWrapper>
      <ScrollProvider>
        <Banner />
        <NavbarWrapper />
        {children}
      </ScrollProvider>
    </ThemeProviderWrapper>
  )
}
