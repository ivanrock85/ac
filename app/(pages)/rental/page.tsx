"use client";

import Image from "next/image";
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
import {
  ArrowRight,
  Bus,
  Building2,
  CheckCircle2,
  Clock3,
  FileCheck2,
  Headset,
  ShieldCheck,
  Users
} from "lucide-react";
import { useState } from "react";
import { submitReservation } from "@/lib/reservation-client";

const overview = [
  { title: "正规运输资质", desc: "道路运输许可证/营运证齐备，符合政企采购要求。", icon: ShieldCheck },
  { title: "专业司机团队", desc: "礼仪/双语司机，背景核验与安全培训，全程着装统一。", icon: Users },
  { title: "多车型与灵活策略", desc: "从 MPV 到大巴的车队组合，按班次与峰谷调度。", icon: Bus },
  { title: "长期合作方案", desc: "支持月/季结、账期与专票，现场驻点与应急备班。", icon: FileCheck2 },
  { title: "7×24 调度响应", desc: "紧急 30 分钟内排车，异常预警与备车机制。", icon: Clock3 }
];

const scenarios = [
  {
    title: "企业长期租赁 / 行政用车",
    desc: "固定司机+车辆，适配高管出行与行政接待，路线与时间可预约与保密。",
    image: "https://picsum.photos/seed/admincar/900/560",
    tag: "行政用车"
  },
  {
    title: "通勤班车 / 专线服务",
    desc: "为园区/总部定制站点、时段和峰谷班次，支持打卡统计与准点率跟踪。",
    image: "https://picsum.photos/seed/commute/900/560",
    tag: "通勤"
  },
  {
    title: "商务接待 / 客户来访",
    desc: "机场/高铁接送与市内拜访，礼仪司机与商务车型组合，过程留痕可追溯。",
    image: "https://picsum.photos/seed/business/900/560",
    tag: "接待"
  },
  {
    title: "会议活动用车",
    desc: "大会/展会/赛事车辆集结，现场调度+分区分时路线，提供应急备班。",
    image: "https://picsum.photos/seed/events/900/560",
    tag: "会务"
  },
  {
    title: "政府公务 / 单位用车",
    desc: "符合政府采购流程，提供合规资料与账期，重要路线可双司机轮值。",
    image: "https://picsum.photos/seed/gov/900/560",
    tag: "政务"
  }
];

const vehicles = [
  {
    name: "商务 MPV · GL8 等",
    seats: "6-7 座",
    scene: "商务接待 / 行政出行",
    image: "https://picsum.photos/seed/mpv/760/480",
    features: ["独立座椅/安静舱", "大后备箱/行李空间", "车载 WiFi / 充电口"]
  },
  {
    name: "豪华轿车",
    seats: "4-5 座",
    scene: "高管/政务接待",
    image: "https://picsum.photos/seed/sedan/760/480",
    features: ["商务礼仪司机", "隐私/舒适静音", "瓶装水/纸巾/雨伞"]
  },
  {
    name: "SUV",
    seats: "5 座",
    scene: "多路况商务出行",
    image: "https://picsum.photos/seed/suv/760/480",
    features: ["通过性更好", "行李灵活装载", "适配机场/高铁接送"]
  },
  {
    name: "中巴 19-33 座",
    seats: "19-33 座",
    scene: "园区班车 / 团队通勤",
    image: "https://picsum.photos/seed/minibus/760/480",
    features: ["固定站点语音提示", "冷暖空调/安全带", "乘客险/定位留痕"]
  },
  {
    name: "大巴 45-55 座",
    seats: "45-55 座",
    scene: "大型会议 / 赛事集结",
    image: "https://picsum.photos/seed/bus/760/480",
    features: ["运力冗余与备班", "行李舱/扩音系统", "夜间照明/应急包"]
  }
];

