import React from 'react';
import { getLocations } from '@/actions';
import { getCharacters, getCharacter } from '@/actions';
import { LocationType, CharactersType, ResidentWithName, LocationWithBothResidents } from '@/types/types';
import  Link  from 'next/link';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { console } from 'inspector';

// transforms url to ids
const getIdFromUrl = (url: string): number => {
  const parsedUrl = url.split('/').filter(Boolean).pop();
  return parsedUrl ? parseInt(parsedUrl, 10) : 0;
};

const getResidentDetails = async (residentUrls: string[]): Promise<ResidentWithName[]> => {
  const detailPromises = residentUrls.map(async (residentUrl) => {
    const id = getIdFromUrl(residentUrl);
    try {
      const character: CharactersType = await getCharacter(id);
      return {
        url: residentUrl,
        name: character.name,
        id: id
      };
    } catch (error) {
      console.error(`Error fetching character ${id}:`, error);
      return {
        url: residentUrl,
        name: `Character ${id}`,
        id: id
      };
    }
  });

  return await Promise.all(detailPromises);
};
const Locations = async () => {
  // Get original location data
  const locationData: LocationType[] = await getLocations();

  // Transform data to include both original residents URLs and resident details
  const locationDataWithBoth: LocationWithBothResidents[] = await Promise.all(
    locationData.map(async (location) => {
      const residentDetails = await getResidentDetails(location.residents);
      return {
        ...location, // keeps all original properties including residents array (URLs)
        residentNames: residentDetails.map(r => r.name), // array of just names
        residentDetails: residentDetails // array of objects with url, name, and id
      };
    })
  );



  return (
    <div>
      <div className='w-3/5 mx-auto flex flex-col justify-center items-center gap-4'>
        {locationDataWithBoth.map((location) => {
          return (
            <Card key={location.id} className='w-full max-w-2xl'>
              <CardHeader>
                <CardTitle>{location.name}</CardTitle>
                <CardDescription>Type: {location.type}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  <strong>Dimension:</strong> {location.dimension === "unknown" ? "Unknown dimension" : location.dimension}
                </p>

                {/* Residents with names that link to original API URLs */}
                {location.residentDetails.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Residents:</h4>
                    <ul className="space-y-1">
                      {location.residentDetails.map((resident) => (
                        <li key={resident.id}>
                          <a
                            href={resident.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                          >
                            {resident.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Show message if no residents */}
                {location.residentDetails.length === 0 && (
                  <p className="text-gray-500">No known residents</p>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export default Locations;
