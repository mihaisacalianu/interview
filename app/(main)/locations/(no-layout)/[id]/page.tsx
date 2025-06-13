import React from 'react';
import { getLocation, getCharacters } from '@/actions';
import { PageProps, CharactersType, LocationType } from '@/types/types';
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


const LocationDetailsPage = async({ params }: PageProps) => {
  // get param id
  const {id} = await params;
  // data of the character with this id
  const locationData: LocationType = await getLocation(parseInt(id));
  // get an array with all the id of residentes living in the planet
  const locationResidents = locationData.residents.map((resident)=>getIdFromUrl(resident))
  // fetch all characters
  const characters: CharactersType[] = await getCharacters();
  // filter residents to match location
  const filteredResidents: CharactersType[] = characters.filter((episod)=> locationResidents.includes(episod.id))

  return (
    <main className='w-[80%] mx-auto mt-10'>
        <Card className='flex '>
        <CardHeader className='w-full'>
          <CardTitle className='text-4xl text-[#2C764C] text-center mb-3'>{locationData.name}</CardTitle>
          <CardDescription className='text-2xl text-center'>
            <h2>Type: {locationData.type}</h2>
          </CardDescription>
        </CardHeader>
        <CardContent className='w-full mb-4'>
          <h3><strong className='text-xl my-6'>Description:</strong></h3>
          <p>Planet Dimensions: {locationData.dimension}</p>
          <h3 className='text-2xl my-6 text-[#2C764C] font-bold'>Planet Citizens:</h3>
          {filteredResidents.map((resident)=>(
              <Card className='grid grid-cols-2 mb-6 p-4 text-center w-[35%] mx-auto' key={resident.id} >
                <Image src={resident.image} alt="image of a planet resident" width={100} height={50} className='rounded-md'/>
                <div aria-label="resident details container" className='flex flex-col gap-3'>
                  <CardTitle className='text-2xl text-[#2C764C] font-bold'>
                    {resident.name}
                  </CardTitle>
                  <Link href={`/characters/${resident.id}`} className='hover:bg-[#DD3A0A] text-center text-white bg-[#EB862D] w-[60%] mx-auto p-2 rounded-md'>View Details</Link>
                </div>
              </Card>
          ))}
        </CardContent>
      </Card>
    </main>
  )
}

export default LocationDetailsPage;
