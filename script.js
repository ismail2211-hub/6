let fruits = [ 'Grape', 'Banana', 'Cherry', 'Olma' ,]
console.log(fruits);
let answer = confirm(`Boshlanishida Arrayning uzunligi: ${fruits.length}`)
if (answer){
    alert('Sizning Arreyangizdan malumotlarni olib tashaymiz')
    fruits.pop();
}
alert(`Arrayning yangi uzunligi: ${fruits .length}`);
console.log(fruits );
