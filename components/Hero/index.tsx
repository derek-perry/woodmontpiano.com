import Image from 'next/image';

const Hero = (): JSX.Element => {
  const SiteURL = process.env.NEXT_PUBLIC_SITE_URL || ".";

  return (
    <section id='hero' className='w-full bg-black text-white'>
      <div id='hero-container' className='w-full m-auto'>
        <div id='hero-content' className="bg-black text-white w-full flex flex-1 flex-col justify-center items-center text-center h-[420px] md:h-[666px] bg-center bg-cover bg-local bg-no-repeat bg-[url('/bg.png')]">
          <div className='flex flex-col justify-center items-center text-center px-8 gap-6'>
            <Image src={SiteURL + "/logo.svg"} alt="Woodmont Piano Studio Logo" width={100} height={100} />
            <h1><strong>Woodmont <br />Piano Studio</strong></h1>
            <div className="text-3xl max-sm:text-xl flex flex-col"><p>Piano Lessons for All Ages in</p> <p>Pleasant Ridge</p></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;