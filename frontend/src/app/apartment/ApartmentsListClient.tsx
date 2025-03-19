"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

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


interface ApartmentsListClientProps {
  apartments: Apartment[];
}

export default function ApartmentsListClient({ apartments }: ApartmentsListClientProps) {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState<Apartment[]>(apartments);

  useEffect(() => {
    if (!search) {
      setFiltered(apartments);
      return;
    }

    const lowerSearch = search.toLowerCase();
    const filteredList = apartments.filter((apt) =>
      apt.unitName.toLowerCase().includes(lowerSearch) ||
      apt.unitNumber.toString().toLowerCase().includes(lowerSearch) ||
      apt.project.toLowerCase().includes(lowerSearch)
    );

    setFiltered(filteredList);
  }, [search, apartments]);

  return (
    <>
      <input
        type="text"
        placeholder="Search by unit name, number, or project..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 mb-4 w-full"
      />

      {filtered.length === 0 ? (
        <p>No apartments found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((apt) => (
            <div key={apt.id} className="border p-4 rounded shadow">
              <h2 className="text-xl font-semibold">{apt.unitName}</h2>
              <p>
                <strong>Unit:</strong> {apt.unitNumber}
              </p>
              <p>
                <strong>Project:</strong> {apt.project}
              </p>
              <p>
                <strong>Price:</strong> ${apt.price}
              </p>

              <Link
                href={`/apartment/${apt.id}`}
                className="text-blue-500 hover:underline mt-2 inline-block"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
