/**
 * 
 * @param {'td'|'th'} tagname // a createtablecells függvényhez segédlet, a függv. paramétereiről.
 * @param {string} innerHTML 
 * @param {HTMLTableRowElement} parentElement 
 */
function createtablecells(tagname, innerHTML, parentElement){  // ennek a függvénynek a segítségével vagyunk képesek feltölteni a táblázatunk minden celláját. 
    const tag = document.createElement(tagname);
    tag.innerHTML = innerHTML;
    parentElement.appendChild(tag);

    return tag;
}; 
/**
 * 
 * @param {string} tagname 
 * @param {string} id 
 * @param {HTMLElement} parentelement 
 */
function createHTMLelement(tagname, id, parentelement){
    const htmlelement = document.createElement(tagname);
    htmlelement.id = id;
    parentelement.appendChild(htmlelement);
};


function createHTMLelementwithParentId(tagname, id, parentId){
    const pelement = document.getElementById(parentId);
    if(pelement != undefined){
        createHTMLelement(tagname, id, pelement);
    }
};

function createTableHeaderCells(){
    const theader = document.getElementById('persthr');
    const thvalues1 = [ 
        //A táblázat fejrészének elemei értékeikkel
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
       
       
    
    for (const ertek of thvalues1){  // a táblázat fejrészének a generálása
    let thcell =    createtablecells('th',ertek.innerHTML, theader); 
    
    if(ertek.colSpan === 2){
        thcell.colSpan = 2;
    };
    };
};


function emberhozzaadas(array){ 
    const tbody = document.getElementById('perstbody');
    tbody.innerHTML = "";
    for(const pers of array){  
        const tr = document.createElement('tr'); // sorok létrehozása
        tbody.appendChild(tr);
        createtablecells('td', pers.lastname, tr); // egy olyan elem létrehozása, amellyel később nem foglalkozunk
        let td1cell = createtablecells('td', pers.firstname1, tr); // egy elem létrehozása a tábl. törzsébe, később dolg.

        if (pers.firstname2 !== undefined) { // ha a második keresztnév nem undefined értéket kap létre hozza a második keresztnévhez tartozó cellát
            createtablecells('td', pers.firstname2, tr);
        } 
        else {
            td1cell.colSpan = 2; //ellenkező esetben egybe vonja a 2. keresztnév és az 1. keresztnév celláját
        }
        if (pers.married === true) { // Ha true a married érték igen kerül a tábl. törzsébe, ha false => nem kerül bele.
            createtablecells('td', "igen", tr);
        } 
        else {
            createtablecells('td', "nem", tr);
        };
        createtablecells('td', pers.pet, tr); // háziállat bekerülése a tábl.-ba

     //hozzáadja a tábl. törzséhez, a sorokat melyeket feltöltöttünk értékekkel.
 
 
 
      /*       const td = document.createElement('td'); // lastname
        const td2 = document.createElement('td');
 //       const td3 = document.createElement('td'); //firstname1
        const td4 = document.createElement('td'); //firstname1
     //  const td5 = document.createElement('td');
   
             
             tr.appendChild(td);
             tr.appendChild(td2);
       */       
             
          tr.addEventListener('click', (e) => {
                 console.log('clicked');   // alapvetően kiemeli nekünk azt a példányt amelyre éppen kattintottunk.
                 
                 const kiv = tbody.querySelector('.selected');
                 if(kiv != undefined){
                     kiv.classList.remove('selected');
                 }
                 e.currentTarget.classList.add('selected');
             });
         
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
             


function validateFields(firstname1, lastname, pet){ // A függvény törzsében vizsgáljuk,hogy  ki vannak e töltve a mezők amelyeknek értékei elengedhetetlenek,ahhoz,hogy feltöltsük a tömbünkbe és a táblázatba a példányt.
    const firstname1 = document.getElementById('firstname1');
    const lastname = document.getElementById('lastname');
    const pet = document.getElementById('pet');
    let result = true;
    if(validateElement(firstname1)){
        validateElement(firstname1,"Adj meg egy keresztnevet!");
        result = false;
    }
    if(validateElement(lastname)){
        validateElement(lastname,"Adj meg egy vezetéknevet!");
        result = false;
    } if(validateElement(pet)){
        validateElement(pet,"Válassz ki egy állatot!");
        result = false;
    }
    return result;


  /* 
    if(!lastname){
        validateElement(lastname, 'Adj meg egy vezetéknevet!');
        return false;
    }
    if(!firstname1){
        validateElement(firstname1, 'Adj meg egy keresztnevet!');
        return false;
    }
    if(!pet){
        validateElement(pet, 'Válassz egy állatot! '); 
        return false;
    }    
        
        return true; 
          */
    };
     
    // let result = true;
   /* if(firstname1.value === ""){
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
    */
   



function hibatorles(){
    const hibak = form.querySelectorAll('.error');
    for(const hiba of hibak)
        hiba.innerHTML = "";
};

/**
 * 
 * @param {HTMLElement} htmlelement 
 * @param {string} erroruzenet 
 */


function validateElement(htmlelement, erroruzenet){
    if(htmlelement.value === ""){
        const apa = htmlelement.parentElement;
        const h = apa.querySelector('.error');
        h.innerHTML = erroruzenet;
        return false;
    }
    return true;    
};