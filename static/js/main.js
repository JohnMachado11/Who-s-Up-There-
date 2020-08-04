const apiData ={
    url: 'http://api.open-notify.org/astros.json'
}

const {url} = apiData
const apiUrl = `${url}`

fetch(apiUrl)
    .then( (data) => data.json() )
    .then ( (astronauts) => createHtml(astronauts) )


const createHtml = (data) => {
    let googleLink = "https://www.google.com/search?q=" 
    let launchLink = "https://www.nasa.gov/launchschedule/"
    const html = `
                <div> 
                    <h2 style="box-shadow: 0 0 3px white;">WHO'S UP THERE?</h2> 
                        <img src="/static/assets/earth.png" alt="earth" class="responsive">
                    <h2>People in Space: ${data.number}</h2><hr>
                        <a href="${launchLink}" style="color: inherit;">Launch Schedule</a> <hr>
                    <p style="font-size: 17px">Names of Astronauts and Spacecraft They Currently Occupy</p>
                    ${data.people.map(x => `
                    <div> <br>
                        <img src="/static/assets/astronaut.png" alt="astronaut" class="responsive" style="padding-right: 10px;">: 
                        <a href="${googleLink} + ${x.name}+astronaut " style="color: inherit;">${x.name}</a> <br>
                        <img src="/static/assets/rocket.png" alt="rocket" class="responsive" style="padding-right: 7px;">: 
                        <a href="${googleLink} + ${x.craft}+spacecraft" style="color: inherit;">${x.craft}</a>
                    </div>`).join("")}
                </div>
                `
    const astronautDiv = document.querySelector('.astronaut')
    astronautDiv.innerHTML = html
}

