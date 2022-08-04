// window.frames[0].postMessage(
//     {
//         target:"viewport",
//         method:"fitBounds", //https://openseadragon.github.io/docs/OpenSeadragon.Viewport.html
//         parameters:[
//             {
//                 _type:"Rect",parameters:[
//                     0.1, //x
//                     0.1, //y
//                     0.5, //w
//                     0.5 //h
//                 ]
//             }
//         ]
//     },
//     "http://localhost:8080"
// );

window.addEventListener("message", (event) => {
    console.log(event.data);
}, false);
