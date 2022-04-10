function changeTabToActiveOnSmallTabs(target)
{
    changeRestTabsToInactiveSmallTabs();
    if(target.classList.contains('tab-item-min'))
    {
        target.classList.add('tab-item-min_active');
        pressed_tab = target.children;
        active_tab = pressed_tab[0].innerHTML;
    }
    else if (target.parentNode.classList.contains('tab-item-min'))
    {
        active_tab = target.innerHTML;
        target.parentNode.classList.add('tab-item-min_active');
    }
    syncActiveElements();
}

function changeRestTabsToInactiveSmallTabs()
{
    tabs.querySelectorAll('.tab-item-min_active').forEach((tab)=>{
        tab.classList.remove('tab-item-min_active');
    });
}