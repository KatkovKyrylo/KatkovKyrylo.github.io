export const scrollToContent = (idSelector: string) => {
  const targetElement = document.querySelector(idSelector);

  if (targetElement) {
    const headerHeight = document.querySelector("header")?.offsetHeight || 0;

    const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    const additionalOffset = 10;
    const offsetPosition = elementPosition - headerHeight - additionalOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  } else {
    console.error(`Element with selector '${targetElement}' not found.`);
  }
};
