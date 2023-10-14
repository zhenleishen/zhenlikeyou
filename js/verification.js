$('#login-button').click(function (event) {
    let userName = document.getElementById("userName").value;
    let pwd = document.getElementById("pwd").value;
    if (userName == "01" && pwd == "06") {
        $('#h').text("欢迎加入小疯队");
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
