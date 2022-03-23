let count = 0

function plus(){
    count += 1
    document.getElementById("count").textContent = count
}

function save(){
    document.getElementById("save-text").textContent += "- " + count + " "
    count = 0
    document.getElementById("count").textContent = count

}