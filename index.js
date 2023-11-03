 fetch('https://apis.scrimba.com/jsonplaceholder/posts')
    .then(response => response.json())
    .then(data => {
        const postArr = data.slice(0,5)
        
        let html = ""
        for(let post of postArr){
            html += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr>
                `
        }

        document.querySelector('#blog-list').innerHTML = html;
    })


document.getElementById('new-post').addEventListener("submit", (e) => {
      e.preventDefault();

      const postTitle = document.getElementById('post-title').value; 
      const postBody = document.getElementById('post-body').value;

      const post = {
        title: postTitle, 
        body: postBody
      }

      /**
       * Challenge: Send this off to the server!
       * 
       * 1. BaseURL: https://apis.scrimba.com/jsonplaceholder/
       * 2. Endpoint: /posts
       * 3. method: ???
       * 4. Request body: ??? (Remember to turn it into JSON)
       * 5. Headers: ??? (Check the JSON Placeholder API docs or past casts for help)
       */

      const options = {
        method: "POST", 
        body: JSON.stringify(post), 
        headers: {
          "content-type": "application/json"
        }
      }

      fetch('https://apis.scrimba.com/jsonplaceholder/posts', options )
        .then(response => response.json())
        .then(data => console.log(data))
})


