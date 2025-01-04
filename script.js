// 페이지 로드 시 실행되는 메시지
document.addEventListener("DOMContentLoaded", function () {
    console.log("그림씨앗 웹사이트에 오신 것을 환영합니다!");
});

// 파일 업로드 확인
const uploadForm = document.querySelector("form[action='/upload']");
if (uploadForm) {
    uploadForm.addEventListener("submit", function (event) {
        const fileInput = document.querySelector("input[type='file']");
        if (!fileInput.files.length) {
            event.preventDefault();
            alert("파일을 선택해 주세요!");
        } else {
            alert("파일 업로드 중입니다. 잠시만 기다려 주세요.");
        }
    });
}

// 404 페이지에서 메인으로 이동 알림
const errorPageLink = document.querySelector("a[href='index.html']");
if (errorPageLink) {
    errorPageLink.addEventListener("click", function () {
        alert("메인 페이지로 이동합니다.");
    });
}