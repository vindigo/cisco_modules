/**
 * Represents a modal object. Requires a config object to be passed. See example.
 * @module modal
 * @version 1.1
 * @author Richard Frausto
 * @param {object} config - A config object that determines buttons and position
 * @example config object
 * {
 *  position: 'top' | 'middle' | 'bottom',
 *  content: (content),
 *  submitBtn: true | false,
 *  cancelBtn: true | false
 * }
 */
var objModal = function(config){

  // DOM
  var modal = document.createElement("div"),
      modalStyle = document.createElement("link"),
      outer = document.createElement("div"),
      middle = document.createElement("div"),
      inner = document.createElement("div"),

      theBody = document.getElementsByTagName('body')[0],
      theHead = document.getElementsByTagName('head')[0],
      buttons = "";


  createModal();
  addButtons();


  // These elements are defined here as opposed to the top because the modal
  // is dynamically built and does not exist in the DOM before now.
  var modalCancel = document.querySelector("#cancel");
  var modalSubmit = document.querySelector("#submit");
  var modalCloseIcon = document.querySelector(".closeIcon");


  // listeners
  if (modalCancel){
    modalCancel.addEventListener( 'click', handleClose );
  }

  if (modalSubmit){
    modalSubmit.addEventListener( 'click', handleSubmit );
  }

  if (modalCloseIcon){
    modalCloseIcon.addEventListener( 'click', handleCloseIcon );
  }

  // functions
  function createModal(){
    modal.id = "modal";
    modal.className = "modal";
    modalStyle.id = "modalStyle"
    modalStyle.setAttribute("rel", "stylesheet");
    modalStyle.setAttribute("href", "module/modal/modal.css");

    outer.className = "outer";
    middle.className = "middle";
    inner.className = "inner";

    config.submitBtn = config.submitBtn || false;
    inner.innerHTML = '<span class="closeIcon">&times;</span>' +
      '</div><div class="content">' + config.content + '</div>' +
      '<div id="buttons" class="row">' +
      '<button type="button" id="cancel" class="btn btn-secondary right">Cancel</button>' +
      '</div>';

    middle.append(inner);
    outer.append(middle);
    modal.append(outer);
    theBody.append(modal);
    theHead.appendChild(modalStyle);
  }

  function handleSubmit(){
    alert("Submitted...");
    closeModal();
  }

  function handleClose(){
    closeModal();
  }

  function handleCloseIcon(){
    closeModal();
  }

  function openModal(){
    middle.style.verticalAlign = config.position;
    showModal();
  }

  function showModal(){
    modal.style.display = 'block';
  }

  function closeModal(){
    modal.style.display = 'none';
    removeModal();
  }

  function clickOutsideModal(e){
    if (e.target.classList.contains('middle')){
        removeModal();
    }
  }

  function removeModal(){
        modal.remove();
        modalStyle.remove();
  }

  function addButtons(){
    if (config.submitBtn){
      buttons += '<button type="button" id="submit" class="btn btn-primary right">Submit</button>'
    }

    if (config.cancelBtn) {
      buttons += '<button type="button" id="cancel" class="btn btn-secondary right">Cancel</button>';
    };

    var row = document.getElementById("buttons");
    row.innerHTML = buttons;
  }

  return { openModal: openModal};
}
