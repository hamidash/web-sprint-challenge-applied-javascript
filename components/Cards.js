// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

import axios from 'axios';

const testObj = {autorPhoto: "test Photo", authorName: "Test Name", headline: "Test Headline"};

const cardContainer = document.querySelector('.cards-container');
//console.log(cardContainer);
//cardContainer.appendChild(cardMaker(testObj))

axios.get('https://lambda-times-backend.herokuapp.com/articles')

.then(response => {
    const articles = response.data.articles;
    //console.log(articles);

    //console.log(Object.values(articles));

    Object.values(articles).forEach(item => 
        {
        //console.log(item);

        item.forEach(article=> {
            console.log(article);
            
            cardMaker(article);
        }
        ) 
});



    for(let keys in articles){
        // console.log('aaaa');
        // console.log(articles[keys]);
        const articleArr = articles[key];
        articleArr.forEach(item => cardMaker(item))
    }
}
)   
.catch(error => {
    return `There is an error: ${error}`;
})

function cardMaker(obj) {

    // create card elements

    const card = document.createElement('div'),
          headline = document.createElement('div'),
          author = document.createElement('div'),
          imgContainer = document.createElement('div'),
          img = document.createElement('img'),
          authorName= document.createElement('span');

    //add class, content, eventListener
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    img.src = obj.authorPhoto;
    headline.textContent = obj.headline;
    authorName.textContent = `By ${obj.authorName}`

    card.addEventListener('click', ()=> console.log(`Headline is: ${obj.headline}`));

    //append child
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    card.appendChild(authorName);

    cardContainer.appendChild(card);

    
    return card;

}


