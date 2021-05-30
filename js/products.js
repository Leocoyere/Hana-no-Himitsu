let i = 1
document.querySelector("#bag > h6").innerHTML = storage.length

var request_bouquets = new XMLHttpRequest();

request_bouquets.open('GET', 'https://netlify.app/json/bouquets.json', true);

request_bouquets.onload = function() {

    if (this.status >= 200 && this.status < 400) {

        result = JSON.parse(this.response)

        for (let index = 0; index < result.length; index++) {

            let article = document.createElement("article")
            
            let image = document.createElement("img")
            image.src = result[index]["image"]
            image.alt = "Flowers bouquet"
            
            article.appendChild(document.createElement("figure")).appendChild(image)

            let aside = document.createElement("aside")
            aside.appendChild(document.createElement("h5")).innerHTML = result[index]["english_name"]
            aside.appendChild(document.createElement("p")).innerHTML = result[index]["japanese_name"]
            
            let button = document.createElement("button")
            button.classList.add("button")
            button.classList.add("bagadder")
            button.setAttribute("id", result[index]["id"])
            button.innerHTML = "add to bag"
            aside.appendChild(button)

            article.appendChild(aside)

            document.querySelector("section:nth-of-type(1) > .container").appendChild(article)
        }
    }

    document.querySelectorAll(".bagadder").forEach( element => {
        element.addEventListener('click', () => {
            console.log(result[element.id-1])
            storage.setItem(i, JSON.stringify(result[element.id-1]))
            console.log(storage)
            i += 1
            document.querySelector("#bag > h6").innerHTML = storage.length;
        })
    })

};

request_bouquets.onerror = function() {
    alert('erreur de connexion');
};

request_bouquets.send();
