var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch

images[0] = 'images/image1.jpg';
images[1] = 'images/image2.jpg';
images[2] = 'images/image3.jpg';
images[3] = 'images/image4.jpg';
images[4] = 'images/image5.jpg';
images[5] = 'images/image6.jpg';
images[6] = 'images/image7.jpg';
images[7] = 'images/image8.jpg';
images[8] = 'images/image9.jpg';
images[9] = 'images/image10.jpg';
images[10] = 'images/image11.jpg';
images[11] = 'images/image12.jpg';
images[12] = 'images/image13.jpg';
images[13] = 'images/image14.jpg';
images[14] = 'images/image15.jpg';
images[15] = 'images/image16.jpg';
images[16] = 'images/image17.jpg';
images[17] = 'images/image18.jpg';
images[18] = 'images/image19.jpg';
images[19] = 'images/image20.jpg';
images[20] = 'images/image21.jpg';
images[21] = 'images/image22.jpg';
images[22] = 'images/image23.jpg';
images[23] = 'images/image24.jpg';
images[24] = 'images/image25.jpg';
images[25] = 'images/image26.jpg';
images[26] = 'images/image27.jpg';
images[27] = 'images/image28.jpg';

// Change image
function changeImg() {
    document.slide.src = images[i];

    // Check If Index Is Under Max
    if (i < images.length - 1) {
        // Add 1 to Index
        i++;
    } else {
        // Reset Back To O
        i = 0;
    }

    // Run function every x seconds
    setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload = changeImg;