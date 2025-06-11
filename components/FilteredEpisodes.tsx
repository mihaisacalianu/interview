'use client';

import { useSearch } from '@/lib/SearchContext';
import { EpisodeType } from '@/types/types';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const FilteredEpisodes = ({ episodes }: { episodes: EpisodeType[] }) => {
  const { searchTerm } = useSearch();

  const filteredEpisodes = episodes.filter((ep) =>
    ep.name.toLowerCase().includes((searchTerm ?? '').toLowerCase())
  );

  return (
    <div className='w-60% mx-auto grid grid-cols-4 gap-4 m-10 '>
      {filteredEpisodes.map((episod) => (
        <Link key={episod.id} href={`/episodes/${episod.id}`}>
          <Card className='w-full hover:bg-zinc-100'>
            <CardHeader>
              <CardTitle>{episod.name}</CardTitle>
              <CardDescription>Air Date: {episod.air_date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Episode number: {episod.episode}</p>
              <p>Characters: {episod.characters.length}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default FilteredEpisodes;
