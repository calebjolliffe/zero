const locations = document.querySelectorAll("div.col-2 div")

const updateTimes = function () {
    locations.forEach(location => {
        const output = location.querySelector("output")
        const timezone = location.getAttribute("data-timezone")
    
        const now = luxon.DateTime.now().setZone(timezone)
    
        output.innerHTML = now.toFormat("HH:mm:ss")
    })
}

updateTimes()

setInterval(function () {
    updateTimes()
}, 1000)
