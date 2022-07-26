import React from "react";
import { useRouter } from "next/router";
import MainTitle from '../../../components/shared/MainTitle'

export default function Actualites() {
  const router = useRouter();
  const { category } = router.query;

  return (
    <section>
      <MainTitle value={category} />
    </section>
  );
}
