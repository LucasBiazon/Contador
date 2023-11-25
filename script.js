const num = document.querySelector(".contador span")
const subtrair = document.querySelector("#subtrair")
const aumentar = document.querySelector("#aumentar")
const resetar = document.querySelector("#resetar")

let cont = 0 
subtrair.addEventListener('click', () => {
    cont--
    num.innerHTML = cont
})

aumentar.addEventListener('click', () => {
    cont++
    num.innerHTML = cont
})

resetar.addEventListener("click", () => {
    cont = 0
    num.innerHTML = cont
})
