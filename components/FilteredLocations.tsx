// components/FilteredLocations.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { useSearch } from '@/lib/SearchContext';
import { LocationType } from '@/types/types';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const FilteredLocations = ({ locations }: { locations: LocationType[] }) => {
  const { searchTerm } = useSearch();

  const filtered = locations.filter((location) =>
    location.name.toLowerCase().includes((searchTerm ?? '').toLowerCase())
  );

  return (
    <div className='grid grid-cols-3 gap-4 w-[80%] mx-auto'>
      {filtered.map((location) => (
        <Link key={location.id} href={`/locations/${location.id}`} >
          <Card className='w-full max-w-2xl hover:bg-zinc-100'>
            <CardHeader>
              <CardTitle>{location.name}</CardTitle>
              <CardDescription>Type: {location.type}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                <strong>Dimension:</strong>{" "}
                {location.dimension === "unknown" ? "Unknown dimension" : location.dimension}
              </p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default FilteredLocations;
