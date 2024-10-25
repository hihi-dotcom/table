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

    createHTMLelement("table", "persontable", document.body);
    //Táblázat generálása
    createHTMLelementwithParentId('thead', 'persthead', 'persontable');
    createHTMLelementwithParentId('tr', 'persthr', 'persthead');//Tábl. hozzáadása a html fájlhoz.
    // a táblázat fejrész sorának generálása
   /*const th1 = document.createElement('th'); //vezeteknev
   const th2 = document.createElement('th');//keresztnev
   const th3 = document.createElement('th');//married
   const th4 = document.createElement('th');//pet*/
   createTableHeaderCells();



 // a tábl. fejrészéhez adtuk a fejrész sorát.
   /*theadrow.appendChild(th1);
   theadrow.appendChild(th2);
   theadrow.appendChild(th3);
   theadrow.appendChild(th4);*/
  // th2.colSpan= 2;                 
 /*  th1.innerHTML = "Vezetéknév";
   th2.innerHTML = "Keresztnév";
   th3.innerHTML = "Házas-e";
   th4.innerHTML = "Háziállat";*/

   createHTMLelementwithParentId('tbody', 'perstbody', 'persontable'); // a tábl. törzsének létre hozzása
   
    
   
   emberhozzaadas(array); // a táblázat törzsét feltöltő függvény meghívása a tömbünk bemeneti értékkel.
   
  
        
    


   
   const form = document.getElementById('form');   // A form értékeivel való munka kezdete
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



    if(validateFields(lastname, firstname1, pet)){ // ez az elágazás biztosítja,hogy hozzátudjunk adni újembert a tömbünkhöz.
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
       form.reset();
    };
       
});

function validateFields(firstname1, lastname, pet){ // A függvény törzsében vizsgáljuk,hogy  ki vannak e töltve a mezők amelyeknek értékei elengedhetetlenek,ahhoz,hogy feltöltsük a tömbünkbe és a táblázatba a példányt.
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



