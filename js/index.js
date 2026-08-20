$(function () {
  // Community Section Toggle & Slider (jQuery)
  var activeTab = 'campaign';
  var campaignIndex = 0;
  var storyIndex = 0;
  var cardStep = 693; // 669px card width + 24px gap

  // 탭 전환 (캠페인 / 스토리)
  $('.toggle-switch .toggle-btn').on('click', function () {
    var tab = $(this).data('tab');
    if (tab === activeTab) return;

    activeTab = tab;
    $('.toggle-switch .toggle-btn').removeClass('active');
    $(this).addClass('active');

    if (tab === 'campaign') {
      $('#communityToggle').removeClass('is-story');
      $('.campaign-panel').addClass('active');
      $('.story-panel').removeClass('active');
      $('#communityCta').html('캠페인 더보기 <i>&gt;</i>');
    } else {
      $('#communityToggle').addClass('is-story');
      $('.story-panel').addClass('active');
      $('.campaign-panel').removeClass('active');
      $('#communityCta').html('스토리 더보기 <i>&gt;</i>');
    }
  });

  // 이전/다음 화살표 버튼 클릭 슬라이드
  $('#commPrevBtn').on('click', function () {
    if (activeTab === 'campaign') {
      if (campaignIndex > 0) campaignIndex--;
      $('.campaign-panel .card-track').css('transform', 'translateX(-' + (campaignIndex * cardStep) + 'px)');
    } else {
      if (storyIndex > 0) storyIndex--;
      $('.story-panel .card-track').css('transform', 'translateX(-' + (storyIndex * cardStep) + 'px)');
    }
  });

  $('#commNextBtn').on('click', function () {
    if (activeTab === 'campaign') {
      var max = $('.campaign-panel .card-track').children().length - 1;
      if (campaignIndex < max) campaignIndex++;
      $('.campaign-panel .card-track').css('transform', 'translateX(-' + (campaignIndex * cardStep) + 'px)');
    } else {
      var max = $('.story-panel .card-track').children().length - 1;
      if (storyIndex < max) storyIndex++;
      $('.story-panel .card-track').css('transform', 'translateX(-' + (storyIndex * cardStep) + 'px)');
    }
  });

  // 키보드 좌우 방향키 탐색 지원
  $(document).on('keydown', function (e) {
    if (e.key === 'ArrowLeft') $('#commPrevBtn').trigger('click');
    if (e.key === 'ArrowRight') $('#commNextBtn').trigger('click');
  });

  // Heart button on/off toggle
  $('.pet-card .heart-btn').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).toggleClass('is-active');
    var $img = $(this).find('img');

    if ($img.length) {
      var isMobile = window.matchMedia('(max-width: 563px)').matches;
      var iconDirectory = isMobile ? './images/3.mobile/icon_m' : './images/1.pc/icon';
      var iconName = $(this).hasClass('is-active') ? 'card_heart_on.svg' : 'card_heart_off.svg';
      $img.attr('src', iconDirectory + '/' + iconName);
    }
  });

  // Top Floating Button: Smooth scroll to top of page
  $('.floating_btn.top').on('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Adoption Section jQuery Carousel Slide
  var adoptionIndex = 0;
  function getAdoptionStep() {
    var $card = $('.pet-card').first();
    return $card.length ? ($card.outerWidth() + 24) : 347;
  }

  $('.adoption_section .arrow-left').on('click', function (e) {
    e.preventDefault();
    var totalCards = $('.pet-card').length;
    if (adoptionIndex > 0) {
      adoptionIndex--;
    } else {
      adoptionIndex = totalCards - 1;
    }
    $('.pet-track').css('transform', 'translateX(-' + (adoptionIndex * getAdoptionStep()) + 'px)');
  });

  $('.adoption_section .arrow-right').on('click', function (e) {
    e.preventDefault();
    var totalCards = $('.pet-card').length;
    var visibleCards = window.innerWidth <= 563 ? 1 : (window.innerWidth <= 1343 ? 2 : 4);
    var maxIndex = totalCards - visibleCards;
    if (maxIndex <= 0) maxIndex = totalCards - 1;

    if (adoptionIndex < maxIndex) {
      adoptionIndex++;
    } else {
      adoptionIndex = 0;
    }
    $('.pet-track').css('transform', 'translateX(-' + (adoptionIndex * getAdoptionStep()) + 'px)');
  });

  // Touch Swipe Gesture for Adoption Carousel
  var touchStartX = 0;
  var touchEndX = 0;
  $('.adoption_section .viewport').on('touchstart', function (e) {
    touchStartX = e.originalEvent.touches[0].clientX;
  });

  $('.adoption_section .viewport').on('touchend', function (e) {
    touchEndX = e.originalEvent.changedTouches[0].clientX;
    var swipeDist = touchStartX - touchEndX;
    if (Math.abs(swipeDist) > 30) {
      if (swipeDist > 0) {
        $('.adoption_section .arrow-right').trigger('click');
      } else {
        $('.adoption_section .arrow-left').trigger('click');
      }
    }
  });

  // Header scroll handler: 70% opacity in hero, < 70% (50%) past hero
  function checkHeaderScroll() {
    var $hero = $('.hero');
    var $header = $('.site-header');
    if ($hero.length && $header.length) {
      var heroThreshold = $hero.offset().top + $hero.outerHeight() - 80;
      if ($(window).scrollTop() > heroThreshold) {
        $header.addClass('scrolled-past-hero');
      } else {
        $header.removeClass('scrolled-past-hero');
      }
    }
  }

  $(window).on('scroll resize', checkHeaderScroll);
  checkHeaderScroll();
});