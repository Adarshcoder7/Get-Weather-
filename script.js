const cid=document.getElementById("bid")
const iid=document.getElementById("city")
const n=document.getElementById("city-nam")
const ti=document.getElementById("city-time")
const te=document.getElementById("city-temp")
const w=document.getElementById("city-wind")

async function getData(n){
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=7dca7e21e5b3446793f183414242309&q=${n}&aqi=yes`)

return await promise.json()
}

cid.addEventListener("click",async () =>{
    const value=iid.value
    const result=await getData(value)
    n.innerText = `${result.location.name},${result.location.region} - ${result.location.country}`
    ti.innerText = result.location.localtime
    te.innerText = result.current.temp_c
    w.innerText = result.current.wind_kph
})