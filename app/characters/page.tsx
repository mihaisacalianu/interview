// "use client"
import React from 'react';
import Image from 'next/image';
import { getCharacters } from '@/actions';
import { CharactersType } from '@/types/types';
// import { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const CharactersPage = async () => {

  // tranfosrmed the way I fecth data to match server actions and still left initial code bellow

  const charactersData: CharactersType[] = await getCharacters();

  // const [characters, setCharacters] = useState<Characters[]>([]);

  // useEffect(()=>{
  //   const getData = async () =>{
  //   const response = await fetch("https://rickandmortyapi.com/api/character");
  //   const data = await response.json();
  //   setCharacters(data.results);
  // }
  //   getData();
  // },[])



  return (
    <div className='grid grid-cols-4 gap-3'>
      {charactersData.map((character)=>{return (
        <Card key={character.id} className=''>
        <CardHeader>
          <Image src={character.image} alt="main card image" width={50} height={50}/>
          <CardTitle>{character.name}</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Status: {character.status}</p>
          <p>Status: {character.species}</p>
        </CardContent>
      </Card>
      )})
      }
    </div>
  )
}

export default CharactersPage
