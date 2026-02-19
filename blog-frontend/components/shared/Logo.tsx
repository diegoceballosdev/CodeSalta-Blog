import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface Props {
  className?: string;
}

export const Logo = ({ className = "" }: Props) => {
  return (
    <Link href="/" className={cn("flex items-center gap-1 group", className)}>
      <Image
        src="/codecraft_icon.png"
        alt="Logo"
        width={40}
        height={40}
        className="object-cover size-12"
      />
      <p className="text-2xl font-black font-jetbrains tracking-tighter group-hover:scale-105 transition-all duration-300">
        Code
        <span className="text-primary">Salta</span>
      </p>
    </Link>
  );
};
