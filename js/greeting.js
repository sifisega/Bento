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

if (Hr >= 0 && Hr < 5) {
    document.getElementById('greetings').innerText = name + lateTxt;
} else if (Hr >= 5 && Hr < 10) {
    document.getElementById('greetings').innerText = morningTxt + name;
} else if (Hr >= 10 && Hr < 2) {
    document.getElementById('greetings').innerText = dayTxt + mrname;
} else if (Hr >= 2 && Hr < 17) {
    document.getElementById('greetings').innerText = afterTxt + name;
} else {
    document.getElementById('greetings').innerText = evenTxt + mrname;
}
