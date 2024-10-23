let array = [
    
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
   /*const th1 = document.createElement('th'); //vezeteknev
   const th2 = document.createElement('th');//keresztnev
   const th3 = document.createElement('th');//married
   const th4 = document.createElement('th');//pet*/
   const thvalues1 = [
    {innerHTML: 'Vezetéknév',
     colSpan: 1
    },
    {innerHTML: 'Keresztnév',
     colSpan: 2   
    },
    {innerHTML: 'Házas-e',
     colSpan: 1
    },
    {innerHTML: 'Háziállat',
     colSpan: 1
    },
   ];
   
   

for (const ertek of thvalues1){
let thcell =    createtablecells('th',ertek.innerHTML, theadrow); 

if(ertek.colSpan === 2){
    thcell.colSpan = 2;
};
};




   table.appendChild(thead);
   thead.appendChild(theadrow);
   /*theadrow.appendChild(th1);
   theadrow.appendChild(th2);
   theadrow.appendChild(th3);
   theadrow.appendChild(th4);*/
  // th2.colSpan= 2;                 
 /*  th1.innerHTML = "Vezetéknév";
   th2.innerHTML = "Keresztnév";
   th3.innerHTML = "Házas-e";
   th4.innerHTML = "Háziállat";*/
   const tbody = document.createElement('tbody');
   
    
   
   emberhozzaadas(array);
   
function emberhozzaadas(array){
    tbody.innerHTML = "";
    for(const pers of array){
        const tr = document.createElement('tr');
     

       
        createtablecells('td', pers.lastname, tr);
        let td1cell = createtablecells('td', pers.firstname1, tr);

        if (pers.firstname2 !== undefined) {
            createtablecells('td', pers.firstname2, tr);
        } else {
            td1cell.colSpan = 2;
        }
        if (pers.married === true) {
            createtablecells('td', "igen", tr);
        } 
        else {
            createtablecells('td', "nem", tr);
        };
        createtablecells('td', pers.pet, tr);

      table.appendChild(tbody);
      tbody.appendChild(tr);
 /*       const td = document.createElement('td'); // lastname
        const td2 = document.createElement('td');
 //       const td3 = document.createElement('td'); //firstname1
        const td4 = document.createElement('td'); //firstname1
     //  const td5 = document.createElement('td');
   
             
             tr.appendChild(td);
             tr.appendChild(td2);
       */       
             
          /* tr.addEventListener('click', (e) => {
                 console.log('clicked');
                 
                 const kiv = tbody.querySelector('.selected');
                 if(kiv != undefined){
                     kiv.classList.remove('selected');
                 }
                 e.currentTarget.classList.add('selected');
             });
         */
/*             td.innerHTML = pers.lastname;
             td2.innerHTML = pers.firstname1;
             
             td4.innerHTML = pers.married;
             td5.innerHTML = pers.pet;
*/             
         /*    if(pers.married === true){
                 td4.innerHTML = "igen";
             }
             else{
                 td4.innerHTML = "nem";
             }
            
        */
              
                
                /*const td3 = document.createElement('td');//firstname2
                tr.appendChild(td3);
                td3.innerHTML = pers.firstname2;*/
    };
//           tr.appendChild(td4);
          
};   
             
         
        
    


   
   const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
        e.preventDefault()
       const lastname = document.getElementById('lastname');
       const firstname1 = document.getElementById('firstname1');
       const firstname2 = document.getElementById('firstname2');
       const married = document.getElementById('married');
   
       const lastnamevalue = lastname.value;
       const firstname1value = firstname1.value;
       const firstname2value = firstname2.value;
       const marriedvalue = married.checked;
       const petvalue = pet.value;



    if(validateFields(lastname, firstname1, pet)){
       const ujember = {
        firstname1: firstname1value,
        firstname2: firstname2value,
        lastname: lastnamevalue,
        married: marriedvalue,
        pet: petvalue
       }
       if(ujember.firstname2 === ""){
        ujember.firstname2 = undefined;
      }
       array.push(ujember);
       emberhozzaadas(array);
    };
       
});

function validateFields(firstname1, lastname, pet){
    let result = true;
    if(firstname1.value === ""){
        const dad = firstname1.parentElement;
        const error = dad.querySelector('.error');
        error.innerHTML = 'Kötelező';
        result  = false;
    }

    if(lastname.value === ""){
        const dad = lastname.parentElement;
        const error = dad.querySelector('.error');
        error.innerHTML = 'Kötelező!';
        result  = false;
    }

    
    if(pet.value === ""){
        const dad = pet.parentElement;
        const error = dad.querySelector('.error');
        error.innerHTML = 'Kötelező!';
        result  = false;
    }

    return result;
};

/**
 * 
 * @param {'td'|'th'} tagname 
 * @param {string} innerHTML 
 * @param {HTMLTableRowElement} parentElement 
 */
function createtablecells(tagname, innerHTML, parentElement){
    const tag = document.createElement(tagname);
    tag.innerHTML = innerHTML;
    parentElement.appendChild(tag);

    return tag;
} 

