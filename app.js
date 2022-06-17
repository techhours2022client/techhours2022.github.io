const fourth_btn = document.querySelector('.fourth_button');
const fourth_popup = document.querySelector('.fourth_popup');
const eighth_btn = document.querySelector('.eighth_button');
const eighth_popup = document.querySelector('.eighth_popup');
const tenth_btn = document.querySelector('.tenth_button');
const tenth_popup = document.querySelector('.tenth_popup');
const background = document.querySelector('.wrappert');
const planning = document.querySelector('.image_horaires');
const exit_planning = document.querySelector('.exit-planning')
const open_horaire = document.querySelector('.open_horaire')
const actual_hour = document.querySelector('.hour_actual')

var open = 0
var now = new Date();
const first_column = document.querySelectorAll('.first_column')
const second_column = document.querySelectorAll('.second_column')
const third_column = document.querySelectorAll('.third_column')
const fourth_column = document.querySelectorAll('.fourth_column')
const fifth_column = document.querySelectorAll('.fifth_column')
const sixth_column = document.querySelectorAll('.sixth_column')

const shortcut_11 = document.querySelector('.shortcut_11')
const shortcut_22 = document.querySelector('.shortcut_22')
const shortcut_23 = document.querySelector('.shortcut_23')
const shortcut_24 = document.querySelector('.shortcut_24')
const shortcut_27 = document.querySelector('.shortcut_27')
const shortcut_28 = document.querySelector('.shortcut_28')

const fourth_mini_popup = document.querySelector('.fourth_mini_popup')
const eighth_mini_popup = document.querySelector('.eighth_mini_popup')
const tenth_mini_popup = document.querySelector('.tenth_mini_popup')

let isVisible4 = false; let clicked4 = false; let block4 = false;
let isVisible8 = false; let clicked8 = false; let block8 = false;
let isVisible10 = false; let clicked10 = false; let block10 = false;

background.addEventListener('click',  () => {
    if (!clicked4 && block4 == false) { fourth_popup.classList.remove('transition_opacity'); isVisible4 = false; }
    if (!clicked8 && block8 == false) { eighth_popup.classList.remove('transition_opacity'); isVisible8 = false; }
    if (!clicked10 && block10 == false) { tenth_popup.classList.remove('transition_opacity'); isVisible10 = false; }

    clicked4 = false; block4 = false;
    clicked8 = false; block8 = false;
    clicked10 = false; block10 = false;
    
});

fourth_btn.addEventListener('click', () => {
    clicked4 = true;
    isVisible4 = !isVisible4;
    isVisible4 ? fourth_popup.classList.add('transition_opacity') : fourth_popup.classList.remove('transition_opacity');
});
eighth_btn.addEventListener('click', () => {
    clicked8 = true;
    isVisible8 = !isVisible8;
    isVisible8 ? eighth_popup.classList.add('transition_opacity') : eighth_popup.classList.remove('transition_opacity');
});
tenth_btn.addEventListener('click', () => {
    clicked10 = true;
    isVisible10 = !isVisible10;
    isVisible10 ? tenth_popup.classList.add('transition_opacity') : tenth_popup.classList.remove('transition_opacity');
});


fourth_popup.addEventListener('click', () => {
    block4 = true;
});
eighth_popup.addEventListener('click', () => {
    block8 = true;
});
tenth_popup.addEventListener('click', () => {
    block10 = true;
});

shortcut_11.addEventListener("mouseenter", () => {
    fourth_mini_popup.classList.add('transition_opacity')
});
shortcut_11.addEventListener("mouseout", () => {
    fourth_mini_popup.classList.remove('transition_opacity')
});

shortcut_22.addEventListener("mouseenter", () => {
    eighth_mini_popup.classList.add('transition_opacity')
});
shortcut_22.addEventListener("mouseout", () => {
    eighth_mini_popup.classList.remove('transition_opacity')
});

shortcut_23.addEventListener("mouseenter", () => {
    eighth_mini_popup.classList.add('transition_opacity')
});
shortcut_23.addEventListener("mouseout", () => {
    eighth_mini_popup.classList.remove('transition_opacity')
});

shortcut_24.addEventListener("mouseenter", () => {
    eighth_mini_popup.classList.add('transition_opacity')
});
shortcut_24.addEventListener("mouseout", () => {
    eighth_mini_popup.classList.remove('transition_opacity')
});

