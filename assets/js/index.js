const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    })
},
{
    threshold:0.5
}
)

const hiddenElements = document.querySelectorAll('.animate-fade-right, .animate-fade-left, .animate-fade-up, .animate-fade-down');
hiddenElements.forEach(div =>{
    observer.observe(div);
})

const hoverImages = document.querySelectorAll('.js-hover');
hoverImages.forEach((element) => {
    element.addEventListener('mouseover', hoverActive);
});

function hoverActive(e){
    if (!e.target.classList.contains('active')){
        console.log(e);
        e.target.classList.add('active');
    }
}

