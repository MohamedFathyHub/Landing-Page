const container = document.querySelectorAll('.landing__container')
const navUl = document.querySelector('#navbar__list')
const fragment = document.createDocumentFragment()
const allSections = document.querySelectorAll('h2')
const topAnchor = document.querySelector('#top')

//Creating Nav Bar Dynamically
for(let i=1;i<=container.length;i++){
    let navList = document.createElement('li')
    navList.innerHTML = `<a href="#" class='navBar'>Section ${i}</a>`
    fragment.appendChild(navList)
}navUl.appendChild(fragment)

//Upon click Scroll to Section
const navButtons = document.querySelectorAll('.navBar')

for (let x=0;x<navButtons.length;x++){
    navButtons[x].addEventListener('click',function(evt){
        evt.preventDefault();
        allSections[x].scrollIntoView(true)
})
}

//Highlights 
window.addEventListener('scroll',function(){
    for (let y of container){
        let rect = y.getBoundingClientRect()
        if (rect.top>=-100 &rect.top<=700 ){
            y.parentElement.setAttribute('class','your-active-class')
            }else{
                y.parentElement.setAttribute('class',' ')
            }
        } 
    })

//To Top button
topAnchor.addEventListener('click',function(evt){
    evt.preventDefault();
    window.scrollTo({
        top:0,
        left:0,
        behavior:'smooth'
    })
})