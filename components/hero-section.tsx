import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-sidebar py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-sidebar-accent px-4 py-1.5 text-sm text-sidebar-foreground">
            <Sparkles className="h-4 w-4 text-accent" />
            <span>人工智能 + 教育创新</span>
          </div>

          <h1 className="text-balance text-4xl font-bold tracking-tight text-sidebar-foreground sm:text-5xl lg:text-6xl">
            智能驱动的
            <span className="text-accent">《最优化方法》</span>
            课程建设平台
          </h1>

          <p className="mt-6 text-pretty text-lg leading-relaxed text-sidebar-foreground/70 sm:text-xl">
            利用大模型的信息检索与分析能力，实时追踪学科前沿，为教学提供个性化学习路径、
            智能数字助教、教研融合推荐、教材撰写辅助等全方位支持
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <Link href="/assistant">
                开始体验
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto bg-transparent border-sidebar-border text-sidebar-foreground hover:bg-sidebar-accent"
              asChild
            >
              <Link href="#features">了解功能</Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: "个性化路径", value: "智能定制" },
            { label: "数字助教", value: "24/7 在线" },
            { label: "前沿论文", value: "实时推送" },
            { label: "教材撰写", value: "AI 辅助" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl bg-sidebar-accent/50 p-4 text-center backdrop-blur">
              <div className="text-xl font-semibold text-accent">{stat.value}</div>
              <div className="mt-1 text-sm text-sidebar-foreground/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
