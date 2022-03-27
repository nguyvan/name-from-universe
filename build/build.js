// $(document).ready(function() {
//     // "use strict";
//     // GetTableFromExcel("./data/liste_prénoms_arabo-musulmans.xlsx")
    
//     let interval = 0.0001;
//     let i = 0;
//     var number = 0;
//     // var socket = io("https://name-from-the-multiverse.herokuapp.com");
//     // fetch('https://name-from-the-multiverse.herokuapp.com/number', {
//     //     method: 'GET', // *GET, POST, PUT, DELETE, etc.
//     //     mode: 'cors', // no-cors, *cors, same-origin
//     //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     //     credentials: 'same-origin', // include, *same-origin, omit
//     //     headers: {
//     //     'Content-Type': 'application/json'
//     //     // 'Content-Type': 'application/x-www-form-urlencoded',
//     //     },
//     //     redirect: 'follow', // manual, *follow, error
//     //     referrerPolicy: 'no-referrer'
//     // }).then(response => response.json()).then(data => {
//     //     if (data.success) {
//     //         number = data.number; 
//     //         if (number === 0) {
//     //             const element_numbers = document.getElementById("numbers");
//     //             const childElement = document.createElement("span")
//     //             childElement.innerHTML = "<span class='number-window'>" +
//     //                                         "<span id='number-item' class='number-window-item' data-val=" + number.toString() + ">000</span>" +
//     //                                      "</span>"   
//     //             element_numbers.appendChild(childElement)
//     //         }
//     //         else {
//     //             let l = number.toString();
//     //             let s = l.split("").reverse().join("").match(/.{1,3}/g)
//     //             let str = ""
//     //             s.map((item) => {
//     //                 let temp = item.split("").reverse().join("")
//     //                 if (temp.length === 1) {
//     //                     temp = "00" + temp
//     //                 }
//     //                 else if (temp.length == 2) {
//     //                     temp = "0" + temp
//     //                 }
//     //                 str = temp + "   " + str
//     //             })
//     //             const element_numbers = document.getElementById("numbers");
//     //             const childElement = document.createElement("span")
//     //             childElement.innerHTML = "<span class='number-window'>" +
//     //                                         `<span id='number-item' class='number-window-item' data-val=${str}>` + str + "</span>" +
//     //                                      "</span>"   
//     //             element_numbers.appendChild(childElement)
//     //         } 
//     //     }
//     // })

//     // setTimeout(() => {
//         // socket.on("disfuse", function(msg) {
//         //     number = parseInt(JSON.stringify(msg));
//         //     let l = number.toString();
//         //     let s = l.split("").reverse().join("").match(/.{1,3}/g)
//         //     let str = ""
//         //     s.map((item) => {
//         //         let temp = item.split("").reverse().join("")
//         //         if (temp.length === 1) {
//         //             temp = "00" + temp
//         //         }
//         //         else if (temp.length == 2) {
//         //             temp = "0" + temp
//         //         }
//         //         str = temp + "   " + str
//         //     })
//         //     document.getElementById("number-item").textContent = str
//         // })

