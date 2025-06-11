import React from 'react';
import { getEpisodes } from '@/actions';

const EpisodesPage = async () => {
  const data = await getEpisodes();
  console.log(data);

  return (
    <div>
      <h1>Episodes</h1>
    </div>
  )
}

export default EpisodesPage
