//trigger for the collaspible dropdowns
$(document).ready(function(){
    $('.collapsible').collapsible();
  });
  
  //Gets passed information from the size radiobuttons
  function PizzaSize(size) {
    console.log(size);
  }

  //Gets passed information from the cheese radiobuttons
  function PizzaCheese(string){
    
    //sets the variables for the visibility of the cheese images
     var sight_all_cheese = document.getElementById("Pizza-toppings-cheese").style.visibility;
     var sight_all_right = document.getElementById("Pizza-toppings-cheese-right").style.visibility;
     var sight_all_left = document.getElementById("Pizza-toppings-cheese-left").style.visibility;
    
     //Checks if the string passed equal "All Cheese"
     if (string === "All Cheese"){
      //if the image is hidden
      if(sight_all_cheese === "hidden"){
         console.log("all cheese");
         //sets the base cheese images to visible
         document.getElementById("Pizza-toppings-cheese").style.visibility = "visible";
         //sets both the left and right cheese image to hidden
         document.getElementById("Pizza-toppings-cheese-right").style.visibility = "hidden";
         document.getElementById("Pizza-toppings-cheese-left").style.visibility = "hidden";
      }
      //if the image is visible 
      else{
        //hides the base cheese image
        document.getElementById("Pizza-toppings-cheese").style.visibility = "hidden";
      }
    }
    //Checks if the string passed equal "Right half Cheese"
    if(string ==="Right half Cheese"){
      //checks if the image is hidden 
      if(sight_all_right === "hidden"){
        console.log("right cheese");
        //sets the right half cheese image to visible
        document.getElementById("Pizza-toppings-cheese-right").style.visibility = "visible";
        //sets the full cheese image and the left cheese image to hidden
        document.getElementById("Pizza-toppings-cheese").style.visibility = "hidden";
        document.getElementById("Pizza-toppings-cheese-left").style.visibility = "hidden";
  }
    else{
      //sets the right cheese image to hidden
      document.getElementById("Pizza-toppings-cheese-right").style.visibility = "hidden";
    }
    }
    //Checks if the string passed equals "Left half Cheese" 
    if(string ==="Left half Cheese"){
      //checks if the image is hidden
      if(sight_all_left === "hidden"){
       console.log("left cheese");
       //sets the left half cheese image to visible
       document.getElementById("Pizza-toppings-cheese-left").style.visibility = "visible";
       //sets the full cheese image and the right cheese image to hidden
       document.getElementById("Pizza-toppings-cheese").style.visibility = "hidden";
       document.getElementById("Pizza-toppings-cheese-right").style.visibility = "hidden";
  }
    else{
      //sets the left cheese image to hidden
      document.getElementById("Pizza-toppings-cheese-left").style.visibility = "hidden";
    }
    }

  }

function PizzaToppings(toppings){
    var sight_pepperoni = document.getElementById("Pizza-toppings-pepperoni").style.visibility;
    var sight_sausage = document.getElementById("Pizza-toppings-sausage").style.visibility;
  
    if(toppings ==="Pepperoni"){
      if(sight_pepperoni === "hidden"){
        document.getElementById("Pizza-toppings-pepperoni").style.visibility = "visible";
      }
      else{
        document.getElementById("Pizza-toppings-pepperoni").style.visibility = "hidden";
      }
    }
      if(toppings ==="Sausage"){
        if(sight_sausage === "hidden"){
          document.getElementById("Pizza-toppings-sausage").style.visibility = "visible";
        }
        else{
          document.getElementById("Pizza-toppings-sausage").style.visibility = "hidden";
        }
  }
}