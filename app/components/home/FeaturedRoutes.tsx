import Image from "next/image";
import { Container } from "@/app/components/layout/Container";
import { Card } from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";
import { ROUTES } from "@/app/lib/data";
import { ArrowRight } from "lucide-react";

export function FeaturedRoutes() {
    return (
        <section className="py-20 bg-gray-50">
            <Container className="space-y-12">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl md:text-4xl font-bold text-green-800">
                        热门旅游线路推荐
                    </h2>
                    <p className="text-gray-500">淄博出发，含车队与旅行社服务</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {ROUTES.map((route) => (
                        <Card
                            key={route.id}
                            className="bg-white overflow-hidden shadow-sm hover:shadow-2xl transition duration-300 group flex flex-col h-full p-0"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <Image
                                    src={route.image}
                                    alt={route.title}
                                    fill
                                    className="object-cover transition duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-3 left-3 bg-blue-600/90 text-white text-[10px] font-bold px-2 py-1 rounded">
                                    {route.type}
                                </div>
                            </div>
                            <div className="p-5 flex-1 flex flex-col">
                                <h3 className="font-bold text-gray-800 mb-3 line-clamp-2 text-sm leading-snug min-h-[2.5rem]">
                                    {route.title}
                                </h3>
                                <div className="space-y-2 mb-4 flex-1">
                                    <div className="flex items-center text-xs text-gray-500">
                                        <span className="w-auto mr-2 text-gray-400">出发时间:</span>
                                        {route.date}
                                    </div>
                                    <div className="flex items-center text-xs text-gray-500">
                                        <span className="w-auto mr-2 text-gray-400">标签:</span>
                                        {route.tags.join(" | ")}
                                    </div>
                                </div>
                                <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                                    <div className="text-red-500 font-bold text-lg">
                                        {route.price} <span className="text-xs text-gray-400 font-normal">/人起</span>
                                    </div>
                                    <Button variant="secondary" className="text-xs px-4 py-2" href="/booking">
                                        预定 <ArrowRight size={12} className="ml-1" />
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </Container>
        </section>
    );
}
