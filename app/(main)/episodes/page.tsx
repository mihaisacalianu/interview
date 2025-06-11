import React from 'react';
import { getEpisodes } from '@/actions';
import { EpisodeType } from '@/types/types';
import FilteredEpisodes from '@/components/FilteredEpisodes';

const EpisodesPage = async () => {
  // fetching all episodes
  const episodesData:EpisodeType[] = await getEpisodes();
  return (
    <div className='w-[80%] mx-auto'>
      <FilteredEpisodes episodes={episodesData}/>
    </div>
  )
}

export default EpisodesPage
