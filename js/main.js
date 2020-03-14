$(document).ready(() => {
      getQuotes();
      
  });
  
  function getQuotes(){
    axios.get('https://programming-quotes-api.herokuapp.com/quotes')
      .then((response) => {
        // console.log(response);
        
        i = Math.floor(Math.random() * 501); 
        // console.log(i);
        // console.log(response.data[i].en);
        let quote = response.data[i];
        let output = `
            <blockquote class="quote-box">
            <p class="quotation-mark">
              “
            </p>
            <p class="quote-text">
            ${quote.en}
            </p>
            <hr>
            <div class="blog-post-actions">
              <p class="blog-post-bottom pull-left">
              ${quote.author}
              </p>
              <p class="blog-post-bottom pull-right">
                <span class="badge quote-badge">${quote.numberOfVotes}</span>  ❤
              </p>
            </div>
          </blockquote>
        `;
        
  
        $('.output').html(output);
      })
      .catch((err) => {
        console.log(err);
      });
  }