function buttonHandle(){
    document.getElementById("name");
    console.log(document.getElementById("getDetails"));

    const tbody = document.getElementById("outPut");
    const tr = document.createElement("tr");
    const td = document.createElement("td");

    td.innerText = document.getElementById("name").value;
    tr.appendChild(td);
    tbody.append(tr);

}

function getserverdata(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(handleJson)
    .catch(errorHandle);
}

function handleJson(response){
    response.json().then(handleResponse);
}
function handleResponse(response){
    console.log(response);

    const tbody = document.getElementById("getDetails")

    for (let index=0; index<response.length; index++)
    {
        const element = response[index];
        console.log(element.id, element.name);

        const tr = document.createElement("tr");
        const tdid = document.createElement("td");
        const tdname = document.createElement("td");

        tdid.innerText = element.id;
        tdname.innerText =  element.name;


        tr.append(tdid, tdname);
        tbody.append(tr);


    }
}

function errorHandle(error){
    console.log('Error: ', error);

}

window.onload = function(){
 getserverdata()
}