const capabilities = [
  { title: "正规运营资质", desc: "道路运输许可证、营运证、乘客险/三责险可随车提供。", icon: ShieldCheck },
  { title: "司机背景与培训", desc: "持证上岗、体检/礼仪/安全培训，政务可配双语与司勤。", icon: Users },
  { title: "服务 SLA", desc: "通勤/会务准点率目标 98%-99%，异常预警与补班。", icon: Clock3 },
  { title: "安全管理", desc: "行车记录与定位留痕，夜间/雨雪路线预案，应急备班。", icon: ShieldCheck },
  { title: "车辆维护", desc: "定期保养、出车前巡检、车内整洁消杀，关键线路备车。", icon: Bus },
  { title: "数据与隐私", desc: "路线/里程/投诉留痕，数据受控存储，不外泄乘客信息。", icon: FileCheck2 },
  { title: "24/7 调度客服", desc: "全天候调度与客服响应，紧急 30 分钟内排车。", icon: Headset }
];

const steps = [
  { title: "沟通需求", desc: "班次/站点/人数/SLA 目标，获取采购与合同要求。" },
  { title: "方案制定", desc: "路线实勘或测算，车型组合与成本测算，安全预案输出。" },
  { title: "报价与合同", desc: "报价、账期、专票与合规资料确认，签署合同/保密协议。" },
  { title: "车辆与司机匹配", desc: "按线路匹配车辆/司机，配置驻点/备班与物料。" },
  { title: "服务执行", desc: "按时发车与调度，异常预警与补班，数据留痕。" },
  { title: "回访与优化", desc: "周报/月报，准点率与乘客反馈复盘，持续迭代。" }
];

const partners = [
  { name: "合作单位 A", image: "https://picsum.photos/seed/logo1/200/120" },
  { name: "合作单位 B", image: "https://picsum.photos/seed/logo2/200/120" },
  { name: "合作单位 C", image: "https://picsum.photos/seed/logo3/200/120" },
  { name: "合作单位 D", image: "https://picsum.photos/seed/logo4/200/120" }
];

const credentials = [
  { title: "运输资质证书", image: "https://picsum.photos/seed/cert1/320/200" },
  { title: "司机培训记录", image: "https://picsum.photos/seed/cert2/320/200" },
  { title: "服务标准文档", image: "https://picsum.photos/seed/cert3/320/200" }
];

const faqs = [
  {
    q: "采购/合同如何对接？",
    a: "可按贵方流程提供营业执照、道路运输许可证、保险、司机证件，配合合同/保密协议签署。"
  },
  {
    q: "是否支持月结或季度结算并开具专票？",
    a: "支持，票种增值税专票，电子/纸质均可，账期按合同约定执行。"
  },
  {
    q: "能否固定司机与车辆？",
    a: "可绑定司机/车辆，重要路线可安排双司机轮值，提前完成礼仪与安全培训。"
  },
  {
    q: "临时加班或夜间/清晨航班如何保障？",
    a: "提前沟通需求，提供候命与应急备班，按照次/班计费并复核安全措施。"
  }
];