shortcut_27.addEventListener("mouseenter", () => {
    tenth_mini_popup.classList.add('transition_opacity')
});
shortcut_27.addEventListener("mouseout", () => {
    tenth_mini_popup.classList.remove('transition_opacity')
});

shortcut_28.addEventListener("mouseenter", () => {
    tenth_mini_popup.classList.add('transition_opacity')
});
shortcut_28.addEventListener("mouseout", () => {
    tenth_mini_popup.classList.remove('transition_opacity')
});

open_horaire.addEventListener("click", () => {
    if (open == 0) {
        planning.classList.add('moved')

        var hour = Number(('0'+now.getHours()).slice(-2));
        if (hour < 11) actual_hour.style.left = '-41%'
        else if (hour >= 14) actual_hour.style.left = '44.70%'
        else {
            now = new Date()
            minutes_test  = Number(('0'+now.getMinutes()).slice(-2));
            var minutes_pourcentage = ((hour - 11) * 60 + minutes_test) / 180 ;
            var add_pourcentage = -41 + (minutes_pourcentage * 85.70);
            nb_pixel = add_pourcentage.toString() + '%'
            actual_hour.style.left = nb_pixel
            console.log(actual_hour.style.left)
        }
    
        add_display_none(first_column)
        add_display_none(second_column)
        add_display_none(third_column)
        add_display_none(fourth_column)
        add_display_none(fifth_column)
        add_display_none(sixth_column)
    
        if (hour < 11) add_display_inline(first_column)
        if (hour >= 11 && hour < 12) {
            if (minutes_test < 30) add_display_inline(first_column)
            else add_display_inline(second_column)
        }
        else if (hour < 13) {
            if (minutes_test < 30) add_display_inline(third_column)
            else add_display_inline(fourth_column)
        }
        else if (hour < 14) {
            if (minutes_test < 30) add_display_inline(fifth_column)
            else add_display_inline(sixth_column)
        }
        else if (hour > 14) add_display_inline(sixth_column)
        open = 1;
    }
    else {
        console.log('test')
        planning.classList.remove('moved')
        open = 0 }
    

});

exit_planning.addEventListener("click", () => {
    planning.classList.remove('moved')
    var hour = Number(('0'+now.getHours()).slice(-2));

    if (hour < 11) actual_hour.style.left = '-41%'
    else if (hour >= 14) actual_hour.style.left = '44.70%'
    else {
        now = new Date()
        minutes_test  = Number(('0'+now.getMinutes()).slice(-2));
        var minutes_pourcentage = ((hour - 11) * 60 + minutes_test) / 180 ;
        var add_pourcentage = -41 + (minutes_pourcentage * 85.70);
        nb_pixel = add_pourcentage.toString() + '%'
        actual_hour.style.left = nb_pixel
        console.log(actual_hour.style.left)
    }

    add_display_none(first_column)
    add_display_none(second_column)
    add_display_none(third_column)
    add_display_none(fourth_column)
    add_display_none(fifth_column)
    add_display_none(sixth_column)

    if (hour < 11) add_display_inline(first_column)
    if (hour >= 11 && hour < 12) {
        if (minutes_test < 25) add_display_inline(first_column)
        else add_display_inline(second_column)
        if (minutes_test >= 55) add_display_inline(third_column)
    }
    else if (hour < 13) {
        if (minutes_test < 25) add_display_inline(third_column)
        else add_display_inline(fourth_column)
        if (minutes_test >= 55) add_display_inline(fifth_column)
    }
    else if (hour < 14) {
        if (minutes_test < 25) add_display_inline(fifth_column)
        else add_display_inline(sixth_column)
    }
    else if (hour > 14) add_display_inline(sixth_column)
    open = 0
});

function add_display_none(myNodeList) {
    for (var i = 0; i < myNodeList.length; ++i) {
        var item = myNodeList[i];  // L'appel de myNodeList.item(i) n'est pas nécessaire en JavaScript
        item.style.display = 'none'
      }
};

function add_display_inline(myNodeList) {
    for (var i = 0; i < myNodeList.length; ++i) {
        var item = myNodeList[i];  // L'appel de myNodeList.item(i) n'est pas nécessaire en JavaScript
        item.style.display = 'inline'
      }
};