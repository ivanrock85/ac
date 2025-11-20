import { Container } from "@/app/components/layout/Container";
import { STATS } from "@/app/lib/data";

export function StatsSection() {
    return (
        <section className="py-16 bg-white">
            <Container>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-gray-100">
                    {STATS.map((stat) => (
                        <div key={stat.label} className="flex flex-col items-center px-4">
                            <div className="text-4xl md:text-5xl font-bold text-red-500 mb-3">
                                {stat.value}
                            </div>
                            <div className="text-sm md:text-base font-bold text-gray-900">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
