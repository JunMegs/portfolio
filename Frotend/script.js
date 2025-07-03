document.addEventListener('DOMContentLoaded', () => {
        fetch('./src/components/navigation-bat.html')
        .then(res => res.text())
        .then(html => {
                document.getElementById('navbar').innerHTML = html;
        });

        fetch('./src/components/button.html')
        .then(res => res.text())
        .then(html => {
                document.getElementById('button').innerHTML = html;
        });

        if (window.myAboutData && window.myAboutData.about) {
        const aboutSection = document.getElementById('about-section');
                if (aboutSection) {
                aboutSection.innerHTML = window.myAboutData.about.map(about => `
                        <div class="about-item">
                        <p>${about.description1}</p>
                        <p>${about.description2}</p>
                        </div>
                `).join('');
                }
        }

        // Display education data
        if (window.myEducationData && window.myEducationData.education) {
                const educationSection = document.getElementById('education-section');
                if (educationSection) {educationSection.innerHTML = window.myEducationData.education.map(edu => `
                                <div class="education-item">
                                        <h2>${edu.header}</h2>
                                        <h4>${edu.degree}</h4>
                                        <p>${edu.institution}</p>
                                        <p><em>${edu.year}</em></p>
                                        <p>Relevant Courseworks: ${edu.relevant_coursework}</p>
                                </div>
                        `).join('');
                }
        }

        if (window.myStrength && window.myStrength.strengths) {
                const strengthsSection = document.getElementById('strengths-section');
                if (strengthsSection) {
                        strengthsSection.innerHTML = window.myStrength.strengths.map(strength => `
                                <div class="strength-item">
                                        <h2>${strength.header}</h2>
                                        <ul>
                                                ${strength.skills.map(skill => `<li>${skill}</li>`).join('')}
                                        </ul>
                                </div>
                        `).join('');
                }
        }
});