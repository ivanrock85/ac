import Link from "next/link";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-border-gray bg-background-light">
      <Container className="grid gap-8 py-10 md:grid-cols-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-base font-semibold text-primary">
              标
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-semibold text-text-dark">安程客运</span>
              <span className="text-xs text-text-secondary">安全 · 准时 · 透明</span>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-text-secondary">
            专业包车与车辆租赁服务，覆盖商务接待、会议班车、旅游团建等多场景。
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-base font-semibold text-text-dark">快速导航</h3>
          <div className="flex flex-col gap-2 text-sm text-text-secondary">
            <Link href="/charter">包车服务</Link>
            <Link href="/rental">车辆租赁</Link>
            <Link href="/fleet">车型展示</Link>
            <Link href="/tourism">旅游线路</Link>
            <Link href="/cases">客户案例</Link>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-base font-semibold text-text-dark">支持</h3>
          <div className="flex flex-col gap-2 text-sm text-text-secondary">
            <Link href="/about">公司简介</Link>
            <Link href="/contact">联系我们</Link>
            <Link href="/admin">后台入口</Link>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-base font-semibold text-text-dark">联系方式</h3>
          <div className="flex flex-col gap-2 text-sm text-text-secondary">
            <span>
              <span className="text-text-dark">服务热线：</span>
              <span className="font-semibold text-primary">0533-0000000</span>
            </span>
            <span>邮箱：contact@example.com</span>
            <span>地址：山东省淄博市张店区（示意）</span>
          </div>
        </div>
      </Container>
      <div className="border-t border-border-gray">
        <Container className="flex flex-col gap-2 py-4 text-sm text-text-secondary md:flex-row md:items-center md:justify-between">
          <span>© 2024 安程客运. 保留所有权利。</span>
          <span>备案号占位</span>
        </Container>
      </div>
    </footer>
  );
}
