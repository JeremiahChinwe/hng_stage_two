import dbIcon from "./assets/db_icon.png"
import apple from "./assets/apple.png"
import playIcon from "./assets/play_icon.png"
import { Header } from "../header/Header"


const Hero = () => {
  return (
    <section className="bg_image text-2xl h-screen">
      <Header />

      <article className="md:w-[90%] mx-auto flex justify-center flex-col items-start gap-4 px-4 py-8 md:px-0">
        <div className="flex items-center justify-center md:w-[30%] mt-8">
          <h2 className="font-[700] text-[48px] leading-[56px] text-[#FFFFFF] text-center md:text-start">John Wick 3 : Parabellum</h2>
        </div>

        <div className="flex justify-between items-center md:w-[20%] text-[#D1D5DB] mx-auto md:mx-0">
          <p className="font-[400] leading-[12px] text-[12px] flex items-center gap-4">
            <img src={dbIcon} alt="TMDB" />
            <span>86.0 / 1000</span>
          </p>
          <p className="font-[400] leading-[12px] text-[12px] flex items-center gap-4">
            <img src={apple} alt="TMDB" />
            <span>97%</span>
          </p>
        </div>

        <p className="font-[500] text-[14px] text-[#D1D5DB] leading-[18px] w-[70%] md:w-[25%] mx-auto md:mx-0 text-center md:text-start">John Wick is on the run after killing a member of the international assassins&apos; guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>

        <button className="py-[6px] px-4 bg-[#BE123C] hover:border-[#D1D5DB] border-[#BE123C] transition-all duration-500 border-2 flex items-center gap-2 rounded-md mx-auto md:mx-0">
          <img src={playIcon} alt="Play the video" className="w-4 h-4" />
          <small className="text-[14px] leading-[24px] font-[700] uppercase">Watch trailer</small>
        </button>
      </article>

    </section>
  )
}

export default Hero