// const firstDiv = document.getElementById("first");
// const secondDiv = document.getElementById("second");

// firstDiv.addEventListener("drag", () => {
//     console.log("Hello")
// })

function copyFn() {
    let copyValue = document.getElementById("copyField").value;
    let pasteValue = document.getElementById("pasteField").value;
    console.log([copyValue, pasteValue])
    document.getElementById("pasteField").value = copyValue;
    console.log([copyValue, pasteValue])
    document.getElementById("copyField").value = ""
}

const copyBtn = document.getElementById("copy");
copyBtn.addEventListener("click", copyFn);