import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type Post = {
  category: "Research" | "Press" | "Milestone";
  date: string;
  title: string;
  excerpt: string;
  readTime: string;
  href: string;
};

const posts: Post[] = [
  {
    category: "Milestone",
    date: "May 31, 2026",
    title: "Kardiosense receives seed funding at Engineering Innovation Bootcamp",
    excerpt:
      "At the Engineering Innovation Bootcamp grand finale, supported by the Royal Academy of Engineering LIF Community Project, Kardiosense joined student engineers taking the stage as founders and received seed funding to keep refining the solution.",
    readTime: "5 min read",
    href: "/news/lif-bootcamp-2026",
  },
  {
    category: "Research",
    date: "Feb 02, 2026",
    title: "Benchmarking our ECG deep learning model on PTB-XL and CODE-15%",
    excerpt:
      "An early look at internal benchmarks: 0.94 AUROC on held-out PTB-XL data, with strong generalization to under-represented African cohorts.",
    readTime: "7 min read",
    href: "#",
  },
  {
    category: "Milestone",
    date: "Jul 2025",
    title: "Winners of the H&B Global Undergraduate Student Research Grant",
    excerpt:
      "Our co-founder Omara Christian Kenneth was named one of the winners of the H&B Global Undergraduate Student Research Grant 2025, recognised for his work on AI-powered cardiac detection in low-resource African healthcare settings.",
    readTime: "3 min read",
    href: "/news/hb-grant-2025",
  },
  {
    category: "Milestone",
    date: "Aug 2025",
    title: "A Stronger Model and a First Partner: Gulu University NCD Conference",
    excerpt:
      "We presented a significantly improved CNN-based cardiac detection model at the International Scientific Conference on the NCD Epidemic in Africa, hosted by Gulu University. Accuracy jumped from 73 percent to 89 percent, and we met our first external partner.",
    readTime: "6 min read",
    href: "/news/gulu-2025",
  },
  {
    category: "Milestone",
    date: "Jun 2025",
    title: "Taking Innovation to the National Stage: Science Week 2025",
    excerpt:
      "We pitched Kardiosense at National Science Week 2025 at the Kololo Independence Grounds, demonstrating our live ECG dashboard to scientists, investors, and policymakers from across Uganda and beyond.",
    readTime: "4 min read",
    href: "/news/science-week-2025",
  },
  {
    category: "Milestone",
    date: "May 28, 2025",
    title: "Presenting AI for Heart Attack Detection at ATTIC 2025",
    excerpt:
      "Our co-founder Omara Christian Kenneth presented Kardiosense's first ML-based myocardial infarction detection system at the 3rd Africa Test and Treat Initiative Conference in Kampala. It was the first time the project existed anywhere outside our own heads and laptops.",
    readTime: "5 min read",
    href: "/news/attic-2025",
  },
];

const categoryStyles: Record<Post["category"], string> = {
  Research: "bg-teal/10 text-teal border-teal/20",
  Press: "bg-cyan-accent/10 text-cyan-accent border-cyan-accent/30",
  Milestone: "bg-navy/10 text-navy border-navy/20",
};

const News = () => (
  <section id="news" className="bg-background py-28">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 reveal">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-teal mb-4">News &amp; Insights</p>
          <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight">
            Research, press, and milestones from the Kardiosense team.
          </h2>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-2 text-sm font-medium text-teal hover:text-cyan-accent transition-colors"
        >
          View all updates <ArrowRight size={16} />
        </a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((p) => (
          <article
            key={p.title}
            className="group reveal flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="relative h-44 gradient-teal overflow-hidden">
              <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_30%_30%,white,transparent_60%)]" />
              <span
                className={`absolute top-4 left-4 inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium bg-white ${categoryStyles[p.category]}`}
              >
                {p.category}
              </span>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                <time>{p.date}</time>
                <span className="opacity-40">/</span>
                <span>{p.readTime}</span>
              </div>
              <h3 className="font-serif text-xl text-navy leading-snug mb-3 group-hover:text-teal transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{p.excerpt}</p>
              {p.href === "#" ? (
                <a
                  href={p.href}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-teal group-hover:gap-2.5 transition-all"
                >
                  Read more <ArrowRight size={14} />
                </a>
              ) : (
                <Link
                  to={p.href}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-teal group-hover:gap-2.5 transition-all"
                >
                  Read more <ArrowRight size={14} />
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default News;
