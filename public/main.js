var ordersUp = document.getElementsByClassName("ordersReady");
var trash = document.getElementsByClassName("fa-trash-o");

Array.from(ordersUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.childNodes[1].innerText
        fetch('completed_orders', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});


Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.childNodes[1].innerText
        fetch('delete', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            // _id: ObjectId(req.body._id)
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
