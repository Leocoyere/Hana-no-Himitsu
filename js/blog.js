let id = 0;

var request_advices = new XMLHttpRequest();
request_advices.open('GET', 'http://localhost/plants/json/advices.json', true);
request_advices.onload = function() {
    if (this.status >= 200 && this.status < 400) {

        let result = JSON.parse(this.response)

        for (let index = 0; index < result.length; index++) {

            let article = document.createElement('article')
            article.classList.add("advice")
            let image = document.createElement("img")
            image.src = "views/" + result[index]["image"]
            image.alt = "Image advice"

            article.appendChild(document.createElement("figure")).appendChild(image)

            let aside = document.createElement("aside")
            aside.appendChild(document.createElement("h5")).innerHTML = result[index]["title"]
            aside.appendChild(document.createElement("p")).innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, tempore adipisci. Quaerat laborum, repellat ipsam harum molestias illo inventore a doloremque quo? Recusandae velit praesentium incidunt animi repudiandae magnam natus? Lorem ipsum dolor sit amet consectetur adipisicing elit."
            let link = document.createElement("a")
            link.classList.add("button")
            link.innerHTML = "learn more"
            aside.appendChild(link)
            article.appendChild(aside)

            document.querySelector("section:nth-of-type(1) > .container > #slider").appendChild(article)
        }

    }
};
request_advices.onerror = function() {
    alert('erreur de connexion');
};
request_advices.send();

var request_flowers = new XMLHttpRequest();
request_flowers.open('GET', 'http://localhost/plants/json/flowers.json', true);
request_flowers.onload = function() {

    if (this.status >= 200 && this.status < 400) {

        let result = JSON.parse(this.response)

        let article = document.createElement('article')

        let aside = document.createElement("aside")
        aside.appendChild(document.createElement("h4")).innerHTML = result[5]["name"]
        aside.appendChild(document.createElement("p")).innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius iste praesentium, minus omnis id consequatur? Aut assumenda impedit deleniti rerum magnam mollitia, expedita corrupti iste repellendus cum sequi nam. Quidem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae cumque commodi quo voluptatibus nisi sunt quaerat repellat harum, ex totam, cupiditate distinctio atque iure officia numquam itaque. Vel, fugit reiciendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero cumque perspiciatis eius fugiat voluptate dolores, odio praesentium necessitatibus illo ducimus et repudiandae qui voluptas in veritatis quidem assumenda molestias? Provident.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius iste praesentium, minus omnis id consequatur? Aut assumenda impedit deleniti rerum magnam mollitia, expedita corrupti iste repellendus cum sequi nam."
        let link = document.createElement("a")
        link.classList.add("button")
        link.innerHTML = "learn more"
        aside.appendChild(link)
        article.appendChild(aside)

        let image = document.createElement("img")
        image.src = "views/" + result[5]["image"]
        image.alt = "Flower image"

        article.appendChild(document.createElement("figure")).appendChild(image)

        document.querySelector("section:nth-of-type(2) > #month").appendChild(article)

        for (let index = 2; index < 6; index++) {
            
            let article = document.createElement('article')

            let image1 = document.createElement("img")
            image1.src = "views/" + result[index]["image"]
            image1.alt = "Flower image"

            article.appendChild(document.createElement("figure")).appendChild(image1)

            let aside = document.createElement("aside")
            aside.appendChild(document.createElement("h4")).innerHTML = result[index]["name"]

            let image2 = document.createElement("img")
            image2.src = "views/img/icons/arrow_white.png"
            image2.alt = "Flower image"
            image2.classList.add("arrow")

            let link = document.createElement("a")
            link.href = "#"
            link.appendChild(image2)

            aside.appendChild(link)
            article.appendChild(aside)

            document.querySelector("section:nth-of-type(3) > #most").appendChild(article)

        }

    }
};

request_flowers.onerror = function() {
    alert('erreur de connexion');
};

request_flowers.send();

document.querySelector(".arrow1").addEventListener('click', () => {
    document.querySelectorAll(".advice").forEach( element => {
        element.style.transform += "translateX(calc(+100% + 35px))"
    })
    id -= 1
    if (id == 0) {
        document.querySelector(".arrow1").style.display = "none"
        document.querySelector(".arrow2").style.display = "flex"
    } else if (id == 5) {
        document.querySelector(".arrow1").style.display = "flex"
        document.querySelector(".arrow2").style.display = "none"
    } else {
        document.querySelector(".arrow1").style.display = "flex"
        document.querySelector(".arrow2").style.display = "flex"
    }
})

document.querySelector(".arrow2").addEventListener('click', () => {
    document.querySelectorAll(".advice").forEach( element => {
        element.style.transform += "translateX(calc(-100% - 35px))"
    })
    id += 1
    if (id == 0) {
        document.querySelector(".arrow1").style.display = "none"
        document.querySelector(".arrow2").style.display = "flex"
    } else if (id == 5) {
        document.querySelector(".arrow1").style.display = "flex"
        document.querySelector(".arrow2").style.display = "none"
    } else {
        document.querySelector(".arrow1").style.display = "flex"
        document.querySelector(".arrow2").style.display = "flex"
    }
})