"use client";

import { useState } from "react";
import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";
import { Section } from "@/app/components/layout/Section";
import { PageHero } from "@/app/components/layout/PageHero";
import { Button } from "@/app/components/ui/Button";
import { Card } from "@/app/components/ui/Card";
import { Tag } from "@/app/components/ui/Tag";
import { FormField } from "@/app/components/ui/FormField";
import { TextInput } from "@/app/components/ui/TextInput";
import { SelectInput } from "@/app/components/ui/SelectInput";
import { Textarea } from "@/app/components/ui/Textarea";
import { Building2, Users, MapPin, Plane } from "lucide-react";
import { submitReservation } from "@/lib/reservation-client";

const scenarioCards = [
  {
    title: "企业通勤/活动用车",
    desc: "固定班线与弹性排班，提升员工出勤体验；大型活动多车协同。",
    icon: Building2
  },
  {
    title: "会议/展览用车",
    desc: "多线路接驳，会场/酒店/机场高铁串联，高端商务接待。",
    icon: Users
  },
  {
    title: "旅游团包车",
    desc: "熟悉景点与停车点，行程定制与临时调整，纯玩无购物。",
    icon: MapPin
  },
  {
    title: "机场/高铁接送",
    desc: "准时守约，适配不同人数的车型组合，免费等待。",
    icon: Plane
  }
];

const steps = [
  { title: "提交需求", desc: "填写出行时间、人数、路线要点" },
  { title: "确认订单", desc: "客服回拨沟通，匹配车型与报价" },
  { title: "签订合同", desc: "确认无误后签署用车合同，保障权益" },
  { title: "执行出行", desc: "行前确认/变更支持，司机全程配合" }
];

const fleet = [
  { name: "商务 MPV", seats: "6-7 座", scene: "商务接待 / 小团出行" },
  { name: "中巴车", seats: "19-23 座", scene: "团建 / 会议班车" },
  { name: "大巴车", seats: "35-49 座", scene: "大团队 / 活动包车" }
];

const pricing = [
  { title: "计价要素", desc: "里程、时长、区域（过路/停车费依据真实路线）" },
  { title: "费用透明", desc: "报价前告知构成，无隐藏费用；变更后重新确认" },
  { title: "含司机服务", desc: "统一培训司机，提供行前沟通与现场协同" }
];

const assurances = [
  { title: "正规营运资质", desc: "车牌/运营资质合规，保险完备" },
  { title: "车辆维护", desc: "定期保养与清洁，出车前检查" },
  { title: "司机考核", desc: "统一培训、线路熟悉与安全考核" },
  { title: "7x24 服务", desc: "行程变更与应急加车快速响应" }
];

const faqs = [
  {
    q: "费用包含哪些项目？",
    a: "通常包含车辆使用费、司机服务费、油费与保险。过路费、停车费及司机食宿（如需）按实际发生结算或协商包干。"
  },
  {
    q: "需要提前多久预订？",
    a: "建议提前 3-7 天预订以确保车型充足；紧急用车（24小时内）请直接致电客服优先调度。"
  },
  {
    q: "是否提供发票？",
    a: "支持开具正规增值税发票，提交需求时备注抬头与税号即可。"
  }
];

