document.addEventListener( 'DOMContentLoaded', function () {
    
    new Splide( '.splide', {
        autoplay: true,
        interval: 30000,
        rewind: true,
        breakpoints: {
            768: {
                destroy: true
            }}
    }).mount();

    let burger = document.querySelector('.burger'),
        span = document.querySelectorAll('.elmnt'),
        menu = document.querySelector('.mobile-menu'),
        cross = document.querySelector('.cross'),
        button = document.querySelectorAll('.button'),
        form = document.querySelector('.form');

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            let data = new FormData(this);
            let obj = {};

            data.forEach(function(value, key) {
                obj[key] = value;
            });

           let json = JSON.stringify(obj);
           let request = new XMLHttpRequest();

           request.open('POST', 'mailer/smart.php');
           request.send(json);

        });
    cross.addEventListener('click', function() {
        menu.classList.remove('transform3');
        span[0].classList.remove('transform');
        span[2].classList.remove('transform1');
        span[1].style.display = '';
        burger.classList.remove('active');
    });

    burger.addEventListener('click', function() {
       if (burger.classList.contains('active')) {
        span[0].classList.remove('transform');
        span[2].classList.remove('transform1');
        span[1].style.display = 'block';
        burger.classList.remove('active');
       } else {
        span[0].classList.add('transform');
        span[2].classList.add('transform1');
        span[1].style.display = 'none';
        burger.classList.add('active');
        menu.classList.add('transform3');
       }

    });
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            span.forEach(function(item) {
                item.style.backgroundColor = 'black';
            });
            setTimeout(function() {
                burger.style.position = 'fixed';
            }, 100);
            
        } else {
            burger.style.position = 'absolute';
            setTimeout(function() {
                span.forEach(function(item) {
                    item.style.backgroundColor = 'white';
                });
            }, 10);
        }
    });
    
    // собираем все якоря; устанавливаем время анимации и количество кадров
    const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
    animationTime = 500,
    framesCount = 300;


    anchors.forEach(function(item) {
        // каждому якорю присваиваем обработчик события
        item.addEventListener('click', function(e) {
          // убираем стандартное поведение
          e.preventDefault();
          
          // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
          let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
          
          // запускаем интервал, в котором
          let scroller = setInterval(function() {
            // считаем на сколько скроллить за 1 такт
            let scrollBy = coordY / framesCount;
            
            // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
            // и дно страницы не достигнуто
            if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
              // то скроллим на к-во пикселей, которое соответствует одному такту
              window.scrollBy(0, scrollBy);
            } else {
              // иначе добираемся до элемента и выходим из интервала
              window.scrollTo(0, coordY);
              clearInterval(scroller);
            }
          // время интервала равняется частному от времени анимации и к-ва кадров
          }, animationTime / framesCount);
        });
      });

    button.forEach(function (item) {
        item.addEventListener('click', function(e) {
            // убираем стандартное поведение
            e.preventDefault();
            
            // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
            let coordY = document.querySelector('#contact').getBoundingClientRect().top + window.pageYOffset;
            
            // запускаем интервал, в котором
            let scroller = setInterval(function() {
              // считаем на сколько скроллить за 1 такт
              let scrollBy = coordY / framesCount;
              
              // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
              // и дно страницы не достигнуто
              if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
                // то скроллим на к-во пикселей, которое соответствует одному такту
                window.scrollBy(0, scrollBy);
              } else {
                // иначе добираемся до элемента и выходим из интервала
                window.scrollTo(0, coordY);
                clearInterval(scroller);
              }
            // время интервала равняется частному от времени анимации и к-ва кадров
            }, animationTime / framesCount);
          });
    });
} );





