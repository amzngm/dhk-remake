import ThemeProviderWrapper from '@/components/app-components/ThemeProvider'
import ScrollProvider from '@/components/app-components/ScrollProvider'
import Banner from '@/components/app-components/banner'
import NavbarWrapper from '@/components/nav-components/NavbarWrapper'
import Footer from '@/components/footer-components/Footer'

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProviderWrapper>
      <ScrollProvider>
        <Banner />
        <NavbarWrapper />
        {children}
        <Footer />
      </ScrollProvider>
    </ThemeProviderWrapper>
  )
}
