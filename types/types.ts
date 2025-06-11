export type LocationType = {
  id: number,
  name: string,
  type: string,
  dimension: string,
  residents: string[],
  url: string,
  created: string
}

export type CharactersType = {
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

export type EpisodeType =  {
      id: number,
      name: string,
      air_date: string,
      episode: string,
      characters: string[],
      url: string,
      created: string
    }
export type ResidentWithName = {
  url: string;
  name: string;
  id: number;
};

export type LocationWithBothResidents = LocationType & {
  residentNames: string[];
  residentDetails: ResidentWithName[];
};
