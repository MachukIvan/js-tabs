window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    let tab = document.querySelectorAll('.tab-menu-item'),
        tabContainer = document.querySelector('.tab-menu-container'),
        tabContent = document.querySelectorAll('.tab-content');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.add('hide');
            tabContent[i].classList.remove('show');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    tabContainer.addEventListener('click', function(e) {
        let target = e.target;

        if (target && target.classList.contains('tab-menu-item')){
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                }
            }
        }
    });

});
