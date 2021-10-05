let btnIncrement = document.getElementById('increment-btn');
let btnDecrement = document.getElementById('decrement-btn');
let output = document.getElementById('output');


const init = () => {
    let number;
    number = parseInt(output.innerText)
  
    const increment = () => {
        value = number++
        output.innerText = value
    }
    btnIncrement.onclick = increment;

    const decrement = () => {
        value = number--
        output.innerText = value
    }
    btnDecrement.onclick = decrement;
}

window.onload = init









