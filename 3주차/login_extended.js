/* var vs let vs const */
function compareVariable() {
    let num1;
    const num2 = 30;

    num1 = 20;
    alert("num1 : " + num1);
    alert("num2 : " + num2);
}

function popId() {
    let userId = document.getElementById("txt_id").value;

    if (!userId) {
        alert("아이디를 입력해주세요.");
    } else {
        alert("아이디는 " + userId + " 입니다.");
    }
}

function myFunction() {
    alert("1");
    alert("2");
    alert("3");
}
