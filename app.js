// This code is here to make a scrolling image "slideshow"


// Array with all of the images in HTML
const images = [
    img1 = { id: "img1" },
    img2 = { id: "img2" }
];

// A tracker so the code knows which image it is on
let currentImg = 0;

document.addEventListener("DOMContentLoaded", function() { // When webpage loaded

    for (let i = 0; i < 99999; i++) { // bassically an infinite loop
        setInterval( // Every 5000 ms
            function slideImages() { // do this function

                if ( currentImg === (images.length - 1)) { // if the current image is at the end
                    
                    document.getElementById(images[currentImg].id).style.display = "none"; // change the actual <img> in the webpage to hidden
            
                    document.getElementById(images[0].id).style.display = "block"; //change the actual <img> in the webpage to show
        
                    currentImg = 0;
                } else {
                    console.log(images.length);
                    document.getElementById(images[currentImg].id).style.display = "none"; // change the actual <img> in the webpage to hidden
            
                    document.getElementById(images[currentImg++].id).style.display = "block";

                    currentImg++;
                }
            },
        1000);
    };
});



