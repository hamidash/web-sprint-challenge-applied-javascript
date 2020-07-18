// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {

    //create elements
    
    const header = document.createElement('div'),
          date = document.createElement('span'),
          title = document.createElement('h1'),
          temprature = document.createElement('span');

    // add classes
    header.classList.add('header');
    date.classList.add('date');
    temprature.classList.add('temp');

    //add content
    date.textContent = `MARCH 28, 2020`;
    title.textContent = `Lambda Times`;
    temprature.textContent = `98˚`;

    //append to the DOM
    const headerContainer = document.querySelector('div.header-container');

    header.appendChild(date);
    header.appendChild(title);
    header.appendChild(temprature);
    headerContainer.appendChild(header);

    
    return header;

}

Header();
