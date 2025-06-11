import React from 'react';
import { getEpisodes, getCharacters } from '@/actions';
import { EpisodeType, CharactersType } from '@/types/types';
import { getIdFromUrl } from "../../lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import  Link from 'next/link';

const EpisodesPage = async () => {
  // fetching all episodes
  const episodesData:EpisodeType[] = await getEpisodes();
  // fetching all characters
  const charactersData: CharactersType[] = await getCharacters();
  const characterMap = new Map<number, CharactersType>();
  charactersData.forEach((char) => {
    characterMap.set(char.id, char);
  });
  const episodeWithChObjects = episodesData.map((episode) => {
    const characterObjs = episode.characters.map((url) => {
      const id = getIdFromUrl(url);
      return characterMap.get(id);
    }).filter(Boolean) as CharactersType[];
    return {
      ...episode,
      characters: characterObjs,
    };
  });

  return (
    <div className='w-60% mx-auto grid grid-cols-4 gap-4 m-10'>
      {episodeWithChObjects.map((episod)=>{return (
            <Link key={episod.id} href={`/episodes/${episod.id}`}>
              <Card key={episod.id} className='w-full'>
              <CardHeader>
                <CardTitle>{episod.name}</CardTitle>
                <CardDescription>Air Date: {episod.air_date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Episode number: {episod.episode}</p>
              </CardContent>
            </Card>
            </Link>
            )})
            }
    </div>
  )
}

export default EpisodesPage
