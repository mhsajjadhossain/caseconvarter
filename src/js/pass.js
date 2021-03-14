// function for selecting single node element
let req = (elm) => {
    return document.querySelector(elm);
}
// function for selecting Multiple node elements
let reqAll = (elm) => {
    return document.querySelectorAll(elm);
}
// password genaretor
!function(){
    let copy = req('.copy')
    let passBox = req('.password')
    let btn = req('.genarate')

    let firstPass = ()=>{
        req('.copy').style.display="block"
        req('.successMsg').style.display="none"
        let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()~{}[]:>?+-_<';
        let passLength = 18;
        let pass='';

        for (let i = 0; i < passLength; i++) {
            let randomVal = Math.floor(Math.random() * chars.length)
            pass+= chars.substring(randomVal,randomVal+1)
            passBox.value = pass;
        }
    }

    let copyPass = ()=>{
        navigator.clipboard.writeText(passBox.value).then(function() {
            req('.successMsg').style.display="block"
        }, function(err) {
            console.error('Async: Could not copy text: ', err);
        });
    }
    btn.addEventListener('click',(e)=>{
        firstPass()
        
    })
    copy.addEventListener('click',(e)=>{
        copyPass()
    })

}();