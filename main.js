// main project script file

// ambientglow switch - function
glowTime = () => {
    console.log('It\'s glow time!')
    let target = document.getElementById("lightBox");
    target.classList.toggle("glow");
}

// ambientglow switch - event listener
document.getElementById("switch").addEventListener("click", glowTime);