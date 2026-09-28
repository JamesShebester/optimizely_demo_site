import Logo from "@/components/logo";

const columns = [
  {
    title: "Product",
    links: ["Experimentation", "Content management", "Commerce", "Data platform"],
  },
  {
    title: "Company",
    links: ["About", "Customer stories", "Careers"],
  },
  {
    title: "Resources",
    links: ["Blog", "Docs", "Support"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-dark-fir text-neutral-1">
      <div className="mx-auto max-w-6xl px-6 py-16 grid gap-12 md:grid-cols-[1.5fr_repeat(3,1fr)]">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-neutral-4 max-w-xs">
            One platform for experience-makers to get stuff done, faster.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <p className="font-mono text-xs uppercase tracking-[0.08em] text-light-blue mb-4">
              {col.title}
            </p>
            <ul className="space-y-3">
              {col.links.map((link) => (
                <li key={link}>
                  <span className="text-sm text-neutral-3 hover:text-lf-green transition-colors cursor-pointer">
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-mid-fir">
        <p className="mx-auto max-w-6xl px-6 py-6 text-xs text-neutral-5">
          Demo site for internal use, styled to Optimizely brand guidelines.
        </p>
      </div>
    </footer>
  );
}
