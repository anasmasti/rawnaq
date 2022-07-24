import React from "react";
import { useRouter } from "next/router";
export default function ActualitesDetails() {
  const router = useRouter();
  const { slug } = router.query;
  
  return (
    <div>
      Details
      {slug}
    </div>
  );
}
