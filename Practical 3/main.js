console.log("Hello");
function buttonHandle(){
    console.log("Clicked");
    console.log(document.getElementById("getName"));
    console.log(document.getElementById("getDetails"));



    const tbody = document.getElementById("output");
    const tr = document.createElement("tr");
    const td = document.createElement("td");

    td.innerText = document.getElementById("getName").value;
    tr.appendChild(td);
    tbody.appendChild(tr);
}