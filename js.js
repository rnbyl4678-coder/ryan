 
 const { useState, useEffect, useRef } = React;
const sunIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.106a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM21.75 12h-2.25a.75.75 0 000 1.5h2.25a.75.75 0 000-1.5zM18.894 17.894a.75.75 0 00-1.061 1.06l1.591 1.591a.75.75 0 001.06-1.06l-1.59-1.591zM12 18.75a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zM4.21 17.894l1.591 1.591a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06zM3 12a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H3.75A.75.75 0 013 12zM6.106 6.106a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59z" /></svg>;
const moonIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9.593 4.167a.75.75 0 01-.75-.75 5.5 5.5 0 1110.05 4.673.75.75 0 01-.703.187.75.75 0 01-.486-.884A4 4 0 0011.851 6.34a.75.75 0 01-.643-1.488zm.56 12.186a.75.75 0 01.486.884A5.5 5.5 0 014.12 9.297a.75.75 0 01.75-.75.75.75 0 01.75.75 4 4 0 007.36 1.838.75.75 0 01.884.486z" /></svg>;
const backToTopIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4.5l-7.5 7.5h4.5v7.5h6v-7.5h4.5l-7.5-7.5z" /></svg>;
const hamburgerIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" /></svg>;
const closeIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" /></svg>;
const downloadIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v11.69l3.24-3.24a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.24 3.24V3a.75.75 0 01.75-.75zM6 17.25a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5v-2.25a.75.75 0 011.5 0v2.25a3 3 0 01-3 3h-6a3 3 0 01-3-3v-2.25a.75.75 0 01.75-.75z" clipRule="evenodd" /></svg>;

function Header({ data, isArabic }) {
    return (
        <header className={isArabic ? 'arabic' : 'english'}>
            <img src="./profile.jpg" alt="Ryan Nabil" className="profile-image" />
            <div className="header-info">
                <h1>{data.name}</h1>
                <p>{data.jobTitle}</p>
                <div className="contact-info">
                    <span><i className="fa-solid fa-envelope"></i> {data.email}</span>
                    <span><i className="fa-solid fa-phone"></i> {data.phone}</span>
                    <span><i className="fa-solid fa-map-location-dot"></i> {data.location}</span>
                    <span><i className="fa-solid fa-calendar-days"></i> {data.birthDate} ({data.age} {data.ageUnit})</span>
                </div>
                <div className="social-links">
                    <a href={data.github} target="_blank" rel="noopener noreferrer" title="GitHub"><i className="fab fa-github"></i></a>
                    <a href={data.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn"><i className="fab fa-linkedin"></i></a>
                </div>
            </div>
        </header>
    );
}

function Section({ title, children, iconClass, id }) {
    return (
        <section id={id}>
            <h2 className="section-title-wrapper">
                <i className={`fas ${iconClass}`}></i>
                <span>{title}</span>
            </h2>
            {children}
        </section>
    );
}

function AboutMe({ bio }) {
    return <p className="bio-text">{bio}</p>;
}

function Experience({ experienceList }) {
    return (
        experienceList.map((job, index) => (
            <div key={index} className="job-card">
                <h3>{job.title} <span className="job-company">at {job.company}</span></h3>
                <p className="job-dates">{job.dates}</p>
                {job.responsibilities && (
                    <ul className="job-responsibilities">
                        {job.responsibilities.map((resp, i) => (
                            <li key={i}><i className="fas fa-check-circle"></i>{resp}</li>
                        ))}
                    </ul>
                )}
            </div>
        ))
    );
}

function Education({ educationList }) {
    return (
        educationList.map((edu, index) => (
            <div key={index} className="edu-card">
                <h3>{edu.degree}</h3>
                <p>{edu.university}, {edu.dates}</p>
            </div>
        ))
    );
}

function Skills({ skillsList }) {
    return (
        <div className="skills-grid">
            {skillsList.map((skill, index) => (
                <div key={index} className="skill-item">
                    <div className="skill-header">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                    </div>
                </div>
            ))}
        </div>
    );
}

function Certificates({ certList, onOpenModal }) {
    return (
        <ul className="certs-list">
            {certList.map((cert, index) => (
                <li key={index} onClick={() => onOpenModal(cert)}>
                    <i className="fas fa-award"></i>
                    <strong>{cert.name}</strong> - {cert.organization} ({cert.year})
                </li>
            ))}
        </ul>
    );
}

function Projects({ projectsList, onOpenModal }) {
    return (
        <div className="projects-grid">
            {projectsList.map((project, index) => (
                <div key={index} className="project-card" onClick={() => onOpenModal(project)}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tags">
                        {project.technologies.map((tech, i) => (
                            <span key={i}>{tech}</span>
                        ))}
                    </div>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                        View Project <i className="fas fa-arrow-right"></i>
                    </a>
                </div>
            ))}
        </div>
    );
}

function Modal({ item, onClose, isArabic, type }) {
    if (!item) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose}>&times;</button>
                {type === 'project' && (
                    <>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <div className="tags">
                            {item.technologies.map((tech, i) => (
                                <span key={i}>{tech}</span>
                            ))}
                        </div>
                        {item.link && <a href={item.link} target="_blank" rel="noopener noreferrer" className="modal-link">{isArabic ? 'عرض المشروع' : 'View Project'}</a>}
                    </>
                )}
                {type === 'certificate' && (
                    <>
                        <h2>{item.name}</h2>
                        <p><strong>{isArabic ? 'الجهة المانحة:' : 'Organization:'}</strong> {item.organization}</p>
                        <p><strong>{isArabic ? 'سنة الإصدار:' : 'Year of Issue:'}</strong> {item.year}</p>
                        {item.link && <a href={item.link} target="_blank" rel="noopener noreferrer" className="modal-link">{isArabic ? 'عرض الشهادة' : 'View Certificate'}</a>}
                    </>
                )}
            </div>
        </div>
    );
}

