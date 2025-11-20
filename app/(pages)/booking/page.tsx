"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";
import { PageHero } from "@/app/components/layout/PageHero";
import { Section } from "@/app/components/layout/Section";
import { Card } from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";
import { FormField } from "@/app/components/ui/FormField";
import { TextInput } from "@/app/components/ui/TextInput";
import { SelectInput } from "@/app/components/ui/SelectInput";
import { Textarea } from "@/app/components/ui/Textarea";
import { Tag } from "@/app/components/ui/Tag";
import { submitReservation } from "@/lib/reservation-client";

const tourismRoutes = [
  { id: "txs-1", title: "淄博-博山潭溪山一日游" },
  { id: "ym-1", title: "淄博-沂蒙山二日游" },
  { id: "rv-1", title: "青甘大环线房车私家团" },
  { id: "yn-1", title: "云南全境深度游（旅行社合作）" },
  { id: "qz-1", title: "淄博-青州古城文化线" },
  { id: "xz-1", title: "西藏林芝羊湖纳木错 8 日私享" }
];

import { Suspense } from "react";

function BookingContent() {
  const searchParams = useSearchParams();
  const routeId = searchParams.get("route");
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const matchedRoute = useMemo(
    () => tourismRoutes.find((r) => r.id === routeId),
    [routeId]
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult(null);
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string)?.trim();
    const phone = (data.get("phone") as string)?.trim();
    const type = (data.get("type") as string) || "tourism";
    const route = (data.get("route") as string)?.trim();
    const people = (data.get("people") as string)?.trim();
    const origin = (data.get("origin") as string)?.trim();
    const date = data.get("date") as string;
    const notes = (data.get("notes") as string)?.trim();

    if (!name || !phone) {
      setResult("请填写姓名和电话");
      return;
    }

    try {
      setSubmitting(true);
      await submitReservation({
        type: "tourism",
        name,
        phone,
        summary: `${type} | ${route || "自定义"}`,
        details: { people, origin, date, notes }
      });
      setResult("提交成功，我们会尽快联系确认。");
      form.reset();
    } catch (error: any) {
      setResult(error?.message ?? "提交失败，请稍后重试");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Header transparent position="absolute" />
      <main>
        <PageHero
          eyebrow="BOOKING"
          title="预订行程与用车，30 分钟内回拨确认"
          description="告诉我们出行信息与偏好，客服将与旅行社/车队一起确认方案。支持线路定制、房车体验、接送站与包车/租车需求。"
          tags={["淄博出发", "线路定制", "接送一体", "30 分钟响应"]}
          bgImage="/images/tourism/yunnan.png"
          actions={[
            { label: "返回旅游线路", href: "/tourism", variant: "secondary" },
            { label: "首页预约", href: "/", variant: "primary" }
          ]}
        />

        <Section
          title="填写预订信息"
          description="提交后客服将回拨确认，紧急需求请电话 188-0533-1586"
          background="light"
        >
          <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
            <Card className="flex flex-col gap-5 p-6">
              <form className="grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
                <FormField label="姓名" required>
                  <TextInput name="name" placeholder="请输入姓名" required />
                </FormField>
                <FormField label="联系电话" required>
                  <TextInput
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    placeholder="请输入手机号"
                    required
                  />
                </FormField>
                <FormField label="需求类型" required>
                  <SelectInput name="type" defaultValue="tourism" required>
                    <option value="tourism">旅游线路预订</option>
                    <option value="charter">包车服务</option>
                    <option value="rental">车辆租赁</option>
                    <option value="airport">接送机/站</option>
                  </SelectInput>
                </FormField>
                <FormField label="出行日期" required>
                  <TextInput name="date" type="date" required />
                </FormField>
                <FormField label="人数与车型" required>
                  <TextInput name="people" placeholder="例如：20 人 / 中巴；或 40 人 / 大巴" required />
                </FormField>
                <FormField label="出发地/集合点" required>
                  <TextInput name="origin" placeholder="淄博具体出发地或集合点" required />
                </FormField>
                <FormField label="线路/目的地" required>
                  <SelectInput name="route" defaultValue={matchedRoute?.id ?? ""} required>
                    <option value="" disabled>
                      请选择线路或填写自定义
                    </option>
                    {tourismRoutes.map((route) => (
                      <option key={route.id} value={route.id}>
                        {route.title}
                      </option>
                    ))}
                    <option value="custom">自定义线路</option>
                  </SelectInput>
                </FormField>
                <FormField label="预算（选填）">
                  <TextInput name="budget" placeholder="例如：300-500 元/人" />
                </FormField>
                <div className="md:col-span-2">
                  <FormField label="备注/特殊需求">
                    <Textarea
                      name="notes"
                      rows={4}
                      placeholder="可填写酒店/餐饮需求、房车/领队、航班车次、时间窗口等"
                    />
                  </FormField>
                </div>
                <div className="md:col-span-2 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <p className="text-sm text-text-secondary">
                    提交后我们将在 30 分钟内联系您确认行程与报价，紧急需求请电话 188-0533-1586。
                  </p>
                  <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row">
                    <Button variant="primary" className="w-full md:w-auto" href="tel:18805331586" type="button">
                      电话咨询
                    </Button>
                    <Button variant="secondary" className="w-full md:w-auto" type="submit" disabled={submitting}>
                      {submitting ? "提交中..." : "提交预订"}
                    </Button>
                  </div>
                </div>
                {result ? <p className="md:col-span-2 text-sm text-primary">{result}</p> : null}
              </form>
            </Card>

            <Card className="flex flex-col gap-4 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-[0.08em]">
                    预订概要
                  </p>
                  <h3 className="text-lg font-semibold text-text-dark">
                    {matchedRoute ? matchedRoute.title : "请选择线路或场景"}
                  </h3>
                </div>
                <Tag className="text-xs">30 分钟响应</Tag>
              </div>
              <div className="flex flex-col gap-2 rounded-xl bg-background-light p-4 text-sm text-text-secondary">
                <div className="flex items-center justify-between">
                  <span>出行类型</span>
                  <span className="font-semibold text-text-dark">旅游 / 包车</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>建议车型</span>
                  <span className="font-semibold text-text-dark">中巴 / 大巴 / MPV</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>服务包含</span>
                  <span className="font-semibold text-text-dark">车辆 + 司机 + 保险</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 text-sm text-text-secondary">
                <span className="font-semibold text-text-dark">代办与增值</span>
                <span>· 与旅行社协同：门票/酒店/导游</span>
                <span>· 航班/车次接送：可前后衔接</span>
                <span>· 房车服务：自驾 / 带司机管家</span>
              </div>
              <Link className="text-sm font-semibold text-primary" href="/tourism">
                返回旅游线路
              </Link>
            </Card>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookingContent />
    </Suspense>
  );
}
