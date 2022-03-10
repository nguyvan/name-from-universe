$(document).ready(function() {
    // "use strict";
    // GetTableFromExcel("./data/liste_prénoms_arabo-musulmans.xlsx")
    let valueDisplays = document.querySelectorAll(".number-window-item");
    let interval = 0.01;
    let i = 0;

    valueDisplays.forEach((valueDisplay) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-val"));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function(){
            startValue += 1;
            valueDisplay.textContent = startValue;
            if (startValue == endValue) {
                clearInterval(counter);
            }
        }, duration);
    });

    document.getElementById("button-search").addEventListener("click", function() {
        let first_name = document.getElementById("first-name").value;
        fetch('https://name-from-the-multiverse.herokuapp.com/find', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({name: first_name})
        }).then(response => response.json()).then(data => {
            if (data.success) {
                document.getElementById("bottom-result-1").innerHTML = "Your first name is already arabized !"
                document.getElementById("bottom-result-2").innerHTML = ""
                document.getElementById("bottom-result-3").innerHTML = ""
            }
            else {
                document.getElementById("bottom-result-1").innerHTML = "This first name is not arabized !"
                document.getElementById("bottom-result-2").innerHTML = "Your alternative first name will be : "
                document.getElementById("bottom-result-3").innerHTML = data.name
            }
        }).catch(error => console.log(error))
    }) 

    document.getElementById("first-name").addEventListener("keypress", function(event){
        if (event.key === "Enter") {
            fetch('https://name-from-the-multiverse.herokuapp.com/find', {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer',
                body: JSON.stringify({name: event.target.value})
            }).then(response => response.json()).then(data => {
                if (data.success) {
                    document.getElementById("bottom-result-1").innerHTML = "Your first name is already arabized !"
                    document.getElementById("bottom-result-2").innerHTML = ""
                    document.getElementById("bottom-result-3").innerHTML = ""
                }
                else {
                    document.getElementById("bottom-result-1").innerHTML = "This first name is not arabized !"
                    document.getElementById("bottom-result-2").innerHTML = "Your alternative first name will be : "
                    document.getElementById("bottom-result-3").innerHTML = data.name
                }
            }).catch(error => console.log(error))
        }
    })
})
