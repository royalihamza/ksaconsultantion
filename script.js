// Scope Toggle
const scopeToggle = document.getElementById('scopeToggle');
const scopeContent = document.getElementById('scopeContent');
const scopeChevron = document.getElementById('scopeChevron');

scopeToggle.addEventListener('click', () => {
    scopeContent.classList.toggle('expanded');
    scopeChevron.classList.toggle('rotate');
});

// Digital Guides - Buy Now
function handleBuyGuide(guideTitle) {
    alert(`Payment integration required for: ${guideTitle}\n\nThis would connect to a payment processor like Stripe or PayPal.`);
}

// Private Consultation Form
const showConsultationFormBtn = document.getElementById('showConsultationForm');
const consultationForm = document.getElementById('consultationForm');
const cancelConsultationFormBtn = document.getElementById('cancelConsultationForm');

showConsultationFormBtn.addEventListener('click', () => {
    showConsultationFormBtn.style.display = 'none';
    consultationForm.style.display = 'block';
});

cancelConsultationFormBtn.addEventListener('click', () => {
    consultationForm.style.display = 'none';
    showConsultationFormBtn.style.display = 'block';
    consultationForm.reset();
});

consultationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = {
        name: document.getElementById('consultName').value,
        email: document.getElementById('consultEmail').value,
        phone: document.getElementById('consultPhone').value,
        domain: document.getElementById('consultDomain').value,
        location: document.getElementById('consultLocation').value,
        description: document.getElementById('consultDescription').value
    };
    
    alert('Booking form submitted!\n\nIn a production environment, this would:\n- Process payment\n- Send confirmation email\n- Create calendar invite\n\nForm data: ' + JSON.stringify(formData, null, 2));
    
    consultationForm.style.display = 'none';
    showConsultationFormBtn.style.display = 'block';
    consultationForm.reset();
});

// Group Consultations Waitlist
const waitlistForm = document.getElementById('waitlistForm');
const waitlistSuccess = document.getElementById('waitlistSuccess');

waitlistForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('waitlistEmail').value;
    
    alert(`Waitlist signup successful!\n\nEmail: ${email}\n\nYou'll be notified when group consultations are available.`);
    
    waitlistForm.style.display = 'none';
    waitlistSuccess.style.display = 'block';
    
    setTimeout(() => {
        waitlistForm.style.display = 'flex';
        waitlistSuccess.style.display = 'none';
        waitlistForm.reset();
    }, 3000);
});

// Professional Services Form
const showServicesFormBtn = document.getElementById('showServicesForm');
const servicesForm = document.getElementById('servicesForm');
const cancelServicesFormBtn = document.getElementById('cancelServicesForm');

showServicesFormBtn.addEventListener('click', () => {
    showServicesFormBtn.style.display = 'none';
    servicesForm.style.display = 'block';
});

cancelServicesFormBtn.addEventListener('click', () => {
    servicesForm.style.display = 'none';
    showServicesFormBtn.style.display = 'block';
    servicesForm.reset();
});

servicesForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = {
        name: document.getElementById('serviceName').value,
        email: document.getElementById('serviceEmail').value,
        phone: document.getElementById('servicePhone').value,
        serviceType: document.getElementById('serviceType').value,
        description: document.getElementById('serviceDescription').value,
        timeline: document.getElementById('serviceTimeline').value
    };
    
    alert('Custom quote request submitted!\n\nWe will review your request and get back to you within 48 hours.\n\nRequest details: ' + JSON.stringify(formData, null, 2));
    
    servicesForm.style.display = 'none';
    showServicesFormBtn.style.display = 'block';
    servicesForm.reset();
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon');
    
    question.addEventListener('click', () => {
        // Close other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.querySelector('.faq-answer').classList.remove('expanded');
                otherItem.querySelector('.faq-icon').classList.remove('rotate');
            }
        });
        
        // Toggle current item
        answer.classList.toggle('expanded');
        icon.classList.toggle('rotate');
    });
});

// Email Popup
const emailPopup = document.getElementById('emailPopup');
const closePopupBtn = document.getElementById('closePopup');
const emailCaptureForm = document.getElementById('emailCaptureForm');
const emailSuccess = document.getElementById('emailSuccess');

let popupShown = false;

// Show popup after 10 seconds
setTimeout(() => {
    if (!popupShown) {
        emailPopup.classList.add('active');
        popupShown = true;
    }
}, 10000);

// Exit intent detection
document.addEventListener('mouseleave', (e) => {
    if (e.clientY <= 0 && !popupShown) {
        emailPopup.classList.add('active');
        popupShown = true;
    }
});

// Close popup
closePopupBtn.addEventListener('click', () => {
    emailPopup.classList.remove('active');
});

// Close popup when clicking outside
emailPopup.addEventListener('click', (e) => {
    if (e.target === emailPopup) {
        emailPopup.classList.remove('active');
    }
});

// Email capture form submission
emailCaptureForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('popupEmail').value;
    
    alert(`Email captured: ${email}\n\nIn production, this would be saved to your email marketing system.`);
    
    emailCaptureForm.style.display = 'none';
    emailSuccess.style.display = 'block';
    
    setTimeout(() => {
        emailPopup.classList.remove('active');
        emailCaptureForm.style.display = 'block';
        emailSuccess.style.display = 'none';
        emailCaptureForm.reset();
    }, 2000);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
