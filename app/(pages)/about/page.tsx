import Link from "next/link";
import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";
import { Section } from "@/app/components/layout/Section";
import { PageHero } from "@/app/components/layout/PageHero";
import { Card } from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";
import { Tag } from "@/app/components/ui/Tag";
import { Award, Shield, Users, Heart, History, FileCheck } from "lucide-react";

const overviewItems = [
  {
    title: "企业愿景",
    desc: "成为鲁中地区最值得信赖的客运出行服务商，连接城市与美好生活。",
    icon: <Award className="h-6 w-6 text-primary" />
  },
  {
    title: "企业使命",
    desc: "以安全为基石，以服务为核心，为每一次出行提供安心保障。",
    icon: <Shield className="h-6 w-6 text-primary" />
  },
  {
    title: "服务理念",
    desc: "准时、安全、舒适、贴心——让每一位乘客感受家的温暖。",
    icon: <Heart className="h-6 w-6 text-primary" />
  }
];

const timeline = [
  { year: "2015", title: "公司成立", desc: "安程客运正式在淄博注册成立，开启客运服务之路。" },
  { year: "2017", title: "车队扩充", desc: "引入首批高端商务大巴，拓展企业班车业务。" },
  { year: "2019", title: "资质升级", desc: "获得省际包车客运资质，业务范围覆盖全省及周边。" },
  { year: "2021", title: "数字化转型", desc: "上线在线调度系统，实现车辆实时监控与智能排班。" },
  { year: "2023", title: "多元化发展", desc: "新增房车租赁与高端定制游业务，服务全面升级。" }
];

const team = [
  { name: "张经理", role: "总经理", desc: "15年客运管理经验，专注安全运营体系建设。" },
  { name: "李队长", role: "车队总管", desc: "驾龄20年+，负责司机培训与车辆技术管理。" },
  { name: "王主管", role: "客户服务", desc: "用心倾听客户需求，提供最优质的出行方案。" }
];

const qualifications = [
  { title: "道路运输经营许可证", desc: "正规营运资质，安全合规" },
  { title: "营业执照", desc: "合法经营，信誉保障" },
  { title: "安全生产标准化证书", desc: "严格执行安全生产标准" }
];

const partners = [
  "某某大型国企", "某某科技园区", "某某国际旅行社", "某某星级酒店", "某某教育集团"
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="ABOUT"
          title="关于安程客运：专注出行，不止于行"
          description="淄博安程客运有限公司致力于为企业、团体及个人提供高品质的包车、租车与定制旅游服务。坚持“安全第一，服务至上”，以专业车队和贴心服务成为您出行的坚实后盾。"
          tags={["正规资质", "专业团队", "多年经验"]}
          actions={[
            { label: "查看服务", variant: "primary" },
            { label: "联系我们", variant: "secondary" }
          ]}
          rightContent={
            <div className="space-y-4 text-gray-900">
              <div className="rounded-xl bg-white/85 p-5">
                <p className="text-sm font-semibold text-primary">企业愿景</p>
                <p className="mt-2 text-sm text-gray-700">
                  成为鲁中地区最值得信赖的客运出行服务商，连接城市与美好生活。
                </p>
              </div>
              <div className="rounded-xl bg-white/75 p-5">
                <p className="text-sm font-semibold text-primary">核心价值</p>
                <p className="mt-2 text-sm text-gray-700">
                  安全合规、准时可靠、贴心服务，长期陪伴企业与城市成长。
                </p>
              </div>
            </div>
          }
        />

        <Section
          title="愿景与使命"
          description="明确的目标指引我们不断前行，为您提供更优质的服务"
        >
          <div className="grid gap-6 md:grid-cols-3">
            {overviewItems.map((item) => (
              <Card key={item.title} className="flex flex-col gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  {item.icon}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-text-dark">
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed text-text-secondary">
                    {item.desc}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          title="发展历程"
          description="一步一个脚印，见证安程客运的成长与蜕变"
          background="light"
        >
          <div className="relative border-l-2 border-primary/20 ml-4 md:ml-10 space-y-8 py-4">
            {timeline.map((item) => (
              <div key={item.year} className="relative pl-8 md:pl-12">
                <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-white bg-primary shadow-sm" />
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-bold text-primary">{item.year}</span>
                  <h3 className="text-lg font-semibold text-text-dark">{item.title}</h3>
                  <p className="text-text-secondary">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section
          title="核心团队"
          description="专业的管理与服务团队，是高品质服务的保障"
        >
          <div className="grid gap-6 md:grid-cols-3">
            {team.map((member) => (
              <Card key={member.name} className="flex flex-col items-center text-center p-6 gap-4">
                <div className="h-24 w-24 rounded-full bg-gray-200" />
                <div>
                  <h3 className="text-lg font-semibold text-text-dark">{member.name}</h3>
                  <p className="text-sm text-primary font-medium">{member.role}</p>
                </div>
                <p className="text-sm text-text-secondary">{member.desc}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          title="合规资质"
          description="正规运营，证照齐全，让您用车无忧"
          background="light"
        >
          <div className="grid gap-6 md:grid-cols-3">
            {qualifications.map((item) => (
              <Card key={item.title} className="flex flex-col gap-3 p-4">
                <div className="aspect-[3/4] w-full bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
                  <FileCheck className="w-12 h-12" />
                </div>
                <div className="text-center">
                  <h3 className="text-base font-semibold text-text-dark">{item.title}</h3>
                  <p className="text-xs text-text-secondary">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          title="合作伙伴"
          description="感谢众多客户的信任与支持"
        >
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="h-16 px-6 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100 text-gray-400 font-medium">
                {partner} LOGO
              </div>
            ))}
          </div>
        </Section>

        <Section
          title="期待与您合作"
          description="无论是企业通勤还是商务接待，我们都将全力以赴"
          background="light"
        >
          <Card className="flex flex-col gap-5 p-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-text-dark">
                联系我们，开启安心旅程
              </h3>
              <p className="text-base leading-relaxed text-text-secondary">
                欢迎随时来电咨询或莅临公司考察。
              </p>
            </div>
            <Link className="btn btn-primary" href="/contact">
              联系我们
            </Link>
          </Card>
        </Section>
      </main>
      <Footer />
    </>
  );
}
