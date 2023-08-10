import Result from "@/Components/Result";

const API_KEY = process.env.API_KEY;

export default async function Home({searchParams}) {
  const genre=searchParams.genre ||"fetchTrending";
  // ww wnt to get the information from the Api
  const res = await fetch(
     `https://api.themoviedb.org/3/${genre==="fetchTopRated"?"movie/top_rated":"trending/all/week"}?api_key=${API_KEY}&language=en-US&page=1`,{next:{revalidate:10000}});
    // `https://api.themoviedb.org/3/${genre==="fetchTopRated"?"movie/top_rated":"trending/all/week"}?api_key=${API_KEY}&language=en-US&page=1`,{next:{revalidate:10000}});
 if(!res.ok){
  throw new Error("failed to fetch data");//this will caughtght the error  page and passed to the page as props
 }
 const data=await res.json();
 const results=data.results;
//  console.log(data)
  return (
  <div>
    <Result  results={results}/>
  </div>
    
  )
}
