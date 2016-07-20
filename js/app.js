var form = document.getElementById('form').elements;

$('#sub').click(() => {
  var formData = {
    email: form.email.value,
    hiddenemail: form.hiddenemail.checked
  };
  console.log(formData);
})
