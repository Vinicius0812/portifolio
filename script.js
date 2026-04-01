const currentYear = document.querySelector("#current-year");
const revealItems = document.querySelectorAll(
    ".hero-copy, .hero-card, .content-block, .highlight-band article, .project-card, .timeline article, .pill-grid span, .contact-card"
);

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

if ("IntersectionObserver" in window && revealItems.length > 0) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            });
        },
        {
            threshold: 0.16,
            rootMargin: "0px 0px -40px 0px"
        }
    );

    revealItems.forEach((item, index) => {
        item.style.setProperty("--reveal-delay", `${Math.min(index * 70, 560)}ms`);
        item.classList.add("reveal");
        observer.observe(item);
    });
} else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
}