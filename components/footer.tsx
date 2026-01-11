import { GraduationCap } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <GraduationCap className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-foreground">AI+教学平台</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/learning-path" className="text-muted-foreground hover:text-foreground transition-colors">
              个性化学习
            </Link>
            <Link href="/assistant" className="text-muted-foreground hover:text-foreground transition-colors">
              数字助教
            </Link>
            <Link href="/research" className="text-muted-foreground hover:text-foreground transition-colors">
              教研融合
            </Link>
            <Link href="/textbook" className="text-muted-foreground hover:text-foreground transition-colors">
              教材撰写
            </Link>
          </nav>

          <p className="text-sm text-muted-foreground">© 2026 最优化方法课程组</p>
        </div>
      </div>
    </footer>
  )
}
