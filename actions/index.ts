"use server"

export const getCharacters = async () => {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const charactersData = await response.json();
    return charactersData.results;
  } catch (error) {
    console.log('There was an error',error);
  }
}

export const getCharacter = async (id: number) => {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const characterData = await response.json();
    return characterData;
  } catch (error) {
    console.error(`Error fetching character ${id}:`, error);
    throw error;
  }
}




export const getEpisodes = async () => {
  try{
    const response = await fetch("https://rickandmortyapi.com/api/episode");
    const data = await response.json();
    return data.results;
  }catch(error){
    console.log('There was an error',error);
  }
}

export const getLocations = async () => {
  try{
    const response = await fetch('https://rickandmortyapi.com/api/location');
    const locationData = await response.json();
    return locationData.results;
  }catch(error){
    console.log('There was an error',error);
  }
}


// const getResidentsForLocation = async (residents: string[]): Promise<{ id: number; name: string; url: string }[]> => {
//     const residentPromises = residents.map(async (residentUrl) => {
//       const residentId = getIdFromUrl(residentUrl);
//       try {
//         const character: CharactersType = await getCharacter(residentId);
//         return {
//           id: residentId,
//           name: character.name,
//           url: residentUrl
//         };
//       } catch (error) {
//         console.error(`Error fetching character ${residentId}:`, error);
//         return {
//           id: residentId,
//           name: `Character ${residentId}`,
//           url: residentUrl
//         };
//       }
//     });

//     return Promise.all(residentPromises);
//   };
