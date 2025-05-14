// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const usernameEl = document.getElementById('username');
const titleEl = document.getElementById('title');
const contentEl = document.getElementById('content');

const postsList = document.getElementById('postsList');

const loveEL = document.getElementById('love');

const posts = JSON.parse(localStorage.getItem('posts')) || [];

const backButton = document.getElementById('back');
backButton.addEventListener('click', function () {
    window.location.href = 'index.html';
});
// TODO: Create a function that builds an element and appends it to the DOM
function buildPost(post) {
    const postEl = document.createElement('article')
    postEl.classList.add('post')

    let titleEl = document.createElement('h2');
    let contentEl = document.createElement('blockquote');
    let usernameEl = document.createElement('p');

    titleEl.textContent = post.title;
    contentEl.textContent = post.content;
    usernameEl.textContent = "Posted by: " + post.username;

    postEl.appendChild(titleEl)
    postEl.appendChild(contentEl)
    postEl.appendChild(usernameEl)

    postsList.appendChild(postEl);
}

// TODO: Create a function that handles the case where there are no blog posts to display
function handleNoPosts() {
    postsList.innerHTML = "No blog posts yet...";
};
// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList() {
    if (posts.length === 0) {
        handleNoPosts();
    } else {
        posts.forEach(post => buildPost(post));
    }
};
// TODO: Call the `renderBlogList` function
renderBlogList();
// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
backButton.addEventListener('click', function() {
    window.location.href = 'index.html';
});