
(() => {
  const html = document.documentElement;

  const applyTheme = (theme) => {
    html.dataset.theme = theme;
    const label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
      button.setAttribute('aria-label', label);
      button.setAttribute('title', label);
      button.dataset.themeState = theme;
    });
  };

  const toggleTheme = () => {
    const nextTheme = html.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', nextTheme);
    applyTheme(nextTheme);
  };

  const setActiveNav = () => {
    const current = window.location.pathname.replace(/\/$/, '') || '/';
    document.querySelectorAll('[data-nav-link]').forEach((link) => {
      const href = link.getAttribute('href')?.replace(/\/$/, '') || '/';
      const isHomeAnchor = href.includes('#');
      if (isHomeAnchor) {
        if (current === '/' && href.startsWith('/#')) {
          link.classList.remove('is-active');
        }
        return;
      }
      if (href === '/') {
        if (current === '/') link.classList.add('is-active');
        return;
      }
      if (current === href || current.startsWith(href + '/')) {
        link.classList.add('is-active');
      }
    });
  };

  const initMenu = () => {
    const button = document.querySelector('[data-menu-toggle]');
    const menu = document.querySelector('[data-mobile-nav]');
    if (!button || !menu) return;

    const closeMenu = () => {
      menu.classList.remove('is-open');
      button.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
    };

    const openMenu = () => {
      menu.classList.add('is-open');
      button.setAttribute('aria-expanded', 'true');
      document.body.classList.add('menu-open');
    };

    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      expanded ? closeMenu() : openMenu();
    });

    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 980) closeMenu();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
  };

  const initReveal = () => {
    const elements = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window) || !elements.length) {
      elements.forEach((item) => item.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((item) => observer.observe(item));
  };

  const initForm = () => {
    const form = document.querySelector('[data-contact-form]');
    if (!form) return;

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const name = String(data.get('name') || '').trim();
      const email = String(data.get('email') || '').trim();
      const subject = String(data.get('subject') || '').trim() || 'Portfolio inquiry';
      const message = String(data.get('message') || '').trim();
      const to = form.getAttribute('data-to') || 'nikhil.srikant@outlook.com';
      const lines = [
        name ? `Name: ${name}` : '',
        email ? `Email: ${email}` : '',
        '',
        message || `Hello ${form.getAttribute('data-owner-name') || 'Nikhil'}, I would like to connect regarding your work.`
      ].filter(Boolean);
      const mailto = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
      window.location.href = mailto;
    });
  };

  const initYear = () => {
    const year = document.querySelector('[data-year]');
    if (year) year.textContent = String(new Date().getFullYear());
  };

  document.addEventListener('DOMContentLoaded', () => {
    setActiveNav();
    initMenu();
    initReveal();
    initForm();
    initYear();

    document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
      button.addEventListener('click', toggleTheme);
    });

    applyTheme(html.dataset.theme || 'dark');
  });
})();
