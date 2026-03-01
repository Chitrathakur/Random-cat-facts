let btn = document.querySelector("button");

btn.addEventListener("click", async() => {
    let p = document.querySelector("#result");

    btn.disabled = true;
    p.innerText = "Loading...";

    let fact = await getFacts();
    p.innerText = fact;

    btn.disabled = false;
})


let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    }
    catch(e) {
        console.log("error: ", e);
        return "No fact found";
    }
}


