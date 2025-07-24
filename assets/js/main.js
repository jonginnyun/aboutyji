/**
* Template Name: DevFolio - Optimized Version
* Author: BootstrapMade.com. Modified by Jonginn Yun to improve mobile responsibility.
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener);
  }

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    const header = select('#header');
    let offset = header.offsetHeight;
  
    if (!header.classList.contains('header-scrolled')) {
      offset -= 20;
    }
  
    const elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    });
  }

  // --- START: OPTIMIZED SCROLL HANDLER ---
  // 모든 스크롤 관련 효과를 이 하나의 함수에서 처리합니다.
  const handleScrollEffects = () => {
    let position = window.scrollY;
    let selectHeader = select('#header');
    
    // 1. 헤더 배경 및 폰트 색상 변경
    if (selectHeader) {
      if (position > 100) {
        selectHeader.classList.add('header-scrolled');
      } else {
        selectHeader.classList.remove('header-scrolled');
      }
    }

    // 2. '맨 위로 가기' 버튼
    let backtotop = select('.back-to-top');
    if (backtotop) {
      if (position > 100) {
        backtotop.classList.add('active');
      } else {
        backtotop.classList.remove('active');
      }
    }

    // 3. 모바일/데스크탑 메뉴 색상 변경
    let mobnavtog = select('.mobile-nav-toggle');
    let navbar = select('.navbar');
    if (position > 100) {
      if (mobnavtog) mobnavtog.classList.add('scroll');
      if (navbar) navbar.classList.add('scroll');
    } else {
      if (mobnavtog) mobnavtog.classList.remove('scroll');
      if (navbar) navbar.classList.remove('scroll');
    }

    // 4. 스크롤 위치에 따른 메뉴 링크 활성화
    let navbarlinks = select('#navbar .scrollto', true);
    let positionWithOffset = position + 200;
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      if (positionWithOffset >= section.offsetTop && positionWithOffset <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active');
      } else {
        navbarlink.classList.remove('active');
      }
    });
  }
  // 페이지 로드 시와 스크롤 시에 통합된 함수를 한 번만 호출합니다.
  window.addEventListener('load', handleScrollEffects);
  onscroll(document, handleScrollEffects);
  // --- END: OPTIMIZED SCROLL HANDLER ---


  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile');
    this.classList.toggle('bi-list');
    this.classList.toggle('bi-x');
  });

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault();
      this.nextElementSibling.classList.toggle('dropdown-active');
    }
  }, true);

  /**
   * Scrool with offset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault();
      let navbar = select('#navbar');
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile');
        let navbarToggle = select('.mobile-nav-toggle');
        navbarToggle.classList.toggle('bi-list');
        navbarToggle.classList.toggle('bi-x');
      }
      scrollto(this.hash);
    }
  }, true);

  /**
   * Scroll with offset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash);
      }
    }
  });

  /**
   * Intro type effect
   */
  const typed = select('.typed');
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})();