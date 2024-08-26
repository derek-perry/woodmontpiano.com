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

      <main className="pb-20 w-full flex flex-col items-center justify-center">
        <Hero />
        <div className="w-full max-w-[2000px] m-auto px-8">
          <p className="mt-28 max-sm:mt-16 mb-4 text-2xl text-justify">Woodmont Piano Studio is your go-to spot for piano lessons in Pleasant Ridge! With over 15 years of piano teaching experience, I’m dedicated to helping students of all ages achieve their musical goals, whether it's mastering classical compositions, performing confidently in public, acing adjudications, or simply playing their favorite songs for fun. My lessons in Cincinnati offer a unique blend of classical and popular music expertise, ensuring a well-rounded and enjoyable learning experience. With two exciting recitals each year and a track record of success in festivals, I’m here to guide you every step of the way. Join me in Pleasant Ridge and let’s make your piano dreams come true!</p>

          <div className="mt-32 flex max-lg:flex-col flex-row gap-x-10 gap-y-4 items-top px-6 py-8 bg-[#f3f3f3] shadow-md">
            <div className="flex flex-row flex-wrap text-left justify-center align-middle max-lg:items-center items-top gap-x-10 gap-y-6 w-auto">
              <Image src={SiteURL + "/william-perry.png"} alt="" width={300} height={300} className="mt-2 max-w-[300px] max-h-[300px] max-[400px]:max-w-[200px] max-[400px]:max-h-[200px]" />
              <h2 id="william-perry" className="lg:hidden text-4xl font-bold">Meet <br />William Perry</h2>
            </div>
            <div className="flex flex-col text-justify">
              <h2 id="william-perry" className="max-lg:hidden text-4xl font-bold">Meet William Perry</h2>
              <p className="my-2 text-2xl">I’m a passionate and creative piano teacher with 15 years of experience helping students achieve their musical goals. My teaching journey began in Florida at the Cuchetti School of Music, where I developed and led their piano program for scholarship students. I then went on to teach group piano classes and private lessons at Florida State University as a graduate teaching assistant. I further developed my pedagogical training at New Tampa Piano and Pedagogy Academy, where many of my students earned high honors in Royal Conservatory of Music Examinations and local competitions. In Cincinnati, I taught at West Chester Academy and Cincinnati Strings before setting off on my own with Woodmont Piano Studio.</p>
              <p className="my-2 text-2xl">I'm an active member of Music Teachers National Association and believe in the importance of continuing my pedagogical training and research. I’ve presented my research at national, state, and local conferences, founded many local music teacher association chapters, and served in various leadership roles, including president of three local chapters and coordinator for various piano competitions.</p>
            </div>
          </div>

          <div className="mt-40 flex flex-row max-[1485px]:flex-col gap-10 items-top">
            <div className="flex max-lg:flex-col flex-row gap-x-10 gap-y-4 items-top px-6 py-8 bg-[#f3f3f3] shadow-md basis-2/4 max-[1485px]:items-center">
              <div className="flex flex-row flex-wrap text-left justify-center align-middle max-lg:items-center items-top gap-x-10 gap-y-6 w-auto">
                <Image src={SiteURL + "/any-style.png"} alt="" width={300} height={300} className="mt-2 max-w-[300px] max-h-[300px] max-[400px]:max-w-[200px] max-[400px]:max-h-[200px]" />
                <h2 id="learn-any-style" className="lg:hidden text-4xl font-bold">Learn any style</h2>
              </div>
              <div className="flex flex-col">
                <h2 id="learn-any-style" className="max-lg:hidden text-4xl font-bold">Learn any style</h2>
                <p className="my-2 text-2xl text-justify">I don't just teach classical music, in addition to being a pianist, I also play electronic keyboards and pipe organ! I have a wide range of experience performing and teaching any style of music. You can learn the standard classical repertoire or learn how to play your favorite classic rock songs.</p>
              </div>
            </div>

            <div className="flex max-lg:flex-col flex-row gap-x-10 gap-y-4 items-top px-6 py-8 bg-[#f3f3f3] shadow-md basis-2/4 max-[1485px]:items-center">
              <div className="flex flex-row flex-wrap max-[705px]:flex-col text-left justify-center align-middle max-lg:items-center items-top gap-x-10 gap-y-6 w-auto">
                <Image src={SiteURL + "/all-ages.png"} alt="" width={300} height={300} className="mt-2 max-w-[300px] max-h-[300px] max-[400px]:max-w-[200px] max-[400px]:max-h-[200px]" />
                <h2 id="for-all-ages" className="lg:hidden text-4xl font-bold">For all ages</h2>
              </div>
              <div className="flex flex-col">
                <h2 id="for-all-ages" className="max-lg:hidden text-4xl font-bold">For all ages</h2>
                <p className="my-2 text-2xl text-justify">I teach children and adults alike and love working with both. I typically maintain a studio of about half children and half adults.</p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-row max-[1485px]:flex-col gap-10 items-top">
            <div className="flex max-lg:flex-col flex-row gap-x-10 gap-y-4 items-top px-6 py-8 bg-[#f3f3f3] shadow-md basis-2/6 items-center">
              <div className="flex flex-row flex-wrap max-[705px]:flex-col text-left justify-center align-middle max-lg:items-center items-top gap-x-10 gap-y-6 w-auto">
                <Image src={SiteURL + "/icon_planning.svg"} alt="" width={100} height={100} className="mt-2 max-w-[300px] max-h-[300px] max-[400px]:max-w-[200px] max-[400px]:max-h-[200px]" />
                <h2 id="custom-lesson-plans" className="lg:hidden text-4xl font-bold text-center">Custom Lesson Plans</h2>
              </div>
              <div className="flex flex-col">
                <h2 id="custom-lesson-plans" className="max-lg:hidden text-4xl font-bold">Custom Lesson Plans</h2>
                <p className="my-2 text-2xl text-justify">Every lesson plan takes into consideration your goals and helps you learn how to practice to achieve success.</p>
              </div>
            </div>

            <div className="flex max-lg:flex-col flex-row gap-x-10 gap-y-4 items-top px-6 py-8 bg-[#f3f3f3] shadow-md basis-2/6 items-center">
              <div className="flex flex-row flex-wrap max-[705px]:flex-col text-left justify-center align-middle max-lg:items-center items-top gap-x-10 gap-y-6 w-auto">
                <Image src={SiteURL + "/icon_theater.svg"} alt="" width={100} height={100} className="mt-2 max-w-[300px] max-h-[300px] max-[400px]:max-w-[200px] max-[400px]:max-h-[200px]" />
                <h2 id="recital-participation" className="lg:hidden text-4xl font-bold text-center">Recital Participation</h2>
              </div>
              <div className="flex flex-col">
                <h2 id="recital-participation" className="max-lg:hidden text-4xl font-bold">Recital Participation</h2>
                <p className="my-2 text-2xl text-justify">You can participate in two themed recitals per year to showcase your talents and be inspired by other students!</p>
              </div>
            </div>

            <div className="flex max-lg:flex-col flex-row gap-x-10 gap-y-4 items-top px-6 py-8 bg-[#f3f3f3] shadow-md basis-2/6 items-center">
              <div className="flex flex-row flex-wrap max-[705px]:flex-col text-left justify-center align-middle max-lg:items-center items-top gap-x-10 gap-y-6 w-auto">
                <Image src={SiteURL + "/icon_exam.svg"} alt="" width={100} height={100} className="mt-2 max-w-[300px] max-h-[300px] max-[400px]:max-w-[200px] max-[400px]:max-h-[200px]" />
                <h2 id="exam-preparation" className="lg:hidden text-4xl font-bold text-center">Exam Preparation</h2>
              </div>
              <div className="flex flex-col">
                <h2 id="exam-preparation" className="max-lg:hidden text-4xl font-bold">Exam Preparation</h2>
                <p className="my-2 text-2xl text-justify">Get prepared and practice properly for Royal Conservatory of Music exams, local competitions, and college auditions.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col text-left lg:text-center">
            <h2 id="ready-to-start" className="mt-40 text-4xl font-bold">Ready to Start?</h2>
            <p className="my-4 text-2xl text-justify lg:text-center">Are you ready to begin piano lessons at Woodmont Piano Studio?</p>
            <div className="mt-4 mb-8 px-6 max-[460px]:px-2 py-8 bg-[#f3f3f3] shadow-md flex flex-col justify-center items-center align-middle text-center w-auto m-0 lg:m-auto">
              <p className="text-2xl">Email William Perry</p>
              <LinkExternal className="text-2xl max-[460px]:text-xl max-[370px]:text-lg max-[340px]:break-all" href="mailto:contact@woodmontpiano.com" title="Email William Perry at Contact@WoodmontPiano.com">Contact@WoodmontPiano.com</LinkExternal>
            </div>
          </div>

          <div className="flex flex-col text-left lg:text-center">
            <h2 id="ready-to-start" className="mt-40 text-4xl font-bold">Already a Student?</h2>
            <p className="my-4 text-2xl text-justify lg:text-center">Looking for the login to see your Woodmont Piano Studio account?</p>
            <div className="flex flex-row flex-wrap mt-4 mb-12 lg:text-center lg:items-center lg:justify-center lg:align-middle"><LinkExternalButton href="https://www.woodmontpiano.com/login" target="_self" title="Log in at www.woodmontpiano.com/login">Login</LinkExternalButton></div>
          </div>
        </div >
      </main >

      <PageFooter />
    </div >
  )
}

export default HomePage