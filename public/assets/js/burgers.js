$(function() {
    $(".devour").on("click", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
      var newDevoured = $(this).data("newdevoured");
console.log(id);
      var burgerDevoured = 
      {
          devoured: newDevoured
      }

//PUT request
  $.ajax("/api/burgers/" + id, 
  {
      type: "PUT",
      data: burgerDevoured
  }).then(() => 
  {
      console.log("Burger is ", newDevoured);

      location.reload();
  });
  });

  // Submitting new Burgers
  $(".create-form").on("submit", (event) => {
      event.preventDefault();

      var newBurger = 
      {
          name: $("#burgerInput").val(),
          devoured: 0
      }

      $.ajax("/api/burgers/create", {
          type: "POST",
          data: newBurger
      }).then(() => {
      console.log("created new burger");

      location.reload();
  })
  });

//   
})