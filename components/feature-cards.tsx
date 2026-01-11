import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Route, Bot, BookOpen, FileEdit } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Route,
    title: "定制个性化学习路径",
    description:
      "利用先进的人工智能算法，深入分析学生在学习过程中的多维度数据，包括作业完成的准确率、知识点掌握程度等。通过数据精准分析，为每位学生制定个性化学习路径，并推荐与当前学习进度相匹配的课程资源。",
    href: "/learning-path",
    highlights: ["多维数据分析", "智能路径规划", "资源精准推荐"],
  },
  {
    icon: Bot,
    title: "定制数字助教",
    description:
      "运用前沿的提示工程和知识注入技术，开发最优化方法课程的数字助教。重点关注最优化方法领域的专业术语和复杂概念，通过深度训练和知识梳理，确保数字助教能够精准理解并准确解答学生在学习中遇到的问题。",
    href: "/assistant",
    highlights: ["专业知识库", "智能问答", "深度理解"],
  },
  {
    icon: BookOpen,
    title: "推动教研融合",
    description:
      "利用人工智能技术，为学生推送与最优化方法相关的前沿论文和研究案例，并辅助他们理解论文中的关键内容。将教学与科研紧密结合，帮助学生拓宽学术视野，深入了解最优化方法在不同领域的最新研究成果和应用前景。",
    href: "/research",
    highlights: ["前沿论文推送", "论文解读辅助", "学术视野拓展"],
  },
  {
    icon: FileEdit,
    title: "辅助教材撰写",
    description:
      "利用大模型强大的信息检索与分析能力，能够实时追踪最优化方法领域的最新研究成果，确保教材内容紧跟学科前沿。同时，借助人工智能技术的强大文本生成与处理能力，辅助初稿撰写、案例设计、排版、语法检测等任务。",
    href: "/textbook",
    highlights: ["前沿追踪", "智能撰写", "排版优化"],
  },
]

export function FeatureCards() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">核心功能模块</h2>
          <p className="mt-4 text-lg text-muted-foreground">四大AI赋能模块，全方位支持《最优化方法》课程建设</p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group relative overflow-hidden transition-all hover:shadow-lg hover:border-primary/50"
            >
              <CardHeader className="pb-4">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                <div className="flex flex-wrap gap-2">
                  {feature.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                <Button variant="ghost" className="group/btn p-0 h-auto" asChild>
                  <Link href={feature.href}>
                    进入模块
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
