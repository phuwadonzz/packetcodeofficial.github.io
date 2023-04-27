let imageIndex = 0; // initialize the index to 0

function btn() {
    let image = document.getElementById('image');
    let images = ['C:\\Users\\USER\\Desktop\\web test\\img\\Black.jpg', 'C:\\Users\\USER\\Desktop\\web test\\img\\Green.jpg',
    'C:\\Users\\USER\\Desktop\\web test\\img\\Yellow.jpg', 'C:\\Users\\USER\\Desktop\\web test\\img\\Gray.jpg',
    'C:\\Users\\USER\\Desktop\\web test\\img\\Orange.jpg', 'C:\\Users\\USER\\Desktop\\web test\\img\\Violet.jpg',
    'C:\\Users\\USER\\Desktop\\web test\\img\\Red.jpg', 'C:\\Users\\USER\\Desktop\\web test\\img\\Blueambush.jpg']; 

    // set the source of the image to the current index of the images array
    image.src = images[imageIndex];

    // increment the index and reset it to zero if it reaches the end of the array
    imageIndex++;
    if (imageIndex >= images.length) {
        imageIndex = 0;
    }
}
