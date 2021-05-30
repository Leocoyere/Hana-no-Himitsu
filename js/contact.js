document.querySelector("form").addEventListener('submit', event => {
    const name = document.querySelector( "form > input[name='name']" ).value;
    const email = document.querySelector( "form > input[name='email']" ).value;
    const phone = document.querySelector( "form > input[name='phone']" ).value;
    const message = document.querySelector( "form > textarea[name='message']" ).value;
    const object = document.querySelector( "form > select[name='object']" ).value;

    event.preventDefault();
    
    console.log("name : " + name + "\nemail : " + email + "\nphone number : " + phone + "\nmessage : " +  message + "\nobject : " + object)

    document.querySelector( "form > input[name='name']" ).value = "";
    document.querySelector( "form > input[name='email']" ).value = "";
    document.querySelector( "form > input[name='phone']" ).value = "";
    document.querySelector( "form > textarea[name='message']" ).value = "";
    document.querySelector( "form > select[name='object']" ).value = "";
})