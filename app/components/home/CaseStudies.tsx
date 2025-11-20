"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/app/components/layout/Container";
import { CASES } from "@/app/lib/data";
import { ArrowRight } from "lucide-react";

export function CaseStudies() {
    const [activeCaseIndex, setActiveCaseIndex] = useState(0);
    const activeCase = CASES[activeCaseIndex] ?? CASES[0];

    return (
        <section className="relative overflow-hidden bg-[#1a1c4b] py-24 text-white">
            <div className="absolute inset-0 opacity-50">
                <Image
                    src="https://picsum.photos/1920/800?random=20"
                    alt="案例背景"
                    fill
                    className="object-cover mix-blend-overlay"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a1c4b] via-[#1a1c4b]/80 to-transparent" />
            <Container className="relative flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
                <div className="max-w-3xl space-y-6">
                    <h4 className="text-lg text-white">服务案例</h4>
                    <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
                        {activeCase.title}
                    </h2>
                    <p className="text-lg text-blue-100">{activeCase.subtitle}</p>
                    <p className="text-lg text-blue-100 max-w-2xl">{activeCase.summary}</p>
                    <div className="grid grid-cols-1 gap-y-6 gap-x-12 border-t border-white/10 pt-8 text-sm text-blue-100 md:grid-cols-2">
                        {activeCase.highlights.map((item) => (
                            <div
                                key={item.label}
                                className="flex items-center justify-between border-b border-white/10 pb-2"
                            >
                                <span>{item.label}</span>
                                <span className="text-white/60">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex gap-4 self-start md:self-end">
                    <button
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white/20"
                        onClick={() =>
                            setActiveCaseIndex((prev) => (prev - 1 + CASES.length) % CASES.length)
                        }
                        aria-label="上一个案例"
                    >
                        <ArrowRight size={18} className="-rotate-180" />
                    </button>
                    <button
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition hover:bg-blue-700"
                        onClick={() =>
                            setActiveCaseIndex((prev) => (prev + 1) % CASES.length)
                        }
                        aria-label="下一个案例"
                    >
                        <ArrowRight size={18} />
                    </button>
                </div>
            </Container>
        </section>
    );
}
