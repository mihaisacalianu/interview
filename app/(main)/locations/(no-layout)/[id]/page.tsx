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
          <CardTitle>{locationData.name}</CardTitle>
          <CardDescription className='mb-6'>
            <h2>Type: {locationData.type}</h2>
          </CardDescription>
        </CardHeader>
        <CardContent className='w-full mb-4'>
          <h3><strong className='text-xl my-6'>Description:</strong></h3>
          <p>Planet Dimensions: {locationData.dimension}</p>
          <h3>Planet Residents:</h3>
          {filteredResidents.map((resident)=>(
              <Card className='grid grid-cols-2 mb-10 p-6 text-center w-[40%] mx-auto' key={resident.id} >
                <CardTitle>
                  {resident.name}
                </CardTitle>
                <Link href={`/characters/${resident.id}`} className='hover:bg-blue-500 text-center text-white bg-blue-400 w-[60%] mx-auto p-2 rounded-md'>View Details</Link>
              </Card>
          ))}
        </CardContent>
      </Card>
    </main>
  )
}

export default LocationDetailsPage;