export default function CharterPage() {
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setResult(null);

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      type: formData.get("type") as string,
      people_count: Number(formData.get("people_count")),
      origin: formData.get("origin") as string,
      destination: formData.get("destination") as string,
      start_time: formData.get("start_time") as string,
      end_time: formData.get("end_time") as string,
      notes: formData.get("notes") as string,
    };

    try {
      await submitReservation(data);
      setResult("提交成功！客服将尽快与您联系。");
      (event.target as HTMLFormElement).reset();
    } catch (error) {
      setResult("提交失败，请稍后重试或直接电话联系。");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="CHARTER"
          title="安程包车服务：淄博本地定制行程，准时安全"
          description="覆盖企业通勤、会议班车、旅游团建、机场/高铁接送等场景，熟悉淄博主城区与周边园区/车站/景区动线。提供路线规划、车型匹配与透明报价，7x24 调度支持。"
          tags={["淄博本地车队", "正规资质", "7x24 调度", "多车型覆盖"]}
          actions={[
            { label: "提交包车需求", variant: "primary", href: "/contact" },
            { label: "咨询客服", variant: "secondary", href: "tel:18805331586" }
          ]}
          rightContent={
            <div className="space-y-4 text-gray-900">
              <div className="rounded-xl bg-white/85 p-5">
                <p className="text-sm font-semibold text-primary">推荐车型</p>
                <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-gray-700">
                  <span className="rounded-lg bg-blue-50 px-3 py-2">6-7 座 MPV</span>
                  <span className="rounded-lg bg-blue-50 px-3 py-2">19-23 座 中巴</span>
                  <span className="rounded-lg bg-blue-50 px-3 py-2">35-49 座 大巴</span>
                  <span className="rounded-lg bg-blue-50 px-3 py-2">房车 / 定制</span>
                </div>
              </div>
              <div className="rounded-xl bg-white/75 p-5 text-sm text-gray-700">
                <p className="font-semibold text-gray-900">行程示例</p>
                <p className="mt-2 leading-relaxed">
                  市内一日：酒店-园区-会场-机场；外地多日：淄博-济南-青岛往返，含会务/景点。
                </p>
              </div>
            </div>
          }
        />

        <Section
          title="适用场景"
          description="覆盖多类型出行需求，按路线和时间灵活组合"
        >
          <div className="grid gap-6 md:grid-cols-2">
            {scenarioCards.map((item) => (
              <Card key={item.title} className="flex flex-col gap-3 p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-text-dark">
                      {item.title}
                    </h3>
                  </div>
                  <Tag className="text-xs">场景</Tag>
                </div>
                <p className="text-base leading-relaxed text-text-secondary pl-[52px]">
                  {item.desc}
                </p>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          title="服务流程"
          description="标准流程，确保行前确认与行中配合清晰"
          background="light"
        >
          <div className="grid gap-6 md:grid-cols-4">
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
          title="推荐车型"
          description="根据人数与场景匹配合适车型，支持多车多线路调度"
        >
          <div className="grid gap-6 md:grid-cols-3">
            {fleet.map((item) => (
              <Card key={item.name} className="flex flex-col gap-4 p-5">
                <div className="aspect-[16/9] w-full rounded-lg bg-background-light" />
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-text-dark">
                      {item.name}
                    </h3>
                    <Tag className="text-xs">{item.seats}</Tag>
                  </div>
                  <p className="text-base leading-relaxed text-text-secondary">
                    {item.scene}
                  </p>
                </div>
                <Button className="w-full" variant="secondary" href="/contact">
                  咨询此车型
                </Button>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          title="计价与报价说明"
          description="按行程/天数核价，透明告知费用构成，变更后重新确认"
          background="light"
        >
          <div className="grid gap-6 md:grid-cols-3">
            {pricing.map((item) => (
              <Card key={item.title} className="flex flex-col gap-3 p-5">
                <h3 className="text-lg font-semibold text-text-dark">
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed text-text-secondary">
                  {item.desc}
                </p>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          title="包车需求提交"
          description="提交后客服将在 30 分钟内回拨确认行程并给出报价"
        >
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
              <FormField label="用车类型" required>
                <SelectInput name="type" defaultValue="" required>
                  <option value="" disabled>请选择用车场景</option>
                  {scenarioCards.map((s) => (
                    <option key={s.title} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </SelectInput>
              </FormField>
              <FormField label="乘车人数" required>
                <TextInput name="people_count" type="number" placeholder="请输入乘车人数" required />
              </FormField>
              <FormField label="出发城市/地点" required>
                <TextInput name="origin" placeholder="例如：淄博张店区 xx 酒店" required />
              </FormField>
              <FormField label="目的城市" required>
                <TextInput name="destination" placeholder="例如：济南遥墙机场" required />
              </FormField>
              <div className="grid grid-cols-2 gap-4">
                <FormField label="出发时间" required>
                  <TextInput name="start_time" type="datetime-local" required />
                </FormField>
                <FormField label="结束时间" required>
                  <TextInput name="end_time" type="datetime-local" required />
                </FormField>
              </div>
              <FormField label="备注/特殊需求">
                <Textarea
                  name="notes"
                  rows={4}
                  placeholder="可填写线路要点、航班车次、时间窗口等"
                />
              </FormField>
              <div className="md:col-span-2 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <p className="text-base leading-relaxed text-text-secondary">
                  我们将根据线路、时间与车型需求给出透明报价，行前可沟通调整。
                </p>
                <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row">
                  <Button variant="primary" className="w-full md:w-auto" href="tel:18805331586" type="button">
                    电话咨询
                  </Button>
                  <Button className="w-full md:w-auto" variant="secondary" type="submit" disabled={submitting}>
                    {submitting ? "提交中..." : "提交包车需求"}
                  </Button>
                </div>
              </div>
              {result ? (
                <p className="md:col-span-2 text-sm text-primary">{result}</p>
              ) : null}
            </form>
          </Card>
        </Section>

        <Section
          title="服务保障"
          description="合规车辆、专业司机、行前行中全流程服务"
          background="light"
        >
          <div className="grid gap-4 md:grid-cols-4">
            {assurances.map((item) => (
              <Card key={item.title} className="flex flex-col gap-2 p-4">
                <div className="h-10 w-10 rounded-full bg-background-light" />
                <h3 className="text-base font-semibold text-text-dark">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {item.desc}
                </p>
              </Card>
            ))}
          </div>
        </Section>

        <Section title="常见问题" description="快速了解计费、变更、开票等关键信息">
          <div className="grid gap-4 md:grid-cols-3">
            {faqs.map((item) => (
              <Card key={item.q} className="flex flex-col gap-2 p-4">
                <h3 className="text-base font-semibold text-text-dark">
                  {item.q}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {item.a}
                </p>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          title="需要包车？立即联系"
          description="提供线路规划、车型建议、报价确认全流程支持"
          background="light"
        >
          <Card className="flex flex-col gap-5 p-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-text-dark">
                咨询热线：400-000-0000
              </h3>
              <p className="text-base leading-relaxed text-text-secondary">
                7x24 客服，紧急变更与加车快速处理。
              </p>
            </div>
            <div className="flex flex-col gap-3 md:flex-row">
              <Button variant="primary" href="tel:18805331586">
                在线咨询
              </Button>
              <Button variant="secondary" href="/contact">
                提交包车需求
              </Button>
            </div>
          </Card>
        </Section>
      </main>
      <Footer />
    </>
  );
}
