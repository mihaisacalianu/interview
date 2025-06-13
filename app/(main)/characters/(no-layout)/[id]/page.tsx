
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
    <section className='w-[80%] mx-auto mt-10'>
        <Card className='flex flex-col bg-[#EFEFEF] p-6'>
        <CardHeader className='w-[100%] mx-auto flex justify-between items-center mb-10 gap-26'>
          <Image src={caracterData.image} alt="main card image" width={550} height={250} className='w-[40%] rounded-md shadow-md'/>
          <CardDescription className='flex flex-col w-[60%] text-xl gap-3'>
          <CardTitle className='text-4xl'>{caracterData.name}</CardTitle>
            <h2>Species: {caracterData.species}</h2>
            <h3 className='text-3xl text-[#2C764C]'><strong>Description:</strong></h3>
          <p>Gender: {caracterData.gender}</p>
          <p>Status: {caracterData.status}</p>
          <div aria-label='location container' className='flex justify-between w-[50%]'>
            <h3>Location:</h3>
            <Link href={`/locations`} className='hover:text-[#2C764C]'>{caracterData.location.name}</Link>
          </div>
          </CardDescription>
        </CardHeader>
          <h2 className='text-3xl font-bold tracking-wider text-center text-[#2C764C]'>Episodes: </h2>
        <CardContent className='grid grid-cols-3 gap-3 '>
          {filteredEpisodes.map((episode)=>(
              <Card className='flex my-5 w-[90%] mx-auto p-6' key={episode.id} >
                <CardTitle className=' flex gap-2 items-center justify-center text-center'>
                  <h3 className='text-lg tracking-wider text-[#2C764C]'>{episode.episode}:</h3>
                  <p className='text-zinc-500'>{episode.name}</p>
                </CardTitle>
                <Link href={`/episodes/${episode.id}`} className='hover:bg-[#DD3A0A] text-center text-white bg-[#EB862D] w-40%] mx-auto p-2 rounded-md'>View Details</Link>
              </Card>
          ))}
        </CardContent>
      </Card>
    </section>
  )
}

export default CharacterPage
