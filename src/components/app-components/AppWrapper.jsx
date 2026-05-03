import LocomotiveScrollSetup from '@/components/app-components/LocomotiveScrollSetup'

export default function AppWrapper({ children }) {
  return (
    <>
      <LocomotiveScrollSetup />
      {children}
    </>
  )
}
