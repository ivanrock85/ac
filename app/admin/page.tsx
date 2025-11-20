import { PrismaClient } from "@prisma/client";
import { Card } from "@/app/components/ui/Card";
import { Tag } from "@/app/components/ui/Tag";

const prisma = new PrismaClient();

// Force dynamic rendering to ensure we always get the latest data
export const dynamic = "force-dynamic";

async function getReservations() {
    try {
        const reservations = await prisma.reservation.findMany({
            orderBy: { createdAt: "desc" },
        });
        return reservations;
    } catch (error) {
        console.error("Failed to fetch reservations:", error);
        return [];
    }
}

export default async function AdminPage() {
    const reservations = await getReservations();

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="mx-auto max-w-6xl">
                <header className="mb-8 flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-gray-900">预约管理后台</h1>
                    <div className="text-sm text-gray-500">
                        共 {reservations.length} 条记录
                    </div>
                </header>

                <div className="grid gap-4">
                    {reservations.map((res) => (
                        <Card key={res.id} className="p-6">
                            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3">
                                        <Tag className="uppercase">{res.type}</Tag>
                                        <span className="font-semibold text-gray-900">
                                            {res.name}
                                        </span>
                                        <span className="text-gray-500">{res.phone}</span>
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        <p>
                                            <span className="font-medium">概要:</span> {res.summary || "-"}
                                        </p>
                                        <p>
                                            <span className="font-medium">详情:</span>{" "}
                                            {[
                                                res.startDate && `日期: ${res.startDate}`,
                                                res.peopleCount && `人数: ${res.peopleCount}`,
                                                res.origin && `出发: ${res.origin}`,
                                                res.destination && `目的: ${res.destination}`,
                                            ]
                                                .filter(Boolean)
                                                .join(" | ")}
                                        </p>
                                        {res.notes && (
                                            <p className="mt-2 rounded bg-gray-50 p-2 text-gray-500">
                                                备注: {res.notes}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="flex flex-col items-end gap-2">
                                    <span className="text-xs text-gray-400">
                                        {new Date(res.createdAt).toLocaleString("zh-CN")}
                                    </span>
                                    <Tag
                                        className={
                                            res.status === "pending"
                                                ? "bg-yellow-100 text-yellow-800"
                                                : "bg-green-100 text-green-800"
                                        }
                                    >
                                        {res.status === "pending" ? "待处理" : res.status}
                                    </Tag>
                                </div>
                            </div>
                        </Card>
                    ))}

                    {reservations.length === 0 && (
                        <div className="py-12 text-center text-gray-500">
                            暂无预约记录
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
