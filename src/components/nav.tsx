import Logo from "@/components/logo";
import Button from "@/components/ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/customer-stories", label: "Customer stories" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-neutral-1/90 backdrop-blur border-b border-neutral-4">
      <div className="mx-auto max-w-6xl px-6 h-20 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-dark-fir hover:text-light-fir transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <Button href="/product" variant="secondary" className="text-sm px-5 py-2.5">
          Get a demo
        </Button>
      </div>
    </header>
  );
}
