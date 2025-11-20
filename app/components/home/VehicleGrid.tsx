import Image from "next/image";
import { Container } from "@/app/components/layout/Container";
import { VEHICLES } from "@/app/lib/data";

export function VehicleGrid() {
    return (
        <section className="py-16 bg-white">
            <Container className="space-y-12">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        全场景车辆覆盖 7X24小时调度
                    </h2>
                    <p className="text-gray-500">
                        从商务轿车、MPV 到中巴/大巴，满足接待、班车、活动等多场景需求。统一维护与司机培训，确保准时、安全、舒适。
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {VEHICLES.map((vehicle) => (
                        <div key={vehicle.name} className="flex flex-col items-center group">
                            <div className="w-full aspect-[16/10] mb-4 overflow-hidden rounded-lg bg-gray-50 p-4">
                                <Image
                                    src={vehicle.image}
                                    alt={vehicle.name}
                                    width={320}
                                    height={200}
                                    className="w-full h-full object-contain transition duration-500 group-hover:scale-110 mix-blend-multiply"
                                />
                            </div>
                            <h3 className="font-bold text-gray-800 mb-2 text-sm md:text-base">
                                {vehicle.name}
                            </h3>
                            <div className="flex gap-2">
                                {vehicle.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-[10px] px-2 py-0.5 bg-gray-100 text-gray-500 rounded-full border border-gray-200"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
