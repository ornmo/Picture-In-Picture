const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt User to select media strea, pass to video element, then play 
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia(); 
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // Catch Error Here
        console.log('Whoops, something went wrong...', error);
    }
}

button.addEventListener('click', async () => {
    // Disable Button on Click
    button.disabled = true;
    // Start Picture In Picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false;

})

 // On Load
selectMediaStream();