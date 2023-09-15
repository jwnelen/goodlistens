import { useState } from "react";
// import { HeartIcon } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/outline";

const PodcastView = ({ podcast, isLiked }) => {
  const [liked, setLiked] = useState(isLiked);

  return (
    <div className="flex p-2">
      {podcast.imageUrl ? (
        <img
          className="w-40 h-40 rounded object-contain"
          src={podcast.imageUrl}
        ></img>
      ) : (
        <div className="px-20 h-40 flex align-middle font-bold justify-center content-center rounded bg-gray-100"></div>
      )}
      <div className="text-left mx-4">
        <h1 className="font-bold">{podcast.name || ""}</h1>
        <p>{podcast.description}</p>
      </div>
      <div className="" onClick={() => setLiked(!liked)}>
        {liked ? (
          <HeartIcon className="h-6 w-6 text-red-500 fill-red-500" />
        ) : (
          <HeartIcon className="h-6 w-6" />
        )}
      </div>
    </div>
  );
};

export default PodcastView;
