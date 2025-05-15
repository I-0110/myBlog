// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const toggleButton = document.getElementById('toggle');

toggleButton.addEventListener('click', () => {
  const root = document.documentElement;

  if (document.body.classList.contains('dark')) {
    document.body.classList.remove('dark');
    document.body.classList.add('light');
    toggleButton.textContent = '🌙';
    root.style.setProperty('--circle-color', '#000');
    localStorage.setItem('mode', 'light');
  } else {
    document.body.classList.remove('light');
    document.body.classList.add('dark');
    toggleButton.textContent = '☀️';
    root.style.setProperty('--circle-color', '#fff');
    localStorage.setItem('mode', 'dark');  
  }
});

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage(posts) {
  const data = localStorage.getItem(posts);
  return data ? JSON.parse(data) : [];
}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage(posts, newData) {
  const existingData = readLocalStorage(posts);
  existingData.push(newData);

  localStorage.setItem(posts, JSON.stringify(existingData));
}

// ! Use the following function whenever you need to redirect to a different page
let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

