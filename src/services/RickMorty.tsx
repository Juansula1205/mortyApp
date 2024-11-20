
// Example of typing the getCharacterById function
import axios from 'axios';

export const getCharacterById = async (id: number): Promise<Character> => {
  const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
  return response.data; // Ensure this matches your Character interface
};
