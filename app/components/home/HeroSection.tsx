import Image from "next/image";
import { Container } from "@/app/components/layout/Container";
import { BookingWidget } from "./BookingWidget";

export function HeroSection() {
    return (
        <section className="relative">
            <div className="absolute inset-0">
                <Image
                    src="/images/hero/banner.png"
                    alt="城市天际线背景"
                    fill
                    className="object-cover object-center"
                    priority
                />
            </div>
            <div className="relative h-[540px] w-full">
                <Container className="flex h-full flex-col items-center justify-center gap-6 text-center text-white">
                    <h1 className="text-4xl font-bold md:text-6xl tracking-tight drop-shadow-lg text-white">
                        把每一程，做到心安
                    </h1>
                    <p className="max-w-2xl text-lg md:text-xl text-gray-100 font-light tracking-wide text-white/90">
                        无论是接送、出游还是跨城，只要你需要，我们都可靠如初
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
                        {["安全合规", "响应快", "覆盖广", "报价透明"].map((item) => (
                            <span
                                key={item}
                                className="px-4 py-1 border-l-2 border-white/50 backdrop-blur-sm"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </Container>
            </div>
            <div className="px-4 pb-8">
                <BookingWidget />
            </div>
        </section>
    );
}
