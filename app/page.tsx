import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import SelectedWork from "@/components/SelectedWork"
import Partnership from "@/components/Partnership"

export default function Home() {

  return (
    <div className="min-h-screen bg-[#111619] text-white sticky top-0 z-0">
      <div className="relative h-screen">
        <video
          className="absolute opacity-[0.05] h-full w-full object-cover block"
          src="./sdsvideo.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <Navbar />
        <Hero />
      </div>

      <Partnership />
      <SelectedWork />
    </div>
  )
}
