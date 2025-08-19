import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100 p-4">
      <Card className="w-full max-w-md text-center shadow-lg">
        <CardHeader className="space-y-4">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-orange-100">
            <svg
              aria-labelledby="not-found-icon"
              className="h-12 w-12 text-orange-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title id="not-found-icon">Ícone de página não encontrada</title>
              <path
                d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
          </div>
          <CardTitle className="font-bold text-3xl text-gray-900">
            Página não encontrada
          </CardTitle>
          <CardDescription className="text-gray-600 text-lg">
            Desculpe, a página que você está procurando não existe ou foi
            movida.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-500">
            Verifique se o endereço está correto ou volte para a página inicial.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild className="bg-orange-600 hover:bg-orange-700">
              <Link href="/">Voltar ao início</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/">Explorar cardápios</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
