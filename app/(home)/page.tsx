import {Metadata} from "next";

export const metadata:Metadata = {
  title: 'Home',
}
// client 컴포넌트에서는 metadata export 할수 없음
// rootlayout가 export default되어 있고, metadata는 export만 되고 있음
// 당연 하게도 default export 객체는 하나만 지정 할수 있기 때문

const URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

async function getMovies() {
    await new Promise((resolve) => setTimeout(resolve, 10000));
    const res = await fetch(URL);
    const json = await res.json();
    return json;
}

export default async function HomePage() {
    const movies = await getMovies();
    return (
        <div>
            { JSON.stringify(movies)}
        </div>
    )
}