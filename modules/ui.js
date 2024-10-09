// functions to display data
function createHeader() {

    const header = document.createElement('header');
    header.classList = 
    'flex flex-row flex-nowrap gap-4 items-center justify-around align-baseline border-3 rounded-md';

    /*  <header class="flex flex-row flex-nowrap gap-4 items-center justify-around align-baseline bg-gradient-to-r from-[#2C5F65] to-[#346B71] border-3 rounded-md">
    ...   
    </header>*/

    const logo = document.createElement('img');
    logo.classList = 'h-10 w-auto'
    logo.src = 'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg'
    
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    
    //<ul class="flex flex-col content-around lg:flex-row lg:gap-4 border-r-2 pr-16">
    ul.classList ='flex flex-col content-around lg:flex-row lg:gap-4 border-r-2 pr-16';

    const home = document.createElement('li');
    const homeLink = document.createElement('a');
    homeLink.href = 'index.html'
    homeLink.textContent = "Home";
    home.appendChild(homeLink);
    
    // <li class="p-3 text-[#D0DB97]"><a href="index.html">Home</a></li>
    
    const journal = document.createElement('li');
    const journalLink = document.createElement('a');
    journalLink.href = 'journal.html'
    journalLink.textContent = "Journal";
    journal.appendChild(journalLink);

    ul.appendChild(home);
    ul.appendChild(journal);
    nav.appendChild(ul);

    const lupe = document.createElement('div'); 
    
    lupe.classList = 'flex justify-center mt-8';
    lupe.innerHTML = `<input 
                        type="text" 
                        id="searchInput" 
                        placeholder="Search..." 
                        class="border border-gray-300 rounded-lg p-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-400" 
                    />
                    <button 
                        id="searchButton" 
                        class="ml-2 bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600"
                    >
                        Search
                    </button>`  
        
    header.appendChild(logo);
    header.appendChild(nav);
    header.appendChild(lupe);

    return header;
}

function createFooter() { 

}


export {createHeader, createFooter}