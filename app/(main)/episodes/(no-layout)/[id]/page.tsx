import { PageProps } from '@/types/types'
import React from 'react';
import { getEpisode, getCharacters } from '../../../../../actions/index';
import { CharactersType, EpisodeType } from '../../../../../types/types'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { getIdFromUrl } from "../../../../../lib/utils";

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
        <Card className='flex'>
        <CardHeader className='w-full'>
          <CardTitle className='text-2xl text-center '>{episodData.name}</CardTitle>
          <CardDescription className='mb-6 w-[90%] mx-auto'>
          </CardDescription>
        </CardHeader>
        <CardContent className='w-[70%] mb-4 mx-auto'>
          <h3>Description:</h3>
          <p>Episod air date: {episodData.air_date}</p>
          <h3>Characters:</h3>
          {filteredCharacters.map((character)=>(
              <Card className='flex my-6 p-4 w-[50%] mx-auto' key={character.id} >
                <CardTitle>
                  {character.name}
                </CardTitle>
                <Link href={`/characters/${character.id}`} className='hover:bg-blue-500 text-center text-white bg-blue-400 w-[30%] mx-auto p-2 rounded-md'>View Details</Link>
              </Card>
          ))}
        </CardContent>
      </Card>
    </main>
  )
}

export default EpisodShowPage
