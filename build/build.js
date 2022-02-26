// $(document).ready(function() {
//     // "use strict";
//     // GetTableFromExcel("./data/liste_prénoms_arabo-musulmans.xlsx")
//     let valueDisplays = document.querySelectorAll(".number-window-item");
//     let interval = 0.01;
//     let i = 0;

//     valueDisplays.forEach((valueDisplay) => {
//         let startValue = 0;
//         let endValue = parseInt(valueDisplay.getAttribute("data-val"));
//         let duration = Math.floor(interval / endValue);
//         let counter = setInterval(function(){
//             startValue += 1;
//             valueDisplay.textContent = startValue;
//             if (startValue == endValue) {
//                 clearInterval(counter);
//             }
//         }, duration);
//     });

//     document.querySelector("#first-name").addEventListener('keypress', function(event) {
//         if (event.key == "Enter") {
//             fetch('https://name-from-multiverse.herokuapp.com/find', {
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
//                 body: JSON.stringify({name: event.target.value})
//             }).then(response => response.json()).then(data => {
//                 if (data.success) {
//                     document.getElementById("bottom-result-1").innerHTML = "Your first name is already arabized !"
//                     document.getElementById("bottom-result-2").innerHTML = ""
//                     document.getElementById("bottom-result-3").innerHTML = ""
//                 }
//                 else {
//                     document.getElementById("bottom-result-1").innerHTML = "This first name is not arabized !"
//                     document.getElementById("bottom-result-2").innerHTML = "Your new first name will be : "
//                     document.getElementById("bottom-result-3").innerHTML = data.name
//                 }
//             }).catch(error => console.log(error))
//         }
//     }) 
// })

function _0x5171(_0x55d2d3,_0x1ebb28){const _0x229f09=_0x229f();return _0x5171=function(_0x517178,_0x29f597){_0x517178=_0x517178-0x196;let _0x302632=_0x229f09[_0x517178];return _0x302632;},_0x5171(_0x55d2d3,_0x1ebb28);}function _0x229f(){const _0xdc003d=['querySelector','This\x20first\x20name\x20is\x20not\x20arabized\x20!','forEach','stringify','data-val','cors','bottom-result-3','keypress','key','Enter','floor','3309936ncPewS','follow','2690100OLlFVQ','same-origin','4147374hCeSEu','88423yzYtDb','https://name-from-multiverse.herokuapp.com/find','application/json','12cesUJD','Your\x20new\x20first\x20name\x20will\x20be\x20:\x20','672608ScPXRU','then','bottom-result-2','15HQBdHb','.number-window-item','no-referrer','5636440IKQtvI','bottom-result-1','getAttribute','log','Your\x20first\x20name\x20is\x20already\x20arabized\x20!','value','textContent','768170vltocf','getElementById','innerHTML','json','addEventListener'];_0x229f=function(){return _0xdc003d;};return _0x229f();}(function(_0x3c2788,_0x46f830){const _0x5571c4=_0x5171,_0x4cea54=_0x3c2788();while(!![]){try{const _0x1713cc=-parseInt(_0x5571c4('0x1af'))/0x1*(parseInt(_0x5571c4('0x1b2'))/0x2)+parseInt(_0x5571c4('0x1b7'))/0x3*(parseInt(_0x5571c4('0x1b4'))/0x4)+parseInt(_0x5571c4('0x19a'))/0x5+parseInt(_0x5571c4('0x1aa'))/0x6+-parseInt(_0x5571c4('0x1ae'))/0x7+parseInt(_0x5571c4('0x1ba'))/0x8+-parseInt(_0x5571c4('0x1ac'))/0x9;if(_0x1713cc===_0x46f830)break;else _0x4cea54['push'](_0x4cea54['shift']());}catch(_0x185a84){_0x4cea54['push'](_0x4cea54['shift']());}}}(_0x229f,0xca50d),$(document)['ready'](function(){const _0x343aab=_0x5171;let _0x224c1c=document['querySelectorAll'](_0x343aab('0x1b8')),_0x125494=0.01,_0x21e0ef=0x0;_0x224c1c[_0x343aab('0x1a1')](_0x29209a=>{const _0x48bd98=_0x343aab;let _0x2971bf=0x0,_0x1a6238=parseInt(_0x29209a[_0x48bd98('0x1bc')](_0x48bd98('0x1a3'))),_0x4d1452=Math[_0x48bd98('0x1a9')](_0x125494/_0x1a6238),_0x4e0797=setInterval(function(){const _0x5d1115=_0x48bd98;_0x2971bf+=0x1,_0x29209a[_0x5d1115('0x199')]=_0x2971bf,_0x2971bf==_0x1a6238&&clearInterval(_0x4e0797);},_0x4d1452);}),document[_0x343aab('0x19f')]('#first-name')[_0x343aab('0x19e')](_0x343aab('0x1a6'),function(_0x14e488){const _0x270d71=_0x343aab;_0x14e488[_0x270d71('0x1a7')]==_0x270d71('0x1a8')&&fetch(_0x270d71('0x1b0'),{'method':'POST','mode':_0x270d71('0x1a4'),'cache':'no-cache','credentials':_0x270d71('0x1ad'),'headers':{'Content-Type':_0x270d71('0x1b1')},'redirect':_0x270d71('0x1ab'),'referrerPolicy':_0x270d71('0x1b9'),'body':JSON[_0x270d71('0x1a2')]({'name':_0x14e488['target'][_0x270d71('0x198')]})})[_0x270d71('0x1b5')](_0x142617=>_0x142617[_0x270d71('0x19d')]())['then'](_0x180277=>{const _0x26de15=_0x270d71;_0x180277['success']?(document['getElementById'](_0x26de15('0x1bb'))['innerHTML']=_0x26de15('0x197'),document[_0x26de15('0x19b')](_0x26de15('0x1b6'))['innerHTML']='',document[_0x26de15('0x19b')](_0x26de15('0x1a5'))[_0x26de15('0x19c')]=''):(document['getElementById'](_0x26de15('0x1bb'))[_0x26de15('0x19c')]=_0x26de15('0x1a0'),document['getElementById']('bottom-result-2')[_0x26de15('0x19c')]=_0x26de15('0x1b3'),document['getElementById'](_0x26de15('0x1a5'))[_0x26de15('0x19c')]=_0x180277['name']);})['catch'](_0x21596c=>console[_0x270d71('0x196')](_0x21596c));});}));