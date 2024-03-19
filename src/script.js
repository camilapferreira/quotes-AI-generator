function displayQuote(response) {
  new Typewriter("#quote-input", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 50,
  });
}

function generateQuote(event) {
  event.preventDefault();
  let formInputElement = document.querySelector("#form-input");
  let apiKey = "44b4d9f5e3a3baf490c33c5519ot4f0a";
  let apiPrompt = `Generate a quote related to ${formInputElement.value}`;
  let apiContext = `Generate a quote that is famous and inspirational that is relevant in google, and please provide the author of the quote`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${apiPrompt}&context=${apiContext}&key=${apiKey}`;
  axios.get(apiUrl).then(displayQuote);
  let quoteElement = document.querySelector("#quote-input");
  quoteElement.innerHTML = "Generating a quote for you...please wait...⌛️";
}

let quotesForm = document.querySelector("#generator-form");
quotesForm.addEventListener("submit", generateQuote);
