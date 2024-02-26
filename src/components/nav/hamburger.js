const click = 'click';
const orangeBorder = 'orange-border';
const navGlow = 'nav-glow';
const hamburger = 'hamburger';
const navLinks = 'nav-links';
const mobileNavVisible = 'mobile-nav-visible';
const navLinksClasses = document.querySelector('.' + navLinks).classList;

document.querySelector('.' + hamburger).addEventListener(click, () => {
    navLinksClasses.toggle(mobileNavVisible);
    navLinksClasses.toggle(orangeBorder);
    navLinksClasses.toggle(navGlow);
});

document.body.addEventListener(click, (event) => {
    handleHideNavMenu(event);
});

function handleHideNavMenu(event) {
    const isMobileNavVisible = navLinksClasses.contains(mobileNavVisible);
    const clickedHamburger = composedPathHasClass(event, hamburger);
    const clickedNavLinks = composedPathHasClass(event, navLinks);

    if (!isMobileNavVisible || clickedHamburger || clickedNavLinks) {
        return;
    }

    navLinksClasses.remove(mobileNavVisible);
    navLinksClasses.remove(orangeBorder);
    navLinksClasses.remove(navGlow);
}

function composedPathHasClass(event, className){
    return event.composedPath().some(
        (pathEvent) => pathEvent.classList && pathEvent.classList.contains(className)
    );
}
