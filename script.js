function traerCaracteres(done){
    const results = fetch("https://rickandmortyapi.com/api/character");

    results
    .then(response => response.json())
    .then(data =>{ 
        done(data)
    });
}

traerCaracteres(data => {
    data.results.forEach(personaje =>{
        const article = document.createRange().createContextualFragment(
            `<article>
            <div class="image-container">
                <img src="${personaje.image}" alt="personaje">
            </div>
            <span>${personaje.name}</span>
            <p>${personaje.species}</p>
            <p>${personaje.gender}</p>
            <p>${personaje.status}</p>
        </article>`
        );

        const main = document.querySelector("main");

        main.append(article);
    });
});