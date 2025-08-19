"use client";

import { Loader } from "lucide-react";

export function Loading() {
  return (
    <div className="flex items-center justify-center p-4">
      <Loader className="h-6 w-6 animate-spin text-gray-500" />
    </div>
  );
}
