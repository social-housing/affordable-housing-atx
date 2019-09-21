let button = document.querySelector('#submit');

function callApi(request) {
  const url = makeUrl(request);
  console.log('url: ', url);
  $.ajax({
    url: url,
    type: 'GET',
    data: {
      '$limit' : 5000,
      '$$app_token' : 'R95CM3pwSQ746G08aNK2PQPO1'
    }
  })
    .done(function(data) {
      console.log('data: ', data);
      return data;
    });
}

function makeUrl(request) {
  const zip_code = request.zip_code;
  const url = `https://data.austintexas.gov/resource/ngxp-99y3.json?zip_code=${zip_code}`;
  return url;
}

// function resultDisplay(data) {
//   const resultDiv = document.querySelector('#result-display');
//   const resultUl = <ul></ul>
// }

function householdValue() {
  let ele = document.getElementsByName('household-number');
  let result;
  for (let i = 0; i < ele.length; i++) {
    if(ele[i].checked) {
      result = ele[i].value;
    }
  }
  return result;
}

button.addEventListener('click', (event) => {
  event.preventDefault();

  const zip = parseInt(document.querySelector('#zip-code').value);
  const household = parseInt(householdValue());
  const income = parseInt(document.querySelector('#yearly-income').value);
  const request = {
    zip_code: zip,
    household: household,
    income: income
  };
  const result = callApi(request);
  console.log('result: ', result);
});
