"use server"

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
