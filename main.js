const array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis'
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth'
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh'
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth'
    },
]


const table = document.createElement('table');
 document.body.appendChild(table);
const thead = document.createElement('thead');
const theadrow = document.createElement('tr');
const th1 = document.createElement('th');
const th2 = document.createElement('th');
table.appendChild(thead);
thead.appendChild(theadrow);
theadrow.appendChild(th1);
theadrow.appendChild(th2);
th2.colspan= 2;                 
th1.innerHTML = "Vezetéknév";
th2.innerHTML = "Keresztnév";



const tbody = document.createElement('tbody');
table.appendChild(tbody);


for(const pers of array){
    const tr = document.createElement('tr');
    const td = document.createElement('td'); // lastname
    const td2 = document.createElement('td'); //firstname1
   


    tbody.appendChild(tr);
    tr.appendChild(td);
    tr.appendChild(td2);
  


    td.innerHTML = pers.lastname;
    td2.innerHTML = pers.firstname1;
   

if(pers.firstname2 === undefined){
    td2.colSpan = 2;
}
else{
    const td3 = document.createElement('td');//firstname2
    tr.appendChild(td3);
    td3.innerHTML = pers.firstname2;
}

}