import "./App.css";
import { Button, TextInput } from "flowbite-react";
import { useQuery, gql } from "@apollo/client";
import PodcastView from "./components/podcast";
import { GET_PODCAST_SERIES, temp } from "./requests";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
function App() {
  const podcasts = temp;
  const [searchText, setSearchText] = useState("");
  // const { data, loading, error } = useQuery(GET_PODCAST_SERIES);
  // if (loading) return <p>Loading...</p>;
  // if (error) {
  //   console.log(error);
  //   return <p>Error :( </p>
  // };
  // console.log(data.getPodcastSeries);
  // podcasts = data.getPodcastSeries

  return (
    <div className="App">
      <div class="flex">
        <TextInput
          id="search"
          placeholder="search..."
          type="text"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button class="p-2" onClick={() => console.log(searchText)}>
          <MagnifyingGlassIcon class="w-6 h-6"></MagnifyingGlassIcon>
        </Button>
      </div>
      <ul role="list" class="divide-y divide-gray-100">
        <li>
          <PodcastView podcast={podcasts}></PodcastView>
        </li>
        <li>
          <PodcastView podcast={podcasts} isLiked={true}></PodcastView>
        </li>
      </ul>
    </div>
  );
}

export default App;
