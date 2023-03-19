$('#login-button').click(function (event) {
    let userName = document.getElementById("userName").value;
    let pwd = document.getElementById("pwd").value;
    if (userName == "2006" && pwd == "09") {
        $('#h').text("欢迎来到振哥小黑屋");
        event.preventDefault();
        $('form').fadeOut(100);
        $('.wrapper').addClass('form-success');
        setTimeout(function () {
            location.href = "zhen.html";
        }, 800);
    } else {
        alert("你的脑子可能不太好使");
    }
});
