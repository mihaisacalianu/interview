
import React from 'react';
import { getCharacter, getEpisodes } from '@/actions';
import { PageProps, CharactersType, EpisodeType } from '@/types/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { getIdFromUrl } from "../../../../../lib/utils";
const CharacterPage = async({ params }: PageProps) => {
  // get param id
  const {id} = await params;
  // data of the character with this id
  const caracterData:CharactersType = await getCharacter(parseInt(id));
  // get an array with all the id of episodes the character played in
  const characterEpisodes: number[] = caracterData.episode.map((episod)=>getIdFromUrl(episod));
  // fetch all episodes
  const episodes:EpisodeType[] = await getEpisodes();
  // filter episodes for a specific character
  const filteredEpisodes: EpisodeType[] = episodes.filter((episod)=> characterEpisodes.includes(episod.id))

  return (
    <main className='w-[80%] mx-auto mt-10'>
        <Card className='flex '>
        <CardHeader className='w-[90%] mx-auto flex flex-col justify-center items-center'>
          <Image src={caracterData.image} alt="main card image" width={450} height={150} className='w-[50%]'/>
          <CardTitle>{caracterData.name}</CardTitle>
          <CardDescription className='mb-6'>
            <h2>Species: {caracterData.species}</h2>
          </CardDescription>
        </CardHeader>
        <CardContent className='w-[80%] mx-auto'>
          <h3 className='text-2xl text-red-600'><strong>Description:</strong></h3>
          <p>Gender: {caracterData.gender}</p>
          <p>Status: {caracterData.status}</p>
          <h3>Location:</h3>
          <Link href={caracterData.location.url}>{caracterData.location.name}</Link>
          <h3>Episodes: </h3>
          {filteredEpisodes.map((episode)=>(
              <Card className='flex my-5 w-[60%] mx-auto' key={episode.id} >
                <CardTitle className='text-xl text-center'>
                  {episode.name}
                </CardTitle>
                <Link href={`/episodes/${episode.id}`} className='hover:bg-blue-500 text-center text-white bg-blue-400 w-[20%] mx-auto p-2 rounded-md'>View Details</Link>
              </Card>
          ))}
        </CardContent>
      </Card>
    </main>
  )
}

export default CharacterPage
