document.addEventListener("DOMContentLoaded", function () {
  // Получаем элементы слайдера
  const sliderContainer = document.querySelector(".news_slider_items");
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");
  const slides = Array.from(sliderContainer.querySelectorAll(".news_card"));
  const slideCount = slides.length;
  let slideIndex = 0;

  // Устанавливаем обработчики событий для кнопок
  prevButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);

  // Функция для показа предыдущего слайда
  function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
  }

  // Функция для показа следующего слайда
  function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
  }

  // Функция для обновления отображения слайдера
  function updateSlider() {
    const offset = -slideIndex * 100;
    sliderContainer.style.transform = `translateX(${offset}%)`;
    updateAriaLabels();
  }

  // Функция для обновления ARIA-меток
  function updateAriaLabels() {
    slides.forEach((slide, index) => {
      if (index === slideIndex) {
        slide.setAttribute('aria-hidden', 'false');
        slide.querySelector('a').setAttribute('tabindex', '0');
      } else {
        slide.setAttribute('aria-hidden', 'true');
        slide.querySelector('a').setAttribute('tabindex', '-1');
      }
    });
    
    const currentSlide = slideIndex + 1;
    prevButton.setAttribute('aria-label', `Показать слайд ${currentSlide - 1 === 0 ? slideCount : currentSlide - 1} из ${slideCount}`);
    nextButton.setAttribute('aria-label', `Показать слайд ${currentSlide === slideCount ? 1 : currentSlide + 1} из ${slideCount}`);
  }

  // Инициализация слайдера
  updateSlider();

  // Добавляем обработку клавиатуры для доступности
  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
      showPreviousSlide();
    } else if (e.key === 'ArrowRight') {
      showNextSlide();
    }
  });
});