import React, { useState, useEffect } from "react";
import { CustomeCard } from "@/components/ui/Custome-card";
import axios from "axios";
import { ButtonBar } from "./components/ButtonBar";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { CharacterType } from "./components/PersonalPage";
// Sample Image Array with placeholder descriptions

function Chantre() {
  // Start from page 1
  const [personajes, setPersonajes] = useState<CharacterType[]>([]);
  const [pages, setPages] = useState(1);

  // State to store total pages

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${pages}`)
      .then((response) => {
        setPersonajes(response.data.results);
        // Set the total pages from the API
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, [pages]);

  // Handler functions for buttons

  return (
    <>
      <div className="flex flex-col  h-full">
        <ButtonBar totalPages={pages} setPages={setPages} />

        <div className=" mx-auto justify-center flex flex-col gap-4 lg:flex-wrap lg:flex-row">
          {personajes.map((x) => (
            <Link to={`/character/${x.id}`} key={x.id}>
              {" "}
              <CustomeCard data={x} />
            </Link>
          ))}
        </div>
        <ButtonBar totalPages={pages} setPages={setPages} />
      </div>
    </>
  );
}

export default Chantre;
