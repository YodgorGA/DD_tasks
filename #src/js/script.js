'use strict';

const tabs = document.querySelector('.tabs');

tabs.onclick = (event)=>{
    let target = event.target;

    if(target.classList !='tab-item_active' && target.classList !='tab-item'){
        return;
    }
    // tabs.children.classList.remove('.tab-item_active');
    // target.classList.Add('tab-item_active');
    console.log(tabs.children);
    console.log(target);
    
};