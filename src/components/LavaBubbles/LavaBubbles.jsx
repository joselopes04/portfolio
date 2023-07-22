import React, { useEffect, useRef, useState } from 'react';
function LavaBubbles() {
    const circle1Ref = useRef();
    const circle2Ref = useRef();
    const circle3Ref = useRef();
    const circle4Ref = useRef();
    const circle5Ref = useRef();

    const [circles, setCircles] = useState({
        circle1: { x: 400, y: 200, xSpeed: 0.2, ySpeed: 0.34, radius: Math.random() * 200},
        circle2: { x: 600, y: 400, xSpeed: -0.5, ySpeed: 0.5, radius: Math.random() * 200},
        circle3: { x: 800, y: 600, xSpeed: 0.3, ySpeed: 0.6, radius: Math.random() * 200},
        circle4: { x: 1000, y: 500, xSpeed: -0.1, ySpeed: 0.6, radius: Math.random() * 200},
        circle5: { x: 900, y: 300, xSpeed: -0.2, ySpeed: 0.3, radius: Math.random() * 200},
    });

    const bounds = {
        minX: -150,
        minY: -150,
        maxX: window.innerWidth + 100,
        maxY: window.innerHeight + 100,
    };

    useEffect(() => {
        const interval = setInterval(() => {
            updateCircles();
        }, 10);

        return () => clearInterval(interval);
    }, []);

    const updateCircles = () => {
        setCircles((prevCircles) => {
            const updatedCircles = { ...prevCircles };
            Object.keys(updatedCircles).forEach((circleKey) => {
                const circle = updatedCircles[circleKey];
                circle.x += circle.xSpeed;
                circle.y += circle.ySpeed;

                if (circle.x < bounds.minX) {
                    circle.x = bounds.minX + Math.random() * 10;
                    circle.xSpeed = Math.abs(circle.xSpeed);
                } else if (circle.x > bounds.maxX) {
                    circle.x = bounds.maxX - Math.random() * 10;
                    circle.xSpeed = -Math.abs(circle.xSpeed);
                }

                if (circle.y < bounds.minY) {
                    circle.y = bounds.minY + Math.random() * 10;
                    circle.ySpeed = Math.abs(circle.ySpeed);
                } else if (circle.y > bounds.maxY) {
                    circle.y = bounds.maxY - Math.random() * 10;
                    circle.ySpeed = -Math.abs(circle.ySpeed);
                }
            });

            return updatedCircles;
        });
    };

    return (

        <div id="app">
            <div className="metaballs">
                <svg className="metasvg">
                    <defs>
                        <filter id="gooify" width="400%" x="-10%" height="400%" y="-150%">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 25 -10" />
                        </filter>

                        <linearGradient id="lavaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#0011ff" />
                            <stop offset="100%" stopColor="#0ca6ee" />
                        </linearGradient>
                    </defs>

                    <g filter="url(#gooify)">
                        <circle
                            className="blobb glow"
                            fill="url(#lavaGradient)"
                            ref={circle1Ref}
                            cx={circles.circle1.x}
                            cy={circles.circle1.y}
                            r={circles.circle1.radius}
                        />
                        <circle
                            className="blobb glow"
                            fill="url(#lavaGradient)"
                            ref={circle2Ref}
                            cx={circles.circle2.x}
                            cy={circles.circle2.y}
                            r={circles.circle2.radius}
                        />
                        <circle
                            className="blobb glow"
                            fill="url(#lavaGradient)"
                            ref={circle3Ref}
                            cx={circles.circle3.x}
                            cy={circles.circle3.y}
                            r={circles.circle3.radius}
                        />
                        <circle
                            className="blobb glow"
                            fill="url(#lavaGradient)"
                            ref={circle4Ref}
                            cx={circles.circle4.x}
                            cy={circles.circle4.y}
                            r={circles.circle4.radius}
                        />
                        <circle
                            className="blobb glow"
                            fill="url(#lavaGradient)"
                            ref={circle5Ref}
                            cx={circles.circle5.x}
                            cy={circles.circle5.y}
                            r={circles.circle5.radius}
                        />
                    </g>
                </svg>
            </div>
        </div>
    );
}
export default LavaBubbles;