
window.addEventListener('DOMContentLoaded', (event) => {
    activeClass();
});

document.querySelectorAll(".btn").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        // e.preventDefault()
        activeClass();
    })
})


function activeClass() {
    document.querySelectorAll(".btn").forEach(function (btn) {

        // get href index.html or about.html or contact.html and add slash (/)
        var href = '/' + btn.getAttribute('href');

        // get path /index.html or /about.html or /contact.html from current url
        var pathname = window.location.pathname;

        // check click <a> element that contains .btn class
        if (btn.classList.contains('btn')) {

            // check a href (/index.html) and current pathname (/index.html) are equal then add active class
            if (href == pathname) {
                btn.classList.add('active')
                console.log('1')
            }


        }

    });
}

function removeActiveClass() {
    document.querySelectorAll(".btn").forEach(function (btn) {
        if (btn.classList.contains('active')) {
            btn.classList.remove('active')
        }
    })
}
