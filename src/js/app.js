// function for selecting single node element
let req = (elm) => {
    return document.querySelector(elm);
}
// function for selecting Multiple node elements
let reqAll = (elm) => {
    return document.querySelectorAll(elm);
}
// case converter code here
! function () {
    
    let inverse = (str) => {
        var s = '';
        var i = 0;
        while (i < str.length) {
            var n = str.charAt(i);
            if (n == n.toUpperCase()) {
                // *Call* toLowerCase
                n = n.toLowerCase();
            } else {
                // *Call* toUpperCase
                n = n.toUpperCase();
            }

            i += 1;
            s += n;
        }
        return s;
    };


    /*===============================================
        all default funtions ends here
    =================================================*/

    // defining the letter and word count function here
    let txtCount = (input, letterOut, wordOut, lineOut) => {
        let inputText = req('#caseInputFeild').value;
        req(letterOut).innerText = 0;
        req(letterOut).innerText = inputText.length;

        let inputWord = inputText.trim().split(' ').length;
        req(wordOut).innerText = 0;
        req(wordOut).innerText = inputWord;

        req(lineOut).innerText = inputText.split(/\r\n|\r|\n/).length;

    }

    // defining the case conversion function here
    let converTo = (initialFlag, inputBox) => {
        let inputBoxNode = req(inputBox);
        switch (initialFlag) {
            case 'uppercase':
                inputBoxNode.value = inputBoxNode.value.toUpperCase();
                break;
            case 'lowercase':
                inputBoxNode.value = inputBoxNode.value.toLowerCase();
                break;
            case 'capitalize':
                inputBoxNode.value = inputBoxNode.value.replace(/\b\w/g, l => l.toUpperCase())
                break;
            case 'sentence':
                inputBoxNode.value = inputBoxNode.value.toLowerCase().replace(/\b\w/, l => l.toUpperCase())
                break;
            case 'inverse':
                inputBoxNode.value = inverse(inputBoxNode.value);
                break;
            case 'clear':
                inputBoxNode.value = '';
                break;
            default:
                break;
        }

    }
    // author info
    console.log('%c Developed By:M.h Sajjad Hossain Ripon \n Author Email: mail.mhsajjad@gmail.com ', 'background: #1abc9c; color: #222;')
    // author info
    // calling important var below
    let inputFeild = req('#caseInputFeild');
    // trigger the keyup method here for call the function
    inputFeild.addEventListener('keydown', (e) => {
        txtCount('#caseInputFeild', '.letterOutputDisplay', '.wordOutputDisplay', '.lineOutputDisplay')

    })
    inputFeild.addEventListener('input', (e) => {
        txtCount('#caseInputFeild', '.letterOutputDisplay', '.wordOutputDisplay', '.lineOutputDisplay')

    })
    txtCount('#caseInputFeild', '.letterOutputDisplay', '.wordOutputDisplay', '.lineOutputDisplay')
    // end of word and letter count area




    reqAll('.actionBtn').forEach(btn => {
        btn.addEventListener('click', e => {
            let actionToDo = e.target.dataset.action;
            converTo(actionToDo, '#caseInputFeild')
        })
    })
}()





