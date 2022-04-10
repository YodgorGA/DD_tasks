@@include('./_arrowscrolling.js');
@@include('./_autoscrolling.js');
@@include('./_bigtabscrolling.js');
@@include('./_mintabscrolling.js');


const tabs = document.querySelector('.tabs');
const tabs_big = tabs.querySelectorAll('.tab-item');
const tabs_min = tabs.querySelectorAll('.tab-item-min');
const img_div = document.querySelector('.main-carousel__img');
const arrows = document.querySelectorAll('.slider-arrows');

let img_src_attr = './img/Banner/baner_big-1.svg';
let active_tab = 'Tastemakers';
let isIntervalStarted = true;
let delay = 5000;

const img_src = {
    Tastemakers:'./img/Banner/baner_big-1.svg',
    Blog:'./img/Banner/baner_big-2.png',
    TheAList:'./img/Banner/baner_big-3.png',
    Contribute:'./img/Banner/baner_big-4.jpg'
};

const img_neighbours = {
    tastemakers: {
        this_slide: 'Tastemakers',
        left_neighbour: 'Contribute',
        right_neighbour: 'Blog'
    },
    blog: {
        this_slide: 'Blog',
        left_neighbour: 'Tastemakers',
        right_neighbour: 'The A-List'
    },
    thealist: {
        this_slide: 'The A-List',
        left_neighbour: 'Blog',
        right_neighbour: 'Contribute'
    },
    contribure: {
        this_slide: 'Contribute',
        left_neighbour: 'The A-List',
        right_neighbour: 'Tastemakers'
    }
};

//Синхронизация активных элементов запуск автоматической прокрутки слайдов при закгрузке страницы
window.onload = ()=>{
    syncActiveElements();
    intervalImgScroller(delay,img_neighbours);
};

//Создание обработчиков событий для больших табов
tabs_big.forEach(tab=>{
    tab.addEventListener('click',(event)=>{
        let target = event.target;
        changeTabToActiveOnBigTabs(target);
        changeImg(active_tab);
    });
});
//Создание обработчиков событий для маленьких табов
tabs_min.forEach(tab_min=>{
    tab_min.addEventListener('click',(event)=>{
        let target = event.target;
        changeTabToActiveOnSmallTabs(target);
        changeImg(active_tab);
    });
});
//Создание обработчиков событий для стрелок
arrows.forEach(arrow=>{
    arrow.addEventListener('click',(event)=>{
        let target = event.target;
        scrollByArrow(target,img_neighbours);
        changeImg(active_tab);
    });
});

// Общая функция для обработки изображения
function changeImg(active_tab)
{
    switch (active_tab)
    {
        case 'Tastemakers':
            img_div.attributes.src.value = img_src.Tastemakers;
            break;
        case 'Blog':
            img_div.attributes.src.value = img_src.Blog;
            break;
        case 'The A-List':
            img_div.attributes.src.value = img_src.TheAList;
            break;
        case 'Contribute':
            img_div.attributes.src.value = img_src.Contribute;
            break;
    }
}
//Синхронизация цвета активного таба с активной картинкой на всех размерах экрана
function syncActiveElements()
{
    changeRestTabsToInactive();
    changeRestTabsToInactiveSmallTabs();
    tabs_min.forEach(tab_min=>{
        if(tab_min.children[0].innerHTML != active_tab)
        {
            return;
        }
        tab_min.classList.add('tab-item-min_active');
    });
    tabs_big.forEach(tab_big=>{
        if(tab_big.children[0].innerHTML != active_tab)
        {
            return;
        }
        tab_big.classList.add('tab-item_active');
    });
    
}








