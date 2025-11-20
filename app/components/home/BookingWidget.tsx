"use client";

import { useMemo, useState } from "react";
import { Card } from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";
import { ArrowRight, Calendar, Car } from "lucide-react";

type BookingOption = {
    label: string;
    value: string;
};

const useBookingOptions = () =>
    useMemo(
        () => ({
            serviceTypes: [
                { label: "包车", value: "charter" },
                { label: "租车", value: "rental" },
                { label: "接送机/站", value: "airport" },
                { label: "企业班车", value: "commute" }
            ] satisfies BookingOption[],
            vehicles: [
                { label: "6-7座MPV", value: "mpv" },
                { label: "15-20座中巴", value: "minibus" },
                { label: "45-50座大巴", value: "bus" },
                { label: "豪华轿车", value: "sedan" }
            ] satisfies BookingOption[],
            airports: [
                { label: "济南遥墙机场", value: "jinan" },
                { label: "青岛胶东机场", value: "qingdao" },
                { label: "济南西/东高铁", value: "jinan-train" }
            ] satisfies BookingOption[]
        }),
        []
    );

export const BookingWidget = () => {
    const options = useBookingOptions();
    const [serviceType, setServiceType] = useState("charter");
    const [rentalMode, setRentalMode] = useState<"driver" | "self">("driver");
    const isAirport = serviceType === "airport";
    const isRental = serviceType === "rental";
    const isCommute = serviceType === "commute";

    const dateLabel =
        serviceType === "airport"
            ? "航班/车次时间"
            : serviceType === "rental"
                ? "取还时间"
                : serviceType === "commute"
                    ? "开始日期"
                    : "行程规划";

    return (
        <Card className="relative z-20 mx-auto flex w-full max-w-[1200px] flex-col gap-2 border border-gray-100 bg-white p-3 shadow-2xl lg:flex-row lg:items-center">
            <div className="w-full border-b border-gray-200 p-2 lg:w-auto lg:min-w-[150px] lg:border-b-0 lg:border-r">
                <label className="mb-1 block text-xs font-medium text-gray-500">用车类型</label>
                <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full cursor-pointer appearance-none bg-transparent pr-4 font-bold text-gray-800 outline-none"
                >
                    {options.serviceTypes.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
            </div>

            <div className="flex w-full flex-1 flex-col gap-2 border-b border-gray-200 p-2 lg:flex-row lg:items-center lg:gap-3 lg:border-b-0 lg:border-r">
                {isAirport ? (
                    <div className="grid w-full gap-2 lg:grid-cols-3 lg:items-center">
                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-medium text-gray-500">接送类型</label>
                            <select className="w-full cursor-pointer appearance-none bg-transparent font-bold text-gray-800 outline-none">
                                <option value="pickup">接机/接站</option>
                                <option value="dropoff">送机/送站</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-medium text-gray-500">机场/车站</label>
                            <select className="w-full cursor-pointer appearance-none bg-transparent font-bold text-gray-800 outline-none">
                                {options.airports.map((opt) => (
                                    <option key={opt.value} value={opt.value}>
                                        {opt.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-medium text-gray-500">航班/车次</label>
                            <input
                                type="text"
                                placeholder="例：SC1234"
                                className="w-full font-bold text-gray-800 outline-none placeholder:text-gray-300"
                            />
                        </div>
                    </div>
                ) : isRental ? (
                    <div className="grid w-full gap-2 lg:grid-cols-3 lg:items-center">
                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-medium text-gray-500">取车城市</label>
                            <input
                                type="text"
                                defaultValue="淄博"
                                className="w-full font-bold text-gray-800 outline-none placeholder:text-gray-300"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-medium text-gray-500">还车城市</label>
                            <input
                                type="text"
                                defaultValue="淄博"
                                className="w-full font-bold text-gray-800 outline-none placeholder:text-gray-300"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-medium text-gray-500">用车方式</label>
                            <select
                                value={rentalMode}
                                onChange={(e) =>
                                    setRentalMode(e.target.value === "self" ? "self" : "driver")
                                }
                                className="w-full cursor-pointer appearance-none bg-transparent font-bold text-gray-800 outline-none"
                            >
                                <option value="driver">带司机</option>
                                <option value="self">自驾</option>
                            </select>
                        </div>
                    </div>
                ) : isCommute ? (
                    <div className="grid w-full gap-2 lg:grid-cols-3 lg:items-center">
                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-medium text-gray-500">始发区域</label>
                            <input
                                type="text"
                                defaultValue="张店/高新区"
                                className="w-full font-bold text-gray-800 outline-none placeholder:text-gray-300"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-medium text-gray-500">站点/线路</label>
                            <input
                                type="text"
                                placeholder="例：3-5 个站点"
                                className="w-full font-bold text-gray-800 outline-none placeholder:text-gray-300"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-medium text-gray-500">班次时段</label>
                            <select className="w-full cursor-pointer appearance-none bg-transparent font-bold text-gray-800 outline-none">
                                <option value="peak">早晚高峰</option>
                                <option value="day">白班</option>
                                <option value="night">夜间</option>
                            </select>
                        </div>
                    </div>
                ) : (
                    <div className="flex w-full items-center gap-2 lg:gap-3">
                        <div className="flex-1">
                            <label className="mb-1 block text-xs font-medium text-gray-500">出发地</label>
                            <input
                                type="text"
                                defaultValue="淄博"
                                className="w-full font-bold text-gray-800 outline-none placeholder:text-gray-300"
                            />
                        </div>
                        <div className="text-gray-300 px-2 lg:px-0">
                            <ArrowRight size={16} />
                        </div>
                        <div className="flex-1">
                            <label className="mb-1 block text-xs font-medium text-gray-500">目的地</label>
                            <input
                                type="text"
                                defaultValue="西藏"
                                className="w-full font-bold text-gray-800 outline-none placeholder:text-gray-300"
                            />
                        </div>
                    </div>
                )}
            </div>

            <div className="w-full border-b border-gray-200 p-2 lg:w-auto lg:min-w-[280px] lg:border-b-0 lg:border-r">
                <label className="mb-1 flex items-center gap-1 text-xs font-medium text-gray-500">
                    <Calendar size={12} />
                    {dateLabel}
                </label>
                {isAirport ? (
                    <input
                        type="datetime-local"
                        className="w-full text-xs font-bold text-gray-800 outline-none"
                    />
                ) : isCommute ? (
                    <input
                        type="date"
                        className="w-full text-xs font-bold text-gray-800 outline-none"
                    />
                ) : isRental ? (
                    <div className="flex items-center gap-1">
                        <input
                            type="datetime-local"
                            className="w-[140px] text-xs font-bold text-gray-800 outline-none"
                        />
                        <span className="text-xs text-gray-400">-</span>
                        <input
                            type="datetime-local"
                            className="w-[140px] text-xs font-bold text-gray-800 outline-none"
                        />
                    </div>
                ) : (
                    <div className="flex items-center gap-1">
                        <input
                            type="date"
                            defaultValue="2025-11-15"
                            className="w-[120px] text-xs font-bold text-gray-800 outline-none"
                        />
                        <span className="text-xs text-gray-400">-</span>
                        <input
                            type="date"
                            defaultValue="2025-12-05"
                            className="w-[120px] text-xs font-bold text-gray-800 outline-none"
                        />
                    </div>
                )}
            </div>

            <div className="w-full p-2 lg:w-auto lg:min-w-[160px]">
                <label className="mb-1 flex items-center gap-1 text-xs font-medium text-gray-500">
                    <Car size={12} />
                    车型选择
                </label>
                <select className="w-full cursor-pointer appearance-none bg-transparent font-bold text-gray-800 outline-none">
                    {options.vehicles.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
            </div>

            <div className="w-full p-2 lg:w-auto">
                <Button className="w-full lg:w-auto" href="/contact">
                    预约出发
                </Button>
            </div>
        </Card>
    );
};
