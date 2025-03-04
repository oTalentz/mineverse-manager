
// Função para adicionar animações de transição entre páginas
export const pageTransition = (element: HTMLElement) => {
  element.classList.add('animate-page-transition');
  
  setTimeout(() => {
    element.classList.remove('animate-page-transition');
  }, 600); // Mesma duração da animação CSS
};

// Função para criar delay em animações sequenciais
export const staggeredAnimation = (elements: NodeListOf<Element> | HTMLElement[], delay = 50) => {
  Array.from(elements).forEach((element, index) => {
    (element as HTMLElement).style.animationDelay = `${index * delay}ms`;
  });
};

// Função para ativar animações apenas quando o elemento estiver visível
export const animateOnVisible = (element: HTMLElement, animationClass: string) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        element.classList.add(animationClass);
        observer.unobserve(element);
      }
    });
  }, { threshold: 0.1 });
  
  observer.observe(element);
};
