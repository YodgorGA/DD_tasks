
//Функция которая крутит изображения
function intervalImgScroller(delay,neighbours)
{
    const interval = setInterval(()=>{
        for (const [slides,neighbours] of Object.entries(img_neighbours))
        {
            if(neighbours.this_slide == active_tab && active_tab != neighbours.right_neighbour)
            {
                active_tab = neighbours.right_neighbour;
                changeImg(active_tab);
                syncActiveElements();
                break;
            }
        }       
    },delay);
}

