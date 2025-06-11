import React from 'react';
import { getLocations } from '@/actions';
import { LocationType } from '@/types/types';
import FilteredLocations from '@/components/FilteredLocations';

const Locations = async () => {
  const locationData: LocationType[] = await getLocations();
  return (
    <div className='w-full'>
      <FilteredLocations locations={locationData} />
    </div>)
};

export default Locations;
