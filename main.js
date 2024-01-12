const tipBtns = document.querySelectorAll('.tip')
const reset = document.querySelector('.reset')
const bill = document.querySelector('#bill')
const numOfPeople = document.querySelector('#num-of-people')
const tipPerPerson = document.querySelector('#tip-per-person')
const tipTotal = document.querySelector('#tip-total')
const billError = document.querySelector('.bill-error')
const peopleError = document.querySelector('.people-error')

reset.disabeled = true

tipBtns.forEach(tip => {
    tip.onclick = () => {
        // Class Management
        reset.disabeled = false
        reset.classList.remove('reset-active')
        reset.classList.add('reset-active')
        tipBtns.forEach(t => {
            if(t.dataset.tip === 'custom'){
                console.log(t.dataset.tip)
            }else{
                t.classList.remove('active-tip')
            }
        })
        if(tip.dataset.tip === 'custom'){
            console.log(tip.dataset.tip)
        }else{
            tip.classList.add('active-tip')
        }
        // Class Management
        // Buttons tip manage
        let billValue = bill.value
        let numOfPeopleValue = numOfPeople.value

        if(billValue === ''){
            // alert('Can\'t be zero bill')
            billError.innerText = 'Can\'t be zero'
        }
        else if(numOfPeopleValue === ''){
            // alert('Can\'t be zero numOfPeople')
            peopleError.innerText = 'Can\'t be zero'
        }
        else{
            peopleError.innerText = ''
            billError.innerText = ''
            
            
            if(tip.dataset.tip !== 'custom'){

            billValue = parseInt(bill.value)
            numOfPeopleValue = parseInt(numOfPeople.value)
            tipAmount = parseInt(tip.dataset.tip)
            
            let tipper = (billValue / 100) * tipAmount
            tipper = tipper.toFixed(2);
            console.log(tipper)
            tipTotal.innerText = `\$${tipper}`

            let perPerson = tipper / numOfPeopleValue
            perPerson = perPerson.toFixed(2)
            tipPerPerson.innerText = `\$${perPerson}`
        // Buttons tip manage
    }
    // random tip manage
    else{
        tip.onkeyup = () => {
            let tipAmount = tip.value
            billValue = parseInt(bill.value)
            numOfPeopleValue = numOfPeople.value

            let tipper = (billValue / 100) * tipAmount
            tipper = tipper.toFixed(2);
            tipTotal.innerText = `\$${tipper}`

            let perPerson = tipper / numOfPeopleValue
            perPerson = perPerson.toFixed(2)
            tipPerPerson.innerText = `\$${perPerson}`
        }
    }
    // random tip manage
}
    }
})

reset.onclick = () => {
    tipBtns.forEach(tip => {
        if(tip.dataset.tip === 'custom'){
            console.log(tip.dataset.tip)
        }else{
            tip.classList.remove('active-tip')
        }
    })
    reset.classList.remove('reset-active')
    tipPerPerson.innerText = '$0.00'
    tipTotal.innerText = '$0.00'
    bill.value = ''
    numOfPeople.value = ''
    peopleError.innerText = ''
    billError.innerText = ''
    reset.disabled = true
}
