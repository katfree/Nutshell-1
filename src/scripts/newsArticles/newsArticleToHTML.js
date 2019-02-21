import articleSaveButton from "./newsArticleEventListener";
import getTheNews from "./newsArticleObject";
import deleteFunction from "./articleDeleteButton";
import saveNewArticle from "./saveNewArticle";
import articleEditFunction from "./articleEditButton";


const addNewsArticle = () => {
    document.getElementById("outputNews").innerHTML +=
        `
<h1>Submit News Form</h1>
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
<h1>Your News</h1>
<div id="newsArticleOutput"></div>

</div>
`
    articleSaveButton()
    getTheNews()
    articleEditFunction()
    saveNewArticle()
    deleteFunction()



}



export default addNewsArticle