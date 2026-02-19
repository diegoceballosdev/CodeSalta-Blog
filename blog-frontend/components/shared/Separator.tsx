import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const Separator = ({ className }: Props) => {
  return <div className={cn("h-px w-full bg-gray-200", className)}></div>;
};
