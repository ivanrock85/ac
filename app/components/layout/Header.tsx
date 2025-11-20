'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";
import { Button } from "../ui/Button";

const navLinks = [
  { href: "/", label: "首页" },
  { href: "/charter", label: "包车" },
  { href: "/rental", label: "租赁" },
  { href: "/fleet", label: "车型" },
  { href: "/tourism", label: "旅游线路" },
  { href: "/cases", label: "案例" },
  { href: "/contact", label: "联系我们" }
];

type HeaderProps = {
  transparent?: boolean;
  position?: "sticky" | "absolute";
};

export function Header({ transparent = false, position = "sticky" }: HeaderProps = {}) {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(!transparent);

  useEffect(() => {
    if (!transparent) return;
    const handleScroll = () => setSolid(window.scrollY > 32);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [transparent]);

  const textTone = solid ? "text-text-dark" : "text-white";
  const linkTone = solid
    ? "text-sm font-medium text-text-dark transition-colors hover:text-primary"
    : "text-sm font-medium text-white/90 transition-colors hover:text-white";

  const positionClass =
    position === "absolute" && !solid
      ? "absolute inset-x-0 top-0"
      : "sticky top-0";

  return (
    <header
      className={cn(
        positionClass,
        "z-30",
        "transition-all",
        solid
          ? "border-b border-border-gray bg-white/90 backdrop-blur"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <Container className="flex items-center justify-between py-4">
        <Link className="flex items-center gap-3" href="/">
          <div
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full text-base font-semibold",
              solid ? "bg-background-light text-primary" : "bg-white text-primary"
            )}
          >
            标
          </div>
          <div className="flex flex-col leading-tight">
            <span className={cn("text-lg font-semibold", textTone)}>安程客运</span>
            <span
              className={cn(
                "text-xs transition-colors",
                solid ? "text-text-secondary" : "text-white/70"
              )}
            >
              包车 · 租赁
            </span>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((item) => (
            <Link key={item.href} className={linkTone} href={item.href}>
              {item.label}
            </Link>
          ))}
          <div className="flex items-center gap-3">
            <Button
              href="/fleet"
              variant="secondary"
              className={cn(
                !solid && "!border-white/60 !text-white !bg-white/5 hover:!bg-white/10"
              )}
            >
              查看车型
            </Button>
            <Button
              href="/contact"
              variant="primary"
              className={cn(
                !solid && "!bg-white !text-primary hover:!bg-white/90"
              )}
            >
              获取报价
            </Button>
          </div>
        </nav>
        <div className="flex items-center gap-3 md:hidden">
          <Button
            href="/contact"
            className={cn(
              "px-4 py-2 text-sm",
              !solid && "!border-white/60 !text-white !bg-white/5 hover:!bg-white/10"
            )}
            variant="secondary"
          >
            预约
          </Button>
          <button
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full border text-text-dark",
              solid ? "border-border-gray" : "border-white/50 text-white"
            )}
            type="button"
            aria-label="切换导航"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            <div className="flex h-4 w-5 flex-col justify-between">
              <span
                className={cn(
                  "h-0.5 w-full bg-current transition",
                  open && "translate-y-1.5 rotate-45"
                )}
              ></span>
              <span
                className={cn(
                  "h-0.5 w-full bg-current transition",
                  open && "-translate-y-1.5 -rotate-45"
                )}
              ></span>
            </div>
          </button>
        </div>
      </Container>
      {open ? (
        <div className="relative border-t border-border-gray bg-white/95 backdrop-blur md:hidden">
          <div className="absolute inset-0 bg-black/5 pointer-events-none" aria-hidden />
          <Container className="relative flex flex-col gap-4 py-4">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                className="text-base font-medium text-text-dark"
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3">
              <Button fullWidth variant="primary" href="/contact" onClick={() => setOpen(false)}>
                获取报价
              </Button>
              <Button fullWidth variant="secondary" href="/contact" onClick={() => setOpen(false)}>
                在线咨询
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
