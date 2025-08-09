import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Search } from "@/components/search";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { HorizontalScroll, ScrollBar } from "@/components/ui/scroll-area";
import { ShoppingBagIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between gap-4">
      <div className="bg-zinc-300">
        <Header />

        <div className="text-zinc-900 container p-4 m-auto flex gap-2 justify-center">
          <ShoppingBagIcon />
          <h1 className="text-xl font-bold">Nome Restaurante</h1>
        </div>
      </div>

      <main className="flex-1 container m-auto px-4 flex flex-col gap-6">
        <Search />

        <HorizontalScroll>
          <Button variant="destructive" className="rounded-full">
            Espetos
          </Button>
          <Button variant="outline" className="rounded-full">
            Carnes na chapa
          </Button>
          <Button variant="outline" className="rounded-full">
            Carnes na chapa
          </Button>
          <Button variant="outline" className="rounded-full">
            Carnes na chapa
          </Button>
          <Button variant="outline" className="rounded-full">
            Carnes na chapa
          </Button>
          <Button variant="outline" className="rounded-full">
            Carnes na chapa
          </Button>
          <ScrollBar orientation="horizontal" />
        </HorizontalScroll>

        <h2 className="text-md font-semibold">Recomendações do chefe</h2>

        <div className="flex gap-4">
          <Card className="max-w-1/2 pt-0 pb-3 gap-3">
            <CardHeader className="px-0 gap-0">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEDbvC2jrhmmrjhhLwcBpsr_TlB3vvDxo-_A&s"
                className="rounded-t-md"
              />
            </CardHeader>

            <CardContent className="px-3">
              <p className="text-sm sm:text-lg">Espeto de frango com bacon</p>
              <p className="text-red-700 font-bold text-sm sm:text-lg">
                R$29,90
              </p>
            </CardContent>
          </Card>

          <Card className="max-w-1/2 pt-0 pb-3 gap-3">
            <CardHeader className="px-0 gap-0">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEDbvC2jrhmmrjhhLwcBpsr_TlB3vvDxo-_A&s"
                className="rounded-t-md"
              />
            </CardHeader>

            <CardContent className="px-3">
              <p className="text-sm sm:text-lg">Espeto de frango com bacon</p>
              <p className="text-red-700 font-bold text-sm sm:text-lg">
                R$29,90
              </p>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="w-full px-0 gap-3">
            <CardHeader className="px-0 gap-0">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEDbvC2jrhmmrjhhLwcBpsr_TlB3vvDxo-_A&s"
                className="rounded-t-md"
              />
            </CardHeader>

            <CardContent className="px-3">
              <p className="text-sm sm:text-lg">Espeto de frango com bacon</p>
              <p className="text-red-700 font-bold text-sm sm:text-lg">
                R$29,90
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
