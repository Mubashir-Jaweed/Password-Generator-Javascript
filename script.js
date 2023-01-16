var alp = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var num = [1,2,3,4,5,6,7,8,9,0]
var sym = ['!','@','#','$','%','^','&','*','(',')','_','=']



const  generatePass = (event)=>{
event.preventDefault();
var value = document.getElementById("value").value
var container = document.querySelector('.pass')

var store = []

for(var a = 0 ; a<=(value/2) ; a++){
    store.push(alp[parseInt(Math.random() * alp.length)]);
   
}

for (var n = 0; n <= (value / 2)/2; n++) {
  store.push(num[parseInt(Math.random() * num.length)]);
}

for (var s = 0; s <= (value / 2)/3; s++) {
  store.push(sym[parseInt(Math.random() * sym.length)]);
}

const generatedPassword = store.join().replaceAll(',','')
container.innerHTML = generatedPassword

}

