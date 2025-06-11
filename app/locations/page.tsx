import React from 'react';
import { getLocations } from '@/actions';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


type LocationType = {
  id: number,
  name: string,
  type: string,
  dimension: string,
  residents: string[],
  url: string,
  created: string
}

const Locations = async () => {

  const locationData:LocationType[] = await getLocations();



  return (
    <div>
     <div className='w-60% mx-auto flex flex-col justify-center items-center gap-4'>
      {locationData.map((location)=>{return (
        <Card key={location.id} className='w-[40%]'>
        <CardHeader>
          <CardTitle>{location.name}</CardTitle>
          <CardDescription>Type: {location.type}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{location.name}: {location.dimension === "unknown" ? "dimension " + location.dimension : location.dimension }</p>
          <ul>
            {location.residents.map((resident)=> <li key={location.id}>{resident}</li>)}
          </ul>
        </CardContent>
      </Card>
      )})
      }
         </div>
    </div>
  )
}

export default Locations
