/* 
Explicação do JavaScript utilizado:

    Basicamente esse arquivo .js é responsável apenas por controlar
    a visibilidade de alguns elementos. Toque puramente estético.
    Ele armazena as divs em variáveis, reseta sua visualização e para
    cada clique ele apaga a que já estava e exibe a nova no lugar.
*/

let about = document.getElementById("about")
let education = document.getElementById("education")
let social = document.getElementById("social")
let contact = document.getElementById("contact")

let about_b = document.getElementById("about_b")
let education_b = document.getElementById("education_b")
let social_b = document.getElementById("social_b")
let contact_b = document.getElementById("contact_b")


function reset_visibility(){
    let blocks_arrays = [
        about_b,
        education_b,
        social_b,
        contact_b
]
    
    for(let el of blocks_arrays){
        el.style.display="none";
    }
}

reset_visibility()

education.addEventListener("click", 
    () => {if(education_b.style.display == "none"){
        reset_visibility()
        education_b.style.display="block"
    }
    else{
        education_b.style.display="none"
    }}
)

contact.addEventListener("click", 
    () => {if(contact_b.style.display == "none"){
        reset_visibility()
        contact_b.style.display="block"
    }
    else{
        contact_b.style.display="none"
    }}
)

social.addEventListener("click", 
    () => {if(social_b.style.display == "none"){
        reset_visibility()
        social_b.style.display="flex"
    }
    else{
        social_b.style.display="none"
    }}
)

about.addEventListener("click", 
    () => {if(about_b.style.display == "none"){
        reset_visibility()
        about_b.style.display="block"
    }
    else{
        about_b.style.display="none"
    }}
)