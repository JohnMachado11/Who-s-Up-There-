const apiData ={
    url: 'http://api.open-notify.org/astros.json'
}

const {url} = apiData
const apiUrl = `${url}`

fetch(apiUrl)
    .then( (data) => data.json() )
    .then ( (astronauts) => createHtml(astronauts) )

const createHtml = (data) => {
    const link = "https://www.google.com/search?q=" 
    console.log(data)
    const html = `
    <div> 
        Total People In Space: ${data.number} <br>
        ${data.people.map(x => `<div> Name: ${x.name}, Craft: ${x.craft} </div>`).join("")}
    </div>
    `
    const astronautDiv = document.querySelector('.astronaut')
    astronautDiv.innerHTML = html
}
