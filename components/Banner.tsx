import Image from "next/image";
import { useEffect, useState } from "react";
import { baseUrl } from "../pages";
import { Movie } from "../typings";
import {FaPlay } from 'react-icons/fa'
import {HiInformationCircle} from 'react-icons/hi'
interface props {
  netflixOriginals: Movie[];
}
const Banner = ({ netflixOriginals }: props) => {
  const [movie, setMovie] = useState<Movie | null>();
  console.log(movie);
  useEffect(() => {
    setMovie(
      netflixOriginals[Math.ceil(Math.random() * netflixOriginals.length)]
    );
  }, []);
  return (
    <div className="space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:pb-12">
    <div className="absolute top-0 left-0 -z-10 h-[95vh] w-[98.8vw]">
        <img 
            //   layout="fill"
              src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
            //   objectFit="cover" 
            alt={""}     
               /></div>
                <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        {movie?.overview}
      </p>
      <div className="flex space-x-3">
        <button className="banner-button bg-white text-black"><FaPlay className="h-4 w-4 md:h-7 md:w-7"/>Play</button>
        <button className="banner-button bg-[gray]/70">More Info <HiInformationCircle className="h-5 w-5 md:h-8 md:w-8"/></button>
      </div>
      </div>
  );
};

export default Banner;
