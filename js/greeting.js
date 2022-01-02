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

if (Hr >= 3 && Hr < 9) {
    document.getElementById('greetings').innerText = morningTxt + mrname;
} else if (Hr >= 9 && Hr < 12) {
    document.getElementById('greetings').innerText = afterTxt + name;
} else if (Hr >= 12 && Hr < 17) {
    document.getElementById('greetings').innerText = dayTxt + mrname;
} else if (Hr >= 17 && Hr < 3) {
    document.getElementById('greetings').innerText = evenTxt + name;
} else {
    document.getElementById('greetings').innerText = name + lateTxt;
}