function Navbar({ sections, isArabic, toggleLang, toggleDarkMode, isDarkMode, activeSection, onDownloadPdf }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const getSectionTitle = (id) => {
        switch(id) {
            case 'about': return isArabic ? 'النبذة الشخصية' : 'About Me';
            case 'education': return isArabic ? 'التعليم' : 'Education';
            case 'experience': return isArabic ? 'الخبرة' : 'Experience';
            case 'skills': return isArabic ? 'المهارات' : 'Skills';
            case 'certificates': return isArabic ? 'الشهادات' : 'Certificates';
            case 'projects': return isArabic ? 'المشاريع' : 'Projects';
            default: return '';
        }
    };
    const handleNavLinkClick = (e) => {
        setIsMenuOpen(false);
    };
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <button className="navbar-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? closeIcon : hamburgerIcon}
                </button>
                <ul className={`navbar-nav ${isMenuOpen ? 'is-open' : ''}`}>
                    {sections.map(section => (
                        <li key={section} onClick={handleNavLinkClick}>
                            <a href={`#${section}`} className={`nav-link ${activeSection === section ? 'active' : ''}`}>{getSectionTitle(section)}</a>
                        </li>
                    ))}
                </ul>
                <div className="utility-buttons">
                    <button onClick={onDownloadPdf} className="pdf-download-btn" title={isArabic ? 'تحميل كـ PDF' : 'Download as PDF'}>
                        {downloadIcon}
                    </button>
                    <button onClick={toggleDarkMode} className="mode-toggle" title={isDarkMode ? 'Light Mode' : 'Dark Mode'}>
                        {isDarkMode ? sunIcon : moonIcon}
                    </button>
                    <button onClick={toggleLang} className="lang-toggle">
                        {isArabic ? 'English' : 'العربية'}
                    </button>
                </div>
            </div>
        </nav>
    );
}

