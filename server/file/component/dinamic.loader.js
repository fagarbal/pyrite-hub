const observer = new MutationObserver((mutations) => {
    const components = [];

    const componentNames = [...new Set(Array.from(
        mutations.map((m) => 
            Array.from(m.addedNodes)
            .filter((node) => node.nodeName.indexOf('-') >= 0))
            .filter((e) => e.length))
            .map((e) => e[0].nodeName.toLowerCase())
            .filter((e) => !customElements.get(e))
        )].join(',');


    if (componentNames) {
        const script = document.createElement('script');

        script.setAttribute('src', '{URL}/components/' + componentNames);

        document.head.appendChild(script);
    }
});

observer.observe(document, { childList: true, subtree: true });