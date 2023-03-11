$('#login-button').click(function (event) {
    let userName = document.getElementById("userName").value;
    let pwd = document.getElementById("pwd").value;
    if (userName == "123" && pwd == "123") {
        $('#h').text("欢迎来到振哥小黑屋");
        event.preventDefault();
        $('form').fadeOut(100);
        $('.wrapper').addClass('form-success');
        setTimeout(function () {
            location.href = "zhen.html";
        }, 4000);
    } else {
        alert("你的脑子可能不太好使");
    }
});
