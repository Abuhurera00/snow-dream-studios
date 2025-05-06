"use client";
import { cards } from "@/constants/assets";
import { motion, useTransform, useScroll } from "framer-motion";
import { ArrowUp } from "lucide-react";
import Link from "next/link";
import React, { useRef } from "react";

const SelectedWork = () => {

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    })

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section ref={targetRef} className="relative h-[250vh] bg-neutral-900">
            <h3 className="text-[58px] px-5 py-12 text-white leading-none">Selected Work</h3>
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4">
                    {cards.map((card) => {
                        return <Card card={card} key={card.id} />;
                    })}
                </motion.div>
            </div>
        </section>
    )
};

interface CardProps {
    card: {
        id: number;
        url: string;
        title: string;
        desc: string;
        img: string;
        category: string;
        tags: string[];
    };
}

const Card: React.FC<CardProps> = ({ card }) => {
    return (
        <div
            key={card.id}
            className="w-[400px]"
        >
            <Link href={card.url} className="group block relative cursor-none group min-h-[400px] max-h-[550px] w-full overflow-hidden">
                <span className="absolute top-0 left-0 bg-[#ffbb33] text-black z-[2] px-4 font-light border-r-8 border-b-8 border-secondary">{card.category}</span>
                <img width={450} height={450} className="object-cover group-hover:scale-110 transition-all duration-700 relative z-0" src={card.img} alt="" />
                <div className="flex justify-between items-center absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex flex-wrap gap-4">
                        {card.tags.map((tag, index) => (
                            <div key={index} className="bg-black/50 py-2 px-3 text-white text-sm">{tag}</div>
                        ))}
                    </div>
                    <div className="bg-white p-3">
                        <ArrowUp size={20} className="text-black" />
                    </div>
                </div>
            </Link>
            <h4 className="font-semibold text-white pt-3 text-[20px]">{card.title}</h4>
            <p className="text-[14px] text-[#7C7C7C] pb-10">{card.desc}</p>
        </div>
    );
};

export default SelectedWork;

