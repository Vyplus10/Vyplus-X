    /*This is the welcomeLoader and the System interface settings.
    It contains:
     The Interface Timeout Random duratinon
     The Interface Timeout function
     
     
     The system Interface display*/
     
     
let welcomeLoader=document.getElementById("welcomeLoaderJs").style

let systemInterface=document.getElementById("systemInterfaceJs").style



let FloatingAccessibilityMenuBox=document.getElementById("FloatingAccessibilityMenuBoxJs").style
let FloatingAccessibilityMenu=document.getElementById("FloatingAccessibilityMenuJs").style
//let samp=document.getElementById("samp").style 


 var welcomeInterfaceTimeoutRandomDuration=(Math.floor(Math.random()*(3-2))+2)*1000//initial (31, 21)
var welcomeInterfaceTimeoutFunction=setTimeout(function(){
  welcomeLoader.display="none"
  //samp.display="block"
  systemInterface.display="flex"
  
  FloatingAccessibilityMenuBox.display="block"
  //FloatingAccessibilityMenu.display="block"
},welcomeInterfaceTimeoutRandomDuration)


