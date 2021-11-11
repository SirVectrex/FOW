async function getData() {
    const response = await fetch('https://api.publicapis.org/entries')

    const data = await response.json()
    console.log("test" + response)
}

getData