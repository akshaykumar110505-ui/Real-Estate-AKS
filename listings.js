const cards = document.querySelectorAll('.property-card');

const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

cards.forEach(card => obs.observe(card));

function change()
{
    window.location.href="property.html";
}

function change1()
{
    window.location.href="property1.html";
}

function change2()
{
    window.location.href="property2.html";
}

function change3()
{
    window.location.href="property3.html";
}