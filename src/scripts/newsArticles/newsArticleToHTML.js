import articleSaveButton from "./newsArticleEventListener";
import getTheNews from "./newsArticleObject";
import deleteFunction from "./articleDeleteButton";


const addNewsArticle = () => {
    document.getElementById("output").innerHTML +=
        `
<div id ="createNewsArticle">
<input type="hidden" id="hiddenID"></input>
<fieldset>
<label>News Title</label>
<input type="text" id="titleOfNewsArticle"></input>
</fieldset>

<fieldset>
<label>Synopsis<label>
<input type="text" id="synopsisOfNewsArticle"></input>
</fieldset>

<fieldset>
<label>URL<label>
<input type="text" id="NewsArticleURL"></input>
</fieldset>
<button id="submitNewArticle">Submit Article</button>

<div id="newsArticleOutput"></div>

</div>
`
    articleSaveButton()
    getTheNews()
    deleteFunction()



}



export default addNewsArticle