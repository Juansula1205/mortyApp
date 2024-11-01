import { useEffect, useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import CustomCard from "../../components/custom-card";
import axios from "axios";
// const Artists = [{id:1,name:"Travis",description:"Nació el 30 de abril de 1991 en Houston, Texas. Creció en Missouri City, una zona suburbana de clase media que limita con el suroeste de Houston. Webster vivió con su abuela, pero luego se mudó a los suburbios, donde su padre tenía su propio negocio.",url:"/fein.jpg",footer:"Fein"},
//   {id:2,name:"Kendrick",description:"Criado en Compton, California, Lamar desarrolló un interés por la música y la poesía a una temprana edad. Inspirado por presenciar en vivo como Tupac y Dr. Dre grababan el video musical de California Love en su ciudad, Lamar decidió perseguir una carrera como un rapero.",url:"/kendrick.jpg",footer:"Pride"},
//   {id:3,name:"Metroo",description:"Criado en St. Louis, Wayne comenzó una carrera de producción en la escuela secundaria y se hizo más conocido por sus exitosas grabaciones con artistas de rap de Atlanta como Future, 21 Savage, Gucci Mane y Migos a mediados de la década de 2010.",url:"/metro.jpg",footer:"Overdue"}]
const baserUrl: string = "https://rickandmortyapi.com/api/character";
export const getCharacters = (page: number) => {
  return fetch(`${baserUrl}/?page=${page}`)
    .then((res) => res.json())
    .then((data) => {
      return data.results;
    });
};
export const getCharacterById = (id: string) => {
  return fetch(`${baserUrl}/${id}`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};
import ButtonBar from "../../components/ButtonBar";
import { Link } from "react-router-dom";

export function ButtonIcon() {
  return (
    <Button variant="outline" size="icon">
      <IoChevronBackOutline className="h-4 w-4 text-black" />
    </Button>
  );
}

const Home = () => {
  const [page, setpage] = useState(1);
  const [characterId, setcharacterId] = useState(1);
  const [personajes, setpersonajes] = useState([]);
  useEffect(() => {
    getCharacters(page).then((res) => {
      setpersonajes(res);
    });
  }, [page]);

  console.log(personajes);
  return (
    <div className="flex flex-col gap-4">
      <ButtonBar />
      <div className="flex flex-col sm:flex-row gap-4 sm:flex-wrap">
        {personajes?.map((x) => (
          <Link to={`/character-detail/${x.id}`} key={x.id}>
            <CustomCard data={x} />
          </Link>
        ))}
      </div>
      <ButtonBar />
    </div>
  );
};

export default Home;
