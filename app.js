// This code is here to make a scrolling image "slideshow"


// Array with all of the images in HTML
const images = [
    img1 = { id: "img1" },
    img2 = { id: "img2" },
    img3 = { id: "img3"}
    // Continue here
];


document.addEventListener("DOMContentLoaded", function() { // When webpage loaded

    // A tracker so the code knows which image it is on
    let currentImg = 0;
    

    setInterval( // Every 5000 ms
        function slideImages() { // do this function

            if ( currentImg === (images.length - 1)) { // if the current image is at the end
                
                document.getElementById(images[currentImg].id).style.animation = "fadeOut 1s"; // play animation to make it go away
                setTimeout(() => { // wait for the animation to play...
                    document.getElementById(images[currentImg].id).style.display = "none"; // change the actual <img> in the webpage to hidden

                    document.getElementById(images[0].id).style.display = "block"; //change the actual <img> in the webpage to show
                    document.getElementById(images[0].id).style.animation = "fadeIn 1s";// play animation to make it show up
                    currentImg = 0; // current Item in list
                }, 900);
            } else {
                document.getElementById(images[currentImg].id).style.animation = "fadeOut 1s"; // play animation to make it go away
                setTimeout(() => { // wait for the animation to play...
                    document.getElementById(images[currentImg].id).style.display = "none"; // change the actual <img> in the webpage to hidden
                    document.getElementById(images[currentImg + 1].id).style.display = "block"; // change the new <img> in the webpage to viewable!!!!
                    document.getElementById(images[currentImg + 1].id).style.animation = "fadeIn 1s"; // play animation to make it show up
    
                    currentImg++; // add one to the current item in the list
                }, 900); 
            }
        },
    5000);






});



