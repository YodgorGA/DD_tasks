function scrollByArrow(target,neighbours){
    if(target.classList.contains('slider-arrows__right-img'))
    {
        for (const [key,value] of Object.entries(neighbours))
        {
            if(value.this_slide == active_tab)
            {
                active_tab = value.right_neighbour;
                break;
            }
        }
    }

    if(target.classList.contains('slider-arrows__left-img'))
    {
        for (const [key,value] of Object.entries(neighbours))
        {
            if(value.this_slide == active_tab)
            {
                active_tab = value.left_neighbour;
                break;
            }
        }
    }

    syncActiveElements();
}