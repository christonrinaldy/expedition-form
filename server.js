var request = require("request")
// fetch('https://cors-anywhere.herokuapp.com/https://api.rajaongkir.com/starter/cost')

// fetch('https://cors-anywhere.herokuapp.com/https://api.rajaongkir.com/starter/cost',{
//             method: 'POST',
//             headers: {key: '029a4c5b9fa0e4d1b5a23fa83efb822c', 'content-type': 'application/x-www-form-urlencoded'},
//             form: {origin: 455, destination: destinationId, weight: 1000, courier: 'jne'}
// })
// .then(async resp => {
//   let body = await resp.text()
//   let data = JSON.parse(body)   
//   console.log(data.rajaongkir)       
// })
// .catch(err => {
//     console.log(err,"err")
// })



var options = {
  method: 'POST',
  url: 'https://api.rajaongkir.com/starter/cost',
  headers: {key: '029a4c5b9fa0e4d1b5a23fa83efb822c', 'content-type': 'application/x-www-form-urlencoded'},
  form: {origin: '455', destination: '153', weight: 1000, courier: 'jne'}
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  let data = JSON.parse(body)
  console.log(data.rajaongkir.results[0].costs)
  
  
});
