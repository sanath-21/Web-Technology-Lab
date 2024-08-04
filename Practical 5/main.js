function getData(){
    // link of the api frame work to save the data
    fetch("",
        {
            method : "POST",

            headers:{
                "Content-Type":"application/java"
            },
            body:JSON.stringify({
                "name":"Sanath",
                "attendace":"P",
                "rollNo":"BCA2205030",
                "marks":5
            })
        })
        .then(response => response.json())
        .then(data=>console.log(data))
}

function getDetails(response){
    fetch("") //link of the api framework to get the saved data
    .then(manageResponse);
}

function manageResponse(response){
    response.json().then(viewDetails);
}

function viewDetails(data){
    const tbody = document.getElementById("reSult");
    
    for (let index = 0; index<data.length; index++)
    {
        const element = data[index];

        console.log(element.rollNo, element.attendace, element.marks, element.date, element.errorMessage);

        const tr = document.createElement("tr");
        const tdrollNo = document.createElement("td");
        const tdattendace = document.createElement("td");
        const tdmarks = document.createElement("td");
        const tddate = document.createElement("td");
        const tderrorMessage = document.createElement("td");

        tdrollNo.innerText = element.rollNo;
        tdattendace.innerText = element.attendace;
        tdmarks.innerText = element.marks;
        tddate.innerText = element.date;
        tderrorMessage.innerText = element.errorMessage;

        tr.append(tdrollNo, tdattendace, tdmarks, tddate, tderrorMessage);
        tbody.append(tr);
    }
}