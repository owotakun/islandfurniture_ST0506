var countryPrefix = localStorage.getItem("urlPrefix");
document.write('\
<script>\
    document.addEventListener("DOMContentLoaded", function(){\
        var memberEmail = sessionStorage.getItem("memberEmail");\
        if(memberEmail == null || memberEmail == "") {\
            document.getElementById("menuLoggedOut").setAttribute("style", "display:block");\
            document.getElementById("menuLoggedIn").setAttribute("style", "display:none");\
            document.getElementById("favoritesLink").setAttribute("style", "display:none");\
        }\
        else {\
            document.getElementById("menuLoggedOut").setAttribute("style", "display:none");\
            document.getElementById("menuLoggedIn").setAttribute("style", "display:block");\
            document.getElementById("favoritesLink").setAttribute("style", "display:block");\
            var welcomeText = sessionStorage.getItem("memberName");\
            if(welcomeText == "null") {\
                welcomeText = "";\
            }\
            document.getElementById("memberName").innerHTML = "Welcome " + welcomeText + "!";\
        }\
        document.getElementById("tableDeskLink").setAttribute("href", "/B/' + countryPrefix + '/furnitureCategory.html?cat=" + encodeURIComponent("Tables & Desks"));\
        document.getElementById("bedMattressLink").setAttribute("href", "/B/' + countryPrefix + '/furnitureCategory.html?cat=" + encodeURIComponent("Beds & Mattresses"));\
        document.getElementById("sofaChairLink").setAttribute("href", "/B/' + countryPrefix + '/furnitureCategory.html?cat=" + encodeURIComponent("Sofas & Chair"));\
        document.getElementById("cabinetStorageLink").setAttribute("href", "/B/' + countryPrefix + '/furnitureCategory.html?cat=" + encodeURIComponent("Cabinets & Storage"));\
        document.getElementById("retailProductLink").setAttribute("href", "/B/' + countryPrefix + '/retailProductsCategory.html?cat=" + encodeURIComponent("All Retail Products"));\
        document.getElementById("favoritesLink").setAttribute("href", "/B/' + countryPrefix + '/favorites.html");\
    }, false);\
    function logout() {\
        sessionStorage.clear();\
        window.location.href = "/B/' + countryPrefix + '/memberLogin.html?goodMsg=Logout Successfully."\
    }\
</script>\
<style>\
/* Hover dropdown for services menu */\
.servicesMenu:hover .dropdown-menu {\
    display: block;\
}\
.dropdown-menu {\
    display: none;\
    position: absolute;\
    top: 100%;\
    left: 0;\
    z-index: 1000;\
    float: left;\
    min-width: 160px;\
    padding: 5px 0;\
    margin: 2px 0 0;\
    font-size: 14px;\
    text-align: left;\
    list-style: none;\
    background-color: #fff;\
    -webkit-background-clip: padding-box;\
    background-clip: padding-box;\
    border: 1px solid #ccc;\
    border: 1px solid rgba(0, 0, 0, .15);\
    border-radius: 4px;\
    -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, .175);\
    box-shadow: 0 6px 12px rgba(0, 0, 0, .175);\
}\
.dropdown-menu .divider {\
    height: 1px;\
    margin: 2px 10px;\
    overflow: hidden;\
    background-color: #e5e5e5;\
}\
</style>\
<header id="header">\
    <div class="container">\
        <h1 class="logo">\
            <a href="/B/' + countryPrefix + '/index.html">\
                <img alt="Island Furniture" width="180" height="80" data-sticky-width="82" data-sticky-height="40" src="../img/logo.png">\
            </a>\
        </h1>\
        <!-- Non Logged In Menu-->\
        <div id="menuLoggedOut" style="display: none;">\
            <nav>\
                <ul class="nav nav-pills nav-top">\
                    <li class="storeLocationMenu">\
                        <a href="/B/' + countryPrefix + '/storeLocation.html"><i class="icon icon-map-marker"></i>Store Location</a>\
                    </li>\
                    <li class="dropdown servicesMenu">\
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon icon-gear"></i>Services</a>\
                        <ul class="dropdown-menu">\
                            <li><a href="/B/' + countryPrefix + '/delivery.html"><i class="icon icon-dropbox"></i>Delivery</a></li>\
                            <li class="divider"></li>\
                            <li><a href="/B/' + countryPrefix + '/assembly.html"><i class="icon icon-wrench"></i>Assembly</a></li>\
                            <li class="divider"></li>\
                            <li><a href="/B/' + countryPrefix + '/planning.html"><i class="icon icon-book"></i>Planning Guides & Tools</a></li>\
                        </ul>\
                    </li>\
                    <li>\
                        <a href="/B/' + countryPrefix + '/memberLogin.html"><i class="icon icon-unlock-alt"></i>Login/Register</a>\
                    </li>\
                    <li>\
                        <a href="/B/' + countryPrefix + '/contactUs.html"><i class="icon icon-shopping-cart"></i>Contact Us</a>\
                    </li>\
                </ul>\
                <button class="btn btn-responsive-nav btn-inverse" data-toggle="collapse" data-target=".nav-main-collapse">\
                    <i class="icon icon-bars"></i>\
                </button>\
            </nav>\
        </div>\
        <!-- Logged In Menu-->\
        <div id="menuLoggedIn" style="display: none;">\
            <nav>\
                <ul class="nav nav-pills nav-top">\
                    <li><a id="memberName"></a></li>\
                    <li class="dropdown servicesMenu">\
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon icon-gear"></i>Services</a>\
                        <ul class="dropdown-menu">\
                            <li><a href="/B/' + countryPrefix + '/delivery.html"><i class="icon icon-dropbox"></i>Delivery</a></li>\
                            <li class="divider"></li>\
                            <li><a href="/B/' + countryPrefix + '/assembly.html"><i class="icon icon-wrench"></i>Assembly</a></li>\
                            <li class="divider"></li>\
                            <li><a href="/B/' + countryPrefix + '/planning.html"><i class="icon icon-book"></i>Planning Guides & Tools</a></li>\
                        </ul>\
                    </li>\
                    <li class="storeLocationMenu">\
                        <a href="/B/' + countryPrefix + '/storeLocation.html"><i class="icon icon-map-marker"></i>Store Location</a>\
                    </li>\
                    <li>\
                        <a href="/B/' + countryPrefix + '/shoppingCart.html"><i class="icon icon-shopping-cart"></i>Shopping Cart</a>\
                    </li>\
                    <li>\
                        <a href="/B/' + countryPrefix + '/memberProfile.html"><i class="icon icon-user"></i>Profile</a>\
                    </li>\
                    <li>\
                        <a href="/B/' + countryPrefix + '/contactUs.html"><i class="icon icon-shopping-cart"></i>Contact Us</a>\
                    </li>\
                    <li>\
                        <a href="#" onclick="logout()"><i class="icon icon-unlock-alt"></i>Logout</a>\
                    </li>\
                </ul>\
                <button class="btn btn-responsive-nav btn-inverse" data-toggle="collapse" data-target=".nav-main-collapse">\
                    <i class="icon icon-bars"></i>\
                </button>\
            </nav>\
        </div>\
    </div>\
    <div class="navbar-collapse nav-main-collapse collapse">\
        <div class="container">\
            <nav class="nav-main mega-menu">\
                <ul class="nav nav-pills nav-main" id="mainMenu">\
                    <li>\
                        <a href="/B/' + countryPrefix + '/virtualStore.html">Virtual Store</a>\
                    </li>\
                    <li>\
                        <a id="retailProductLink"><i class="icon icon-coffee"></i> Retail Products</a>\
                    </li>\
                    <li>\
                        <a id="favoritesLink"><i class="icon icon-heart"></i> Favorites</a>\
                    </li>\
                    <li class="dropdown">\
                        <a class="dropdown-toggle" href="#">\
                            Product Categories<i class="icon icon-angle-down"></i>\
                        </a>\
                        <ul class="dropdown-menu">\
                            <li><a id="tableDeskLink"><i class="icon icon-map-marker"></i> Tables & Desk</a></li>\
                            <li><a href="/B/' + countryPrefix + '/furnitureCategory.html?cat=Bathroom"><i class="icon icon-map-marker"></i> Bathroom</a></li>\
                            <li><a id="bedMattressLink"><i class="icon icon-map-marker"></i> Beds & Mattresses</a></li>\
                            <li><a id="sofaChairLink"><i class="icon icon-map-marker"></i> Sofas & Chair</a></li>\
                            <li><a id="cabinetStorageLink"><i class="icon icon-map-marker"></i> Cabinets & Storage</a></li>\
                            <li><a href="/B/' + countryPrefix + '/furnitureCategory.html?cat=Lightings"><i class="icon icon-map-marker"></i> Lightings</a></li>\
                            <li><a href="/B/' + countryPrefix + '/furnitureCategory.html?cat=Study"><i class="icon icon-map-marker"></i> Study</a></li>\
                            <li><a href="/B/' + countryPrefix + '/furnitureCategory.html?cat=Children"><i class="icon icon-map-marker"></i> Children</a></li>\
                        </ul>\
                    </li>\
                </ul>\
            </nav>\
        </div>\
    </div>\
</header>');
