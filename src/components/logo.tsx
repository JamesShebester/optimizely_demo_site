import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" prefetch={false} className="inline-flex items-center">
      <Image src="/brand/logo.svg" alt="Optimizely" width={160} height={32} priority />
    </Link>
  );
}
