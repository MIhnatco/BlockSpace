 /**
 * An array to store the list of posts.
 * @type {Array}
 */
 let postsArr = [];

 /**
 * The input element for the post title.
 * @type {HTMLInputElement}
 */
 const titleInput = document.getElementById('post-title')

 /**
 * The input element for the new  posts.
 * @type {HTMLFormElement}
 */
 const bodyInput = document.getElementById('post-body')

 /**
 * The input element for the post title.
 * @type {HTMLInputElement}
 */
 const form = document.getElementById("new-post")
 
/**
 * Renders the list of posts to the HTML page.
 */
 function renderPosts(){
  let html = ""
  for(let post of postsArr){
      html += `
          <h3>${post.title}</h3>
          <p>${post.body}</p>
          <hr>
          `
  }
  document.querySelector('#blog-list').innerHTML = html;
 }
 


 // Fetch initial posts from the API
 fetch('https://apis.scrimba.com/jsonplaceholder/posts')
    .then(response => response.json())
    .then(data => {
        postsArr = data.slice(0,5)
        
        renderPosts()

    })

// Event listener for the form submission
form.addEventListener("submit", (e) => {
      e.preventDefault();

       // Get the values from the input fields
      const postTitle = titleInput.value; 
      const postBody = bodyInput.value;

        // Create a new post object
      const post = {
        title: postTitle, 
        body: postBody
      }

       // Define options for the POST request
      const options = {
        method: "POST", 
        body: JSON.stringify(post), 
        headers: {
          "content-type": "application/json"
        }
      }

      / Send a POST request to add a new post
      fetch('https://apis.scrimba.com/jsonplaceholder/posts', options )
        .then(response => response.json())
        .then(data => {
      
          
           /**
             * Challenge: Use our new renderPosts function to clean up this code.
             * 
             * Don't forget to update the postsArray variable first!
             */

           // Add the new post to the postsArr
           postsArr.unshift(data)
           renderPosts()

            /**
             * Challenge: clear the form out!
             */
            // Send a POST request to add a new post
           titleInput.value = "";
            bodyInput.value = "";
        })
})


