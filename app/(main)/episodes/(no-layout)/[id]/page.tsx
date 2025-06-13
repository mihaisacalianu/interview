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
import Image from "next/image"
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
        <Card className='flex bg-[#EFEFEF]'>
        <CardHeader className='w-full'>
          <CardTitle className='text-4xl text-center text-[#2C764C] mb-3'>{episodData.name}</CardTitle>
          <CardDescription className='text-2xl text-center'>
          </CardDescription>
        </CardHeader>
        <CardContent className='w-full mb-4'>
          <h3 className='text-2xl my-6 text-[#2C764C] font-bold'>Description:</h3>
          <p>Episod air date: {episodData.air_date}</p>
          <h3 className='text-2xl my-6 text-[#2C764C] font-bold'>Characters:</h3>
          <div aria-label="episode characters container" className='grid grid-cols-3 w-full gap-4'>
            {filteredCharacters.map((character)=>(
                <Card className='grid grid-cols-2 mb-6 p-4 text-center w-full mx-auto' key={character.id} >
                  <Image src={character.image} alt="image of a planet resident" width={100} height={50} className='rounded-md'/>
                  <div aria-label="resident details container" className='flex flex-col gap-3'>
                  <CardTitle className='text-2xl text-[#2C764C] font-bold'>
                    {character.name}
                  </CardTitle>
                  <Link href={`/characters/${character.id}`} className='hover:bg-[#DD3A0A] text-center text-white bg-[#EB862D] w-[80%] mx-auto p-2 rounded-md'>View Details</Link>
                </div>
                </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </main>
  )
}

export default EpisodShowPage