export default function RentalPage() {
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult(null);
    const form = event.currentTarget;
    const data = new FormData(form);
    const company = (data.get("company") as string)?.trim();
    const name = (data.get("name") as string)?.trim();
    const phone = (data.get("phone") as string)?.trim();
    const category = (data.get("category") as string) || "long-term";
    const vehicleCount = (data.get("vehicle_count") as string)?.trim();
    const duration = (data.get("duration") as string)?.trim();
    const notes = (data.get("notes") as string)?.trim();

    if (!company || !name || !phone) {
      setResult("请填写单位名称、联系人与电话");
      return;
    }

    try {
      setSubmitting(true);
      await submitReservation({
        type: "rental",
        name,
        phone,
        summary: `${company} | ${category}`,
        details: { vehicleCount, duration, notes, category }
      });
      setResult("提交成功，客户经理将回拨确认。");
      form.reset();
    } catch (error: any) {
      setResult(error?.message ?? "提交失败，请稍后重试");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <main className="bg-white text-gray-900">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://picsum.photos/seed/fleet-hero/1600/820"
              alt="政企车队与司机服务场景"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </div>
          <div className="relative">
            <PageHero
              eyebrow="政企车辆租赁服务"
              title="把每一程做到心安"
              description="为政府机关、国企事业单位、企业集团提供长期车辆租赁、专线通勤、商务接待及司机服务。"
              tags={["长期租赁", "专线通勤", "礼仪司机", "合规资料齐全"]}
              actions={[
                { label: "立即联系企业顾问", variant: "primary", href: "/contact" },
                { label: "电话咨询 188-0533-1586", variant: "secondary", href: "tel:18805331586" }
              ]}
              rightContent={
                <div className="space-y-4 text-white">
                  <div className="rounded-xl bg-white/10 p-4 backdrop-blur">
                    <p className="text-sm font-semibold">政企典型需求</p>
                    <ul className="mt-3 space-y-2 text-sm text-gray-100">
                      <li>· 园区/总部通勤班车（固定班次 + 峰谷调度）</li>
                      <li>· 政务/高管接待（合规与礼仪司机，路线保密）</li>
                      <li>· 会议/展会/赛事集结（现场调度 + 备班）</li>
                    </ul>
                  </div>
                  <div className="rounded-xl bg-white/10 p-4 backdrop-blur">
                    <p className="text-sm font-semibold">SLA 与响应</p>
                    <p className="mt-2 text-sm text-gray-100">
                      通勤/会务准点率目标 98%-99%；紧急需求 30 分钟内排车；关键线路可双司机/备车。
                    </p>
                  </div>
                </div>
              }
            />
          </div>
        </section>

        <Section
          title="安程政企服务简介"
          description="合规、安全、可持续的车队运营，与政企采购/风控流程对齐"
        >
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
            {overview.map((item) => (
              <Card key={item.title} className="flex flex-col gap-3 p-4">
                <div className="flex items-center gap-2 text-primary">
                  {item.icon ? <item.icon size={18} /> : <ShieldCheck size={18} />}
                  <span className="text-sm font-semibold text-text-dark">{item.title}</span>
                </div>
                <p className="text-sm leading-relaxed text-text-secondary">{item.desc}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          title="政企租赁核心场景"
          description="围绕长期租赁、通勤、接待、会务、政务用车提供端到端方案"
          background="light"
        >
          <div className="grid gap-6 lg:grid-cols-3">
            {scenarios.map((item) => (
              <Card key={item.title} className="overflow-hidden p-0">
                <div className="relative h-48 w-full">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                  <div className="absolute left-4 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-text-dark">
                    {item.tag}
                  </div>
                </div>
                <div className="flex flex-col gap-2 p-5">
                  <h3 className="text-lg font-semibold text-text-dark">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-text-secondary">{item.desc}</p>
                </div>
                <div className="px-5 pb-5">
                  <Button variant="secondary" className="w-full" href="/contact">
                    获取方案
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          title="可提供的车辆类型"
          description="从商务 MPV 到大巴的全场景运力，匹配政企出行与通勤需求"
        >
          <div className="grid gap-6 lg:grid-cols-3">
            {vehicles.map((item) => (
              <Card key={item.name} className="flex flex-col overflow-hidden p-0">
                <div className="relative h-48 w-full">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                  <div className="absolute left-3 top-3 rounded bg-white/90 px-2 py-1 text-[11px] font-semibold text-primary">
                    {item.scene}
                  </div>
                </div>
                <div className="flex flex-col gap-2 border-t border-gray-100 p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-text-dark">{item.name}</h3>
                    <Tag className="text-xs">{item.seats}</Tag>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {item.features.map((feature) => (
                      <span
                        key={feature}
                        className="flex items-center gap-1 rounded-full bg-gray-100 px-2 py-1 text-xs text-text-secondary"
                      >
                        <CheckCircle2 className="h-3 w-3 text-primary" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="px-5 pb-5">
                  <Button variant="secondary" className="w-full" href="/contact">
                    咨询此车型
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          title="服务能力与保障"
          description="以合规、安全、SLA 和隐私为基准的专业政企车队服务"
          background="light"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <Card key={item.title} className="flex flex-col gap-3 p-5">
                <div className="flex items-center gap-2 text-primary">
                  {item.icon ? <item.icon size={18} /> : <Building2 size={18} />}
                  <h3 className="text-base font-semibold text-text-dark">{item.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-text-secondary">{item.desc}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          title="政企合作流程"
          description="沟通需求 → 方案 → 报价与合同 → 车辆与司机匹配 → 执行 → 回访优化"
        >
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {steps.map((item, index) => (
              <Card key={item.title} className="flex flex-col gap-3 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    {index + 1}
                  </div>
                  <h3 className="text-base font-semibold text-text-dark">{item.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-text-secondary">{item.desc}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          title="合作客户与资质"
          description="已服务多类政企单位，资质证件与培训/标准文档可随时提供"
          background="light"
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="p-5">
              <h4 className="mb-3 text-base font-semibold text-text-dark">合作单位示例</h4>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {partners.map((partner) => (
                  <div
                    key={partner.name}
                    className="flex h-20 items-center justify-center rounded-lg border border-gray-100 bg-white"
                  >
                    <Image src={partner.image} alt={partner.name} width={120} height={60} />
                  </div>
                ))}
              </div>
            </Card>
            <Card className="p-5">
              <h4 className="mb-3 text-base font-semibold text-text-dark">资质与资料</h4>
              <div className="grid gap-3 md:grid-cols-3">
                {credentials.map((item) => (
                  <div key={item.title} className="overflow-hidden rounded-lg border border-gray-100">
                    <div className="relative h-24 w-full bg-gray-50">
                      <Image src={item.image} alt={item.title} fill className="object-cover" />
                    </div>
                    <p className="px-3 py-2 text-xs font-semibold text-text-dark">{item.title}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Section>

        <Section
          title="常见问题"
          description="针对政企租赁的合同、结算、车辆固定与临时调度说明"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {faqs.map((item) => (
              <Card key={item.q} className="flex flex-col gap-2 p-4">
                <h3 className="text-base font-semibold text-text-dark">{item.q}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">{item.a}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          title="联系我们的企业顾问"
          description="提交需求后，政企客户经理将在工作时段 2 小时内响应，提供方案与合规资料"
          background="light"
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="flex flex-col gap-5 p-6">
              <form className="grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
                <FormField label="企业名称" required>
                  <TextInput name="company" placeholder="请输入企业/单位全称" required />
                </FormField>
                <FormField label="联系人姓名" required>
                  <TextInput name="name" placeholder="请输入联系人姓名" required />
                </FormField>
                <FormField label="联系电话" required>
                  <TextInput name="phone" type="tel" inputMode="tel" placeholder="请输入手机号" required />
                </FormField>
                <FormField label="需求类别" required>
                  <SelectInput name="category" defaultValue="" required>
                    <option value="" disabled>
                      请选择
                    </option>
                    <option value="long-term">长期租赁</option>
                    <option value="driver">司机服务</option>
                    <option value="commute">通勤班车</option>
                    <option value="business">商务接待</option>
                    <option value="event">活动用车</option>
                  </SelectInput>
                </FormField>
                <FormField label="预计车辆数量" required>
                  <TextInput name="vehicle_count" placeholder="例如：3-5 辆" required />
                </FormField>
                <FormField label="预计服务周期" required>
                  <TextInput name="duration" placeholder="例如：6 个月 / 1 年" required />
                </FormField>
                <FormField label="备注">
                  <Textarea
                    name="notes"
                    rows={3}
                    placeholder="填写班次/站点需求、合规资料要求、账期/专票信息等"
                  />
                </FormField>
                <div className="md:col-span-2 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <p className="text-sm text-text-secondary">
                    提交后将由政企客户经理一对一对接，紧急需求可拨打 188-0533-1586。
                  </p>
                  <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row">
                    <Button variant="primary" className="w-full md:w-auto" href="tel:18805331586" type="button">
                      电话咨询
                    </Button>
                    <Button className="w-full md:w-auto" type="submit" disabled={submitting}>
                      {submitting ? "提交中..." : <>提交需求 <ArrowRight size={14} className="ml-1 inline-block" /></>}
                    </Button>
                  </div>
                </div>
                {result ? <p className="md:col-span-2 text-sm text-primary">{result}</p> : null}
              </form>
            </Card>
            <Card className="flex items-center gap-4 p-6">
              <div className="relative h-28 w-28 overflow-hidden rounded-full bg-gray-100">
                <Image
                  src="https://picsum.photos/seed/consultant/240/240"
                  alt="企业顾问"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-text-dark">政企客户经理</h3>
                <p className="text-sm text-text-secondary">
                  提供方案定制、账期/专票/合同对接、司机与车辆配置建议。
                </p>
                <div className="flex flex-wrap gap-2 text-sm">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">2 小时响应</span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">合规资料齐全</span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">调度 7×24</span>
                </div>
              </div>
            </Card>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
