"use client"
import { langsWelcome, navLinks } from '@/constants/assets';
import { useScrolledThreshold } from '@/hooks/use-scrolled-threshold';
import { ChevronDown } from 'lucide-react';
import Link from "next/link"
import React, { useState } from 'react'

const Navbar = () => {
    const [navVisible, setNavVisible] = useState(false)
    const [active, setActive] = useState("Home")

    const scrolled = useScrolledThreshold(50);

    return (
        <div className="fixed lg:top-6 py-4 flex justify-center items-center w-full z-50 bg-secondary lg:bg-transparent">
            <div className="flex lg:items-start items-center container justify-between">
                <img alt="logo_sds" fetchPriority="high" width={50} height={50} className="mr-4 block lg:hidden" style={{ color: "transparent" }} src="./sdslogo.svg" />
                <div className="mr-4 relative hidden lg:block" style={{ width: "360px" }}>
                    <div style={{ opacity: "1" }}>
                        <img alt="logo" loading="lazy" width={scrolled ? 50 : 360} height={scrolled ? 50 : 360} decoding="async" data-nimg="1" className={`${scrolled ? 'mr-4' : 'w-full absolute top-0 left-0 right-0 bottom-0'} transition-all ease-in-out duration-500`} style={{ color: "transparent" }}
                            // src="./sdshlogo.svg"
                            src={scrolled ? '/sdslogo.svg' : '/sdshlogo.svg'}
                        />
                    </div>
                </div>

                <div className="md:flex hidden justify-between items-center w-full overflow-hidden relative lg:mt-5 mt-1" style={{ opacity: "1" }}>
                    <div className="flex justify-around whitespace-nowrap marquee">
                        {langsWelcome.map((lang, index) => (
                            <div key={index} className="text-white px-[3vh] text-[1.8vh]">{lang}</div>
                        ))}
                    </div>
                    <div className="absolute bg-[#b32b7a] mt-[0.5px] h-[5px] left-0 right-0 z-[-1]"></div>
                </div>

                <div className="flex justify-items-end items-center ml-3 lg:mt-3">
                    <div className="relative text-left">
                        <button className="group uppercase bg-[#111619] border border-[#06cafa] px-2 py-[1px] text-[#06cafa] hover:bg-[#06cafa] hover:text-white transition-all flex items-center text-[13px] font-bold mr-2">
                            EN
                            <ChevronDown size={16} className="ml-2 mr-1 group-hover:fill-white" />
                        </button>
                    </div>
                    <div>
                        <button onClick={() => setNavVisible(true)} className="inline-block mt-1 cursor-pointer">
                            <img src="./menu.svg" alt="Menu" className="min-w-[26px] cursor-pointer" />
                        </button>
                    </div>
                </div>

                <div className={`fixed left-0 right-0 bg-[#111619] z-50 duration-300 ease-in-out ${navVisible ? 'top-0 bottom-0' : '-top-full bottom-full'}`}>
                    <div className="container h-0 relative z-50">
                        <button className='cursor-pointer' onClick={() => setNavVisible(false)}>
                            <div className="w-[32px] absolute right-5 top-7 before:absolute before:rotate-[45deg] before:left-[15px] before:content before:h-[33px] before:w-[6px] before:bg-[#EF2493]"></div>
                            <div className="w-[32px] absolute right-5 top-7 after:rotate-[-45deg] after:absolute after:left-[15px] after:content after:h-[33px] after:w-[6px] after:bg-[#EF2493]"></div>
                        </button>
                    </div>

                    <div className="flex justify-center items-center h-full relative">
                        <div className="opacity-100 transition-opacity duration-500 ease-in-out w-full">
                            <div>
                                <Link href={'/'}>
                                    <div className="mb-20 absolute mx-10 top-7 lg:relative">
                                        <img src="./sdslogo.svg" width={256} height={256} className="lg:m-auto lg:w-[80px] w-[50px]" alt="logo" style={{ color: "transparent" }} />
                                    </div>
                                </Link>
                            </div>

                            <div className="flex justify-center items-center flex-col md:flex-row container w-full">
                                {navLinks.map((link, index) => (
                                    <Link
                                        key={index}
                                        href={link.href}
                                        className={`flex justify-center cursor-pointer text-white w-full ${link.name === "Blogs" ? "" : "md:border-r border-[#06cafa]"} border-[#06cafa] sm:py-6 py-4 duration-300 ease-in-out ${active === link.name ? 'bg-[#06cafa]' : 'hover:bg-[#06cafa] hover:text-white'}`}
                                        onClick={() => {
                                            setNavVisible(false)
                                            setActive(link.name)
                                        }}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Navbar
