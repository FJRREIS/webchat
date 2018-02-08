function login() {
    
    resize_components()
    
    load_chat();

}

function load_chat() {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var conteudo_chat = this.responseText;
            document.getElementById('chat_container').innerHTML = conteudo_chat;
        }
    };

    xhttp.open("GET", "http://127.0.0.1:8887/chat.html");
    xhttp.send();
}

function resize_components(){
    var headercont = document.getElementById("header_container");
    headercont.id = 'chat_header_container';
    var h_label = document.getElementById("h_title");
    h_label.id = 'chat_title';
    var logo = document.getElementById("logo");
    logo.id = 'chat_logo';
    var imglogo = document.getElementById("img-logo");
    imglogo.id = 'chat_img-logo';
    var bodycont = document.getElementById("login_container");
    bodycont.id = 'chat_container';
}