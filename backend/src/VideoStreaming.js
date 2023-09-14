//create a new express application
const app = express();

//create a route to handle the live streaming video
app.get('/live-stream', (req, res) => {
    //Get the user's location
    const userLocation = req.query.location;

    //get the live streaming video url
    const videoUrl = getLiveStreamVideoUrl(userLocation);

    //start streaming the video
    res.sendStream(videoUrl);
});

//create a function to get the live streaming video URL
function getLiveStreamVideoUrl(userLocation) {
    //get the list of live streaming videos for the user's locatiion
    const videos = getLiveStreamingVideos(userLocation);

    //choose the first video in the list
    const video = videos[0];

    //return the video url
    return video.url;
}

//create a function to get a list of live streaming videos for a given location
function getLiveStreamingVideos(userLocation) {
    // Make an API request to get the list of live streaming videos
    const response = await fetch(`https://api.accuweather.com/videos/live?location=${userLocation}`);
    
}