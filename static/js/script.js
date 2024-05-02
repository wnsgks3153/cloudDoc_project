document.addEventListener('DOMContentLoaded', function() {
    // "구르미란?" 버튼을 클릭했을 때 해당 섹션으로 스크롤되도록 설정
    document.getElementById('aboutGurmiBtn').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('aboutGurmi').scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // "구르미란?" 버튼을 클릭했을 때 해당 섹션으로 스크롤되도록 설정
    document.getElementById('program').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('aboutprogram').scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // "구르미란?" 버튼을 클릭했을 때 해당 섹션으로 스크롤되도록 설정
    document.getElementById('team').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('aboutteam').scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // "구르미란?" 버튼을 클릭했을 때 해당 섹션으로 스크롤되도록 설정
    document.getElementById('working').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('aboutworking').scrollIntoView({ behavior: 'smooth' });
    });
});

let text = document.getElementById('text');
let cloud1 = document.getElementById('cloud1');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
})