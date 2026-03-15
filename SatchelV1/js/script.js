const list = document.getElementById("satchelList")

let total = 0
let checked = 0

satchels.forEach((satchel, sIndex) => {

    const div = document.createElement("div")
    div.className = "satchel"

    const title = document.createElement("h3")
    title.textContent = satchel.name

    div.appendChild(title)

    satchel.materials.forEach((mat, mIndex) => {

        total++

        const label = document.createElement("label")
        label.className = "material"

        const box = document.createElement("input")
        box.type = "checkbox"

        const key = `satchel_${sIndex}_${mIndex}`

        if (localStorage.getItem(key) === "true") {
            box.checked = true
            checked++
        }

        box.addEventListener("change", () => {

            localStorage.setItem(key, box.checked)

            updateProgress()

        })

        label.appendChild(box)
        label.append(" " + mat)

        div.appendChild(label)

    })

    list.appendChild(div)

})

function updateProgress() {

    checked = 0

    document.querySelectorAll("input").forEach(b => {
        if (b.checked) checked++
    })

    const percent = (checked / total) * 100

    document.getElementById("globalFill").style.width = percent + "%"

    document.getElementById("globalText").textContent =
        checked + " / " + total + " materials"

}

updateProgress()

/* MAP PINS */

const map = document.getElementById("map")

animalHotspots.forEach(h => {

    const pin = document.createElement("div")

    pin.className = "pin"

    pin.style.left = h.coords[0] + "px"
    pin.style.top = h.coords[1] + "px"

    pin.title = h.animal + " hotspot"

    map.appendChild(pin)

})