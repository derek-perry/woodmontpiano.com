import { FC } from "react"
import Head from "next/head"
const SiteURL = process.env.NEXT_PUBLIC_SITE_URL || "."

interface ISiteHeadProps {
  title: string;
  description: string;
  url: string;
}

const SiteHead: FC<ISiteHeadProps> = ({
  title,
  description,
  url
}): JSX.Element => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="robots" content="max-snippet:-1,max-image-preview:standard,max-video-preview:-1" />

      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <title>{title}</title>
      <meta property="og:title" key="title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="description" content={description} />
      <meta property="og:url" content={SiteURL + "/" + url} />
      <meta property="og:site_name" content="Woodmont Piano Studio" />
      <meta property="og:image" content={SiteURL + "/banner.png"} />
      <meta property="og:image:width" content="1920" />
      <meta property="og:image:height" content="1080" />
      <meta property="og:image:alt" content="Banner for WoodmontPiano.com" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={SiteURL + "/banner.png"} />
      <meta name="twitter:image:width" content="1920" />
      <meta name="twitter:image:height" content="1080" />
      <meta name="twitter:image:alt" content="Banner for WoodmontPiano.com" />
      <link rel="canonical" href={SiteURL} />

      <link rel="icon" href={SiteURL + "/favicon.ico"} />
      <link rel="apple-touch-icon" sizes="180x180" href={SiteURL + "/apple-touch-icon.png"} />
      <link rel="icon" type="image/png" sizes="32x32" href={SiteURL + "/favicon-32x32.png"} />
      <link rel="icon" type="image/png" sizes="16x16" href={SiteURL + "/favicon-16x16.png"} />
      <link rel="manifest" href={SiteURL + "/manifest.webmanifest"} />
      <link rel="mask-icon" href={SiteURL + "/safari-pinned-tab.svg"} color="#000000" />
      <meta name="apple-mobile-web-app-title" content="Woodmont Piano Studio" />
      <meta name="application-name" content="Woodmont Piano Studio" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  )
}

export default SiteHead