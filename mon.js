var whatknow = prompt('more about Monalisa or Davinci?')

var details

if (whatknow = 'Monalisa') {
    details = 'the painting probably of itlian noblewoman Lisa Ghocondo';
} else if (whatknow = 'Davinci') {
    details = 'he was italian, while his fam initally rested on his achievments as a pinter. he also bcamee know for his notebooks.';
}

function myFunction() {
    alert("more to know");
}
myFunction();



document.getElementById("details").innerText = details;