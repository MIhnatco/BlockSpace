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

      const options = {
        method: "POST", 
        body: JSON.stringify(post), 
        headers: {
          "content-type": "application/json"
        }
      }

      fetch('https://apis.scrimba.com/jsonplaceholder/posts', options )
        .then(response => response.json())
        .then(data => {
          console.log(data)
            /**
             * Challenge: Update the DOM with the new blog entry
             */

            document.querySelector('#blog-list').innerHTML = `
                <h3>${data.title}</h3>
                <p>${data.body}</p>
                <hr>
                ${document.querySelector('#blog-list').innerHTML}
            `
        })
})


