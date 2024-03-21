/*input*/
const dayInput = document.querySelector('.day-section input');
const monthInput = document.querySelector('.month-section input');
const yearInput = document.querySelector('.year-section input');
const button = document.querySelector('.btn');
/* output*/

const yearOutput = document.getElementById('years');
const monthOutput = document.getElementById('months');
const dayOutput = document.getElementById('days');
/*error*/

const dayError = document.querySelector('.error-day');
const monthError = document.querySelector('.error-month');
const yearError = document.querySelector('.error-year');

/*span tags*/

const years = document.getElementById('years');
const month = document.getElementById('months');
const day = document.getElementById('days');

/*day function*/

dayInput.addEventListener('input', days)
    function days (d) {
    if(+dayInput.value > 31 || +dayInput.value < 1) {
       dayError.classList.remove('hidden');
    }
    else{
        dayError.classList.add('hidden');
    }
};

    
/*month function*/ 


monthInput.addEventListener('input', months)
   function months (m) {
    if(+monthInput.value > 12 || +monthInput.value < 1) {
        monthError.classList.remove('hidden');
    }

    else {
        monthError.classList.add('hidden');
        
    }
}
/*year function */

yearInput.addEventListener('input', year);
   function year (y) {
    let value = yearInput.value;
    let currentYear = new Date().getFullYear();
    console.log(currentYear);

    if(value > currentYear || value == '') {
        yearError.classList.remove('hidden');
    }

    else{
        yearError.classList.add('hidden');
    }
}
/*calculate date*/

function calculateDate () {
    let bDate = dayInput.value;
    let bMonth = monthInput.value;
    let bYear = yearInput.value;

    if ((bDate < 1 || bDate > 31) || (bMonth < 1 || bMonth > 12) || (bYear < 1500 || bYear > 2024)){
        years.innerHTML = '--';
        month.innerHTML = '--';
        day.innerHTML = '--';
        alert('please put the correct details!');
        return;
    }
    else{

    let today = new Date();

    let todayDate = today.getDate();
    let todayMonth = today.getMonth() + 1;
    let todayYear = today.getFullYear();

    let diffDate, diffMonth, diffYear;

    diffMonth = todayMonth - bMonth;
    diffDate = todayDate - bMonth;
    diffYear = todayYear - bYear;

  if(diffMonth < 0 || (diffMonth === 0 && diffDate < 0)){
    diffYear--;
    diffMonth += 12;
  }

  if(diffDate < 0) {
    diffMonth--;
    let dayInLastMonth = new Date(bYear, bMonth, 0).getDate();
    diffDate += dayInLastMonth;
  }

   years.innerHTML = diffYear;
   month.innerHTML = diffMonth;
   day.innerHTML = diffDate;
 }
 
}


button.addEventListener('click', calculateDate);
