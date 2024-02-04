
async function fetchTextData() {

    const url = "http://localhost:3000"
    //const url = 'https://<<your-api-server-domain>>/<<your path>'

    const options = {
        method: "GET",
    }

    let response = await fetch(url, options)
    console.log(response)

    if (response.ok) {
        const data = await response.text()
        console.log(data)

        const mssg1 = document.querySelector("#message1")
        mssg1.innerHTML = data
    }
}

async function fetchTextDataWithStatusCodes() {

    const url = "http://localhost:3000/fetch"

    const options = {
        method: "GET",
    }

    let response = await fetch(url, options)

    if (response.status == 201) {
        const text = await response.text()

        const mssg2 = document.querySelector("#message2")
        mssg2.innerHTML = text
    }
}

async function fetchObjects() {

    const url = "http://localhost:3000/fetch/object"

    const options = {
        method: "GET",
    }

    let response = await fetch(url, options)

    if (response.status == 200) {
        const obj = await response.json()

        const mssg3 = document.querySelector("#message3")
        mssg3.innerHTML = obj.message
    }
}

async function fetchToEndpointWithParameter() {

    const mssg5 = document.querySelector("#message5")

    const code = 7

    const url = `http://localhost:3000/fetch/param/${code}`

    const options = {
        method: "GET"
    }

    let response = await fetch(url, options)
    const obj = await response.json()

    if (response.status == 200) {
        mssg5.innerHTML = obj.message
    }
    else if (response.status == 401) {
        mssg5.innerHTML = "Error: " + obj.message
    }
}

async function fetchToEndpointWithQueryString() {

    const mssg6 = document.querySelector("#message6")

    const code = 7

    const url = `http://localhost:3000/fetch/query?code=${code}`

    const options = {
        method: "GET"
    }

    let response = await fetch(url, options)
    const obj = await response.json()

    if (response.status == 200) {
        mssg6.innerHTML = obj.message
    }
    else if (response.status == 401) {
        mssg6.innerHTML = "Error: " + obj.message
    }
}

async function fetchToEndpointUsingPostMethod() {

    const mssg7 = document.querySelector("#message7")

    const url = "http://localhost:3000/fetch"

    const data = {
        code: 7
    }

    const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    }

    let response = await fetch(url, options)
    const obj = await response.json()

    if (response.status == 200) {
        mssg7.innerHTML = obj.message
    }
    else if (response.status == 401) {
        mssg7.innerHTML = "Error: " + obj.message
    }
}

async function fetchUsingDataFromForm() {

    const mssg8 = document.querySelector("#message8")
    const input = document.querySelector("#input8")

    const url = "http://localhost:3000/fetch"

    const data = {
        code: input.value
    }

    const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    }

    let response = await fetch(url, options)

    if (response.status == 200) {
        const obj = await response.json()
        mssg8.innerHTML = obj.message
    }
    else if (response.status == 401) {
        const obj = await response.json()
        mssg8.innerHTML = "Error: " + obj.message
    }
    else {
        mssg8.innerHTML = "Server error: " + response.status
    }
}

document.querySelector("#button8").addEventListener("click", fetchUsingDataFromForm)


window.onload = function () {
    fetchTextData()
    fetchTextDataWithStatusCodes()
    fetchObjects()

    fetchToEndpointWithParameter()
    fetchToEndpointWithQueryString()
    fetchToEndpointUsingPostMethod()
};

