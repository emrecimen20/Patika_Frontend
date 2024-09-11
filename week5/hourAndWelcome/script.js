window.onload = ()=>{
    const enterName = prompt("Lütfen isminizi giriniz:");

   
        if(enterName){
            document.getElementById("name").textContent = `${enterName}`;
        }else{
            alert("Lütfen isim giriniz !");
        }
   
 
}



const updateTime = ()=>{
    const now = new Date();

    const day = now.toLocaleDateString("tr-TR",{
        weekday:"long"
    });
    const date = now.toLocaleDateString("tr-TR",{
        day: "2-digit",month: "2-digit", year: 'numeric'
    });
    const time = now.toLocaleDateString("tr-TR", {
        hour: "2-digit", minute: "2-digit", second: "2-digit"
    });

    document.getElementById("current-date").textContent = `${day}, ${date}`;
    document.getElementById('current-time').textContent = time;
}

updateTime();

setInterval(updateTime, 1000);