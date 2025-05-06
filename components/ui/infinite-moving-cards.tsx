"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
    items,
    direction = "right",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    items: {
        img: string;
        name: string;
        desc: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
    }, []);
    const [start, setStart] = useState(false);
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }
    const getDirection = () => {
        if (containerRef.current) {
            containerRef.current.style.setProperty(
                "--animation-direction",
                direction === "right" ? "reverse" : "normal"
            );
        }
    };
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };
    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className,
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]",
                )}
            >
                {items.map((item, idx) => (
                    <div
                        className="h-[52vh] w-[400px] cursor-pointer"
                        key={idx}
                    >
                        <div
                            aria-hidden="true"
                            className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                        ></div>
                        <div className="group overflow-hidden h-[80%]">
                            <img src={item.img} className="object-cover group-hover:scale-110 transition-all duration-700 w-full h-full" alt={item.name}
                            />
                        </div>
                        <div className="relative z-20 flex flex-row items-center">
                            <span className="flex flex-col gap-1">
                                <h3 className="text-white pt-3 text-xl font-semibold">
                                    {item.name}
                                </h3>
                                <p className="text-[#7C7C7C] pt-1 line-clamp-1">
                                    {item.desc}
                                </p>
                            </span>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    );
};
