let req = (elm)=>{
    return document.querySelector(elm);
}


let inputBox = req('.input');
let output = req('.output');
let trigger  = req('.trigger');
let des  = req('.des');
let scope  = req('.scope');
let copyTxt  = req('.copyTxt');

let totalSnippets = {
    prefix:"",
    scope:"",
    body:"",
    description:""
}
inputBox.addEventListener('input',()=>{
    outPut()
})
trigger.addEventListener('input',()=>{
    outPut();
})
scope.addEventListener('input',()=>{
    outPut();
})
des.addEventListener('input',()=>{
    outPut();
})
copyTxt.addEventListener('click',()=>{
    copyText();
})

// showing output
let outPut = ()=>{
    totalSnippets.body = inputBox.value.split('\n');
    totalSnippets.prefix = trigger.value;
    totalSnippets.scope = scope.value;
    totalSnippets.description = des.value;
    output.innerHTML = `"${des.value}":`+JSON.stringify(totalSnippets,undefined, 4)
}
// copy json
let copyText = ()=>{
    navigator.clipboard.writeText(output.innerHTML).then(function() {
        req('.copied').innerText = "Output - Copied!"
    }, function(err) {
        console.error('Async: Could not copy text: ', err);
    });
}



