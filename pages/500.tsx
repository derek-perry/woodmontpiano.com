import type { NextPage } from "next"
import SiteHead from "../components/SiteHead"
import PageFooter from "../components/PageFooter"
import LinkInternalButton from "../components/Links/LinkInternalButton"

const Error500Page: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <SiteHead title="Error 500: Internal Server Error" description="Woodmont Piano Studio is your go-to spot for piano lessons in Pleasant Ridge (Cincinnati, Ohio)" url="500" />

      <main className="pt-9 px-9 max-w-[1000px] w-full flex flex-1 flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-bold text-red-600">Error 500: Internal Server Error</h1>

        <p className="my-4 text-2xl">
          The server encountered an internal error or misconfiguration and was unable to complete your request.
        </p>

        <LinkInternalButton href="" title="Return to Index Page">Go Home</LinkInternalButton>
      </main>

      <PageFooter />
    </div>
  )
}

export default Error500Page