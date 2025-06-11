"use server"

export const getEpisodes = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/episode");
  const data = await response.json();
  return data.results;
}
