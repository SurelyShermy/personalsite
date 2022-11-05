

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
    links.classList.toggle('show-links');
});
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
//fixed navbar
window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if(scrollHeight > navHeight){
        navbar.classList.add('fixed-nav');
    }
    else{
        navbar.classList.remove('fixed-nav');
    }
    if (scrollHeight > 500){
        topLink.classList.add('show-link');
    }else{
        topLink.classList.remove('show-link');
    }
});
//smooth scroll
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link){
    link.addEventListener("click", function(e){
        e.preventDefault();
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");
        let position = element.offsetTop - navHeight;
        if(!fixedNav){
            position = position - navHeight;
        }
        if(navHeight > 82){
            position = position + containerHeight;
        }
        window.scrollTo({
            left: 0,
            top: position,
        });
        linksContainer.style.height = 0;

    });
});
$(window).scroll(function(){
    $(".container").css("opacity", 1 - $(window).scrollTop() / 250);
});
// const aboutText = document.getElementById('.content');
// const bannerSection = document.querySelector('.banner');
// //fixed navbar
// window.addEventListener('scroll', function(){
//     const scrollHeight = window.pageYOffset;
//     const bannerHeight = bannerSection.getBoundingClientRect().height;
//     if(scrollHeight > bannerHeight){
//         aboutText.classList.add('fadeInRight');
//     }

// });