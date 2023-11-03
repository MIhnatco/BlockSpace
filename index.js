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


    /**
 Challenge:
 
 * Listen for the "submit" event on the form (which will happen when the button is clicked)
    * (Don't forget to preventDefault on the form so it doesn't refresh your page. Google "form preventDefault" if you're not sure what I'm talking about)
 * Combine the title value and body value into an object (with a "title" property and "body" property)
 * Log the object to the console

*/

document.getElementById('new-post').addEventListener("submit", (e) => {
      e.preventDefault();

      const postTitle = document.getElementById('post-title').value; 
      const postBody = document.getElementById('post-body').value;

      const post = {
        title: postTitle, 
        body: postBody
      }

      console.log(post) //test the functionality
})