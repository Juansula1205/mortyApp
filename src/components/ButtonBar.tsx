import React from "react";
import { Button } from "./ui/button";
import { MdArrowBackIos } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

const ButtonBar = () => {
  // const handleNext = () => {};
  // const handleBack = () => {};
  return (
    <div className="flex flex-row justify-center w-full mx-auto my-2">
      <Button>
        <MdArrowBackIos />
      </Button>
      <p>Hola</p>
      <Button>
        <IoIosArrowForward />
      </Button>
    </div>
  );
};

export default ButtonBar;
