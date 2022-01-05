
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

 /*function changeBackgroundRed() {
    document.body.style.background = 'red';
    menuCloseOnClick();
 }
 
 function changeBackgroundOrange() {
    document.body.style.background = 'orange';
    menuCloseOnClick();
   
   }

 function changeBackgroundPurple() {
    document.body.style.background = 'purple';
    menuCloseOnClick();
 }

 function changeBackgroundGreen() {
    document.body.style.background = 'green';
    menuCloseOnClick();

 }

 function changeBackgroundHome() {
    document.body.style.background = '#f1f1f1';
    menuCloseOnClick();
 }*/

   
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
