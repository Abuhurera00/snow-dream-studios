import { PartnershipData } from '@/constants/assets'
import React from 'react'

const Partnership = () => {
    return (
        <div className='bg-[#111619] w-full relative z-10 pt-20'>
            <div className="container sm:pb-28 pb-10">
                <h3 className="md:text-[58px] text-center lg:text-left sm:px-5 text-[40px] pb-5 text-white leading-none">Powerful Partnerships, Proven Success</h3>
                <p className="text-[#909090] text-center lg:text-left sm:px-5 lg:max-w-[80%]">We partner with world-class platforms to deliver measurable results. These strategic collaborations empower us to drive exceptional growth, performance, and innovation for our clients. </p>
                <div className="flex items-center lg:justify-start justify-center md:gap-20 gap-5 md:px-5 md:mt-20 mt-10 flex-wrap">
                    {PartnershipData.map((item, index) => (
                        <div key={index} className="border border-[#909090] hover:bg-[#06cafa] transition-all ease-in-out group h-[140px] min-w-[140px] flex items-center justify-center">
                            <img width={66} height={66} src={item.img} alt={item.name} className="group-hover:brightness-0 group-hover:invert" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Partnership
