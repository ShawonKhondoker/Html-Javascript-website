// বাটন এলিমেন্টটি প্রাপ্ত করুন
var button = document.querySelector('button');

// বাটনে ক্লিক ইভেন্ট যুক্ত করুন
button.addEventListener('click', function() {
  // h1 এলিমেন্টটি প্রাপ্ত করুন
  var h1 = document.querySelector('.content h1');
  
  // p এলিমেন্টটি প্রাপ্ত করুন
  var p = document.querySelector('.content p');
  
  // h1 এবং p এর কালার চেঞ্জ করুন
  h1.style.color = 'red';
  p.style.color = 'blue';
});

document.getElementById("search-button").addEventListener("click", function() {
  var text = document.getElementById("search-bar").value;
  var paragraph = document.querySelector(".paragraph");
  paragraph.textContent = text;
});