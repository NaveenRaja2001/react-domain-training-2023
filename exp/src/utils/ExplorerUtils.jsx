import React from 'react'

export const formResultCard = (name = '', homeTown = '', destination = '') => {
    return (
        `Thank You ${name} for expressing your interest in travelling with us .Our Sales team will get back with the best packages from ${homeTown} to ${destination}.`
    )
}

export const toggleScrolling = (scroll = true) => {
    scroll ? document.body.style.overflowY = 'hidden' : document.body.style.overflowY = 'auto';
}


