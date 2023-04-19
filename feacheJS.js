let AllMessigesDiv = document.getElementById("AllMessages");
async function TextInput(event) {
    event.preventDefault();
    let HTMLform = document.getElementById("Inputform");

    const formData = new FormData();
    let dateAndTime = new Date();

    formData.append("Auther", document.getElementById("Auther").value);
    formData.append("Message", document.getElementById("Message").value);

    dateAndTime = dateAndTime.getFullYear() + "." +String(dateAndTime.getMonth()+1) + "." + String(dateAndTime.getDate()) + "." + dateAndTime.getHours() + "." + dateAndTime.getMinutes() + "." + dateAndTime.getSeconds() + "." + dateAndTime.getMilliseconds();
    formData.append("Time", dateAndTime);

    let PHPResult = await fetch("Feache.php",{method: HTMLform.method, body:formData });
    let response = await PHPResult.json()
    response.forEach(EacheMessage => {
        console.log(EacheMessage);

        let MessigeCard = document.createElement("div");
        MessigeCard.setAttribute("id", "Card");
        AllMessigesDiv.appendChild(MessigeCard);
    
        let Auther = document.createElement("p");
        Auther.setAttribute("id", "Auther");
        MessigeCard.appendChild(Auther);
        Auther.textContent = String(EacheMessage.Auther);

        let MessigeText = document.createElement("p");
        MessigeText.setAttribute("id", "Message");
        MessigeCard.appendChild(MessigeText);
        MessigeText.textContent = String(EacheMessage.Message);
    
        let Time = document.createElement("p");
        Time.setAttribute("id", "Time");
        MessigeCard.appendChild(Time);
        Time.textContent = String(EacheMessage.Time);
    });
}
