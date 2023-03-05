// function range(start, end, step=1) {
//   let array = [];
//   for (let i = start; i < end; ++i) {
//     if (!(i % step)) {
//       array.push(i);
//     }
//   }
//   return array;
// }

// const fnames = range(0, 26);
// const images = [];

// fnames.forEach((item) => {
//   images.push(`imgs/${item}.jpg`)
// })

// const chosenImage = images[parseInt(Math.random() * images.length-1)];

// document.addEventListener("DOMContentLoaded", function() {
//   //const bgImg = document.createElement('img');
//   //bgImg.id = 'bg-img';
//   //bgImg.src = chosenImage;
//   //document.body.appendChild(bgImg);
//   // document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)), url(${chosenImage})`;
// });

document.addEventListener("DOMContentLoaded", function() {
  //const bgImg = document.createElement('img');
  //bgImg.id = 'bg-img';
  //bgImg.src = chosenImage;
  //document.body.appendChild(bgImg);
  // document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)), url(${chosenImage})`;
  document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)), url(https://source.unsplash.com/random/)`;
});