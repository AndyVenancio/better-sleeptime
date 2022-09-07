const colors = [
    "white",
    "red",
    "white",
    "red",
    "white",
    "red"
]

function handleOnClick() {
    let output = document.querySelector(".output");
    output.style.display = "block";

    let hours = document.getElementById("hours");
    hours.innerHTML = "";

    let hh = document.getElementById("hh").value;
    let mm = document.getElementById("mm").value;
    let ampm = document.getElementById("ampm").value;
    hh = ampm == "PM" ? Number.parseInt(hh) + 12 : hh;
    console.log({hh, mm, ampm});

    let now = new Date()

    //14 minutes to fall asleep
    now.setHours(hh);
    now.setMinutes(mm);

    for (let i = 0; i < 6; i++) {
    now.setMinutes(now.getMinutes() + 90);
    let elm = document.createElement("div");
    elm.innerText =
        now.toLocaleTimeString("en-US", {timeStyle: "short"});
    elm.style.color = colors[i];
    hours.appendChild(elm);
    }
}