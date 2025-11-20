
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | 安程包车 - 淄博专业租车包车服务",
    default: "安程包车 - 淄博专业租车包车服务 | 企业通勤 | 旅游大巴",
  },
  description: "安程包车提供淄博及周边地区的企业通勤、旅游包车、机场接送、商务接待等服务。拥有多种车型，正规营运资质，专业司机团队，为您提供安全、舒适、准时的出行体验。",
  keywords: ["淄博包车", "淄博租车", "企业班车", "旅游大巴", "机场接送", "商务用车", "安程包车"],
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://ancheng.com", // Replace with actual domain
    siteName: "安程包车",
  },
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="bg-white text-[#111827] antialiased">{children}</body>
    </html>
  );
}
