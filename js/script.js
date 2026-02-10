console.log("Blorgs secret is edible food!");
function buildMenu(foodData){
    let pageBody = document.querySelector("body");
    let foodList = document.createElement("ul");
    for(let i=0;i<foodData.length;i++){
        console.log(foodData[i]);
        let foodItem = document.createElement("li");
        foodItem.innerText = `${foodData[i].food_name} - ${foodData[i].food_price} - ${foodData[i].food_calories} `;
        foodList.appendChild(foodItem);
    }
    pageBody.appendChild(foodList);
}
async function getData() {
    const url = "./foods_api.php";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);
        buildMenu(result);
        
    } catch (error) {
        console.error(error.message);
    }
}
getData();