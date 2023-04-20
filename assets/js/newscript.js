var frm=document.getElementsByName("submit-to-google-sheet")[0];
$("#form").submit((e) => {
    e.preventDefault()
    $.ajax({
      url: "https://script.google.com/macros/s/AKfycbxOnGaj5uhlBgtfGslrR6-7Fq617tLiFbRxLSzPa5JDtfpVWx_G6W6vudowC_-EMFU8/exec",
      data: $("#form").serialize(),
      method: "post",
      success: function (response) {
        alert("Form submitted successfully")
        frm.reset();
        //window.location.href="https://google.com"
      },
      error: function (err) {
        alert("Something Error")
  
      }
    })
  })
  