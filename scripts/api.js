let button = document.querySelector('#submit');

function computeRent(item, request) {
  const householdNumber = request.household;
  const key = `_${householdNumber}_person_household`;
  const income = parseInt(item[key]);
  const rent = (income * 0.3)/12;
  return rent;
}

function makeUrl(request) {
  const zip_code = request.zip_code;
  const url = `https://data.austintexas.gov/resource/ngxp-99y3.json?zip_code=${zip_code}`;
  return url;
}

function locationDisplay(items, request) {
  const results = items.map(item => {
    const rent = computeRent(item, request);
    return `<li>
      ${item.project_name}<br> ${item.address} ${item.zip_code}<br>
      Estimated rent: $${rent}
    </li>`;
  }).join('\n');
  return `<ul>${results}</ul>`;
}

function resultDisplay(data, request) {
  const resultDiv = document.querySelector('#result-display');
  resultDiv.innerHTML = locationDisplay(data, request);
}

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

function callApi(request) {
  const url = makeUrl(request);
  $.ajax({
    url: url,
    type: 'GET',
    data: {
      '$limit' : 5000,
      '$$app_token' : 'R95CM3pwSQ746G08aNK2PQPO1'
    }
  })
    .done(function(data) {
      resultDisplay(data, request);
    });
}

button.addEventListener('click', async (event) => {
  event.preventDefault();

  const zip = parseInt(document.querySelector('#zip-code').value);
  const household = parseInt(householdValue());
  const income = parseInt(document.querySelector('#yearly-income').value);
  const request = {
    zip_code: zip,
    household: household,
    income: income
  };
  callApi(request);
});
