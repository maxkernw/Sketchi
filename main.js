

const errors = [
    "Network",
    "Cache",
    "422",
    "404",
    "500",
    "Internal server",
    "Bad request",
    "Server down",
    "Network changed",
    "I'm a teapot!"
]
function createModal() {
    if (!document.body.querySelector(".error")) {

        const div = document.createElement("div");
        const cancelButton = document.createElement("button");
        div.style.position = "absolute";
        div.style.top = "50%";
        div.style.left = "50%"
        div.style.transform = "translate(-50%, -50%)"
        cancelButton.onclick = (e) => {
            console.log('remove')
            e.stopPropagation();
            div.remove();
        }
        cancelButton.className = "error-button"
        div.textContent = `Ooops! ${errors[Math.floor(Math.random() * errors.length - 1)]} \n Error! We are working on fixing this...`
        cancelButton.textContent = "Ok!"
        div.style.padding = "1rem"
        div.style.boxShadow = "0 0 10px rgba(0,0,0,.5)"
        div.appendChild(cancelButton)
        div.style.display = "grid";
        div.style.gap = "1rem"
        div.className = "error"
        document.body.appendChild(div);
    }

}


document.body.onclick = () => {
    createModal()
}


const register = document.querySelector(".register");

register.onclick = () => {
    if (Math.random() < .5) {
        const div = document.createElement("div");
        div.style.position = "absolute";
        div.style.top = "50%";
        div.style.left = "50%"
        div.style.transform = "translate(-50%, -50%)"
        div.style.background = "white";
        div.style.minWidth = "50px"
        div.style.padding = "1rem";
        div.style.boxShadow = "0 0 10px rgba(0,0,0,.5)"
        div.style.minHeight = "200px"
        document.body.appendChild(div);

        const form = document.createElement("form");
        const firstname = document.createElement("input");
        firstname.type = "text";
        firstname.placeholder = "Firstname"

        const lastName = document.createElement("input");
        lastName.type = "text";
        lastName.placeholder = "Lastname"

        const mail = document.createElement("input");
        mail.type = "email";
        mail.placeholder = "Email"

        const button = document.createElement("button");
        button.textContent = "Submit";
        form.appendChild(firstname)
        form.appendChild(lastName)
        form.appendChild(mail)
        form.appendChild(button);
        form.onsubmit = e => {
            e.preventDefault();
            createModal();
            div.remove();
        }
        div.appendChild(form)
    }
    else {
        createModal();
    }
}

setInterval(() => {
    if (Math.random() < .5) {
        createModal()
    }
}, 10000)
