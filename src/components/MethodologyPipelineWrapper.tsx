"use client";

import dynamic from "next/dynamic";

const MethodologyPipeline = dynamic(() => import("./MethodologyPipeline"), {
  ssr: false,
  loading: () => (
    <div className="flex h-48 items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent border-t-transparent" />
    </div>
  ),
});

export default function MethodologyPipelineWrapper() {
  return <MethodologyPipeline />;
}
