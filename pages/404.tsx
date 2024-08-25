import type { NextPage } from "next"
import SiteHead from "../components/SiteHead"
import PageFooter from "../components/PageFooter"
import LinkInternalButton from "../components/Links/LinkInternalButton"

const Error404Page: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <SiteHead title="Error 404: Content Not Found" description="Woodmont Piano Studio is your go-to spot for piano lessons in Pleasant Ridge (Cincinnati, Ohio)" url="404" />

      <main className="pt-9 px-9 max-w-[1000px] w-full flex flex-1 flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-bold text-red-600">Error 404: Content Not Found</h1>

        <p className="my-4 text-2xl">
          The page/content you are looking for has moved, is no longer available, has been archived, or was not valid.
        </p>

        <LinkInternalButton href="" title="Return to Index Page">Go Home</LinkInternalButton>
      </main>

      <PageFooter />
    </div>
  )
}

export default Error404Page