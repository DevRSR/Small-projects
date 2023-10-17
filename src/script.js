const bars = document.querySelector('#bars');

 async function createBar() {
   const res = await fetch('http://localhost:3000/bars');
   const results = await res.json();
   let template = ``;
   results.forEach(result => {
    let b = `${Math.round(result.amount/227.84 * 300)+50}px`
    const tempt = `
     <div class="bar">
        <div class="text-[10px] mb-2 bg-[#000] md:text-sm text-white rounded w-8 md:w-12 value">$${result.amount}</div>
        <div class="w-8 md:w-12 h-[${b}] bg-soft-red rounded hover:opacity-50 show"></div>
         <p class="mt-3 text-center items-end text-medium-brown">${result.day}</p>
      </div>
      `;
      template += tempt;
   })
   bars.innerHTML = template;
}

function hover (e) {
  let element = e.target;
  let sibling = element.previousElementSibling
 if(element.classList.contains('show')) {
  sibling.classList.toggle('value');
  setTimeout(function() {
   sibling.classList.toggle('value');
  }, 1000);
  }
}



window.addEventListener('DOMContentLoaded',() => createBar())
document.addEventListener('mouseover', hover)
/*${Math.floor(result.amount/227.84 * 100) + 100}*/