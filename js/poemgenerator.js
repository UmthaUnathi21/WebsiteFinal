// poemgenerator.js

const poems = [
    "What you see and what you hear depends a great deal on where you are standing. It also depends on what sort of person you are. - C.S. Lewis.",
    "If we find ourselves with a desire that nothing in this world can satisfy, the most probable explanation is that we were made for another world. - C.S. Lewis.",
    "A children's story that can only be enjoyed by children is not a good children's story in the slightest. - C.S. Lewis.",
    "Friendship is unnecessary, like philosophy, like art.... It has no survival value; rather it is one of those things which give value to survival. - C.S. Lewis.",
    "Pain insists upon being attended to. God whispers to us in our pleasures, speaks in our consciences, but shouts in our pains. It is his megaphone to rouse a deaf world. - C.S. Lewis.",
    "I bet if we dusted her heart for fingerprints, we’d only find yours. - Rudy Francisco",
    "I loved you the same way that I learned how to ride a bike: Scared… but reckless - Rudy Francisco",
    "The difference between a garden and a graveyard is only what you choose to put in the ground - Rudy Francisco", 
    "My hobbies include editing my life story, hiding behind metaphors And trying to convince my shadow that I’m someone worth following - Rudy Francisco",
    "Loving you was the last thing I felt really good at - Rudy Francisco",
    "Aren’t we all waiting to be read by someone, praying that they’ll tell us that we make sense? - Rudy Francisco",
    "You Either Die A Hero, Or You Live Long Enough To See Yourself Become The Villain - Harvey Dent",
    "Love Is The One Thing We're Capable Of Perceiving That Transcends Dimensions Of Time And Space - Amelia Brand",
    "Choice is an illusion created between those with power and those without - Morpheus", 
    "Whatever our souls are made of, his and mine are the same - Emily Bronte"

];

function generatePoem() {
    const randomIndex = Math.floor(Math.random() * poems.length);
    const poemDisplay = document.getElementById('poem-display');
    poemDisplay.textContent = poems[randomIndex];
}
