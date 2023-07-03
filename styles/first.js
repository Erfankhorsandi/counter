let count = 0 

function increment() {
    count = count + 1
    document.getElementById("counter-el").innerText = count
}
function decrement() {
    count = count - 1
    document.getElementById("counter-el").innerText = count
}
function reset() {
    count = 0
    document.getElementById("counter-el").innerText = count
}
