"use client"

import {useEffect, useState} from "react";
import {Metadata} from "next";

//export const metadata:Metadata = {
  //title: 'Home',
  // description: 'The best Movies on the best framework',
//}
// client 컴포넌트에서는 metadata export 할수 없음
// rootlayout가 export default되어 있고, metadata는 export만 되고 있음
// 당연 하게도 default export 객체는 하나만 지정 할수 있기 때문

export default function Page() {
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const res = await fetch('https://nomad-movies.nomadcoders.workers.dev/movies');
        const json = await res.json();
        setMovies(json);
        setIsLoading(false);
    }
    useEffect(() => {
        getMovies();
    }, []);
    return (
        <div>
            {isLoading ? 'loading...': JSON.stringify(movies)}
        </div>
    )
}