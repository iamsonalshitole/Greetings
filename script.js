let input = document.querySelector('input');
       let button = document.querySelector('button');
       let message = document.querySelector('.message');

       button.addEventListener("click", displayMessage);

       function displayMessage(){
           name = input.value;

           message.innerText = `Hello ${name} ${greet()}`
       }
       function greet(){
           let hours = new Date().getHours();
           if(hours < 12){
               return "Good Morning";
           }
           else if(hours < 18){
               return "Good Afternoon";
           }
           else{
               return "Good Evening";
           }
       }
