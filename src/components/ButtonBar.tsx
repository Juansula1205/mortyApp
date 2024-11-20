


import { ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "./ui/button";
  export const  ButtonBar = ({totalPages,setPages}:{setPages:React.Dispatch<React.SetStateAction<number>>,totalPages:number}) => {
    
    const handlePrev = () => {
        if (totalPages > 1) {
            setPages((prev) => prev - 1);
        
        }
      };
    
      const handleNext = () => {
        if (totalPages) {
            setPages((prev) => prev + 1);
    
        }
      };
  return (
    <>
    <div className='flex mx-auto my-2'>
    <Button  size="icon" onClick={handlePrev} className="bg-slate-900 text-white">
      <ChevronLeft className="h-4 w-4" />
    </Button>
    <p className="p-2 h-10 text-center w-8 bg-slate-900 text-white rounded-sm mx-2 border border-black ">{totalPages}</p>
    <Button size="icon" className="bg-slate-900 text-white" onClick={handleNext}>
      <ChevronRight className="h-4 w-4" />
    </Button>
  </div>
  </>
  )
}

