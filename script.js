//import axios  from 'axios';
import * as Axios from 'axios';
 const axios = Axios.axios;
//import {textWhat} from 'extension'


//Copy Paste the text from the ActiveTextDocument
// document.addEventListener('DOMContentLoaded',function(){
//     navigator.clipboard
//         .readText()
//         .then(
//             cliptext =>
//                 (document.getElementById('textarea').textContent = cliptext),
//                 err => console.log(err)
//         );

    
        
// });


// Using async/await
(async function () {
  try {
    // Await for the fetch promise to resolve
    let response = await fetch("https://webhook.site/8fde794f-541f-478c-a655-3c4c13d93867");
    // Await for the json promise to resolve
    let data = await response.blob();
    // Log the data after it is available
    console.log("here");
    console.log(data);
  } catch (error) {
    // Handle errors
    console.error(error);
  }
}
)();


//Using fetch api to send the currentText to this file
// fetch("https://0742-2001-df4-e000-3fc1-8587-55d8-12b9-5d9e.ngrok-free.app/script.js") // Append the file name to the URL
//   .then(response => response.text()) // Parse the response as text
//   .then(data => {
//     // Handle the data
//     console.log(data); // Hello, world!
//     document.getElementById('textarea').textContent = data;
//   })
//   .catch(error => {
//     // Handle the error
//     console.error(error);
//   });


  // axios.get('https://webhook.site/8fde794f-541f-478c-a655-3c4c13d93867')
  // .then(response => {
  //   console.log(response.data.string);
  //   document.getElementById('textarea').textContent = response.data.string;
  // })
  // .catch(error => {
  //   console.error(error);
  // });

  document.getElementById('textarea').textContent = textWhat;