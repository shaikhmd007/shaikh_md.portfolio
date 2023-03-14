console.log('shaikh_md.')

//code for Random Quotes section
const quote = document.getElementById('quote');
const author = document.getElementById('author');
const nextButton = document.getElementById('nextButton');

async function nextQuote() {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    // console.log(data);
    nextButton.classList.add("nextQuote");
    quote.innerText = ` ${data.content} "`;
    author.innerText = data.author;
    // author.style.color = "white";
    // quote.style.color = "silver";
}
nextQuote();

// The function toggles more (hidden) text when the user clicks on "Read more". The IF ELSE statement ensures that the text 'read more' and 'read less' changes interchangeably when clicked on.
/* $('.moreless-button').click(function () {
    $('.moretext').slideToggle();
    if ($('.moreless-button').text() == "Read more") {
        $(this).text("Read less")
    } else {
        $(this).text("Read more")
    }
}); */