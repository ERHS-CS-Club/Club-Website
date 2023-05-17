const tabButtons = document.querySelectorAll(".resource-tabs button");
const tabContents = document.querySelectorAll('.resource-contents .content');

tabButtons.forEach((tab) =>{
    tab.addEventListener('click', buttonClick);
});

function buttonClick(e){
    tabButtons.forEach(tab =>{
        tab.classList.remove('tab-active');
    });
    e.target.classList.add('tab-active');
    showContent(e.target);
}

function showContent(targetTab){
    tabContents.forEach((content) =>{
        content.classList.remove('active');
    })
    const targetId = targetTab.dataset.tab;
    const target = document.getElementById(targetId);
    target.classList.add('active');
}
