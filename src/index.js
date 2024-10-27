function displayDevotional(response) {
  new Typewriter("#devotional", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateDevotional(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "a14e7e0d0teb73b6obfd8235a2ebc46e";
  let prompt = `User instructions: Generate a women's devotional ${instructionsInput.value}`;
  let context =
    "You are an AI assistant with knowledge of the Holy Bible and what the promises God has made to women, and what he says about them. Your mission is to generate a eight line Women's Devontional guide which includes a scripture in basic HTML and each sentence should be on the next line. Do not include code fencing. Make sure to follow the user instructions. Sign the devotional guide with 'SheCodes AI' in <strong> element at the end of the recipe";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let devotionalElement = document.querySelector("#devotional");
  devotionalElement.classList.remove("hidden");
  devotionalElement.innerHTML = `<div class="blink">Generating a recipe for you with ${instructionsInput.value}📜...</div>`;
  axios.get(apiUrl).then(displayDevotional);
}

let devotionalFormElement = document.querySelector("#search-form");
devotionalFormElement.addEventListener("submit", generateDevotional);
