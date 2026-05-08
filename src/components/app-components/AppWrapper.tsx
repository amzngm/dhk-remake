import { ViewTransitions } from 'next-view-transitions'
import ThemeProviderWrapper from '@/components/app-components/ThemeProvider'
import ScrollProvider from '@/components/app-components/ScrollProvider'
import Banner from '@/components/app-components/banner'
import NavbarWrapper from '@/components/nav-components/NavbarWrapper'
import Footer from '@/components/footer-components/Footer'
import CollectionFooter from '@/components/footer-components/CollectionFooter'

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransitions>
      <ThemeProviderWrapper>
        <ScrollProvider>
          <Banner />
          <NavbarWrapper />
          {children}
          <Footer />
          <CollectionFooter />
        </ScrollProvider>
      </ThemeProviderWrapper>
    </ViewTransitions>
  )
}
