export const revalidate = 0;

import { notFound } from "next/navigation";
import Link from "next/link";
import { ReactElement } from "react";

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

async function getApartment(id: string): Promise<Apartment | null> {
  const res = await fetch(`http://backend:5000/api/apartments/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) return null;
  return res.json();
}

export default async function ApartmentDetails({
  params,
  searchParams,
}: any): Promise<ReactElement> {
  const apartment = await getApartment(params.id);
  if (!apartment) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4">
      <Link
        href="/apartment"
        className="text-blue-500 hover:underline mb-4 inline-block"
      >
        &larr; Back to Listings
      </Link>
      <h1 className="text-3xl font-bold mb-2">{apartment.unitName}</h1>
      <p>
        <strong>Unit Number:</strong> {apartment.unitNumber}
      </p>
      <p>
        <strong>Project:</strong> {apartment.project}
      </p>
      <p>
        <strong>Price:</strong> ${apartment.price}
      </p>
      {apartment.description && (
        <p className="mt-4">{apartment.description}</p>
      )}
    </div>
  );
}