//         document.getElementById("button-search").addEventListener("click", function() {
//             let first_name = document.getElementById("first-name").value;
//             fetch('http://localhost:5000/find', {
//                 method: 'POST', // *GET, POST, PUT, DELETE, etc.
//                 mode: 'cors', // no-cors, *cors, same-origin
//                 cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//                 credentials: 'same-origin', // include, *same-origin, omit
//                 headers: {
//                 'Content-Type': 'application/json'
//                 // 'Content-Type': 'application/x-www-form-urlencoded',
//                 },
//                 redirect: 'follow', // manual, *follow, error
//                 referrerPolicy: 'no-referrer',
//                 body: JSON.stringify({name: first_name})
//             }).then(response => response.json()).then(data => {
//                 if (data.success) {
//                     document.getElementById("bottom-result-1").innerHTML = "Your first name is already arabized !"
//                     document.getElementById("bottom-result-2").innerHTML = ""
//                     document.getElementById("bottom-result-3").innerHTML = ""
//                 }
//                 else {
//                     document.getElementById("bottom-result-1").innerHTML = "This first name is not arabized !"
//                     document.getElementById("bottom-result-2").innerHTML = "Your alternative first name will be : "
//                     document.getElementById("bottom-result-3").innerHTML = data.name
//                 }
//                 let l = data.number_name.toString();
//                 let s = l.split("").reverse().join("").match(/.{1,3}/g)
//                 let str = ""
//                 s.map((item) => {
//                     let temp = item.split("").reverse().join("")
//                     if (temp.length === 1) {
//                         temp = "00" + temp
//                     }
//                     else if (temp.length == 2) {
//                         temp = "0" + temp
//                     }
//                     str = temp + "   " + str
//                 })
//                 document.getElementById("number-elem").innerHTML = str + " names have already been obtained."
//             }).catch(error => console.log(error))
//         }) 
    
//         document.getElementById("first-name").addEventListener("keypress", function(event){
//             if (event.key === "Enter") {
//                 fetch('http://localhost:5000/find', {
//                     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//                     mode: 'cors', // no-cors, *cors, same-origin
//                     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//                     credentials: 'same-origin', // include, *same-origin, omit
//                     headers: {
//                     'Content-Type': 'application/json'
//                     // 'Content-Type': 'application/x-www-form-urlencoded',
//                     },
//                     redirect: 'follow', // manual, *follow, error
//                     referrerPolicy: 'no-referrer',
//                     body: JSON.stringify({name: event.target.value})
//                 }).then(response => response.json()).then(data => {
//                     if (data.success) {
//                         document.getElementById("bottom-result-1").innerHTML = "Your first name is already arabized !"
//                         document.getElementById("bottom-result-2").innerHTML = ""
//                         document.getElementById("bottom-result-3").innerHTML = ""
//                     }
//                     else {
//                         document.getElementById("bottom-result-1").innerHTML = "This first name is not arabized !"
//                         document.getElementById("bottom-result-2").innerHTML = "Your alternative first name will be : "
//                         document.getElementById("bottom-result-3").innerHTML = data.name
//                     }
//                     let l = data.number_name.toString();
//                     let s = l.split("").reverse().join("").match(/.{1,3}/g)
//                     let str = ""
//                     s.map((item) => {
//                         let temp = item.split("").reverse().join("")
//                         if (temp.length === 1) {
//                             temp = "00" + temp
//                         }
//                         else if (temp.length == 2) {
//                             temp = "0" + temp
//                         }
//                         str = temp + "   " + str
//                     })
//                     document.getElementById("number-item").textContent = str + " names have already been obtained."
//                 }).catch(error => console.log(error))
//             }
//         })
//     // }, 1000)
// })

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
                document.getElementById("bottom-result-1").textContent = "Your first name is already arabized !"
                document.getElementById("bottom-result-2").textContent = ""
                document.getElementById("bottom-result-3").textContent = ""
            }
            else {
                document.getElementById("bottom-result-1").textContent = "This first name is not arabized !"
                document.getElementById("bottom-result-2").textContent = "Your new first name will be : "
                document.getElementById("bottom-result-3").textContent = data.name
            }
        }).catch(error => console.log(error))
    })
    document.querySelector("#first-name").addEventListener('keypress', function(event) {
        if (event.key == "Enter") {
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
                    document.getElementById("bottom-result-1").textContent = "Your first name is already arabized !"
                    document.getElementById("bottom-result-2").textContent = ""
                    document.getElementById("bottom-result-3").textContent = ""
                }
                else {
                    document.getElementById("bottom-result-1").textContent = "This first name is not arabized !"
                    document.getElementById("bottom-result-2").textContent = "Your new first name will be : "
                    document.getElementById("bottom-result-3").textContent = data.name
                }
            }).catch(error => console.log(error))
        }
    }) 
})