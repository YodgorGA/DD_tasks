function changeTabToActiveOnBigTabs (target)
{   
    changeRestTabsToInactive();
    if(target.classList.contains('tab-item'))
    {
        target.classList.add('tab-item_active');
        pressed_tab = target.children;
        active_tab = pressed_tab[0].innerHTML;
    }
    else if (target.parentNode.classList.contains('tab-item'))
    {
        active_tab = target.innerHTML;
        target.parentNode.classList.add('tab-item_active');
    }
    syncActiveElements();
}

function changeRestTabsToInactive ()
{
    tabs.querySelectorAll('.tab-item_active').forEach((tab)=>{
        tab.classList.remove('tab-item_active');
    });
}