
// import { test } from './Test.js'

// test()

const cep = document.querySelector("#cep")

const showData = (result) => {
    for(const key in result) {
        console.log(key)
        const element = document.querySelector("#"+key)
        if(element) {
            element.value = result[key]
        }
    }

}

cep.addEventListener("blur", (e) => {


        const options = {
            method: "GET",
            mode: 'cors',
            cache: 'default'
        }

    fetch(`https://viacep.com.br/ws/${cep.value}/json/`, options)
        .then(response => {
            response.json().then(data => showData(data))
        })

})