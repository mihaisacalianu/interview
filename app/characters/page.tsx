"use client"
import React from 'react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type Characters = {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: string,
  location: string[],
  image: string,
  episode: string[],
  url: string,
  created: string,
}
const CharactersPage = () => {

  const [characters, setCharacters] = useState<Characters[]>([]);

  useEffect(()=>{
    const getData = async () =>{
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    setCharacters(data.results);
  }
    getData();
  },[])



  return (
    <div className='grid grid-cols-4 gap-3'>
      {characters.map((character)=>{return (
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
