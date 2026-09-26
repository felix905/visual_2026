const menuToggle = document.querySelector('[data-menu-toggle]');
const mobileNav = document.querySelector('[data-mobile-nav]');
const menuOpenIcon = document.querySelector('[data-menu-icon="open"]');
const menuCloseIcon = document.querySelector('[data-menu-icon="close"]');

if (menuToggle && mobileNav) {
  const setMenuState = (isOpen) => {
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
    mobileNav.classList.toggle('hidden', !isOpen);
    menuOpenIcon?.classList.toggle('hidden', isOpen);
    menuCloseIcon?.classList.toggle('hidden', !isOpen);
  };

  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    setMenuState(!expanded);
  });

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      setMenuState(false);
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
      setMenuState(false);
      menuToggle.focus();
    }
  });
}

const educationTabs = document.querySelector('[data-education-tabs]');

if (educationTabs) {
  const tabs = [...educationTabs.querySelectorAll('[data-education-tab]')];
  const panels = [...document.querySelectorAll('[data-education-panel]')];

  const activateEducationTab = (tab, moveFocus = false) => {
    tabs.forEach((item) => {
      const isSelected = item === tab;
      item.setAttribute('aria-selected', String(isSelected));
      item.setAttribute('tabindex', isSelected ? '0' : '-1');
    });

    panels.forEach((panel) => {
      panel.hidden = panel.dataset.educationPanel !== tab.dataset.educationTab;
    });

    if (moveFocus) tab.focus();
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activateEducationTab(tab));
    tab.addEventListener('keydown', (event) => {
      const nextIndex = event.key === 'ArrowRight'
        ? (index + 1) % tabs.length
        : event.key === 'ArrowLeft'
          ? (index - 1 + tabs.length) % tabs.length
          : event.key === 'Home'
            ? 0
            : event.key === 'End'
              ? tabs.length - 1
              : -1;

      if (nextIndex >= 0) {
        event.preventDefault();
        activateEducationTab(tabs[nextIndex], true);
      }
    });
  });

  const hashTarget = window.location.hash.slice(1);
  const initialTab = tabs.find((tab) =>
    document.getElementById(tab.getAttribute('aria-controls'))?.querySelector(`#${CSS.escape(hashTarget)}`),
  );

  if (initialTab) activateEducationTab(initialTab);
}
