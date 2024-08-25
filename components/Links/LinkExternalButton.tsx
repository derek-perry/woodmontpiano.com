import { FC } from "react"
import Link from "next/link"

interface ILinkExternalButtonProps {
  href: string;
  title: string;
  children?: JSX.Element[] | JSX.Element | string;
  target?: string;
  className?: string;
}

const LinkExternalButton: FC<ILinkExternalButtonProps> = ({
  href,
  title,
  children,
  target,
  className
}): JSX.Element => {
  return (
    <Link href={href} title={title} target={target ? target : "_blank"} rel="noopener noreferrer" className={"no-underline button flex w-auto items-center justify-center text-center " + className}>
      <p className="flex items-center justify-center text-center w-auto text-2xl"><strong>{children}</strong></p>
    </Link>
  )
}

export default LinkExternalButton