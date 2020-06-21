$(function () {
    $(document).scroll(function () {
      var $nav = $("header");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

  const scriptURL = 'https://script.google.com/macros/s/AKfycbw_p6XKgnCtAyW0FC_bdC_oFy4iKiNxQ2QX_SltpDcPC1HGtJI/exec'
    const form = document.forms['submit-to-google-sheet']
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
        alert('Thanks...')
    })