export const animateCounter = (
  element: HTMLElement,
  target: number,
  duration: number = 2000
): void => {
  const increment = target / (duration / 16);
  let current = 0;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }

    if (target % 1 === 0) {
      element.textContent = Math.floor(current).toString();
    } else {
      element.textContent = current.toFixed(2);
    }

    if (target >= 90 && target <= 100) {
      element.textContent += '%';
    } else if (target >= 200) {
      element.textContent += '+';
    }
  }, 16);
};

export const smoothScrollTo = (elementId: string): void => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};
