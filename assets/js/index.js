const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        entry.target.classList.toggle('show', entry.isIntersecting);
    })
},
{
    threshold:0.2
}
)

const hiddenElements = document.querySelectorAll('.animate-fade-right, .animate-fade-left, .animate-fade-up, .animate-fade-down');
hiddenElements.forEach(div =>{
    observer.observe(div);
})

