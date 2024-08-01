$(function() {
  // your code here

  //ACCORDION EXERCISE
  $(".accordion-header").on("click", function(){
    $(this).next("div").slideToggle()

    // not 
  })




  //AJAX EXERCISE 
  todosDiv = $(".todos")

  todosDiv.find("button").on("click", async () => {
    const items = await getListItem()

    items.todos.forEach((item,i) => {
      todosDiv.find("ul").append(`<li>${item.todo}</li>`)
      console.log(item.todo)
    })
  })

  function getListItem(){
    return new Promise((resolve, reject) => {
      $.ajax({
        url: `https://dummyjson.com/todos`,
        type: `GET`,
        success: function(response){
          resolve(response)
        },
        error: function(error){
          console.log(error)
        }
      })
    })
  }




})