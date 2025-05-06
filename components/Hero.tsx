import { ArrowDown, ArrowRight, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { infiniteCardsData } from '@/constants/assets'

const Hero = () => {
    return (
        <div className="flex flex-col md:flex-row min-h-screen z-20 container">
            {/* Left section with logo and social icons */}
            <div className="w-full md:w-1/2 flex flex-col justify-between p-8 z-20 relative">
                <div className="lg:flex hidden flex-col justify-between space-y-4 absolute left-3 bottom-44">
                    {[<Linkedin />, <Twitter />, <Facebook />, <Instagram />].map((icon, index) => (
                        <div className="group relative" key={index}>
                            <Link
                                href="/"
                                className="group border border-[#626262] hover:border-white w-8 h-8 flex justify-center items-center text-[#384147] bg-[#111619] hover:bg-[#06cafa] transition-all ease-out duration-500 group-hover:translate-x-2"
                            >
                                <span className="text-xs">{icon}</span>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="w-[62px] absolute bottom-44 left-[40%] -translate-x-1/2 lg:block hidden">
                <p className='text-[11px] whitespace-nowrap pb-1 text-white font-light tracking-wide'>Scroll Down</p>
                <div className="w-full h-[62px] border border-[#06cafa] flex justify-center items-center group cursor-pointer">
                    <ArrowDown size={30} className='animate-bounce text-[#06cafa] group-hover:animate-none' />
                </div>
                </div>
            </div>

            {/* Right section with welcome messages and content */}
            <div className="w-full md:w-1/2 flex flex-col justify-between md:p-8 mt-5 z-20">
                <div className="md:border-l border-[#373737] py-5">
                    <InfiniteMovingCards
                        items={infiniteCardsData}
                        direction="right"
                        speed="slow"
                    />
                </div>

                {/* Main content text */}
                <div className="mt-auto mb-20">
                    <h2 className="mb-8 font-bold text-sm">
                        <span className="text-cyan-400">A Swiss-based digital agency </span>, transforming brand ideas into powerful digital realities.
                        Helping businesses in Zürich and across Switzerland achieve measurable growth through design, development, and strategy.
                    </h2>
                    <button
                        className="text-white relative mt-5 px-8 w-fit flex py-2 bg-cyan-400 isolation-auto z-10 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-violet-600 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
                    >
                        Contact Us <ArrowRight size={20} className="ml-2" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero
