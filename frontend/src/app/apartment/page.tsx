export const revalidate = 0;

import Link from "next/link";
import ApartmentsListClient from "./ApartmentsListClient"; // import the client component

interface Apartment {
  id: number;
  unitName: string;
  unitNumber: string;
  project: string;
  description?: string;
  price: number;
  createdAt: string;
  updatedAt: string;
}

export default async function ApartmentsList() {
  const res = await fetch("http://backend:5000/api/apartments", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch apartments");
  }

  const apartments: Apartment[] = await res.json();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Apartment Listings</h1>

      <ApartmentsListClient apartments={apartments} />
    </div>
  );
}
