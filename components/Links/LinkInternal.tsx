import { FC } from "react"
import Link from "next/link"
const SiteURL = process.env.NEXT_PUBLIC_SITE_URL || "."

interface ILinkInternalProps {
  href: string;
  title: string;
  children?: JSX.Element[] | JSX.Element | string;
  className?: string;
}

const LinkInternal: FC<ILinkInternalProps> = ({
  href,
  title,
  children,
  className
}): JSX.Element => {
  return (
    <Link href={SiteURL + "/" + href} title={title} className={"underline " + className}>
      {children}
    </Link>
  )
}

export default LinkInternal