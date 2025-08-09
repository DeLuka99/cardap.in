import { Soup, UserCircle2 } from "lucide-react";

export function Header() {
  return (
    <header className="min-w-screen bg-zinc-900 text-white">
      <div className="container flex justify-between m-auto p-4">
        <div className="flex items-center gap-2 font-mono">
          <Soup className="h-6 w-6" />
          Cardap.in
        </div>

        <UserCircle2 />
      </div>
    </header>
  );
}
