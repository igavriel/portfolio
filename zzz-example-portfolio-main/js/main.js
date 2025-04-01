const nav = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const navBtnImg = document.querySelector("#nav-btn-img");

//Preloader
function hidePreloader() {
  const preloader = document.getElementById("preloader");
  preloader.style.display = "none";
}

window.addEventListener("load", function () {
  setTimeout(hidePreloader, 1700);
});


//Sticky header & goToTop button
window.addEventListener("scroll", function () {
  const header = document.querySelector("#header");
  const hero = document.querySelector("#home");
  let triggerHeight = hero.offsetHeight - 170;

  if (window.scrollY > triggerHeight) {
    header.classList.add("header-sticky");
    goToTop.classList.add("reveal");
  } else {
    header.classList.remove("header-sticky");
    goToTop.classList.remove("reveal");
  }
});

//AOS animations settings
AOS.init({
  once: true,
});
document.addEventListener('DOMContentLoaded', function() {
  const nav = document.getElementById('nav');
  const navBtn = document.getElementById('nav-btn');
  const navBtnImg = document.getElementById('nav-btn-img');

  navBtn.addEventListener('click', () => {
    if (nav.classList.contains('open')) {
      nav.classList.remove('open');
      navBtnImg.src = window.location.pathname.includes('projects/')
          ? '../img/icons/open.svg'
          : 'img/icons/open.svg';
    } else {
      nav.classList.add('open');
      navBtnImg.src = window.location.pathname.includes('projects/')
          ? '../img/icons/close.svg'
          : 'img/icons/close.svg';
    }
  });

  // Ajoutez un gestionnaire pour fermer le menu au clic sur un lien
  const navLinks = document.querySelectorAll('.nav-link, .dropdown-item');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      navBtnImg.src = '../img/icons/open.svg';
    });
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const timelineItems = document.querySelectorAll('.timeline-item');
  const careerTitle = document.querySelector('.career-title');
  const timelineLine = document.querySelector('.timeline-line');
  let isScrolling = false;
  let currentIndex = -1;
  let hasAnimated = false;

  function showLine() {
    timelineLine.classList.add('grow');
  }

  function showAllItems() {
    showLine();
    careerTitle.classList.add('visible');
    timelineItems.forEach(item => {
      item.classList.add('visible');
      item.classList.remove('hiding');
    });
    hasAnimated = true;
  }

  function animateItems(direction, index) {
    if (hasAnimated) return;
    showLine();

    if (direction === 'down') {
      timelineItems.forEach((item, i) => {
        if (i <= index) {
          setTimeout(() => {
            item.classList.add('visible');
            item.classList.remove('hiding');
          }, i * 300);
        }
      });
    } else {
      for (let i = timelineItems.length - 1; i >= 0; i--) {
        if (i > index) {
          const delay = (timelineItems.length - 1 - i) * 300;
          setTimeout(() => {
            timelineItems[i].classList.remove('visible');
          }, delay);
        }
      }
    }

    // Si tous les éléments sont affichés, marquer comme complètement animé
    if (index === timelineItems.length - 1) {
      hasAnimated = true;
    }
  }

  function showItem(index, direction) {
    if (index === 0 && !careerTitle.classList.contains('visible')) {
      careerTitle.classList.add('visible');
      showLine();
    }

    animateItems(direction, index);
  }

  function handleScroll(event) {
    if (isScrolling || hasAnimated) return;

    const direction = event.deltaY > 0 ? 'down' : 'up';

    if (direction === 'down' && currentIndex < timelineItems.length - 1) {
      currentIndex++;
    } else if (direction === 'up' && currentIndex >= 0) {
      currentIndex--;
    }

    showItem(currentIndex, direction);

    isScrolling = true;
    setTimeout(() => {
      isScrolling = false;
    }, 300);

    event.preventDefault();
  }

  const careerSection = document.querySelector('.career');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        window.addEventListener('wheel', handleScroll, { passive: false });
        if (hasAnimated) {
          showAllItems();
        }
      } else {
        window.removeEventListener('wheel', handleScroll);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(careerSection);
});