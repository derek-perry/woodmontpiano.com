import { FC } from "react"
import Link from "next/link"
const SiteURL = process.env.NEXT_PUBLIC_SITE_URL || "."

interface ILinkInternalButtonProps {
  href: string;
  title: string;
  children?: JSX.Element[] | JSX.Element | string;
  className?: string;
}

const LinkInternalButton: FC<ILinkInternalButtonProps> = ({
  href,
  title,
  children,
  className
}): JSX.Element => {
  return (
    <Link href={SiteURL + "/" + href} title={title} className={"no-underline button flex w-auto items-center justify-center text-center " + className}>
      <p className="flex items-center justify-center text-center w-auto text-2xl"><strong>{children}</strong></p>
    </Link>
  )
}

export default LinkInternalButton