const form = document.getElementById('form-section');
const results = document.getElementById('result-display');
const about = document.getElementById('about-me');
const resources = document.getElementById('additional-resources');


window.addEventListener('click', e => {
  const element = e.target;
  if(element.textContent === 'About') {
    about.style.display = 'block';
    form.style.display = 'none';
    results.style.display = 'none';
    resources.style.display = "none";
  } else if(element.textContent === 'Additional Resources') {
    form.style.display = 'none';
    results.style.display = 'none';
    about.style.display = 'none';
    resources.style.display = "block";
  } else if(element.textContent === 'Austin Housing Match') {
    form.style.display = 'block';
    results.style.display = 'block';
    about.style.display = 'none';
    resources.style.display = "none";
  }
});
