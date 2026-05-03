import ScrollProvider from '@/components/app-components/ScrollProvider'
import Banner from '@/components/app-components/banner'
// import Navbar from '@/components/nav-components/Navbar'
// import FooterWrapper from '@/components/footer-components/FooterWrapper'

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollProvider>
        <Banner />
        {/* <Navbar /> */}
        {children}
        {/* <FooterWrapper /> */}
      </ScrollProvider>
    </>
  )
}
