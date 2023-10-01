import React, { useEffect, useState } from 'react';

const ConsoleAnimation = ({ words, classes }) => {
    const [letterCount, setLetterCount] = useState(0);
    const [deleting, setDeleting] = useState(false);
    const [currentWord, setCurrentWord] = useState("");
    const [index, setIndex] = useState(0);
    const [virgin, setVirgin] = useState(true);
    const [blinkVisible, setBlinkVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setLetterCount(prevLetterCount => {
                if (prevLetterCount === 0) {//Choose new word
                    setDeleting(false);
                    if (virgin === true) {
                        setIndex(prevIndex => prevIndex);
                        setVirgin(false);
                    } else { //Correct bigs with the states
                        setIndex(prevIndex => (prevIndex + 1) % words.length);
                    }
                    return 1;
                } else if (prevLetterCount === currentWord.length + 1 || deleting === true) {
                    setDeleting(true);
                    return prevLetterCount - 1; //Delete letters
                } else if (!deleting) {
                    return prevLetterCount + 1; //Delete letters
                }
                return prevLetterCount;
            });
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, [letterCount, deleting, currentWord, words]);

    useEffect(() => {
        setCurrentWord(words[index]);
    }, [index]);

    useEffect(() => { //Blink the underscore
        const blinkInterval = setInterval(() => {
            setBlinkVisible(prevVisible => !prevVisible);
        }, 400);

        return () => {
            clearInterval(blinkInterval);
        };
    }, []);

    return (
        <div className='flex console-container'>
            <span id='text' className={classes}>
                {currentWord.substring(0, letterCount)}
            </span>
            <div className={classes}>
                {blinkVisible && <span>&#95;</span>}
            </div>
        </div>
    );
};

export default ConsoleAnimation;
