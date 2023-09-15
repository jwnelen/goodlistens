// import { HeartIcon } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/outline";

const PodcastView = ({ podcast, isLiked }) => {
  console.log(podcast);
  return (
    <div className="flex p-2">
      <img className="w-40 rounded" src={podcast.imageUrl}></img>
      <div className="text-left p-2 ">
        <h1 className="font-bold">{podcast.name}</h1>
        <p>{podcast.description}</p>
      </div>
      <div>
        {isLiked ? (
          <HeartIcon className="h-6 w-6 text-red-500 fill-red-500" />
        ) : (
          <HeartIcon className="h-6 w-6" />
        )}
      </div>
    </div>
  );
};

export default PodcastView;
