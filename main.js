const array = [
    
        {
            firstname1: 'Géza',
            firstname2: 'Ferenc',
            lastname: 'Kocsis',
            married: true,
            pet: 'kutya'
        },
        {
            firstname1: 'Mária',
            firstname2: 'Júlia',
            lastname: 'Horváth',
            married: false,
            pet: 'macska'
        },
        {
            firstname1: 'Ferenc',
            lastname: 'Balogh',
            married: false,
            pet: 'teknős'
        },
        {
            firstname1: 'Gábor',
            firstname2: 'Attila',
            lastname: 'Horváth',
            married: true,
            pet: 'macska'
        },
];



const table = document.createElement('table');
 document.body.appendChild(table);
const thead = document.createElement('thead');
const theadrow = document.createElement('tr');
const th1 = document.createElement('th'); //vezeteknev
const th2 = document.createElement('th');//keresztnev
const th3 = document.createElement('th');//married
const th4 = document.createElement('th');//pet

table.appendChild(thead);
thead.appendChild(theadrow);
theadrow.appendChild(th1);
theadrow.appendChild(th2);
theadrow.appendChild(th3);
theadrow.appendChild(th4);
th2.colSpan= 2;                 
th1.innerHTML = "Vezetéknév";
th2.innerHTML = "Keresztnév";
th3.innerHTML = "Házas-e";
th4.innerHTML = "Háziállat";


const tbody = document.createElement('tbody');
table.appendChild(tbody);


for(const pers of array){
    const tr = document.createElement('tr');
    const td = document.createElement('td'); // lastname
    const td2 = document.createElement('td'); //firstname1
    const td3 = document.createElement('td'); // lastname
    const td4 = document.createElement('td'); //firstname1
   const td5 = document.createElement('td');

    tbody.appendChild(tr);
    tr.appendChild(td);
    tr.appendChild(td2);
    
    
    tr.addEventListener('click', (e) => {
        console.log('clicked');
      
        const kiv = tbody.querySelector('.selected');
        if(kiv != undefined){
            kiv.classList.remove('selected');
        }
        e.currentTarget.classList.add('selected');
    });

    td.innerHTML = pers.lastname;
    td2.innerHTML = pers.firstname1;
   
    td4.innerHTML = pers.married;
    td5.innerHTML = pers.pet;
   
    if(pers.married === true){
        td4.innerHTML = "igen";
    }
    else{
        td4.innerHTML = "nem";
    }
   

if(pers.firstname2 === undefined){
    td2.colSpan = 2;
}
else{
    const td3 = document.createElement('td');//firstname2
    tr.appendChild(td3);
    td3.innerHTML = pers.firstname2;
}
    tr.appendChild(td4);
    tr.appendChild(td5);
}