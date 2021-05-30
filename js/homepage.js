var request_advices = new XMLHttpRequest();

request_advices.open('GET', 'http://localhost/plants/json/advices.json', true);

request_advices.onload = function() {

    if (this.status >= 200 && this.status < 400) {

        let result = JSON.parse(this.response)

        for (let index = 0; index < 4; index++) {

            let article = document.createElement("article")
            article.classList.add("advice")

            article.appendChild(document.createElement("h4")).innerHTML = result[index]["title"]
            article.appendChild(document.createElement("p")).innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nisi harum nihil atque quae vitae fugiat unde dolor, animi ea sed error veritatis pariatur nam amet. Itaque deleniti at repellat? Lorem ipsum dolor sit amet consectetur adipisicing elit."

            let link = document.createElement("a")
            link.href = "#"
            link.classList.add("button")
            link.innerHTML = "learn more"

            article.appendChild(link)

            document.querySelector("section:nth-of-type(1) > .container").appendChild(article)
        }
    }
};

request_advices.onerror = function() {
    alert('erreur de connexion');
};

request_advices.send();

var request_bouquets = new XMLHttpRequest();

request_bouquets.open('GET', 'http://localhost/plants/json/bouquets.json', true);

request_bouquets.onload = function() {

    if (this.status >= 200 && this.status < 400) {

        let result = JSON.parse(this.response)

        for (let index = 0; index < 5; index++) {

            let article = document.createElement("article")

            let image1 = document.createElement("img")
            image1.src = "views/" + result[index]["image"]
            image1.alt = "Bouquet image"
            article.appendChild(image1)

            let aside = document.createElement("aside")
            aside.appendChild(document.createElement("h5")).innerHTML = result[index]["english_name"]
            aside.appendChild(document.createElement("p")).innerHTML = result[index]["japanese_name"]
            
            let image2 = document.createElement("img")
            image2.src = "views/img/icons/arrow_black.png"
            image2.classList.add("arrow")
            image2.classList.add("icon")

            let link = document.createElement("a")
            link.href = "#"
            link.appendChild(image2)

            aside.appendChild(link)
            article.appendChild(aside)

            document.querySelector("section:nth-of-type(2) > #flowers").appendChild(article)
        }

        for (let index = 0; index < 3; index++) {
            let article = document.createElement("article")

            let image = document.createElement("img")
            image.src = "views/" + result[index]["image"]
            image.alt = "Bouquet image"
            article.appendChild(image)

            let link = document.createElement("a")
            link.href = "#"
            link.classList.add("button")
            link.innerHTML = "learn more"

            article.appendChild(link)

            document.querySelector("section:nth-of-type(3) > #popular").appendChild(article)
        }

    }
};

request_bouquets.onerror = function() {
    alert('erreur de connexion');
};

request_bouquets.send();

window.addEventListener('mouseover', () => {
    document.querySelectorAll(".arrow").forEach( element => {
        element.addEventListener('mouseover', () => {
            element.src = "views/img/icons/arrow_white.png"
        })
        element.addEventListener('mouseout', () => {
            element.src = "views/img/icons/arrow_black.png"
        })
    })
})