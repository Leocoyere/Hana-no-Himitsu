let total = 0
console.log(storage)

function empty() {
    let empty = document.createElement("div")
    empty.setAttribute('id', 'empty')
    let link = document.createElement("a")
    link.href = "products"
    link.setAttribute('class', 'button')
    link.innerHTML = "Get started"
    empty.appendChild(document.createElement("h5")).innerHTML = "Your bag is empty."
    empty.appendChild(link)
    document.querySelector(".container").appendChild(empty)
    document.querySelector(".container > .validate > .button").classList.add("empty")
    total = 0
    document.querySelector(".container > .validate > h4").innerHTML = total
}

if ( storage.length > 0 ) {
    for (let i = 1; i < storage.length+1; i++) {
        var result = JSON.parse(storage[i])
        
        let article = document.createElement("article")

        article.appendChild(document.createElement("figure")).appendChild(document.createElement("img")).src = "views/" + result["image"]

        let div = document.createElement("div")
        div.setAttribute('class', i)
        div.appendChild(document.createElement("h5")).innerHTML = result["english_name"]
        div.appendChild(document.createElement("p")).innerHTML = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non animi reprehenderit magni perspiciatis amet nam voluptate laudantium temporibus nesciunt ea, facere ipsum aspernatur quo dolores sint ab sequi. Et, modi."
        article.appendChild(div)

        let aside = document.createElement("aside")
        aside.appendChild(document.createElement("button")).innerHTML = "-"
        aside.appendChild(document.createElement("div")).innerHTML = 1
        aside.appendChild(document.createElement("button")).innerHTML = "+"
        aside.appendChild(document.createElement("div")).innerHTML = result["price"]
        article.appendChild(aside)
        
        total = total + parseInt(result["price"])
        document.querySelector(".container").appendChild(article)
    }
}

let div = document.createElement("div")
div.setAttribute('class', 'validate')
div.appendChild(document.createElement("h4")).innerHTML = total
let button = document.createElement("button")
button.setAttribute('class', 'button')
button.innerHTML = "command"
div.appendChild(button)
document.querySelector(".container").appendChild(div)


document.querySelectorAll(".container > article > aside > img").forEach(element => {
    element.addEventListener('mouseover', () => {
        element.src = "views/img/icons/cross_full.png"
    })

    element.addEventListener('mouseout', () => {
        element.src = "views/img/icons/cross_empty.png"
    })

    element.addEventListener('click', () => {
        storage.removeItem(element.parentNode.parentNode.children[2].getAttribute("class"))
        document.querySelector("#bag > h6").innerHTML = storage.length;
        total = total - parseInt(element.parentNode.parentNode.children[3].children[3].innerHTML)
        element.parentNode.parentNode.remove()
        document.querySelector(".container > .validate > h4").innerHTML = total
        console.log(storage)
        if(total == 0) {
            empty()
        }
    })
});

if(total == 0) {
    empty()
}

document.querySelector(".container > .validate > .button").addEventListener('click', () => {
    if (total == 0) {
        // nothing
    } else {
        document.querySelector("#checkout").style.display = "flex"
    }
})

document.querySelectorAll("article > aside > button:nth-of-type(1)").forEach(element => {
    element.addEventListener('click', () => {
        element.parentNode.children[1].innerHTML -= 1
        if (element.parentNode.children[1].innerHTML == 0) {
            console.log(element.parentNode.parentNode.children[1].getAttribute("class"))
            console.log(element.parentNode.parentNode.children[1].getAttribute("class"))
            storage.removeItem(element.parentNode.parentNode.children[1].getAttribute("class"))
            document.querySelector("#bag > h6").innerHTML = storage.length;
            element.parentNode.parentNode.remove()
        }
        total = total - parseInt(element.parentNode.children[3].innerHTML)
    })
});

document.querySelectorAll("article > aside > button:nth-of-type(2)").forEach(element => {
    element.addEventListener('click', () => {
        if (element.parentNode.children[1].innerHTML < 9) {
            element.parentNode.children[1].innerHTML = 1 + parseInt(element.parentNode.children[1].innerHTML)
            total = total + parseInt(element.parentNode.children[3].innerHTML)
        }
    })    
});

document.querySelectorAll("article > aside > button").forEach(element => {
    element.addEventListener('click', () => {
        if(total == 0) {
            empty()
        }
        document.querySelector(".container > .validate > h4").innerHTML = total
        
    })
});

document.querySelector("#cancel").addEventListener('click', () => {
    document.querySelector("#checkout").style.display = "none"
})

document.querySelector("#checkout > form").addEventListener('submit', event => {

    event.preventDefault();

    const firstname = document.querySelector( "#checkout > form input[name='firstname']" ).value;
    const lastname = document.querySelector( "#checkout > form input[name='lastname']" ).value;
    const address = document.querySelector( "#checkout > form input[name='address']" ).value;
    const city = document.querySelector( "#checkout > form input[name='city']" ).value;
    const card_number = document.querySelector( "#checkout > form input[name='card_number']" ).value;
    const cardholder = document.querySelector( "#checkout > form input[name='cardholder']" ).value;
    const expiry_month = document.querySelector( "#checkout > form input[name='expiry_month']" ).value;
    const expiry_year = document.querySelector( "#checkout > form input[name='expiry_year']" ).value;
    const CVV = document.querySelector( "#checkout > form input[name='CVV']" ).value;

    document.querySelectorAll("#checkout > form input").forEach( element => {
        element.value = "";
    })

    console.log("firstname : " + firstname + "\nlastname : " + lastname + "\naddress : " + address + "\ncity : " + city + "\ncard number : " + card_number + "\ncard holder : " + cardholder + "\nexpiry month : " + expiry_month + "\nexpiry year : " + expiry_year + "\ncard verification code : " + CVV);

    document.querySelector("#checkout").style.display = "none";

    document.querySelectorAll(".container > article").forEach( element => {
        storage.removeItem(element.children[1].getAttribute("class"));
        element.remove();
        console.log(storage)
    })
    empty()
})