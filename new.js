//import axios from 'axios';
// or
const axios = require('axios');


let myJson = "hello world"
  
  let postUrl = "https://webhook.site/8fde794f-541f-478c-a655-3c4c13d93867";
  

let geturl;
  
//   fetch(postUrl, {
//     method: "POST",
//     headers: { "Content-Type": "text/plain" },
//     body: myJson,
//   })
//     .then((response) => {
//       if (response.ok) {
//         console.log("POST request successful");
//         return response.text();
//         //getUrl =  "https://webhook.site/token/8fde794f-541f-478c-a655-3c4c13d93867/request/" + id;
//       } else {
//         throw new Error(`HTTP error: ${response.status}`);
//       }
//     }).then((data => console.log(data)))
//     .catch((error) => {
//       console.error(error);
//     });

    axios.post('https://webhook.site/8fde794f-541f-478c-a655-3c4c13d93867', {
        title: 'Hello World',
        body: 'This is a new post'
      })
        .then(response => {
          // handle success
          console.log(response.data);
        })
        .catch(error => {
          // handle error
          console.error(error);
        });


      

    // Replace these values with your own
const token_id = "8fde794f-541f-478c-a655-3c4c13d93867";

// Fetch the raw content of the last request sent to the webhook.site URL
// fetch('https://webhook.site/token/'+ token_id +'/request/latest/raw', {
//   method: 'GET',
//   headers: {
//     'Accept': 'application/json',
//   }
// })
// .then(response => response.json()) // Parse the response as JSON
// .then(data => {
//   // Use the raw content here
//   console.log(data);
// })
// .catch(error => {
//   // Handle any errors here
//   console.error(error);
// });

axios.get('https://webhook.site/8fde794f-541f-478c-a655-3c4c13d93867')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

    //window.open('https://webhook.site/token/'+ token_id +'/request/latest/raw');
  
//   fetch(postUrl)
//     .then((response) => {
//       if (response.ok) {
//         return response.text();
//       } else {
//         throw new Error(`HTTP error: ${response.status}`);
//       }
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
  