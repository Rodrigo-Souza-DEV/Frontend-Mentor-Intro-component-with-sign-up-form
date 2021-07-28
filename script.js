let form = document.querySelector('form');
    let inp = document.querySelectorAll('input');
    form.addEventListener('submit', function (e) {
      for (let i = 0; i < inp.length; i++) {
        if (inp[i].value !=='') {
          inp[i].style.backgroundImage = 'none';
          inp[i].style.border = '1px solid hsl(246, 25%, 77%)';
        } else {
          e.preventDefault();
          inp[i].style.border = '1px solid hsl(0, 100%, 74%) ';
          inp[i].style.backgroundImage = "url('images/icon-error.svg')";
          return false;}
        }
      }
    )
  