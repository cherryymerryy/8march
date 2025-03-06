document.addEventListener('DOMContentLoaded', function() {
    var md = new MobileDetect(window.navigator.userAgent);
    
    if (md.mobile()) {
        alert("Пожалуйста, зайдите на этот сайт с мобильного устройства.");
        window.location.href = '/mobile-only.html';
    } else {
        console.log("не");
    }
});