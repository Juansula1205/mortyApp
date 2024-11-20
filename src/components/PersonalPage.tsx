import React, { useEffect, useState } from "react";
import { CustomeCard } from "./ui/Custome-card";
import { useNavigate, useParams } from "react-router-dom";
import { getCharacterById } from "../services/RickMorty";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "./ui/button";
// Define the Character interface based on your API response
export type CharacterType = {
  id: string;
  name: string;
  species: string;
  gender: string;
  status: string;
  image: string;
  // Add other fields as necessary based on your API response
};

function PersonalPage() {
  const { id } = useParams<{ id: string }>(); // Specify the parameter type
  const [character, setCharacter] = useState<CharacterType>(); // Use the Character type
  const [loading, setLoading] = useState<boolean>(true);
  const navigate=useNavigate()
  const handleNavigate= ()=>{
return navigate(-1)
  }
  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const data = await getCharacterById(Number(id));
        setCharacter(data); // No need to specify type here; data should match Character
      } catch (error) {
        console.error("Error fetching character:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!character) {
    return <div>Character not found</div>;
  }

  return (
    <div className="flex flex-col justify-center mx-auto items-center  ">
          <Button  size="icon" onClick={handleNavigate} className=" bg-slate-900 text-white">
      <ChevronLeft className="h-4 w-4" />
    </Button>
      <CustomeCard data={character} />
    </div>
  );
}

export default PersonalPage;
