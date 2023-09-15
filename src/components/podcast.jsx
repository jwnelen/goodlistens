const PodcastView = ({podcast}) => {
    console.log(podcast)
    return (
        <div>
            <h1>{podcast.name}</h1>
            <p>{podcast.description}</p>
        </div>
    );
}

export default PodcastView;