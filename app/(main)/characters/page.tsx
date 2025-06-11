// "use client"
import React from 'react';
import { getCharacters } from '@/actions';
import { CharactersType } from '@/types/types';

import FilteredCharacters from '@/components/FilteredCharacters';

const CharactersPage = async () => {

  // tranfosrmed the way I fecth data to match server actions and still left initial code bellow
  const charactersData: CharactersType[] = await getCharacters();

  return (
    <div className='w-[80%] mx-auto'>
      <FilteredCharacters characters={charactersData}/>
    </div>
  )
}

export default CharactersPage
