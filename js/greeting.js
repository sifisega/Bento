var today = new Date();
var Hr = today.getHours();

// Here you can change the greetings and your name
var mrname = 'Mr. Hall';
var name = 'Silas';
var lateTxt = '! Go to sleep!';
var morningTxt = 'Good morning ';
var dayTxt = 'Good day';
var afterTxt = 'Afternoon ';
var evenTxt = 'Good evening ';

if (Hr >= 9 && Hr < 16) {
    document.getElementById('greetings').innerText = name + lateTxt;
} else if (Hr >= 16 && Hr < 20) {
    document.getElementById('greetings').innerText = morningTxt + name;
} else if (Hr >= 20 && Hr < 1) {
    document.getElementById('greetings').innerText = afterTxt + mrname;
} else if (Hr >= 1 && Hr < 6) {
    document.getElementById('greetings').innerText = dayTxt + name;
} else {
    document.getElementById('greetings').innerText = evenTxt + mrname;
}
