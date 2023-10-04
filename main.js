const myIf1 = document.getElementById('ex1-if');

const form1 = document.getElementsByClassName('exercise-form')[0];
function checkMyIf(myIf, form){
    if(myIf.checked){
        form.style.display = 'block';
    }
    else{
        form.style.display = 'none';
    }
}
function countA(inputStr) {
    if (typeof inputStr !== 'string') {
        return 0; 
    }
    const count = (inputStr.match(/[аa]/ig) || []).length;
    return count;  
}
function getRow(firstRow, secondRow) {
    const countAInFirstRow = countA(firstRow);
    const countAInSecondRow = countA(secondRow);
  
    if (countAInFirstRow > countAInSecondRow) {
      return firstRow;
    } else if (countAInSecondRow > countAInFirstRow) {
      return secondRow;
    } else {
      return "Количество букв 'а' одинаково в обоих строках.";
    }
}
myIf1.addEventListener("change", function() {
    checkMyIf(myIf1, form1);
  });


  const ex1Button = document.getElementById('ex1-button');
  
  ex1Button.addEventListener('click', function(){
    if(!myIf1.checked){
        const firstRow = prompt("Введіть перший рядок:");
        const secondRow = prompt("Введіть другий рядок:");
        
        const result = getRow(firstRow, secondRow);
        alert(result);  
        return;
    }
        const firstRow = document.getElementById('ex1-first').value ;
        const secondRow = document.getElementById('ex1-second').value;
        
        const result = getRow(firstRow, secondRow);

        const resultRow = document.getElementById('ex1-result');
        resultRow.textContent = result;
    })

// ----------------------------------------------------------------------------------
const form2 = document.getElementsByClassName('exercise-form')[1];
const myIf2 = document.getElementById('ex2-if');



myIf2.addEventListener("change", function() {
    checkMyIf(myIf2, form2);
  });

function formattedPhone(phone) {
    const cleanPhoneNumber = phone.replace(/\D/g, '');
    console.log(cleanPhoneNumber.length);
    if (cleanPhoneNumber.length > 12 || cleanPhoneNumber.length < 9) {
      return 'Формат номера неверный';
    }
    if(cleanPhoneNumber[0] == 3 && cleanPhoneNumber[1] == 8){
       
        const formattedNumber = `+${cleanPhoneNumber.substring(0, 2)} (${cleanPhoneNumber.substring(2, 5)}) ${cleanPhoneNumber.substring(5, 8)}-${cleanPhoneNumber.substring(8, 10)}-${cleanPhoneNumber.substring(10, 12)}`;

        return formattedNumber
    }
    else if(cleanPhoneNumber[0]== 0){
        const formattedNumber = `+38 (${cleanPhoneNumber.substring(0, 3)}) ${cleanPhoneNumber.substring(3, 6)}-${cleanPhoneNumber.substring(6, 8)}-${cleanPhoneNumber.substring(8, 12)}`;

        return formattedNumber
    }
    const formattedNumber = `+38 (0${cleanPhoneNumber.substring(0, 2)}) ${cleanPhoneNumber.substring(2, 5)}-${cleanPhoneNumber.substring(5, 7)}-${cleanPhoneNumber.substring(7, 11)}`;

    return formattedNumber;
}
const ex2Button = document.getElementById('ex2-button');

ex2Button.addEventListener('click',function(){
    if(!myIf2.checked){
        const phoneNum = prompt('Введіть номер телефону для форматування');
        const result = formattedPhone(phoneNum);
        alert(result);
    
        return;
    }

    const phoneNum = document.getElementById('ex2-first').value;
    const result = formattedPhone(phoneNum);
    const resultRow = document.getElementById('ex2-result');

    resultRow.textContent = result;
})
 