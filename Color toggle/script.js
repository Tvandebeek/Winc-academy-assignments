//om de navbar tevoorschijn te klikken en te laten verwijnen//

let toggleNavStatus = false;

let toggleNav = function(){
    let getSidebar = document.querySelector('.nav-sidebar');
    let getSidebarUl = document.querySelector('.nav-sidebar ul');
    let getSidebarLinks = document.querySelectorAll('.nav-sidebar a');

        if(toggleNavStatus == false) {
         getSidebarUl.style.visibility = 'visible';
         getSidebar.style.width = '275px'
        
         let arrayLenght = getSidebarLinks.length;
         for (let i = 0; i < arrayLenght; i++) {
             getSidebarLinks[i].style.opacity = '1';
         }

          toggleNavStatus = true;
    }

    else if(toggleNavStatus == true) {
        getSidebar.style.width = '50px';
        getSidebarUl.style.visibility = 'hidden';
       
        let arrayLenght = getSidebarLinks.length;
        for (let i = 0; i < arrayLenght; i++) {
            getSidebarLinks[i].style.opacity = '0';
        }
    
        toggleNavStatus = false;
   }
 }

 //om de kleuren te laten verschijnen als er op geklikt wordt//
 
 let toggleColor = true;

 let menuCloseOnClick = function(){
        let getSidebar = document.querySelector('.nav-sidebar');
        let getSidebarUl = document.querySelector('.nav-sidebar ul');
        let getSidebarLinks = document.querySelectorAll('.nav-sidebar a');
    
            if(toggleColor == true) {
             getSidebarUl.style.visibility = 'hidden';
             getSidebar.style.width = '50px'
            
             let arrayLenght = getSidebarLinks.length;
             for (let i = 0; i < arrayLenght; i++) {
                 getSidebarLinks[i].style.opacity = '0';
             }
    
              toggleColor = false;
            }
    
    
        else if(toggleColor == false) {
            getSidebar.style.width = '275px';
            getSidebarUl.style.visibility = 'visible';
           
            let arrayLenght = getSidebarLinks.length;
            for (let i = 0; i < arrayLenght; i++) {
                getSidebarLinks[i].style.opacity = '0';
            }
        
            toggleColor = true;
        }}

// de functies die uiteindelijk in de html "gecalled" worden//

 function changeBackgroundRed() {
    document.body.style.background = 'rgb(245, 24, 24)';
    menuCloseOnClick();
    outputNameClr();
}
 
 function changeBackgroundOrange() {
    document.body.style.background = 'rgb(224, 154, 62)';
    menuCloseOnClick();
}

 function changeBackgroundPurple() {
    document.body.style.background = 'rgb(236, 88, 217)';
    menuCloseOnClick();
 }

 function changeBackgroundGreen() {
    document.body.style.background = 'rgb(161, 240, 154)';
    menuCloseOnClick();

 }

 function changeBackgroundHome() {
    document.body.style.background = '#f1f1f1';
    menuCloseOnClick();
 }

// om de radiobtn van de gekozen kleur "aan te laten" en de rest uit te doen//

document.querySelector('input[name="rdbtn"]:checked').checked = false;

// hamburger icon hover ... niet gelukt//
// color name described into webpage ... niet gelukt'//
//transition is 0,4 (zie in CCS)
//Key-listner ... niet gelukt.//

//Helaas geen tijd meer om dit te fine-tunen... was leuk project!//
//Ben benieuwd naar de feedback, kon vast simpeler...//

