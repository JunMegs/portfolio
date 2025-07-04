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

        fetch('./src/components/email-form.html')
        .then(res => res.text())
        .then(html => {
                document.getElementById('email-form').innerHTML = html;
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

        if (window.mySkillsData && window.mySkillsData.skills) {
                const skillsSection = document.getElementById('skills-section');
                if (skillsSection) {
                        skillsSection.innerHTML = window.mySkillsData.skills.map(skill => `
                                <div class="skills-item">
                                        <div class="skills1">
                                                <div class="skills-icon1">
                                                        ${skill.icon1}
                                                        <h2>${skill.header1}</h2>
                                                </div>
                                                <ul class="skills-list1">
                                                        ${skill.skills1.map(s => `<li>${s}</li>`).join('')}
                                                </ul>
                                        </div>
                                        <div class="skills2">
                                                <div class="skills-icon2">
                                                        ${skill.icon2}
                                                        <h2>${skill.header2}</h2>
                                                </div>
                                                <ul class="skills-list2">
                                                        ${skill.skills2.map(s => `<li>${s}</li>`).join('')}
                                                </ul>
                                        </div>
                                        <div class="skills3">
                                                <div class="skills-icon3">
                                                        ${skill.icon3}
                                                        <h2>${skill.header3}</h2>
                                                </div>
                                                <ul class="skills-list3">
                                                        ${skill.skills3.map(s => `<li>${s}</li>`).join('')}
                                                </ul>
                                        </div>                                     
                                </div>
                        `).join('');
                }
        }

        if (window.myContactData && window.myContactData.contact) {
                const contactSection = document.getElementById('contactme');
                if (contactSection) {
                        contactSection.innerHTML = window.myContactData.contact.map(contact => `
                                <div class="contact-item">
                                        <div class="contact-icon1">
                                                ${contact['phone-icon']}
                                                <span>${contact.number}</span>
                                        </div>
                                        <div class="contact-icon2">
                                                ${contact['email-icon']}
                                                <span>${contact.email}</span>
                                        </div>
                                        <div class="contact-icon3">
                                                ${contact['address-icon']}
                                                <span>${contact.address}</span>
                                        </div>
                                </div>
                        `).join('');
                }
        }

        window.addEventListener('scroll', () => {
                const navigation = document.getElementById('navigation');
                if (window.scrollY > 50) {
                        navigation.classList.add('scrolled');
                }else {
                        navigation.classList.remove('scrolled');
                }
        });

});