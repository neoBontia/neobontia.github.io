let rentalsFile = "json/rentals.json";
let rentalData = []


fetch(rentalsFile)
    .then((response) => response.json())
    .then((jsObject) => {
        rentalData = jsObject["rentals"];
        console.log(rentalData);

        for (let i = 0; i < rentalData.length; i++) {
            let tr = document.createElement("tr");
            rental = rentalData[i];

            let type = document.createElement("td");
            type.innerText = rental.type;
            tr.appendChild(type);

            let max = document.createElement("td");
            max.innerText = rental.max;
            tr.appendChild(max);

            let rh = document.createElement("td");
            rh.innerText = rental.rh;
            tr.appendChild(rh);

            let rf = document.createElement("td");
            rf.innerText = rental.rf;
            tr.appendChild(rf);

            let wh = document.createElement("td");
            wh.innerText = rental.wh;
            tr.appendChild(wh);

            let wf = document.createElement("td");
            wf.innerText = rental.wf;
            tr.appendChild(wf);

            document.getElementById("rentals-table").appendChild(tr);
        
        }
    });