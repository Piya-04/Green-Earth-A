


//spinner

const manageSpinner = (status) => {
if (status == true) {
  document.getElementById("spinner").classList.remove("hidden");
  document.getElementById("plant-container").classList.add("hidden");
}
else {
  document.getElementById("plant-container").classList.remove("hidden");
  document.getElementById("spinner").classList.add("hidden");
}
};



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
const cardContainer=document.getElementById("plant-container");
cardContainer.innerHTML= "";
categories.forEach(category => {
console.log(category);
})
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