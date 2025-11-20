"use client";

import { useState } from "react";
import { Container } from "@/app/components/layout/Container";
import { SCENARIOS } from "@/app/lib/data";
import { cn } from "@/lib/cn";
import { ArrowRight, MapPin } from "lucide-react";

export function ServiceScenarios() {
    const [hoveredScenario, setHoveredScenario] = useState<number | null>(null);

    return (
        <section className="py-20 bg-gray-50">
            <Container className="space-y-12">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">服务场景</h2>
                    <p className="text-gray-500 mt-2">适配多元出行需求，按路线与时间灵活组合</p>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {SCENARIOS.map((scenario, index) => {
                        const active = hoveredScenario === index;

                        return (
                            <div
                                key={scenario.title}
                                onMouseEnter={() => setHoveredScenario(index)}
                                onMouseLeave={() => setHoveredScenario(null)}
                                className={cn(
                                    "relative overflow-hidden rounded-xl border p-8 transition duration-300",
                                    active
                                        ? "border-transparent bg-gradient-to-br from-blue-700 to-blue-800 text-white shadow-2xl"
                                        : "border-gray-100 bg-white text-gray-800 shadow-sm hover:-translate-y-1 hover:shadow-lg"
                                )}
                            >
                                <div
                                    className={cn(
                                        "absolute -right-4 -top-4 opacity-10 scale-[2.2] rotate-12",
                                        active ? "text-white" : "text-blue-900"
                                    )}
                                >
                                    {scenario.icon ? <scenario.icon size={90} /> : null}
                                </div>
                                <div
                                    className={cn(
                                        "relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-full shadow-sm",
                                        active ? "bg-white text-blue-700" : "bg-blue-50 text-blue-600"
                                    )}
                                >
                                    {scenario.icon ? <scenario.icon size={26} /> : <MapPin size={26} />}
                                </div>
                                <h3 className="text-xl font-bold">{scenario.title}</h3>
                                <p
                                    className={cn(
                                        "mb-3 text-xs font-medium",
                                        active ? "text-blue-200" : "text-gray-400"
                                    )}
                                >
                                    {scenario.subtitle}
                                </p>
                                <p
                                    className={cn(
                                        "text-sm leading-relaxed",
                                        active ? "text-white/80" : "text-gray-500"
                                    )}
                                >
                                    {scenario.description}
                                </p>
                                <a
                                    href="/contact"
                                    className={cn(
                                        "mt-6 inline-flex items-center gap-2 rounded px-4 py-2 text-xs font-medium transition-colors",
                                        active
                                            ? "bg-white text-blue-700 hover:bg-blue-50"
                                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                    )}
                                >
                                    查看方案 <ArrowRight size={12} />
                                </a>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
