let Load = document.getElementById("load");
Load.addEventListener("click", async (e) => {
     let fetching = await window.fetch("./data.json");
     let data = await fetching.json();
     let table_section = document.getElementById("table");
     console.log(data);
    let json = document.getElementById("json");
    let x = json.value
     console.log(x);

     let filtered = data.filter((value, index) => {
       if (value.status === `${x}` ) {
         return value;
       }
     });
     console.log(filtered);
     let output = " ";
     for (let value of filtered) {
       output += `
        <tr>
        <td>${value.capsule_id}</td>
         <td>${value.missions.length}</td>
          <td>${value.details}</td>
        </tr>
        `;
     }
     table_section.innerHTML = output;
} )

