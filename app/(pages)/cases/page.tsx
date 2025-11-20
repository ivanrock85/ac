import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";
import { Section } from "@/app/components/layout/Section";
import { PageHero } from "@/app/components/layout/PageHero";
import { Button } from "@/app/components/ui/Button";
import { Card } from "@/app/components/ui/Card";
import { Tag } from "@/app/components/ui/Tag";

const filterTags = ["全部", "会议/活动", "通勤/班车", "商务接待", "旅游包车"];

const caseList = [
  {
    title: "年度大会班车方案",
    tag: "会议/活动",
    summary: "多线路接驳酒店/会场/机场，现场调度与应急加车支持。",
    imageAlt: "大会班车案例占位"
  },
  {
    title: "企业通勤班车优化",
    tag: "通勤/班车",
    summary: "多站点上车，按高峰错峰编排，准点率提升与投诉下降。",
    imageAlt: "通勤班车案例占位"
  },
  {
    title: "高管商务接待",
    tag: "商务接待",
    summary: "商务 MPV 组合，机场/高铁接送与多点拜访，司机熟悉线路。",
    imageAlt: "商务接待案例占位"
  },
  {
    title: "旅游包车多日行程",
    tag: "旅游包车",
    summary: "沿途景点/餐食/酒店衔接，司机熟悉景点停车与集合点。",
    imageAlt: "旅游包车案例占位"
  }
];

const testimonials = [
  {
    quote: "多线路班车准点率高，调度沟通及时，临时加车也能满足。",
    name: "某科技公司 行政负责人"
  },
  {
    quote: "司机专业，路线熟悉，商务接待体验良好，客户反馈满意。",
    name: "某咨询公司 运营经理"
  }
];

const steps = [
  { title: "需求与路线确认", desc: "明确人数、站点/会场、时间窗与特殊要求" },
  { title: "方案与报价", desc: "匹配车型与车队，确认班次与现场协调人" },
  { title: "现场执行与复盘", desc: "全程调度与应急支持，事后复盘优化方案" }
];

export default function CasesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="CASES"
          title="客户案例：多场景调度与稳定服务"
          description="会议/活动、通勤班车、商务接待、旅游包车等真实案例，展示路线规划、调度协同与应急响应能力。"
          tags={["多场景覆盖", "应急调度", "透明流程"]}
          actions={[
            { label: "咨询定制方案", variant: "primary" },
            { label: "提交需求", variant: "secondary" }
          ]}
          rightContent={
            <div className="space-y-4 text-gray-900">
              <div className="rounded-xl bg-white/85 p-5">
                <p className="text-sm font-semibold text-primary">覆盖行业</p>
                <p className="mt-2 text-sm text-gray-700">
                  互联网、制造、教育、文娱赛事、旅游机构等多行业案例可复用。
                </p>
              </div>
              <div className="rounded-xl bg-white/75 p-5 text-sm text-gray-700">
                <p className="font-semibold text-gray-900">调度亮点</p>
                <p className="mt-2 leading-relaxed">
                  统一调度、现场协调、应急备班，事后复盘优化线路与编班。
                </p>
              </div>
            </div>
          }
        />

        <Section
          title="案例分类"
          description="按行业/场景查看案例（筛选占位，可横向滚动）"
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
          title="案例列表"
          description="真实案例占位，后续可替换为实际客户案例与图片"
          background="light"
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {caseList.map((item) => (
              <Card key={item.title} className="flex flex-col gap-3 p-5">
                <div className="h-32 w-full rounded-lg bg-background-light" aria-label={item.imageAlt} />
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-text-dark">
                    {item.title}
                  </h3>
                  <Tag className="text-xs">{item.tag}</Tag>
                </div>
                <p className="text-base leading-relaxed text-text-secondary">
                  {item.summary}
                </p>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          title="服务流程"
          description="标准流程确保交付质量，现场可调度与应急支持"
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
          title="客户反馈"
          description="精选客户评价占位，展示服务体验与沟通质量"
          background="light"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {testimonials.map((item) => (
              <Card key={item.name} className="flex flex-col gap-2 p-4">
                <p className="text-base leading-relaxed text-text-dark">
                  “{item.quote}”
                </p>
                <span className="text-sm font-semibold text-text-secondary">
                  {item.name}
                </span>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          title="需要案例化方案？"
          description="告诉我们场景与人数，获得定制方案与报价"
          background="light"
        >
          <Card className="flex flex-col gap-5 p-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-text-dark">
                咨询热线：400-000-0000
              </h3>
              <p className="text-base leading-relaxed text-text-secondary">
                会议/活动、通勤班车、接待与旅游包车案例可共享思路与执行细节。
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
