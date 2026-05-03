import Link from 'next/link'
import { memo } from 'react'

interface MainBtnProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  className?: string
  ChildrenClassName?: string

  to?: string
  href?: string
  onClick?: () => void
}

export default memo(function MainBtn({
  children,
  className = '',
  ChildrenClassName = '',

  to,
  href,
  onClick,

  ...rest
}): MainBtnProps {
  const baseStyles =
    'inline-flex justify-center items-center text-center transition-colors outline-none hover:bg-text hover:text-bg py-0.5 cursor-pointer tracking-wider'

  const styles = `
    ${baseStyles}
    ${className}
  `
    .trim()
    .replace(/\s+/g, ' ')

  const commonProps = {
    className: styles,
    ...rest,
  }

  if (to)
    return (
      <Link href={to} {...commonProps}>
        <span className="text-text!">[</span>
        <div className={`px-12 ${ChildrenClassName}`}>{children}</div>
        <span className="text-text!">]</span>
      </Link>
    )
  if (href)
    return (
      <a href={href} {...commonProps}>
        <span className="text-text!">[</span>
        <div className={`px-12 ${ChildrenClassName}`}>{children}</div>
        <span className="text-text!">]</span>
      </a>
    )

  return (
    <button type="button" onClick={onClick} {...commonProps}>
      <span className="text-text!">[</span>
      <div className={`px-12 ${ChildrenClassName}`}>{children}</div>
      <span className="text-text!">]</span>
    </button>
  )
})
