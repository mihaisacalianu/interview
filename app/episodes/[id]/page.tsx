import { PageProps } from '@/types/types'
import React from 'react';
import { getEpisode, getCharacters } from '../../../actions/index';
import { CharactersType, EpisodeType } from '../../../types/types'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { getIdFromUrl } from "../../../lib/utils";

const EpisodShowPage = async({params}:PageProps) => {
  // get param id
  const {id} = await params;
  // get the episod with the specific id
  const episodData:EpisodeType = await getEpisode(parseInt(id));
  // get array of characters id
  const episodCharacters = episodData.characters.map((episod)=>getIdFromUrl(episod));
  // get characters
  const characters:CharactersType[] = await getCharacters();
  // filter characters
  const filteredCharacters: CharactersType[] = characters.filter((character)=> episodCharacters.includes(character.id));

  return (
    <main className='w-[80%] mx-auto mt-10'>
        <Card className='flex '>
        <CardHeader className='w-[30%]'>
          <CardTitle>{episodData.name}</CardTitle>
          <CardDescription className='mb-6'>
            {/* <h2>Species: {episodData.species}</h2> */}
          </CardDescription>
        </CardHeader>
        <CardContent className='w-[70%] mb-4'>
          <h3>Description:</h3>
          <p>Episod air date: {episodData.air_date}</p>
          {/* <p>Status: {caracterData.status}</p> */}
          <h3>Characters:</h3>
          {filteredCharacters.map((character)=>(
              <Card className='flex gap-4' key={character.id} >
                <CardTitle>
                  {character.name}
                </CardTitle>
                <Link href={`/characters/${character.id}`}>View Details</Link>
              </Card>
          ))}
        </CardContent>
      </Card>
    </main>
  )
}

export default EpisodShowPage
