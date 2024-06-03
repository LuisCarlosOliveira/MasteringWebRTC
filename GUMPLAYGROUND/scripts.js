const videoEl = document.querySelector("#my-video"); // Get the video element
let stream = null; // Initialize the stream variable

const constraints = {
    video: true,
    audio: true
}

const getMicAndCamera = async (e) => {
    try {
        stream = await navigator.mediaDevices.getUserMedia(constraints)
        console.log("Got the stream");
        console.log(stream);
        changeButtons([
            "green", "blue", "blue", "grey", "grey", "grey", "grey", "blue"
        ]);
    } catch (err) {
        //user denied access
        console.log("User denied access to camera and microphone");
        console.log(err);
        alert("Access to camera and microphone denied. Please allow access to proceed.");
    }
}

const showMyFeed = (e) => {
    if (!stream) {
        alert("Stream not available. Click 'Share' to get the stream first");
        return;
    }
    videoEl.srcObject = stream; // Set the video element's source to the stream
    const tracks = stream.getTracks(); // Get the tracks from the stream
    console.log(tracks); // Log the tracks to the console
    changeButtons([
        "green", "green", "blue", "blue", "blue", "grey", "grey", "blue"
    ]);
};

const stopMyFeed = (e) => {
    if (stream) {
        const tracks = stream.getTracks(); // Get the tracks from the stream
        tracks.forEach(track => track.stop()); // Stop each track
        videoEl.srcObject = null; // Clear the video element's source
        stream = null; // Reset the stream variable
    } else {
        alert("No active stream to stop.");
    }
    changeButtons([
        "blue", "grey", "grey", "grey", "grey", "grey", "grey", "grey"
    ]);
};

document.querySelector("#share").addEventListener("click", e => getMicAndCamera(e));
document.querySelector("#show-video").addEventListener("click", e => showMyFeed(e));
document.querySelector("#stop-video").addEventListener("click", e => stopMyFeed(e));