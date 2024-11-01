import { useEffect, useState } from "react";
import CustomCard from "../../components/custom-card";
import { getCharacterById } from "../home";
import { useParams } from "react-router-dom";
export type CharacterType = {
  id: string;
  name: string;
  species: string;
  image: string;
};
const CharacterDetail = () => {
  const { id } = useParams();
  const [characterData, setcharacterData] = useState<CharacterType>();
  console.log(id);
  useEffect(() => {
    getCharacterById(id).then((res) => {
      setcharacterData(res);
    });
  }, [id]);

  return (
    <div>
      <CustomCard data={characterData} />
    </div>
  );
};

export default CharacterDetail;
