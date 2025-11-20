"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";
import { Section } from "@/app/components/layout/Section";
import { PageHero } from "@/app/components/layout/PageHero";
import { Card } from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";
import { Tag } from "@/app/components/ui/Tag";
import { FormField } from "@/app/components/ui/FormField";
import { TextInput } from "@/app/components/ui/TextInput";
import { Textarea } from "@/app/components/ui/Textarea";
import { SelectInput } from "@/app/components/ui/SelectInput";
import { cn } from "@/lib/cn";
import { MapPin, Clock, Users, ShieldCheck, Tent, Bus, Camera } from "lucide-react";

const routes = [
  {
    id: "txs-1",
    title: "淄博-博山潭溪山一日游",
    tag: "亲子/团建",
    category: "short",
    price: "¥128/人",
    duration: "1 天",
    summary: "市区出发-潭溪山-返程，含门票/索道选配，适合 10-30 人。",
    image: "/images/tourism/sichuan.png"
  },
  {
    id: "ym-1",
    title: "淄博-沂蒙山二日游",
    tag: "户外/团体",
    category: "short",
    price: "¥368/人",
    duration: "2 天 1 晚",
    summary: "车程约 2.5h，含住宿与领队协同，可配备 35-49 座大巴。",
    image: "/images/tourism/yunnan.png"
  },
  {
    id: "rv-1",
    title: "青甘大环线房车私家团",
    tag: "高端房车",
    category: "rv",
    price: "¥12800/车",
    duration: "7 天 6 晚",
    summary: "C型房车自驾或配驾，含全程营地对接与管家服务。",
    image: "/images/tourism/qinghai.png"
  },
  {
    id: "yn-1",
    title: "云南全境深度游（旅行社合作）",
    tag: "长途/跟团",
    category: "agency",
    price: "¥2680/人起",
    duration: "6 天 5 晚",
    summary: "昆大丽经典线，正规旅行社发团，安程提供接送站服务。",
    image: "/images/tourism/yunnan.png"
  },
  {
    id: "qz-1",
    title: "淄博-青州古城文化线",
    tag: "文化/轻旅游",
    category: "short",
    price: "¥98/人",
    duration: "1 天",
    summary: "古城漫游+博物馆/美食打卡，适合 6-19 人小团。",
    image: "/images/tourism/sichuan.png"
  },
  {
    id: "xz-1",
    title: "西藏林芝羊湖纳木错 8 日私享",
    tag: "高海拔/私家团",
    category: "agency",
    price: "¥4580/人起",
    duration: "8 天 7 晚",
    summary: "定制房车或高端商务车，全程司机+领队，含接送站与景点预约。",
    image: "/images/tourism/tibet.png"
  }
];

const advantages = [
  {
    title: "一键成团",
    desc: "整合车队、领队、门票/酒店资源，与旅行社联合交付。"
  },
  {
    title: "行程灵活",
    desc: "可自定义上下车点、时间与餐食安排，临时调整有客服支持。"
  },
  {
    title: "安全透明",
    desc: "正规营运与旅行社资质，费用明细提前确认，无额外隐形费用。"
  },
  {
    title: "本地客服",
    desc: "熟悉淄博及周边景区动线，实时沟通处理变更。"
  }
];

const steps = [
  { title: "提交需求", desc: "出行日期、人数、出发地、偏好线路/景区" },
  { title: "匹配方案", desc: "车队+旅行社联合给出行程与报价" },
  { title: "确认出行", desc: "行前确认集合点/随车联系人，出行中实时协同" }
];

const faqs = [
  {
    q: "是否含门票/餐饮？",
    a: "可根据预算选择含/不含门票与餐饮，报价会区分车辆与地接费用。"
  },
  {
    q: "可以自定义线路吗？",
    a: "支持自定义停靠点与时间，旅行社协助落地并提供安全提示。"
  },
  {
    q: "发票与合同？",
    a: "可开具交通/旅游相关发票，签署用车与旅游合同，保障权益。"
  }
];

const filters = [
  { id: "all", label: "全部线路" },
  { id: "short", label: "周边短途" },
  { id: "rv", label: "高端房车旅行" },
  { id: "agency", label: "旅行社合作线路" }
];

