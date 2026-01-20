const validpin = 1245;

let transactiondata=[];

// reusable function to getvalue
function getvalueNumber(id){
    const input = document.getElementById(id);
    const inputvalue = input.value;
    const inputvalueNumber =parseInt(inputvalue);
    return inputvalueNumber;
}
function getvalue(id){
    const input = document.getElementById(id);
    const inputvalue = input.value;
    return inputvalue;
}

// function to get innertext
function getinnerText(id){
    const element = document.getElementById(id);
    const elementvalue = element.innerText;
    const elementvalueNumber =parseInt(elementvalue);
    return elementvalueNumber;
}

// function to set innertext
function setinnerText(value){
    const availableBalanceelement =document.getElementById("available-balance");
    availableBalanceelement.innerText = value;
}

// function to Toggle
function handleToggle(id){ 
     const forms =document.getElementsByClassName("form");
    for(const form of forms){
        form.style.display = 'none';
    }
    document.getElementById(id).style.display = 'block';
}

// function to toggle button
function toggleButton(id){
     const formBtns =document.getElementsByClassName("form-btn");
  for(const btn of formBtns){
    btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]");
    btn.classList.add("border-gray-300");
  }
  document.getElementById(id).classList.remove("border-gray-300");
  document.getElementById(id).classList.add("border-[#0874f2]","bg-[#0874f20d]");
}

//add money feature
document.getElementById("add-money-btn").addEventListener('click',function(e){
e.preventDefault(); 
const bank =getvalue("bank");
const account =getvalue('account-number');
const amount = getvalueNumber("add-amount");
if(amount <=0){
    alert("Invalid amount");
    return;
}
const pin =getvalueNumber('add-pin');
const availableBalance =getinnerText('available-balance');

if(account.length<11){
    alert("provide a valid account number");
    return;
}
if(pin!== validpin){
    alert("plz provide a valid pin");
    return;
}
const newtotalavailableBalance = availableBalance+amount;
setinnerText(newtotalavailableBalance);

const data ={
    name:"Add-Money",
    date:new Date().toLocaleString()
}
transactiondata.push(data);

})
 
validWithdrawpin = 1234;
//cash out feature
document.getElementById("withdraw-btn").addEventListener('click',function(e){
    e.preventDefault();
    const agentNo =getvalue("agent-no");
    const withdrawPin =getvalueNumber("withdraw-pin");
    const amount =getvalueNumber("withdraw-amount");
    const availableBalance =getinnerText("available-balance");
    if(amount<=0 || amount>availableBalance){
        alert("invalid amount");
        return;
    }
    if(agentNo.length<11){
        alert('plz provide a valid agent NO');
        return;
    }
    if(withdrawPin !== validWithdrawpin){
        alert("provide a valid pin");
        return;
    }
    const newtotalavailableBalance = availableBalance - amount;
 setinnerText(newtotalavailableBalance);
    const data ={
    name:"Cash-Out",
    date:new Date().toLocaleString()
}
transactiondata.push(data);
})

const validtransferpin = 1243
// transfer money feature
document.getElementById("transfer-btn").addEventListener('click',function(e){
    e.preventDefault();
    console.log("clicked");
    const accountNo = getvalue("account-no");
    const amount = getvalueNumber("transfer-amount");
    const pin = getvalueNumber("transfer-pin");
    const availableBalance =getinnerText("available-balance");
    if(amount<=0 || amount>availableBalance){
        alert("Enter a valid amount");
        return;
    }
    if(accountNo.length<11){
        alert("provide a valid account no");
        return;
    }
    if(pin !== validtransferpin){
        alert("plz provide a valid pin");
        return;
    }
    const newtotalavailableBalance = availableBalance - amount;
    setinnerText(newtotalavailableBalance);
    const data ={
    name:"Transfer-Money",
    date:new Date().toLocaleString()
}
transactiondata.push(data);
})

let bonustaken = false;
const validBonusCode = "Fahim74";
const bonusAmount = 1999;

// get bonus feature
document.getElementById("bonus-btn").addEventListener('click',function(e){
e.preventDefault();
const bonus = getvalue("bonus-code");
 const availableBalance =getinnerText("available-balance");

 if(bonustaken == true){
    alert("bonus already taken");
    return;
 }

 if(bonus !== validBonusCode){
    alert("Invalid Bonus code");
    return;
 }
 const newavailablebalance = availableBalance+bonusAmount;
 setinnerText(newavailablebalance);
 bonustaken = true;
 const data ={
    name:"Get Bonus",
    date:new Date().toLocaleString()
}
transactiondata.push(data);

})


const validpaybillpin = 1246
// pay bill feature
document.getElementById("pay-btn").addEventListener('click',function(e){
    e.preventDefault();
const bank =getvalue("bank");
const account =getvalue("accounter-number");
const amount = getvalueNumber("pay-amount");
if(amount <=0){
    alert("Invalid amount");
    return;
}
const pin =getvalueNumber("pay-pin");
const availableBalance =getinnerText('available-balance');

if(account.length<11){
    alert("provide a valid account number");
    return;
}
if(pin!== validpaybillpin){
    alert("plz provide a valid pin");
    return;
}
const newtotalavailableBalance = availableBalance-amount;
setinnerText(newtotalavailableBalance);

const data ={
    name:"Pay-Bill",
    date:new Date().toLocaleString()
}
transactiondata.push(data);
})








//toggling feature
document.getElementById("add-btn").addEventListener('click',function(){
  handleToggle("add-money-parent");
 toggleButton("add-btn");
})
document.getElementById("cash-out-btn").addEventListener('click',function(){
   handleToggle("cash-out-parent");
  toggleButton("cash-out-btn");
})
document.getElementById("transfer-money-btn").addEventListener('click',function(){
    handleToggle("transfer-money-parent");
    toggleButton("transfer-money-btn");
})
document.getElementById("get-bonus-btn").addEventListener('click',function(){
  handleToggle("get-bonus-parent");
  toggleButton("get-bonus-btn");
})
document.getElementById("pay-bill-btn").addEventListener('click',function(){
  handleToggle("pay-bill-parent");
  toggleButton("pay-bill-btn");
})
document.getElementById("transactions-btn").addEventListener('click', function(){
    handleToggle("transactions-parent");
    toggleButton("transactions-btn");

    const transactionContainer = document.getElementById("transaction-container");
    transactionContainer.innerText = '';

    for(const data of transactiondata){
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="bg-white rounded-xl p-3 flex justify-between items-center mt-3">
            <div class="flex items-center">
                <div class="bg-[#f4f5f7] p-3 rounded-full">
                    <img src="./assets/wallet1.png" class="mx-auto" alt="">
                </div>
                <div class="ml-3">
                    <h1>${data.name}</h1>
                    <p>${data.date}</p>
                </div>
            </div> 
            <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>`;
        transactionContainer.appendChild(div);
    }
});
