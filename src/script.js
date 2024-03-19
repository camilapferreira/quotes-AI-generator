function displayQuote(response) {
  new Typewriter("#quote-input", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 50,
  });
}

function generateQuote() {
  let apiKey = "44b4d9f5e3a3baf490c33c5519ot4f0a";
  let apiPrompt = `generate a quote with the name of the person who said it`;
  let apiContext = `Make sure to provide a quote that is short and clear, according to the subject of the prompt`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${apiPrompt}&context={context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayQuote);
  let quoteElement = document.querySelector("#quote-input");
  quoteElement.innerHTML = "Generating a quote for you...please wait!";
}

let button = document.querySelector("#button-page");
button.addEventListener("click", generateQuote);
