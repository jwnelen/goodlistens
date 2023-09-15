import './App.css';
import { Button } from 'flowbite-react';
import { useQuery, gql } from "@apollo/client";
import PodcastView from './components/podcast';

const GET_PODCAST_SERIES = gql`
{
  getPodcastSeries(name:"The Daily"){
    uuid
    name
    itunesId
    description
    imageUrl
    
  }
} 
`;

function App() {
  const { data, loading, error } = useQuery(GET_PODCAST_SERIES);
  if (loading) return <p>Loading...</p>;
  if (error) {
    console.log(error);
    return <p>Error :( </p>
  };
  console.log(data.getPodcastSeries);

  return (
    <div className="App">
      <h1 className="text-small font-bold underline">
      Hello world!
    </h1>
    <PodcastView podcast={data.getPodcastSeries}></PodcastView>
    {/* <img width={300} src={data.getPodcastSeries.imageUrl} alt='img'></img> */}
    {/* <p>{`${JSON.stringify(data.getPodcastSeries)}`}</p> */}
    <Button>Click me</Button>
    </div>
  );
}

export default App;
