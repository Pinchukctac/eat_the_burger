$(function() {
  $(document).on("click", ".devour-burger", (event) => {
    event.preventDefault();
    console.log($(this).text());
      var id = $(this).attr("data-crap");
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

//   $(".devour-burger").on("click", (event) => {
//       event.preventDefault();
      
//       var id = $(this).data("id")

//       $.ajax("/api/burgers/" + id, 
//       {
//           type:"POST",
//           data:devouredBurger
//       }).then(() => {

//           console.log("Burger Devoured", id);
//       t
//       location.reload();
//       })
//   })
})