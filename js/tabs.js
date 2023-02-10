"use strict"

// TABS
const tabsArray = document.querySelectorAll('[data-tab]');
const contentArray = document.querySelectorAll('.tab-text');
if (tabsArray.length > 0){
   for (let i = 0; i < tabsArray.length; i++){
      let tab = tabsArray[i];
      tab.addEventListener('click', function(e){
         clearActiveTab(tabsArray)
         setTabAction(tab)
      });
   }


   function setTabAction(tab){ 
      const text = document.querySelector(`#tab-${tab.dataset.tab}`)
      console.log(text);
      tab.classList.toggle('_active');

      text.classList.add('_active');
   }

   function clearActiveTab(tabs){
      tabs.forEach(element => {
         element.classList.remove('_active');
      });
      contentArray.forEach(element => {
         element.classList.remove('_active');
      });
   }
}