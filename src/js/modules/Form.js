import '../plugins/jquery.validate.min.js';

// Validation Plugin
$('.contacts__form').validate({
  rules: {
    name: {
      required: true,
      minlength: 2,
    },
    email: {
      required: true,
      email: true,
    },
    text: {
      required: true,
    },
    checkbox: {
      required: true,
    },
  },
  messages: {
    name: {
      required: 'Пожалуйста, введите ваше имя',
      minlength: jQuery.validator.format('Введите не менее {0} символов!'),
    },
    email: {
      required: 'Пожалуйста, введите вашу почту',
      email: 'Неправильно введен адрес почты',
    },
    text: {
      required: 'Пожалуйста, введите текст',
    },
    checkbox: {
      required: 'Подтвердите, что вы согласны с политикой конфиденциальности',
    },
  },
});

// Validation Submit Button
function disableBtn() {
  $('.contacts__btn').attr('disabled', 'disabled');
}

$('#name, #email, #text, #checkbox').on('keyup change', function () {
  const name = $('#name').val();
  const email = $('#email').val();
  const textarea = $('#text').val();
  const checkbox = $('#checkbox');

  if (
    name.length > 1 &&
    email.length != 0 &&
    textarea.length != 0 &&
    checkbox.is(':checked')
  ) {
    $('.contacts__btn').removeAttr('disabled');
  } else {
    disableBtn();
  }
});

// PHPMailer
$('.contacts__form').submit(function (e) {
  e.preventDefault();
  $.ajax({
    type: 'POST',
    url: 'mailer/index.php',
    data: $(this).serialize(),
  }).done(function () {
    $('.contacts__form').find('input').val('');
    $('.contacts__form').trigger('reset');
    $('.overlay, #thanks').fadeIn('fast');
  });
  disableBtn();
  return false;
});
