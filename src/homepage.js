function buttonClicked(){
    //const cityForm  = document.querySelector("#foodForm")
    //const getWeatherConditions = async(city) => {
    strCategory=document.getElementById("category").value
    fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=${strCategory}`)
        .then (response => response.json())
        .then (data =>{
            console.log(data)//OUTPUT IN CONSOLE
            console.log("Food area:",data.meals[0].strArea)
            console.log("Category:",data.meals[0].strCategory)
            console.log("Meal name:",data.meals[0].strMeal)
            console.log("Source:",data.meals[0].strSource)
            console.log("video link : "),((data.meals[0].strYoutube))
            
            //OUTPUT IN APP
            document.getElementById("area").append((data.meals[0].strArea))
            document.getElementById("Category").append((data.meals[0].strCategory))
            document.getElementById("meal").append((data.meals[0].strMeal))
            document.getElementById("source").append((data.meals[0].strSource))
            document.getElementById("video").append((data.meals[0].strYoutube))

        });
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, option, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  option = div.getElementsByTagName("option");
  for (i = 0; i < option.length; i++) {
    txtValue = option[i].textContent || option[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      option[i].style.display = "";
    } else {
      option[i].style.display = "none";
    }
  }
}

