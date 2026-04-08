"use client";

import dynamic from "next/dynamic";

const QuerySphere = dynamic(() => import("@/components/QuerySphere"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center" style={{ width: 580, height: 580 }}>
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent border-t-transparent" />
    </div>
  ),
});

export default function QuerySphereWrapper() {
  return <QuerySphere />;
}
