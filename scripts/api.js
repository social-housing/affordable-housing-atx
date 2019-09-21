const form = document.querySelector('#housing-form');

// function callApi(request) {
//   $.ajax({
//     url: makeUrl(request),
//     type: 'GET',
//     data: {
//       '$limit' : 5000,
//       '$$app_token' : 'R95CM3pwSQ746G08aNK2PQPO1'
//     }
//   })
//     .done(function(data) {
//       return data;
//     });
// }

// function makeUrl(request) {
//   const zip_code = request.zip_code;
//   const household = request.household;
//   const income = request.income;
//   const url = `https://data.austintexas.gov/resource/ngxp-99y3.json?zip_code=${zip_code}&_${household}_person_household=${income}`;
//
//   return url;
// }

// function resultDisplay(data) {
//   const resultDiv = document.querySelector('#result-display');
//   const resultUl = <ul></ul>
// }

function onSubmit(event) {
  event.preventDevault();
  //const result = callApi(request);
  console.log('hello event listener');
  console.log('event: ', event);
}

form.addEventListener('submit', onSubmit);
