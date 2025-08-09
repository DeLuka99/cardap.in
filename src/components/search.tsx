import { Search as IconSearch } from "lucide-react";
import { Input } from "./ui/input";
import { ComponentProps } from "react";

export function Search({ ...props }: ComponentProps<"input">) {
  return (
    <div className="relative">
      <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 " />

      <Input
        placeholder="Pesquise aqui"
        className="pl-10 rounded-full shadow"
        {...props}
      />
    </div>
  );
}
