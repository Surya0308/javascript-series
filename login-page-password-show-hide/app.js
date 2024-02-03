        document.querySelector('.pass-visibility').addEventListener('click', function() {
          var passwordInput = document.getElementById('password');
          var icon = document.querySelector('.pass-visibility');

          if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
          } else {
            passwordInput.type = 'password';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
          }
       });


        // $('.pass-visibility').on('click', function() {
        //     var passwordInput = $('#password');
        //     var icon = $('.pass-visibility');

        //     if (passwordInput.attr('type') === 'password') {
        //         passwordInput.attr('type', 'text');
        //         icon.removeClass('fa-eye-slash').addClass('fa-eye');
        //     } else {
        //         passwordInput.attr('type', 'password');
        //         icon.removeClass('fa-eye').addClass('fa-eye-slash');
        //     }
        // });