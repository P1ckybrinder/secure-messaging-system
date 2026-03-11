"use client"

import dynamic from "next/dynamic"

const BrandShowcase = dynamic(() => import("./brand-showcase").then((mod) => mod.BrandShowcase), {
  loading: () => <div className="w-full h-64 bg-gray-100 animate-pulse" />,
  ssr: false,
})

export default function BrandShowcaseClient() {
  return <BrandShowcase />
}
