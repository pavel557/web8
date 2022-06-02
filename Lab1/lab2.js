let form = document.querySelector('.js-form'),
    formInputs = document.querySelectorAll('.js-input');

function validName(name)
{
  let ret = /^[А-Я][а-я]{1,15}/;
  console.log(ret.test(String(name)));
  return ret.test(String(name));
}

function validMail(email)
{
  let ret = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return ret.test(String(email).toLowerCase());
}

    form.onsubmit = function(){
      let isNull = 4;

      formInputs.forEach(function (input) {
        if (input.value === '')
        {
          input.classList.add('err');
        }
        else {
            input.classList.remove('err');
            isNull = isNull - 1;

        }

      });



      if (isNull !== 0)
      {
        console.log('input err');
        return false;
      }

      if(!validName(formInputs[0].value))
        {
          console.log('name err');
          formInputs[0].classList.add('err');
          return false;
        }
        else {
          formInputs[0].classList.remove('err');
        }

        if(!validName(formInputs[1].value))
          {
            console.log('last name err');
            formInputs[1].classList.add('err');
            return false;
          }
          else {
            formInputs[1].classList.remove('err');
          }


    if(!validMail(formInputs[2].value))
      {
        console.log('mail err');
        formInputs[2].classList.add('err');
        return false;
      }
      else {
        formInputs[2].classList.remove('err');
      }
      let str = "https://api.telegram.org/bot5273997398:AAF4N8jyYv75HU23z76BJNj-1t5cwfHHnKo/sendMessage?chat_id=5256925478&text=";
      let str2 = "Имя = " + formInputs[0].value + " Фамилия = " + formInputs[1].value + " Почта = " + formInputs[2].value;
      fetch(str + str2);
      return false;
    }
