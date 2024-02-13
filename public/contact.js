console.log('hey we are in contact.js')

let fieldlist=[document.getElementById('first_name'),document.getElementById('last_name'),document.getElementById('email_id'),document.getElementById('phone_no'),document.getElementById('address'),document.getElementById('duration')]
let subbtn=document.getElementById('submitbtn').addEventListener('click',function (e) {
    let message=false
    for (let index = 0; index < fieldlist.length; index++) {
        const element = fieldlist[index];
        if (element.value=='') {
            element.style.border='1px solid red'
            console.log(element.value)
            message=true
            setTimeout(() => {    
                window.scrollTo(0,0)
            }, 500);
        }
    };
    setTimeout(() => {
        if (message==true) {
            document.getElementById('message').style.display='block'
        }
    }, 500);
    
});

    
