import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";
import { Section } from "@/app/components/layout/Section";
import { PageHero } from "@/app/components/layout/PageHero";
import { Button } from "@/app/components/ui/Button";
import { Card } from "@/app/components/ui/Card";
import { Tag } from "@/app/components/ui/Tag";

const filterTags = ["全部", "6-7 座", "19-23 座", "35-49 座", "商务接待", "班车/通勤", "活动/旅游"];

const fleet = [
  {
    name: "商务 MPV",
    seats: "6-7 座",
    scene: "高管接待 / 机场接送 / 多人商务出行",
    desc: "宽敞座椅与行李空间，适合小团队与贵宾接待。",
    imageAlt: "商务 MPV 占位"
  },
  {
    name: "中巴车",
    seats: "19-23 座",
    scene: "企业班车 / 团建 / 会议接驳",
    desc: "适合中型团队，灵活线路与多站点接驳。",
    imageAlt: "中巴车 占位"
  },
  {
    name: "大巴车",
    seats: "35-49 座",
    scene: "大型活动 / 团体出行 / 赛事接驳",
    desc: "大容量与集中调度，适合大规模出行与活动。",
    imageAlt: "大巴车 占位"
  },
  {
    name: "商务轿车",
    seats: "4-5 座",
    scene: "单人/双人高端接送",
    desc: "适合高管/访客接送，重视舒适与私密性。",
    imageAlt: "商务轿车 占位"
  }
];

const highlights = [
  { title: "统一维护", desc: "定期保养、清洁，出车前检查" },
  { title: "保险完备", desc: "司乘保险与合规资质齐全" },
  { title: "司机培训", desc: "统一培训与安全考核，熟悉线路" },
  { title: "调度支持", desc: "7x24 调度，支持多车与临时加车" }
];

export default function FleetPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="FLEET"
          title="车型展示：覆盖商务接待与大规模通勤"
          description="从商务轿车、MPV 到中巴/大巴，满足接待、班车、活动等多场景需求。统一维护与司机培训，确保准时、安全、舒适。"
          tags={["多座位覆盖", "统一维护", "7x24 调度"]}
          actions={[
            { label: "咨询车型方案", variant: "primary" },
            { label: "查看租赁/包车", variant: "secondary" }
          ]}
          rightContent={
            <div className="space-y-4 text-gray-900">
              <div className="rounded-xl bg-white/85 p-5">
                <p className="text-sm font-semibold text-primary">座位段快速筛选</p>
                <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-gray-700">
                  {filterTags.slice(1, 4).map((tag) => (
                    <span key={tag} className="rounded-lg bg-blue-50 px-3 py-2">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl bg-white/75 p-5 text-sm text-gray-700">
                <p className="font-semibold text-gray-900">调度提示</p>
                <p className="mt-2 leading-relaxed">
                  多车/多线路可同时编排，固定司机与车辆可提前锁定。
                </p>
              </div>
            </div>
          }
        />

        <Section
          title="按座位与场景筛选"
          description="选择座位数与用途，快速匹配合适车型（筛选占位）"
        >
          <div className="flex flex-wrap gap-2">
            {filterTags.map((tag) => (
              <Tag key={tag} className="cursor-pointer">
                {tag}
              </Tag>
            ))}
          </div>
        </Section>

        <Section
          title="车型列表"
          description="统一维护与调度，图片为占位，后续可替换真实车图"
          background="light"
        >
          <div className="grid gap-6 md:grid-cols-3">
            {fleet.map((item) => (
              <Card key={item.name} className="flex flex-col gap-4 p-5">
                <div className="aspect-[16/9] w-full rounded-lg bg-background-light" aria-label={item.imageAlt} />
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
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {item.desc}
                  </p>
                </div>
                <Button className="w-full" variant="secondary">
                  咨询此车型
                </Button>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          title="车辆保障与亮点"
          description="标准化的车辆维护与司机培训，保证安全与准点"
        >
          <div className="grid gap-4 md:grid-cols-4">
            {highlights.map((item) => (
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

        <Section
          title="需要车型建议？"
          description="告诉我们出行场景与人数，匹配合适车型与调度方案"
          background="light"
        >
          <Card className="flex flex-col gap-5 p-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-text-dark">
                咨询热线：400-000-0000
              </h3>
              <p className="text-base leading-relaxed text-text-secondary">
                商务接待、班车通勤、活动出行均可定制，多车调度与临时加车可协商。
              </p>
            </div>
            <div className="flex flex-col gap-3 md:flex-row">
              <Button variant="primary">在线咨询</Button>
              <Button variant="secondary">提交需求</Button>
            </div>
          </Card>
        </Section>
      </main>
      <Footer />
    </>
  );
}
