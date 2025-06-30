fetch('./src/components/navigation-bat.html')
        .then(res => res.text())
        .then(html => {
        document.getElementById('navbar').innerHTML = html;
        });