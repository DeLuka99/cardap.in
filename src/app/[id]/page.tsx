"use client";
import Image from "next/image";
import { useRouter, useSearchParams, notFound } from "next/navigation";

import { use, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

import { ShoppingBagIcon } from "lucide-react";
import { restaurants } from "@/data/restaurant";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Search } from "@/components/search";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { HorizontalScroll, ScrollBar } from "@/components/ui/scroll-area";
import { Restaurant } from "@/types/restaurant";
import { Loading } from "@/components/loading";

type TypeParams = { params: Promise<{ id: string }> };

export default function Home({ params }: TypeParams) {
  const { id } = use(params);
  const router = useRouter();

  const [selectedSection, setSelectedSection] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [restaurant, setRestaurant] = useState<Restaurant>();

  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const [search, setSearch] = useState(query);
  const [debouncedSearch] = useDebounce(search, 500);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (!debouncedSearch) params.delete("q");
    if (debouncedSearch) params.set("q", debouncedSearch);

    router.push(`?${params.toString()}`);
  }, [debouncedSearch]);

  useEffect(() => {
    const restaurant = restaurants.find((restaurant) => restaurant.id === id);
    if (!restaurant) return setIsLoading(false);

    setRestaurant(restaurant);
    setIsLoading(false);
  }, []);

  if (isLoading) return <Loading />;
  if (!restaurant) return notFound();

  return (
    <div className="flex min-h-screen flex-col items-center justify-between gap-4">
      <div className="bg-zinc-300">
        <Header />

        <div className="text-zinc-900 container p-4 m-auto flex gap-2 justify-center">
          <ShoppingBagIcon />
          <h1 className="text-xl font-bold">{restaurant.name}</h1>
        </div>
      </div>

      <main className="flex-1 container m-auto px-4 flex flex-col gap-6">
        <Search onChange={(e) => setSearch(e.target.value)} value={search} />

        <HorizontalScroll>
          {restaurant.sections.map((section, key) => (
            <Button
              key={key}
              variant={
                selectedSection === section.title.toLowerCase()
                  ? "destructive"
                  : "outline"
              }
              className="rounded-full"
              onClick={() => setSelectedSection(section.title.toLowerCase())}
            >
              {section.title}
            </Button>
          ))}

          <ScrollBar orientation="horizontal" hidden />
        </HorizontalScroll>

        <div className="flex flex-col gap-2">
          <h2 className="text-md font-semibold">Recomendações do chefe</h2>

          <div className="flex gap-4">
            {restaurant.recomendations.map((recomendation, key) => (
              <Card key={key} className="max-w-1/2 pt-0 pb-3 gap-3">
                <CardHeader className="px-0 gap-0">
                  <Image
                    src={recomendation.image.src}
                    alt={recomendation.image.alt}
                    width={250}
                    height={170}
                    className="rounded-t-md w-full h-full"
                  />
                </CardHeader>

                <CardContent className="px-3">
                  <p className="text-sm sm:text-lg">{recomendation.title}</p>
                  <p className="text-red-700 font-bold text-sm sm:text-lg">
                    {recomendation.price}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {restaurant.sections.map((section, key) => (
          <div key={key} className="flex flex-col gap-2">
            <h3 className="text-md font-medium">{section.title}</h3>

            {section.items.map((item, key) => (
              <Card
                key={key}
                className="flex-row py-0 gap-3 items-center sm:items-start"
              >
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  width={200}
                  height={130}
                  className="rounded-l-md h-full max-w-1/2 sm:max-w-1/4"
                />

                <CardContent className="flex flex-col gap-1 p-1 pl-0 sm:gap-2">
                  <p className="text-sm font-bold sm:text-lg">{item.title}</p>
                  <p className="font-light text-xs">{item.description}</p>
                  <p className="text-red-700 font-bold text-sm sm:text-lg">
                    {item.price}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        ))}
      </main>

      <Footer />
    </div>
  );
}
