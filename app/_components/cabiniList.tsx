import React from "react";
import CabinCard from "../_components/cabinCard";
import { getCabins } from "../_lib/data-service";
// import { Cabin } from "next/font/google";

export default async function CabiniList() {
  const cabins: any = await getCabins();
  //   console.log(cabins);
  if (!cabins.length) return null;
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {cabins.map((cabin: any) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}
