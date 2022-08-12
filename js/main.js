const Elemnts = ["d1", "d2", "d3", "d4", "d5", "d6", "d7"]
var json = []

async function StartTheApp() {
    await feth()
    last()
}

async function feth() {
    let data = await fetch("./data.json")
    let arr = await data.json()
    for (let i = 0; i < Elemnts.length; i++) {
        json.push(arr[i].amount)
        var el = document.getElementById(Elemnts[i])
        el.style.height = `${arr[i].amount / 50 * 100}px`
    }

}

function last() {
    var max = Math.max(...json)
    let r = json.indexOf(max)
    var specil_div = document.getElementById(Elemnts[r])
    specil_div.style.backgroundColor = "hsl(186, 34%, 60%)"
}

StartTheApp()







