let button = document.querySelector('#submit');

function makeUrl(request) {
  const zip_code = request.zip_code;
  const url = `https://data.austintexas.gov/resource/ngxp-99y3.json?zip_code=${zip_code}`;
  return url;
}



function locationDisplay(items) {
  const results = items.map(item => {
    return `<li>
      ${item.project_name}<br> ${item.address} ${item.zip_code}
    </li>`
  }).join('\n');
  return `<ul>${results}</ul>`;
}

function resultDisplay(data) {
  const resultDiv = document.querySelector('#result-display');
  resultDiv.innerHTML = locationDisplay(data);
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
      console.log('data: ', data);
      resultDisplay(data);
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
