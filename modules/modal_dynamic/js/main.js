
var modalBtn = document.getElementById('modalBtn');

document.onreadystatechange = function() {
  if (document.readyState == "interactive") {

    modalBtn.addEventListener("click", function(){
        loadData("data/lorem.html", function(xhttp){
          var config = {
              position: 'middle',
              content: xhttp.responseText,
              submitBtn: true
            }

          var myModal = new objModal(config)
          myModal.openModal(); 

        })
    });

  }
}
