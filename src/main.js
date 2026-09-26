const menuToggle = document.querySelector('[data-menu-toggle]');
const mobileNav = document.querySelector('[data-mobile-nav]');
const menuOpenIcon = document.querySelector('[data-menu-icon="open"]');
const menuCloseIcon = document.querySelector('[data-menu-icon="close"]');
const brandLink = document.querySelector('[aria-label="Visium Digital, inicio"]');

if (brandLink) {
  const logo = document.createElement('img');
  logo.src = new URL('./assets/img/logo_visium.svg', import.meta.url).href;
  logo.alt = 'Visium Digital';
  logo.width = 216;
  logo.height = 34;
  logo.className = 'h-7 w-auto';
  brandLink.replaceChildren(logo);
}

const setTablerIcon = (icon, name, paths) => {
  if (!icon) return;

  icon.dataset.tablerIcon = name;
  icon.setAttribute('viewBox', '0 0 24 24');
  icon.setAttribute('fill', 'none');
  icon.setAttribute('stroke', 'currentColor');
  icon.setAttribute('stroke-width', '2');
  icon.setAttribute('stroke-linecap', 'round');
  icon.setAttribute('stroke-linejoin', 'round');
  icon.innerHTML = paths.map((path) => `<path d="${path}" />`).join('');
};

setTablerIcon(menuOpenIcon, 'menu-2', ['M4 6l16 0', 'M4 12l16 0', 'M4 18l16 0']);
setTablerIcon(menuCloseIcon, 'x', ['M18 6l-12 12', 'M6 6l12 12']);

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
  const initialTab = tabs.find((tab) => tab.dataset.educationTab === hashTarget);

  if (initialTab) activateEducationTab(initialTab);
}