export default function TourismPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredRoutes = activeFilter === "all"
    ? routes
    : routes.filter(r => r.category === activeFilter);

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="TOURISM"
          title="精选旅游线路：房车定制与旅行社严选"
          description="与本地旅行社深度合作，提供淄博出发的精品线路与定制行程。特色推出高端房车旅行服务，涵盖亲子、团建、文化游等场景，提供车辆、领队与门票等一站式支持。"
          tags={["淄博出发", "房车定制", "旅行社合作", "接送一体"]}
          bgImage="/images/tourism/yunnan.png"
          actions={[
            { label: "获取线路方案", variant: "primary" },
            { label: "合作咨询", variant: "secondary" }
          ]}
          rightContent={
            <div className="space-y-3 text-gray-900">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                <Image
                  src={routes[0].image}
                  alt={routes[0].title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold uppercase tracking-[0.08em]">
                      热门线路
                    </span>
                    <span className="text-sm font-medium line-clamp-1">{routes[0].title}</span>
                  </div>
                  <Tag className="bg-white/15 text-white border-white/30 text-[10px]" variant="primary">
                    {routes[0].tag}
                  </Tag>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold text-gray-900">热门线路速览</h3>
                <p className="text-sm text-gray-600">
                  淄博出发一日/两日游，含车队与旅行社服务
                </p>
              </div>
              <div className="grid gap-3">
                {routes.slice(0, 3).map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-col gap-1 rounded-lg bg-white/80 px-4 py-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-gray-900">{item.title}</span>
                      <Tag className="text-xs" variant="primary">
                        {item.tag}
                      </Tag>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2">{item.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          }
        />

        <Section
          title="精选线路推荐"
          description="可按日期、人数、预算调整，旅行社协同安排"
        >
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {filters.map(f => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                  activeFilter === f.id
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                )}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {filteredRoutes.map((item) => (
              <Card key={item.id} className="flex flex-col overflow-hidden p-0 shadow-md">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute left-3 right-3 top-3 flex items-center justify-between">
                    <Tag className="bg-blue-600 text-white border-transparent text-[11px]">
                      {item.tag}
                    </Tag>
                    <span className="rounded-full bg-white/80 px-2 py-1 text-[11px] font-semibold text-gray-800">
                      {item.duration}
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold text-text-dark line-clamp-2">
                      {item.title}
                    </h3>
                    <Camera className="h-4 w-4 text-primary shrink-0" />
                  </div>
                  <p className="text-sm leading-relaxed text-text-secondary line-clamp-2">
                    {item.summary}
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-lg font-bold text-orange-600">{item.price}</span>
                    <Link
                      href={`/booking?route=${item.id}`}
                      className="btn btn-primary text-sm"
                    >
                      立即预订
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          title="高端房车定制旅行"
          description="移动的五星级酒店，探索极致风景"
          background="light"
        >
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image src="/images/tourism/qinghai.png" alt="房车旅行" fill className="object-cover" />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image src="/images/tourism/tibet.png" alt="高原风景" fill className="object-cover" />
              </div>
              <div className="relative col-span-2 aspect-[2/1] overflow-hidden rounded-xl">
                <Image src="/images/tourism/yunnan.png" alt="露营场景" fill className="object-cover" />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold text-text-dark">安程房车 · 随遇而安</h3>
                <p className="text-text-secondary leading-relaxed">
                  提供 C 型大额头房车租赁与定制游服务。车辆配备舒适床铺、独立卫浴、车载厨房与遮阳棚。
                  可选择“自驾租赁”或“带司机管家”服务，让旅途更轻松。
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Tent className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">野奢露营体验</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">管家式服务</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bus className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">多款车型可选</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">全程保险保障</span>
                </div>
              </div>
              <Button className="w-fit">预约房车体验</Button>
            </div>
          </div>
        </Section>

        <Section
          title="合作旅行社"
          description="强强联合，为您提供更专业的旅游服务"
        >
          <div className="bg-blue-50 rounded-2xl p-8 text-center">
            <p className="text-lg text-text-dark max-w-3xl mx-auto leading-relaxed">
              安程客运与淄博本地多家知名旅行社（如XX国旅、XX青旅）建立深度战略合作。
              我们负责提供安全、舒适的车辆保障，旅行社负责行程设计、导游服务与景点票务。
              <br />
              <span className="font-bold text-primary block mt-2">
                “车队+社”双重资质保障，让您的每一次出行都安心无忧。
              </span>
            </p>
          </div>
        </Section>

        <Section
          title="预订流程"
          description="标准流程确保行程确认与现场协同"
        >
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((item, index) => (
              <Card key={item.title} className="flex flex-col gap-3 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background-light text-base font-semibold text-primary">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-text-dark">
                    {item.title}
                  </h3>
                </div>
                <p className="text-base leading-relaxed text-text-secondary">
                  {item.desc}
                </p>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          title="提交线路需求"
          description="留下行程要素，我们会与旅行社一起给出完整方案"
          background="light"
        >
          <Card className="flex flex-col gap-5 p-6">
            <div className="grid gap-4 md:grid-cols-2">
              <FormField label="姓名" required>
                <TextInput name="name" placeholder="请输入姓名" />
              </FormField>
              <FormField label="联系电话" required>
                <TextInput
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  placeholder="请输入手机号"
                />
              </FormField>
              <FormField label="出行日期" required>
                <TextInput name="date" type="date" placeholder="请选择日期" />
              </FormField>
              <FormField label="出发地/集合点" required>
                <TextInput name="origin" placeholder="淄博具体出发地或集合点" />
              </FormField>
              <FormField label="线路偏好" required>
                <SelectInput name="route" defaultValue="">
                  <option value="" disabled>
                    请选择
                  </option>
                  <option value="tanshan">潭溪山/博山方向</option>
                  <option value="yimeng">沂蒙山/临沂方向</option>
                  <option value="qingzhou">青州古城方向</option>
                  <option value="rv">房车定制游</option>
                  <option value="custom">自定义线路</option>
                </SelectInput>
              </FormField>
              <FormField
                label="人数与车型"
                description="例如：20 人 / 中巴；或 40 人 / 大巴"
              >
                <TextInput name="people" placeholder="请输入人数与期望车型" />
              </FormField>
              <FormField label="备注">
                <Textarea
                  name="note"
                  rows={4}
                  placeholder="可填写餐饮/门票需求、时间窗口、预算等"
                />
              </FormField>
            </div>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p className="text-base leading-relaxed text-text-secondary">
                提交后客服将与旅行社一起确认行程要素并回拨报价，紧急需求可电话联系 0533-0000000。
              </p>
              <Button className="w-full md:w-auto" variant="primary">
                提交线路需求
              </Button>
            </div>
          </Card>
        </Section>

        <Section title="常见问题" description="合规、费用与定制相关说明">
          <div className="grid gap-4 md:grid-cols-2">
            {faqs.map((item) => (
              <Card key={item.q} className="flex flex-col gap-2 p-4">
                <h3 className="text-base font-semibold text-text-dark">{item.q}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">{item.a}</p>
              </Card>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
