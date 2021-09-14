let target = document.querySelector("#dynamic");

// 커서 깜빡임 효과
function blink() {
  target.classList.toggle("active");
}
setInterval(blink, 500);

// 한글자씩 텍스트 출력 함수
function typing(randomArr) {
  if (randomArr.length > 0) {
    target.textContent += randomArr.shift();
    setTimeout(function () {
      typing(randomArr);
    }, 80);
  } else {
    setTimeout(resetTyping, 3000);
  }
}

typing(randomString());

// 타이핑 리셋
function resetTyping() {
  target.textContent = "";
  typing(randomString());
}

// 랜덤 문자열 만들기
function randomString() {
  let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to Javascript"];
  let selectString = stringArr[Math.trunc(Math.random() * stringArr.length)];
  let selectStringArr = selectString.split("");

  return selectStringArr;
}
