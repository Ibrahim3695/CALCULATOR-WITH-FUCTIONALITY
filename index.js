// const zeroCount = document.querySelector(".number-main-div")

// const addValueToScreen = (value) =>{
// zeroCount.value += value;

// console.log(value)
// }

// const calculate = ()=>{
//     try {
//         zeroCount.value.appendChild() = eval(zeroCount.value)
//     } catch (error) {
//         zeroCount.value = "Error"
//     }
// }

// const zeroCount = document.querySelector(".zero-count-div");

// const addValueToScreen = (value) => {
//     zeroCount.textContent += value;
// };

// const calculate = () => {
//     try {
//         zeroCount.textContent = eval(zeroCount.textContent);
//     } catch (error) {
//         zeroCount.textContent = "Error";
//     }
// };


const zeroCount = document.querySelector(".zero-count-div");

const addValueToScreen = (value) => {
    // Replace the '0' if it's the initial value
    if (zeroCount.textContent === '0') {
        zeroCount.textContent = '';
    }
    zeroCount.textContent += value;
};

const calculate = () => {
    try {
        const result = eval(zeroCount.textContent);
        zeroCount.textContent = result;
    } catch (error) {
        zeroCount.textContent = "Error";
    }
};

const clearScreen = () => {
    zeroCount.textContent = '0';
};

const toggleSign = () => {
    const currentValue = parseFloat(zeroCount.textContent);
    zeroCount.textContent = -currentValue;
};

