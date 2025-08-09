export function Footer() {
  return (
    <footer className="min-w-screen bg-zinc-900 p-4 flex flex-col sm:flex-row items-center gap-2 justify-center">
      <p className="text-white font-mono text-xs">
        Copyright {new Date().getFullYear()} © Cardap.in.
      </p>
      <p className="text-white font-mono text-xs">
        Todos os direitos reservados.
      </p>
    </footer>
  );
}
