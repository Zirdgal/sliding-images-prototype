How to use this:

1 )  Add images you want to show in the `img` folder

2 ) go to `index.html` and add the <img> tags with as many images u want to show.
    Examples:
        `<img class="sliding-img" id="img1" src="./img/1.png">`
        `<img class="sliding-img" id="img2" src="./img/2.png" style="display: none;">`
    All of them should use class="sliding-img" and the IDs can be self prefrence but its simpler to use numbered IDs, All but the first <img> should use style="display: none;"

3 ) go to `app.js` and the const Images area.
    Add your images with the IDs u used in the <img>'s
    Example: 
        `const images = [
            img1 = { id: "img1" },
            ^          ^
            ^          The value of this should be the ID of your <img>
            This is just a variable with the name img1

            // Repeat for all Images u have
        ];`