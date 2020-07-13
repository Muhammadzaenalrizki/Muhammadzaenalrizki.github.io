document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elements);
    loadNav(".topnav", "nav.html"); //kirim class dan file ke loadNav
    loadNav("#mobile", "navbottom.html");

    function loadNav(kelas, file) { //load nav dan sidebar
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status !== 200) return;
                document.querySelectorAll(kelas).forEach(function (elm) {
                    elm.innerHTML = xhttp.responseText;
                })
                const li = document.querySelectorAll('nav ul.topnav li a'); //ambil li topnav
                li.forEach(function (el) {

                    el.addEventListener('click', function () { //ketika elment di click
                        let NavLi = el.getAttribute('href').substr(1);
                       loadPage(NavLi);
                        li.forEach(function (el) { //telusuri semua element
                            if (el.classList.contains('border-merah')) { //jika ada class border-merah
                                el.classList.remove('border-merah') //maka hapus
                            }
                        })
                        el.classList.add('border-merah') //tambahkan class
                    })
                })


                document.querySelectorAll(".nav-bawah a").forEach(function (elm) {
                    elm.addEventListener("click", function () {
                        page = elm.getAttribute("href").substr(1);
                        loadPage(page);
                    })
                })
            }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
    }



    let page = window.location.hash.substr(1);
    if (page === "") page = "Liga";
    if (page === "") {
        Klasemen();
    } else if (page === "Liga") {
        Klasemen();
    } else if (page === "Team") {
        Team()
    }else if(page==="Favorite")
    {
        Favorite();
    }
    loadPage(page);

    function loadPage(page) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4) {
                const content = document.querySelector("#body");
                if (this.status === 200) {

                    content.innerHTML = xhttp.responseText;
                     if (page == "") {
        Klasemen()
    } else if (page === "Liga") {

        Klasemen();
    } else if (page === "Team") {
        Team()
    }else if(page=== "Favorite")
    {
        Favorite();
    }

                } else if (this.status === 404) {
                    content.innerHTML = ' <div class="container"><img src="assets/img/404.png" alt="notfound" class="responsive-img" id="notfound" width="800" height="500"></div>';
                } else {
                    content.innerHTML = ' <div class="container"><img src="assets/img/404.png" alt="notfound" class="responsive-img" id="notfound" width="800" height="500"></div>';

                }
            }
        }
        xhttp.open("GET", "pages/" + page + ".html", true);
        xhttp.send();
    }
})