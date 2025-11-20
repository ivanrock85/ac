"use client";

import { useState } from "react";
import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";
import { Section } from "@/app/components/layout/Section";
import { PageHero } from "@/app/components/layout/PageHero";
import { Card } from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";
import { FormField } from "@/app/components/ui/FormField";
import { TextInput } from "@/app/components/ui/TextInput";
import { SelectInput } from "@/app/components/ui/SelectInput";
import { Textarea } from "@/app/components/ui/Textarea";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { submitReservation } from "@/lib/reservation-client";

const contactInfo = [
  {
    title: "公司地址",
    desc: "山东省淄博市张店区中润大道 123 号安程大厦",
    icon: <MapPin className="h-6 w-6 text-primary" />
  },
  {
    title: "咨询热线",
    desc: "400-000-0000 (7x24小时)",
    icon: <Phone className="h-6 w-6 text-primary" />
  },
  {
    title: "业务邮箱",
    desc: "business@ancheng.com",
    icon: <Mail className="h-6 w-6 text-primary" />
  },
  {
    title: "服务时间",
    desc: "周一至周日 8:30 - 18:00 (节假日不休)",
    icon: <Clock className="h-6 w-6 text-primary" />
  }
];

const faqs = [
  {
    q: "如何获取正式报价单？",
    a: "请在表单填写需求或直接拨打热线，我们将在 30 分钟内回拨确认并发送报价单。"
  },
  {
    q: "签订合同需要哪些资料？",
    a: "企业客户需提供营业执照、开票信息；合同支持电子签或线下盖章。"
  },
  {
    q: "紧急用车如何处理？",
    a: "请直接拨打 188-0533-1586，我们将启动应急调度，优先排车。"
  }
];

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult(null);
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get("name") as string)?.trim();
    const phone = (formData.get("phone") as string)?.trim();
    const type = (formData.get("type") as string) || "other";
    const message = (formData.get("message") as string)?.trim();

    if (!name || !phone) {
      setResult("请填写姓名和联系电话");
      return;
    }

    try {
      setSubmitting(true);
      await submitReservation({
        type,
        name,
        phone,
        summary: "联系咨询",
        details: { message }
      });
      setResult("提交成功，我们会尽快联系您。");
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
      <main>
        <PageHero
          eyebrow="CONTACT"
          title="联系我们：随时为您提供支持"
          description="无论您有任何用车需求或疑问，欢迎随时与我们联系。安程客运团队将竭诚为您提供专业、高效的解答与服务。"
          tags={["7x24 客服", "透明报价", "行程规划"]}
          actions={[
            { label: "拨打热线", variant: "primary", href: "tel:18805331586" },
            { label: "获取报价", variant: "secondary", href: "/booking" }
          ]}
          rightContent={
            <div className="space-y-3 text-gray-900">
              <div className="rounded-xl bg-white/85 p-4">
                <p className="text-sm font-semibold text-primary">咨询热线</p>
                <p className="mt-1 text-3xl font-bold text-gray-900">188-0533-1586</p>
                <p className="text-xs text-gray-600">工作时段 2 小时内响应</p>
              </div>
              <div className="rounded-xl bg-white/75 p-4 text-sm text-gray-700">
                <p>地址：山东省淄博市张店区中润大道 123 号</p>
                <p className="mt-1">邮箱：business@ancheng.com</p>
                <p className="mt-1">服务时间：8:30 - 18:00（节假日不休）</p>
              </div>
            </div>
          }
        />

        <Section
          title="联系渠道与留言"
          description="留下需求，我们将在 30 分钟内回拨"
          background="light"
        >
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div className="grid gap-4 sm:grid-cols-2">
              {contactInfo.map((item) => (
                <Card key={item.title} className="flex items-start gap-3 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    {item.icon}
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-base font-semibold text-text-dark">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-secondary">{item.desc}</p>
                  </div>
                </Card>
              ))}
            </div>
            <Card className="flex h-full flex-col gap-5 p-6">
              <h3 className="text-xl font-semibold text-text-dark">在线留言</h3>
              <form className="grid gap-4" onSubmit={handleSubmit}>
                <FormField label="姓名" required>
                  <TextInput name="name" placeholder="您的姓名" required />
                </FormField>
                <FormField label="联系电话" required>
                  <TextInput
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    placeholder="您的手机号"
                    required
                  />
                </FormField>
                <FormField label="咨询类型">
                  <SelectInput name="type" defaultValue="">
                    <option value="" disabled>
                      请选择
                    </option>
                    <option value="charter">包车服务</option>
                    <option value="rental">车辆租赁</option>
                    <option value="tourism">旅游线路</option>
                    <option value="complaint">投诉建议</option>
                    <option value="other">其他</option>
                  </SelectInput>
                </FormField>
                <FormField label="留言内容" required>
                  <Textarea
                    name="message"
                    rows={4}
                    placeholder="请详细描述您的需求或问题..."
                    required
                  />
                </FormField>
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <Button variant="primary" className="w-full md:w-auto" href="tel:18805331586">
                    电话咨询
                  </Button>
                  <Button
                    variant="secondary"
                    className="w-full md:w-auto"
                    type="submit"
                    disabled={submitting}
                  >
                    {submitting ? "提交中..." : "提交留言"}{" "}
                    <ArrowRight size={14} className="inline-block ml-1" />
                  </Button>
                </div>
                {result ? (
                  <p className="text-sm text-primary">{result}</p>
                ) : null}
              </form>
            </Card>
          </div>
        </Section>

        <Section
          title="公司位置"
          description="欢迎莅临公司考察，我们将安排专人接待"
        >
          <Card className="h-96 w-full overflow-hidden p-0">
            <div className="h-full w-full bg-gray-200 flex items-center justify-center text-gray-500">
              <div className="text-center">
                <MapPin className="h-12 w-12 mx-auto mb-2 text-primary" />
                <p>地图加载中... (此处为地图占位符)</p>
                <p className="text-sm mt-1">地址：山东省淄博市张店区中润大道 123 号安程大厦</p>
              </div>
            </div>
          </Card>
        </Section>

        <Section
          title="常见问题"
          description="您可能关心的几个问题"
          background="light"
        >
          <div className="grid gap-6 md:grid-cols-3">
            {faqs.map((item) => (
              <Card key={item.q} className="flex flex-col gap-3 p-5">
                <h3 className="text-lg font-semibold text-text-dark">
                  {item.q}
                </h3>
                <p className="text-base leading-relaxed text-text-secondary">
                  {item.a}
                </p>
              </Card>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
