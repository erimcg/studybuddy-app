async function checkVerification() {
    console.log('running checkVerification')

    const h1 = document.querySelector("h1")
    const p = document.querySelector("p")

    const url = "https://study-buddy-api-server.azurewebsites.net/user/verification"

    const options = {
        method: "GET",
    }

    let response = await fetch(url, options)

    if (response.status == 200) {
        const title = 'Thank you!'
        const mssg = "You will be redirected to the app momentarily."

        h1.innerHTML = title
        p.innerHTML = mssg

        console.log("Verification successful")

        setTimeout(() => {
            //location.href = "https://lively-glacier-0949d3f0f.4.azurestaticapps.net/main.html"
            location.href = "main.html"
        }, 4000)
    }
    else {
        const title = "Something went wrong."
        const mssg = "Please try verifying your account once more."

        console.log("Error verifying email address")

        setTimeout(() => {
            //location.href = "https://lively-glacier-0949d3f0f.4.azurestaticapps.net/index.html"
            location.href = "index.html"
        }, 4000)
    }
}

checkVerification()