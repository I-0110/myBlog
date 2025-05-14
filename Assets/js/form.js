// TODO: Create a variable that selects the form element
const form = document.getElementById('form');

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.

function handleFormSubmit(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();
    const error = document.getElementById('error')

    if (!username || !title || !content) {
        error.textContent = 'Please fill out all fields!';
        return;
    } else {
        error.textContent = "Success!";
    }

    const blogPost = {
        username,
        title, 
        content
    }; 

    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(blogPost);
    localStorage.setItem('posts', JSON.stringify(posts))

    redirectPage('blog.html');
}
// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
form.addEventListener('submit', handleFormSubmit);
