
const spinner = document.getElementById("spinner");

function showSpinner() {
  spinner.classList.remove("hidden");
}


function hideSpinner() {
  spinner.classList.add("hidden");
}





const loadCategory = () => {
fetch("https://openapi.programming-hero.com/api/categories")
.then((res) => res.json())
.then((json) => displayCategory(json.categories));

};

const loadCategoryName = (id) =>{
console.log(id);
const url = `https://openapi.programming-hero.com/api/category/${id}` ;
fetch(url)
.then(res=> res.json())
.then((data)=>console.log(data));
};

const displayCategoryName= (categories)=>{
const cardContainer=document.getElementById("card-container");
cardContainer.innerHTML= "";
console.log(categories);
};

const displayCategory=(categories) =>{
const categoryContainer = document.getElementById("category-container");
categoryContainer.innerHTML = "";
for (let category of categories){
console.log(category);
const btnDiv= document.createElement("div");
btnDiv.innerHTML = `
<button
onClick="loadCategoryName(${category.id})"
class="btn btn-ghost hover:bg-green-500">
${category.category_name}
</button>
`;
categoryContainer.append(btnDiv);

}
}
loadCategory();
    
