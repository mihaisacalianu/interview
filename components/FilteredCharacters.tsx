'use client';

import { useSearch } from '@/lib/SearchContext';
import { CharactersType } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const FilteredCharacters = ({ characters }: { characters: CharactersType[] }) => {
  const { searchTerm } = useSearch();

  const filtered = characters.filter((char) =>
  char.name.toLowerCase().includes((searchTerm ?? '').toLowerCase())
);

  return (
    <div className='grid grid-cols-4 gap-3'>
      {filtered.map((character) => (
        <Link key={character.id} href={`/characters/${character.id}`}>
          <Card>
            <CardHeader className='text-center'>
              <Image src={character.image} alt={character.name} width={260} height={150} />
              <CardTitle>{character.name}</CardTitle>
            </CardHeader>
            <CardDescription className='mx-6'>Card Description</CardDescription>
            <CardContent>
              <p>Status: {character.status}</p>
              <p>Species: {character.species}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default FilteredCharacters;
