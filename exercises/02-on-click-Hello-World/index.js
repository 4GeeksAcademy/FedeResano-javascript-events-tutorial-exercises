function myClickFunction() {
    let htmlString = document.getElementById("string");
    if (!htmlString) {
        htmlString = document.createElement("div");
        htmlString.id = "string";
        document.body.appendChild(htmlString);
    }

    htmlString.innerHTML = '<div class="container-fluid text-center"> <h1>Hello World</h1> </div>';
}