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
   createTableHeaderCells();
   createHTMLelementwithParentId('tbody', 'perstbody', 'persontable'); // a tábl. törzsének létre hozzása
   
   emberhozzaadas(array); // a táblázat törzsét feltöltő függvény meghívása a tömbünk bemeneti értékkel. 
      // A form értékeivel való munka kezdete
form.addEventListener('submit', (e) => {
        e.preventDefault()
       const form = e.currentTarget;
       const lastname = document.getElementById('lastname');
       const firstname1 = document.getElementById('firstname1');
       const firstname2 = document.getElementById('firstname2');
       const married = document.getElementById('married');
   
       const lastnamevalue = lastname.value;
       const firstname1value = firstname1.value;
       const firstname2value = firstname2.value;
       const marriedvalue = married.checked;
       const petvalue = pet.value;



    if(validateFields()){ // ez az elágazás biztosítja,hogy hozzátudjunk adni újembert a tömbünkhöz.
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
       hibatorles();
       form.reset();
    };
       
});





