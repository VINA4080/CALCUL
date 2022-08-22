// Selector

// console.log(document.getElementById('bouton'));
// console.log(document.getElementsByClassName('btn'));
// console.log(document.querySelector('button'));
// console.log(document.getElementsByTagName('button'));

// var btn = document.getElementById('bouton');

// btn.onclick = function(){
//     // console.log("click");
//     // alert("click");
// }

// Evenement Click

// btn.addEventListener('click', function(){
//     console.log("click");
// })

var A = document.getElementById('name');
var B = document.getElementById('pass')
var btn = document.getElementById('bouton');
var result = document.getElementById('result');
var signe = document.getElementById('selection');

btn.addEventListener('click', function(){
    // console.log(A.value);
    // console.log(B.value);
    var resultat = (parseInt(A.value) + parseInt(B.value));
    // result.innerText = resultat;
    if (signe.value === '*') {
        result.innerText = A.value * B.value;
    }
    if (signe.value === '+') {
        result.innerText = resultat;
    }
    if (signe.value === '-') {
        result.innerText = A.value - B.value;
    }
    if (signe.value === '/') {
        result.innerText = A.value / B.value;
    }
})