function App() {
    const [lang, setLang] = useState('ar');
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [modalItem, setModalItem] = useState(null);
    const [modalType, setModalType] = useState(null);
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [activeSection, setActiveSection] = useState('about');
    const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

    const contentRef = useRef(null);

    const resumeData = {
        en: {
            header: {
                name: 'Ryan Nabil Salem Rafeh',
                jobTitle: 'Information Technology Student & Frontend Developer',
                email: 'your.email@example.com',
                phone: '+967 77x xxx xxx',
                location: 'Jeddah, Al-Ruwais District, KSA (Original Residence)',
                birthDate: '2004',
                age: '21',
                ageUnit: 'years old',
                github: 'https://github.com/your-github-profile',
                linkedin: 'https://linkedin.com/in/your-linkedin-profile'
            },
            aboutMe: 'A second-year Information Technology student at Al-Hikmah University. My practical experience includes roles in car mechanics, e-commerce, and data entry. I am passionate about **frontend web development** and specialize in building user-centric, responsive interfaces using modern web technologies.',
            experienceTitle: 'Professional Experience',
            experience: [
                {
                    title: 'Car Mechanic',
                    company: 'Self-Employed',
                    dates: 'Previous Experience',
                    responsibilities: ['Provided comprehensive vehicle maintenance and repair services.', 'Diagnosed and troubledshoot a wide range of vehicle issues.']
                },
                {
                    title: 'Online Store Owner',
                    company: 'E-commerce',
                    dates: 'Previous Experience',
                    responsibilities: ['Managed and operated an online retail store.', 'Handled product listings, customer service, and order fulfillment efficiently.']
                },
                {
                    title: 'Data Entry Clerk',
                    company: 'Various Companies',
                    dates: 'Previous Experience',
                    responsibilities: ['Executed data entry tasks with a high degree of accuracy and attention to detail.', 'Organized and managed digital information systems.']
                }
            ],
            educationTitle: 'Education',
            education: [
                { degree: 'Bachelor of Information Technology (2nd Year)', university: 'Al-Hikmah University', dates: '2023 - Present' }
            ],
            skillsTitle: 'Skills',
            skills: [
                { name: 'HTML5', level: 90 },
                { name: 'CSS3', level: 85 },
                { name: 'JavaScript', level: 80 },
                { name: 'Local Storage', level: 75 },
                { name: 'UI/UX Design', level: 70 },
                { name: 'Problem-Solving', level: 85 },
            ],
            certificatesTitle: 'Certifications & Courses',
            certificates: [
                { name: 'Frontend Development', organization: 'Codecademy', year: 2024, link: '#' },
                { name: 'JavaScript Algorithms', organization: 'freeCodeCamp', year: 2024, link: '#' },
            ],
            projectsTitle: 'Portfolio',
            projects: [
                {
                    title: 'Flight Booking Interface',
                    description: 'A dynamic web interface for flight search and booking. This project demonstrates proficiency in client-side development by utilizing **Local Storage** to persist booking details without a backend server.',
                    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage'],
                    link: '#'
                },
                {
                    title: 'Simple Accounting System',
                    description: 'A web-based accounting system for managing expenses and income. The system uses **Local Storage** to securely store financial data, highlighting skills in data-driven interfaces and client-side logic.',
                    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage'],
                    link: '#'
                },
                {
                    title: 'Interactive Calculator',
                    description: 'A responsive web application that handles basic arithmetic operations. Developed to showcase my ability in DOM manipulation and event handling.',
                    technologies: ['HTML5', 'CSS3', 'JavaScript'],
                    link: '#'
                }
            ]
        },
        ar: {
            header: {
                name: 'ريان نبيل سالم رافع',
                jobTitle: 'طالب تقنية معلومات ومطور واجهات أمامية',
                email: 'your.email@example.com',
                phone: '+967 77x xxx xxx',
                location: 'جدة، حي الرويس، المملكة العربية السعودية (محل الإقامة الأصلي)',
                birthDate: '2004',
                age: '21',
                ageUnit: 'سنة',
                github: 'https://github.com/your-github-profile',
                linkedin: 'https://linkedin.com/in/your-linkedin-profile'
            },
            aboutMe: 'طالب في السنة الثانية تخصص **تقنية المعلومات** بجامعة الحكمة. لدي خبرة عملية متنوعة في صيانة المركبات، وإدارة المتاجر الإلكترونية، وإدخال البيانات. لدي شغف بتطوير **الواجهات الأمامية للويب** وأتخصص في بناء واجهات مستخدم تفاعلية وجذابة باستخدام أحدث تقنيات الويب.',
            experienceTitle: 'الخبرة المهنية',
            experience: [
                {
                    title: 'ميكانيكي سيارات',
                    company: 'عمل حر',
                    dates: 'خبرة سابقة',
                    responsibilities: ['تقديم خدمات صيانة وإصلاح شاملة للمركبات.', 'تشخيص ومعالجة مجموعة واسعة من الأعطال الفنية.']
                },
                {
                    title: 'صاحب متجر إلكتروني',
                    company: 'تجارة إلكترونية',
                    dates: 'خبرة سابقة',
                    responsibilities: ['إدارة وتشغيل متجر إلكتروني للبيع بالتجزئة.', 'التعامل مع قوائم المنتجات، وتقديم خدمة العملاء، وتنفيذ الطلبات بكفاءة.']
                },
                {
                    title: 'مدخل بيانات',
                    company: 'شركات متعددة',
                    dates: 'خبرة سابقة',
                    responsibilities: ['القيام بمهام إدخال البيانات بدقة عالية واهتمام بالتفاصيل.', 'إدارة وتنظيم أنظمة المعلومات الرقمية.']
                }
            ],
            educationTitle: 'التعليم',
            education: [
                { degree: 'بكالوريوس في تقنية المعلومات (السنة الثانية)', university: 'جامعة الحكمة', dates: '2023 - حتى الآن' }
            ],
            skillsTitle: 'المهارات',
            skills: [
                { name: 'HTML5', level: 90 },
                { name: 'CSS3', level: 85 },
                { name: 'جافا سكريبت', level: 80 },
                { name: 'التخزين المحلي', level: 75 },
                { name: 'تصميم واجهة المستخدم وتجربة المستخدم', level: 70 },
                { name: 'حل المشكلات', level: 85 },
            ],
            certificatesTitle: 'الشهادات والدورات',
            certificates: [
                { name: 'تطوير الواجهات الأمامية', organization: 'Codecademy', year: 2024, link: '#' },
                { name: 'خوارزميات جافا سكريبت', organization: 'freeCodeCamp', year: 2024, link: '#' },
            ],
            projectsTitle: 'المشاريع',
            projects: [
                {
                    title: 'واجهة حجز الرحلات',
                    description: 'واجهة ويب تفاعلية للبحث عن الرحلات وحجزها. يوضح هذا المشروع كفاءتي في تطوير الواجهات الأمامية من خلال استخدام **التخزين المحلي للمتصفح** لضمان استمرارية بيانات الحجز دون الحاجة إلى خادم.',
                    technologies: ['HTML5', 'CSS3', 'جافا سكريبت', 'التخزين المحلي'],
                    link: '#'
                },
                {
                    title: 'نظام محاسبي بسيط',
                    description: 'نظام محاسبي قائم على الويب لإدارة المصروفات والإيرادات. يستخدم النظام **التخزين المحلي للمتصفح** لحفظ البيانات المالية بشكل آمن، مما يسلط الضوء على قدراتي في بناء واجهات تعتمد على البيانات ومنطق العميل.',
                    technologies: ['HTML5', 'CSS3', 'جافا سكريبت', 'التخزين المحلي'],
                    link: '#'
                },
                {
                    title: 'آلة حاسبة تفاعلية',
                    description: 'تطبيق ويب متجاوب للقيام بالعمليات الحسابية الأساسية. تم تطويره لإظهار قدرتي على التعامل مع DOM وإدارة الأحداث.',
                    technologies: ['HTML5', 'CSS3', 'جافا سكريبت'],
                    link: '#'
                }
            ]
        }
    };

    const currentData = resumeData[lang];
    const isArabic = lang === 'ar';
    const sections = ['about', 'education', 'experience', 'skills', 'certificates', 'projects'];

    const openModal = (item, type) => {
        setModalItem(item);
        setModalType(type);
        document.body.classList.add('modal-open');
    };

    const closeModal = () => {
        setModalItem(null);
        setModalType(null);
        document.body.classList.remove('modal-open');
    };

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setShowBackToTop(true);
        } else {
            setShowBackToTop(false);
        }

        const currentScrollY = window.scrollY + 100;
        let newActiveSection = 'about';

        sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) {
                if (currentScrollY >= section.offsetTop && currentScrollY < section.offsetTop + section.offsetHeight) {
                    newActiveSection = sectionId;
                }
            }
        });
        setActiveSection(newActiveSection);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleDownloadPdf = () => {
        document.body.classList.add('pdf-generating');
        setIsGeneratingPdf(true);

        const fileName = `Ryan_Rafeh_CV_${isArabic ? 'Arabic' : 'English'}.pdf`;

        setTimeout(() => {
            const input = contentRef.current;
            html2canvas(input, {
                scale: 2,
                useCORS: true,
                backgroundColor: '#1a1a1a'
            }).then((canvas) => {
                const imgData = canvas.toDataURL('image/jpeg', 1.0);
                const pdf = new jspdf.jsPDF({
                    orientation: 'p',
                    unit: 'mm',
                    format: 'a4'
                });
                const imgProps = pdf.getImageProperties(imgData);
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
                pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
                pdf.save(fileName);

                document.body.classList.remove('pdf-generating');
                setIsGeneratingPdf(false);
            });
        }, 100);
    };

    useEffect(() => {
        document.body.dir = isArabic ? 'rtl' : 'ltr';
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isArabic, isDarkMode]);

    const toggleLang = () => {
        setLang(isArabic ? 'en' : 'ar');
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div>
            <Navbar
                sections={sections}
                isArabic={isArabic}
                toggleLang={toggleLang}
                toggleDarkMode={toggleDarkMode}
                isDarkMode={isDarkMode}
                activeSection={activeSection}
                onDownloadPdf={handleDownloadPdf}
            />

            <div ref={contentRef} className="pdf-content-wrapper">
                <Header data={currentData.header} isArabic={isArabic} />
                <Section id="about" title={isArabic ? 'النبذة الشخصية' : 'About Me'} iconClass="fa-user-circle">
                    <AboutMe bio={currentData.aboutMe} />
                </Section>

                <Section id="education" title={currentData.educationTitle} iconClass="fa-graduation-cap">
                    <Education educationList={currentData.education} />
                </Section>

                <Section id="experience" title={currentData.experienceTitle} iconClass="fa-briefcase">
                    <Experience experienceList={currentData.experience} />
                </Section>

                <Section id="skills" title={currentData.skillsTitle} iconClass="fa-star">
                    <Skills skillsList={currentData.skills} />
                </Section>

                <Section id="certificates" title={currentData.certificatesTitle} iconClass="fa-award">
                    <Certificates certList={currentData.certificates} onOpenModal={(cert) => openModal(cert, 'certificate')} />
                </Section>

                {currentData.projects.length > 0 && (
                    <Section id="projects" title={currentData.projectsTitle} iconClass="fa-laptop-code">
                        <Projects projectsList={currentData.projects} onOpenModal={(project) => openModal(project, 'project')} />
                    </Section>
                )}
            </div>

            <Modal item={modalItem} onClose={closeModal} isArabic={isArabic} type={modalType} />

            {showBackToTop && (
                <button className="back-to-top" onClick={scrollToTop}>
                    {backToTopIcon}
                </button>
            )}
            {isGeneratingPdf && (
                <div className="pdf-notification">
                    <div className="pdf-loader"></div>
                    {isArabic ? 'يتم الآن تجهيز السيرة الذاتية...' : 'Preparing your CV...'}
                </div>
            )}
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));