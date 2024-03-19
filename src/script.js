function displayRecipe(response) {
  let recipeInput = document.querySelector("#recipe");
  recipeInput.innerHTML = response.data.answer;
}

function generateRecipe() {
  let apiKey = "44b4d9f5e3a3baf490c33c5519ot4f0a";
  let apiPrompt = `generate a quote with the name of the person who said it`;
  let apiContext = `Make sure to provide a quote that is short and clear, according to the subject of the prompt`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${apiPrompt}&context={context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayRecipe);
}

let button = document.querySelector("#button-page");
button.addEventListener("click", generateRecipe);
