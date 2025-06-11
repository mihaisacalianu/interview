import React from 'react';
import { getEpisodes } from '@/actions';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


type EpisodeType =  {
      id: number,
      name: string,
      air_date: string,
      episode: string,
      characters: string[],
      url: string,
      created: string
    }

const EpisodesPage = async () => {
  const episodesData:EpisodeType[] = await getEpisodes();
  return (
    <div className='w-60% mx-auto flex flex-col justify-center items-center gap-4'>
      {episodesData.map((episod)=>{return (
              <Card key={episod.id} className='w-[40%]'>
              <CardHeader>
                <CardTitle>{episod.name}</CardTitle>
                <CardDescription>Air Date: {episod.air_date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Episode number: {episod.episode}</p>
              </CardContent>
            </Card>
            )})
            }
    </div>
  )
}

export default EpisodesPage
