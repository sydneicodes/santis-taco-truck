var ordersUp = document.getElementsByClassName("ordersReady");
var trash = document.getElementsByClassName("fa-trash-o");

Array.from(ordersUp).forEach(function (element) {
  element.addEventListener('click', function () {
    const name = this.parentNode.childNodes[1].innerText
    console.log(name)
    fetch('completed_orders', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
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


Array.from(trash).forEach(function (element) {
  element.addEventListener('click', function () {
    const name = this.parentNode.parentNode.childNodes[1].innerText.trim()
    console.log(name)
    fetch('delete', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
      })
    }).then(function (response) {
      window.location.reload()
    })
  });
});
