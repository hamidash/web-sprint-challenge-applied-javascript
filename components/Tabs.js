// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

import axios from 'axios';

axios.get('https://lambda-times-backend.herokuapp.com/topics')

.then(response => {
    const topicsArr = response.data.topics;
    //console.log(topicsArr);

    topicsArr.forEach(item => {
        tabMaker(item);
    })

})
.catch(error => {
    return `There is an error: ${error}`;
})

function tabMaker(text){
    const newTab = document.createElement('div');
    newTab.classList.add('tab');
    newTab.textContent = text;

    const topics = document.querySelector('div.topics');
    topics.appendChild(newTab);
    
    return newTab;
}
