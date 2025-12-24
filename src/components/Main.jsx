import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap'; 
import '../styles/Main.css';
import '../styles/Effects.css'; 

const Main = () => {
    const sectionRef = useRef(null);

    function initWillemLoadingAnimation() {
        const container = document.querySelector(".willem-header");
        const loadingLetter = container.querySelectorAll(".willem__letter");
        const box = container.querySelectorAll(".willem-loader__box");
        const growingImage = container.querySelectorAll(".willem__growing-image");
        const headingStart = container.querySelectorAll(".willem__h1-start");
        const headingEnd = container.querySelectorAll(".willem__h1-end");
        const coverImageExtra = container.querySelectorAll(".willem__cover-image-extra");
        const headerLetter = container.querySelectorAll(".willem__letter-white");
        const navLinks = container.querySelectorAll(".willen-nav a, .osmo-credits__p");
        // Seleciona o novo texto
        const architectureText = container.querySelector(".architecture-text");

        const tl = gsap.timeline({
            defaults: { ease: "expo.inOut" },
            onStart: () => {
                container.classList.remove('is--hidden');
            }
        });

        if (loadingLetter) {
            tl.from(loadingLetter, {
                yPercent: 100,
                stagger: 0.025,
                duration: 1.25
            });
        }

        if (box.length) {
            tl.fromTo(box, { width: "0em" }, { width: "1em", duration: 1.25 }, "< 1.25");
        }

        if (box.length) {
            tl.fromTo(growingImage, { width: "0%" }, { width: "100%", duration: 1.25 }, "<");
        }

        if (headingStart.length) {
            tl.fromTo(headingStart, { x: "0em" }, { x: "-0.05em", duration: 1.25 }, "<");
        }

        if (headingEnd.length) {
            tl.fromTo(headingEnd, { x: "0em" }, { x: "0.05em", duration: 1.25 }, "<");
        }

        if (coverImageExtra.length) {
            tl.fromTo(coverImageExtra, { opacity: 1 }, {
                opacity: 0,
                duration: 0.05,
                ease: "none",
                stagger: 0.5
            }, "-=0.05");
        }

        if (growingImage.length) {
            tl.to(growingImage, {
                width: "100vw",
                height: "100dvh",
                duration: 2
            }, "< 1.25");
        }

        if (box.length) {
            tl.to(box, { width: "110vw", duration: 2 }, "<");
        }

        if (headerLetter.length) {
            tl.from(headerLetter, {
                yPercent: 100,
                duration: 1.25,
                ease: "expo.out",
                stagger: 0.025
            }, "< 1.2");
        }

        // Faz o texto aparecer junto com a logo final HOUSES
        if (architectureText) {
            tl.fromTo(architectureText, 
                { opacity: 0, y: 10 }, 
                { opacity: 0.7, y: 0, duration: 1, ease: "power2.out" }, 
                "< 0.5" 
            );
        }

        if (navLinks.length) {
            tl.from(navLinks, {
                yPercent: 100,
                duration: 1.25,
                ease: "expo.out",
                stagger: 0.1
            }, "<");
        }
    }

    useEffect(() => {
        initWillemLoadingAnimation();
        
        const cursor = document.querySelector('.cursor');
        if (!cursor) return;

        const moveCursor = (e) => { 
            cursor.style.left = e.clientX + 'px'; 
            cursor.style.top = e.clientY + 'px'; 
        };
        
        document.addEventListener('mousemove', moveCursor);

        const texts = document.querySelectorAll('.willem__letter-white, .architecture-text'); 
        
        texts.forEach((el) => {
            el.addEventListener('mouseenter', () => cursor.classList.add('active'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
        });

        return () => {
            document.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    return (
        <>
            <section ref={sectionRef} className="willem-header is--loading is--hidden">
                <div className="cursor"></div>

                <div className="willem-loader">
                    <div className="willem__h1 willem__h1--loader">
                        <div className="willem__h1-start">
                            <span className="willem__letter">H</span>
                            <span className="willem__letter">O</span>
                            <span className="willem__letter">U</span>
                        </div>
                        <div className="willem-loader__box">
                            <div className="willem-loader__box-inner">
                                <div className="willem__growing-image">
                                    <div className="willem__growing-image-wrap">
                                        <img className="willem__cover-image-extra is--1" src="/imagens/background4.jpg" loading="lazy" alt="1" />
                                        <img className="willem__cover-image-extra is--2" src="/imagens/background2.jpg" loading="lazy" alt="2" />
                                        <img className="willem__cover-image-extra is--3" src="/imagens/background3.jpg" loading="lazy" alt="3" />
                                        <img className="willem__cover-image" src="/imagens/background1.jpg" loading="lazy" alt="Principal" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="willem__h1-end">
                            <span className="willem__letter">S</span>
                            <span className="willem__letter">E</span>
                            <span className="willem__letter">S</span>
                        </div>
                    </div>
                </div>

                <div className="willem-content-overlay">
                    <div className="willem-header__bottom">
                        <div className="logo-text-wrapper">
                            <div className="willem__h1 willem__h1--final">
                                <span className="willem__letter-white">HOUSES ©</span>
                            </div>
                          
                            <p className="architecture-text">
                            Acreditamos que a arquitetura transcende a construção física;
                            é a materialização de sonhos através de formas, luz e texturas. 
                            Cada projeto é uma busca constante pelo equilíbrio perfeito entre 
                            a funcionalidade contemporânea e a essência atemporal do design.
                            </p>
                        
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Main;