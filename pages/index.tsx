import type { NextPage } from "next"
import SiteHead from "../components/SiteHead"
import PageFooter from "../components/PageFooter"
import LinkExternal from "../components/Links/LinkExternal"
import LinkExternalButton from "../components/Links/LinkExternalButton"
import Image from "next/image"
import Hero from "../components/Hero"

const HomePage: NextPage = () => {
  const SiteURL = process.env.NEXT_PUBLIC_SITE_URL || "."

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <SiteHead title="Woodmont Piano Studio" description="Woodmont Piano Studio is your go-to spot for piano lessons in Pleasant Ridge (Cincinnati, Ohio)" url="" />

      <main className="pb-20 w-full flex flex-1 flex-col items-center justify-center">
        <Hero />
        <div className="w-full max-w-[1000px] m-auto px-8">
          <p className="mt-24 mb-4 text-2xl">Woodmont Piano Studio is your go-to spot for piano lessons in Pleasant Ridge! With over 15 years of piano teaching experience, I’m dedicated to helping students of all ages achieve their musical goals, whether it's mastering classical compositions, performing confidently in public, acing adjudications, or simply playing their favorite songs for fun. My lessons in Cincinnati offer a unique blend of classical and popular music expertise, ensuring a well-rounded and enjoyable learning experience. With two exciting recitals each year and a track record of success in festivals, I’m here to guide you every step of the way. Join me in Pleasant Ridge and let’s make your piano dreams come true!</p>

          <Image src={SiteURL + "/william-perry.png"} alt="" width={300} height={300} className="mt-24" />
          <h2 id="william-perry" className="text-4xl font-bold">Meet William Perry</h2>
          <p className="my-4 text-2xl">I’m a passionate and creative piano teacher with 15 years of experience helping students achieve their musical goals. My teaching journey began in Florida at the Cuchetti School of Music, where I developed and led their piano program for scholarship students. I then went on to teach group piano classes and private lessons at Florida State University as a graduate teaching assistant. I further developed my pedagogical training at New Tampa Piano and Pedagogy Academy, where many of my students earned high honors in Royal Conservatory of Music Examinations and local competitions. In Cincinnati, I taught at West Chester Academy and Cincinnati Strings before setting off on my own with Woodmont Piano Studio.</p>
          <p className="my-4 text-2xl">I'm an active member of Music Teachers National Association and believe in the importance of continuing my pedagogical training and research. I’ve presented my research at national, state, and local conferences, founded many local music teacher association chapters, and served in various leadership roles, including president of three local chapters and coordinator for various piano competitions.</p>

          <div className="mt-24 flex flex-row max-lg:flex-col gap-2 items-top">
            <div className="flex flex-col">
              <Image src={SiteURL + "/any-style.png"} alt="" width={300} height={300} />
              <h2 id="learn-any-style" className="text-4xl font-bold">Learn any style</h2>
              <p className="my-4 text-2xl">I don't just teach classical music, in addition to being a pianist, I also play electronic keyboards and pipe organ! I have a wide range of experience performing and teaching any style of music. You can learn the standard classical repertoire or learn how to play your favorite classic rock songs.</p>
            </div>

            <div className="flex flex-col">
              <Image src={SiteURL + "/all-ages.png"} alt="" width={300} height={300} />
              <h2 id="for-all-ages" className="text-4xl font-bold">For all ages</h2>
              <p className="my-4 text-2xl">I teach children and adults alike and love working with both. I typically maintain a studio of about half children and half adults.</p>
            </div>
          </div>

          <div className="mt-24 flex flex-row max-lg:flex-col gap-2 items-top">
            <div className="flex flex-col">
              <h2 id="customized-lesson-plans" className="text-4xl font-bold">Customized Lesson Plans</h2>
              <p className="my-4 text-2xl">Every lesson plan takes into consideration your goals and helps you learn how to practice to achieve success.</p>
            </div>

            <div className="flex flex-col">
              <h2 id="recitals" className="text-4xl font-bold">Participate in Recitals</h2>
              <p className="my-4 text-2xl">Optionally participate in two  themed recitals per year where you can showcase your talents and be inspired by other students!</p>
            </div>

            <div className="flex flex-col">
              <h2 id="prepare-for-exams" className="text-4xl font-bold">Prepare for Exams</h2>
              <p className="my-4 text-2xl">I can help you prepare for Royal Conservatory of Music exams, local competitions, and college auditions.</p>
            </div>
          </div>

          <h2 id="ready-to-start" className="mt-32 text-4xl font-bold">Ready to Start?</h2>
          <p className="my-4 text-2xl">Are you ready to begin piano lessons at Woodmont Piano Studio?</p>
          <div className="mt-4 mb-8 px-6 py-8 bg-[#f3f3f3] shadow-md text-center">
            <p className="text-2xl">Send William Perry an email at <LinkExternal className="break-all" href="mailto:contact@woodmontpiano.com" title="Email William Perry at Contact@WoodmontPiano.com">Contact@WoodmontPiano.com</LinkExternal></p>
          </div>

          <h2 id="ready-to-start" className="mt-32 text-4xl font-bold">Already a Student?</h2>
          <p className="my-4 text-2xl">Looking for the login to see your Woodmont Piano Studio account?</p>
          <div className="flex flex-row flex-wrap mt-4 mb-8"><LinkExternalButton href="https://www.woodmontpiano.com/login" target="_self" title="Log in at www.woodmontpiano.com/login">Login</LinkExternalButton></div>
        </div >
      </main >

      <PageFooter />
    </div >
  )
}

export default HomePage