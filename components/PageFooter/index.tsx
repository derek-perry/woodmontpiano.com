import LinkInternal from "../Links/LinkInternal"
import Image from "next/image"

const PageFooter = (): JSX.Element => {
  let currentYear: number = new Date().getFullYear();
  const SiteURL = process.env.NEXT_PUBLIC_SITE_URL || ".";

  return (
    <footer className="mt-9 py-[40px] w-full bg-black text-white gap-12 flex flex-col items-center justify-center">
      <LinkInternal href="" title="Woodmont Piano Studio" className="no-underline">
        <Image src={SiteURL + "/logoh.svg"} alt="Woodmont Piano Studio Logo" width={500} height={250} />
      </LinkInternal>
      <div className="flex flex-col gap-4 items-center justify-center">
        <p>© {currentYear} Woodmont Piano Studio</p>
        <LinkInternal href="privacy" title="Woodmont Piano Studio Privacy Policy" className="no-underline">
          <p>Privacy Policy</p>
        </LinkInternal>
      </div>
    </footer >
  )
}

export default PageFooter