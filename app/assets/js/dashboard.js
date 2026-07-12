// =========================================
// WARFRAME STANDING GUIDE - MAIN SCRIPT
// =========================================

document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initNavigation();
    initDailyCapCalculator();
    initCategoryCards();
    initCardAnimations();
    initFactionNavigation();
});

// =========================================
// BACKGROUND PARTICLES
// =========================================
function initParticles() {
    const container = document.getElementById('bgParticles');
    if (!container) return;

    const PARTICLE_COUNT = 60;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        const size = Math.random() * 3 + 1;
        const left = Math.random() * 100;
        const duration = Math.random() * 15 + 10;
        const delay = Math.random() * 20;
        const hue = Math.random() > 0.7 ? 280 : 190; // mix cyan and purple

        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${left}%;
            animation-duration: ${duration}s;
            animation-delay: ${delay}s;
            background: hsl(${hue}, 80%, 65%);
            box-shadow: 0 0 ${size * 4}px hsl(${hue}, 80%, 65%);
        `;

        container.appendChild(particle);
    }
}

// =========================================
// NAVIGATION / VIEW SWITCHING
// =========================================
function initNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const views = document.querySelectorAll('.view');
    const backButtons = document.querySelectorAll('.back-btn');
    const logoHome = document.getElementById('logo-home');

    function switchView(viewId, pushHistory = true) {
        // Hide all views
        views.forEach(view => {
            view.classList.remove('active');
        });

        // Show target view
        const targetView = document.getElementById(`view-${viewId}`);
        if (targetView) {
            targetView.classList.remove('active');
            // Force reflow for animation restart
            void targetView.offsetWidth;
            targetView.classList.add('active');
        }

        // Update nav buttons
        navButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.view === viewId);
        });

        // Scroll to top smoothly
        window.scrollTo({ top: 0, behavior: 'smooth' });

        if (pushHistory) {
            history.pushState({ view: viewId }, '', '#' + viewId);
        }
    }

    // Nav button clicks
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            switchView(btn.dataset.view);
        });
    });

    // Back buttons
    backButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            switchView(btn.dataset.navigate);
        });
    });

    // Logo click → dashboard or homepage redirect
    if (logoHome) {
        logoHome.addEventListener('click', () => {
            const dashboardView = document.getElementById('view-dashboard') || document.getElementById('section-dashboard');
            if (dashboardView) {
                switchView('dashboard');
            } else {
                window.location.href = '!Warframe_Master_Index.html';
            }
        });
    }

    // Initialize base history state
    const defaultActiveView = document.querySelector('.view.active');
    if (defaultActiveView && !history.state) {
        const initialViewId = defaultActiveView.id.replace('view-', '');
        history.replaceState({ view: initialViewId }, '', '#' + initialViewId);
    }

    // Handle back/forward buttons
    window.addEventListener('popstate', (e) => {
        const defaultActiveView = document.querySelector('.view.active');
        const defaultViewId = defaultActiveView ? defaultActiveView.id.replace('view-', '') : '';
        const state = e.state || { view: defaultViewId };
        if (state.view) {
            switchView(state.view, false);
        }
    });
}

// =========================================
// DAILY CAP CALCULATOR
// =========================================
function initDailyCapCalculator() {
    const mrInput = document.getElementById('mr-input');
    const capValue = document.getElementById('cap-value');

    if (!mrInput || !capValue) return;

    function updateCap() {
        let mr = parseInt(mrInput.value) || 0;
        mr = Math.max(0, Math.min(35, mr));
        const cap = 1000 + (mr * 1000);
        capValue.textContent = cap.toLocaleString();

        // Animate the value change
        capValue.style.transform = 'scale(1.15)';
        capValue.style.transition = 'transform 0.2s ease';
        setTimeout(() => {
            capValue.style.transform = 'scale(1)';
        }, 200);
    }

    mrInput.addEventListener('input', updateCap);
    mrInput.addEventListener('change', updateCap);

    // Init
    updateCap();
}

// =========================================
// CATEGORY CARD NAVIGATION
// =========================================
function initCategoryCards() {
    const categoryCards = document.querySelectorAll('.category-card[data-navigate]');

    categoryCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Don't navigate if clicking the explore button specifically (it's inside the card)
            const viewId = card.dataset.navigate;
            switchToView(viewId);
        });
    });
}

function switchToView(viewId, preventScrollToTop = false, pushHistory = true) {
    const views = document.querySelectorAll('.view');
    const navButtons = document.querySelectorAll('.nav-btn');

    // Hide all views
    views.forEach(view => view.classList.remove('active'));

    // Show target
    const targetView = document.getElementById(`view-${viewId}`);
    if (targetView) {
        void targetView.offsetWidth;
        targetView.classList.add('active');
    }

    // Update nav
    navButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.view === viewId);
    });

    if (!preventScrollToTop) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (pushHistory) {
        history.pushState({ view: viewId }, '', '#' + viewId);
    }
}

// =========================================
// SCROLL-TRIGGERED CARD ANIMATIONS
// =========================================
function initCardAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Stagger animation based on position in grid
                const siblings = Array.from(entry.target.parentElement.children);
                const childIndex = siblings.indexOf(entry.target);

                entry.target.style.transitionDelay = `${childIndex * 0.08}s`;
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all animatable cards
    const animatableCards = document.querySelectorAll(
        '.faction-detail-card, .stat-card, .tip-card, .method-rank'
    );

    animatableCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(24px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Re-observe when views change (since hidden elements aren't observed properly)
    const navButtons = document.querySelectorAll('.nav-btn, .back-btn, .category-card[data-navigate]');
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            setTimeout(() => {
                const newCards = document.querySelectorAll(
                    '.view.active .faction-detail-card, .view.active .stat-card, .view.active .tip-card, .view.active .method-rank'
                );
                newCards.forEach(card => {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(24px)';
                    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    observer.observe(card);
                });
            }, 50);
        });
    });
}

// =========================================
// FACTION CLICK NAVIGATION & HIGHLIGHT
// =========================================
function initFactionNavigation() {
    const factionSelectors = [
        '.faction-chip[data-faction]',
        '.alliance-member[data-faction]',
        '.faction-link[data-faction]'
    ];
    
    const clickables = document.querySelectorAll(factionSelectors.join(', '));
    
    clickables.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation(); // Prevent card/bubble navigation
            
            const factionId = el.getAttribute('data-faction');
            if (factionId) {
                navigateToFaction(factionId);
            }
        });
    });
}

function navigateToFaction(factionId) {
    const card = document.getElementById(`faction-${factionId}`);
    if (!card) return;

    // Find which view it is in
    const view = card.closest('.view');
    if (!view) return;

    const viewId = view.id.replace('view-', '');

    // Switch view without scrolling to top
    switchToView(viewId, true);

    // Scroll to the card after a tiny timeout to allow tab-switch animation to begin
    setTimeout(() => {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Highlight animation
        card.classList.remove('highlight-active');
        void card.offsetWidth; // trigger reflow
        
        // Dynamically set signature color variables for the pulse
        const color = getComputedStyle(document.documentElement).getPropertyValue(`--${factionId}`).trim();
        if (color) {
            card.style.setProperty('--pulse-color', color);
            // Create a dim version (alpha 0.4)
            if (color.startsWith('#')) {
                const r = parseInt(color.slice(1, 3), 16);
                const g = parseInt(color.slice(3, 5), 16);
                const b = parseInt(color.slice(5, 7), 16);
                card.style.setProperty('--pulse-color-dim', `rgba(${r}, ${g}, ${b}, 0.4)`);
            } else {
                card.style.setProperty('--pulse-color-dim', `${color}66`);
            }
        }
        
        card.classList.add('highlight-active');
    }, 150);
}
