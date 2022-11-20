import {html, render} from "./node_modules/lit-html/lit-html.js";
import {cats} from "./catSeeder.js";

const root = document.getElementById("allCats")

const contentTemplate = html`
<ul>
${cats.map(cat=>createCard(cat))}
</ul>`;

render(contentTemplate, root)

function createCard(cat){
    return html`
<li>
<img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
<div class="info">
    <button @click="${showContent}" class="showBtn">Show status code</button>
    <div class="status" style="display: none" id="${cat.id}">
        <h4>Status Code:${cat.statusCode}</h4>
        <p>${cat.statusMessage}</p>
    </div>
</div>
</li>`
}

function showContent(e){
    const contentContainer = e.target.parentElement.querySelector("div")
    const currentStatus = contentContainer.style.display;
    if(currentStatus === "none"){
        contentContainer.style.display = "block"
        e.target.textContent = "Hide status code"
    }
    else
    {
        contentContainer.style.display = "none"
        e.target.textContent = "Show status code"
    }

}


