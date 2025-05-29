const tooltipPrompts = [
  "Escape pending...",
  "Craving chaos?",
  "Control is overrated.",
  "Productivity dies here.",
  "Another hit won’t hurt.",
  "You were so focused.",
  "Hope you weren't busy.",
  "Congrats, you lost.",
  "Add it to the graveyard (tabs).",
  "One more won't ruin you. Right?",
  "Rabbit hole?",
  "Sure about this?",
  "Pause first.",
  "Think again.",
  "Worth it?",
  "Ready to spiral?",
  "Just one click…",
  "Deep dive?",
  "Click. Regret?",
  "Still curious?",
  "Oh look, more distraction.",
  "Another tab for the collection.",
  "This’ll definitely change your life.",
  "Just wasting time again?",
  "Spoiler: it's not urgent.",
  "Nice. Another dopamine drip.",
  "Your focus had a good run.",
  "Great choice, time well wasted.",
  "Totally worth it. Probably.",
  "You know you’ll regret this.",
  "This is how it starts.",
  "Tab 87, let’s go!",
  "Where attention spans go to die.",
  "You know better.",
  "This is fine.",
  "Time is fake anyway.",
  "Click now, cry later.",
  "Just a quick peek, right?",
  "Sure, why not?",
  "Focus is a myth.",
  "Oh good, a detour.",
  "Let's ruin your flow.",
  "You won't regret this — until you do.",
  "Digital quicksand awaits.",
  "Go ahead, feed the urge.",
  "One more scroll-worthy mistake.",
  "Down the drain we go.",
  "Bold move, friend.",
  "Ah yes, the cure for productivity.",
  "Perfect timing. Not.",
  "Just what you *didn't* need.",
  "Ah, distraction's sweet call.",
  "Can’t help yourself, huh?",
  "Another genius decision.",
  "Masterclass in procrastination.",
  "You're totally in control.",
  "What could possibly go wrong?",
  "Embrace the mess.",
  "Your future self is screaming.",
  "This link is a trap.",
  "Tab it and forget it.",
  "The void is calling.",
  "Here comes another side quest.",
  "Focus who?",
  "Decisions were made.",
  "Oops. Too late now.",
  "Curiosity kills time.",
  "100% necessary. Not.",
  "Make it make sense.",
  "Really? This one?",
  "And you were doing so well.",
  "Nothing to see here.",
  "Clickbait connoisseur, huh?",
  "You *need* this? Sure.",
  "Goodbye workflow.",
  "Real urgent, obviously.",
  "Brace for distraction.",
  "Genius move, honestly.",
  "Instant regret in 3… 2…",
  "Welcome to the abyss.",
  "Didn’t need your focus anyway.",
  "Here lies your attention span.",
  "You could stop anytime. Right?",
  "Feel that? It’s control slipping.",
  "Congratulations, you played yourself.",
  "New tab, new regrets.",
  "Your To-Do list is weeping.",
  "And down you go.",
  "Nothing important ever started like this.",
  "Tell yourself it's worth it.",
  "You clicked it anyway, huh?",
  "This must be urgent.",
  "Reckless, but okay.",
  "You sure love chaos.",
  "Must be something shiny.",
  "Why not sabotage your day?",
  "The illusion of productivity.",
  "Another trip to nowhere.",
  "Click and vanish.",
  "The endless scroll starts here.",
  "You’ve made worse choices. Probably.",
  "Doomscroll starter pack.",
  "You’re so predictable.",
  "Classic you.",
  "Impulse wins again.",
  "Watch your time disappear.",
  "Oh, look — regret.",
  "Bet this is critical. Totally.",
  "Sure, ruin your momentum.",
  "Another dead end?",
  "A+ for distraction."
];

function getRandomPrompt() {
    const randomIndex = Math.floor(Math.random() * tooltipPrompts.length);
    return tooltipPrompts[randomIndex];
}

function handleAnchor(anchor) {
    if (anchor.getAttribute('href') === '#' || anchor.classList.contains('cs__anchor')) {
        return;
    }

    anchor.addEventListener('click', (event) => {
        event.preventDefault();
    });
    
    anchor.classList.add('cs__anchor');
    const clickToCopyBtn = document.createElement('span');
    clickToCopyBtn.textContent = getRandomPrompt();
    clickToCopyBtn.classList.add('cs__tooltiptext');
    
    clickToCopyBtn.addEventListener('click', async () => {
        if(window.navigator.clipboard){
            await window.navigator.clipboard.writeText(anchor.href);
        }else{
            prompt('Your Link here', anchor.href);
        }
    });
    
    anchor.appendChild(clickToCopyBtn);
}

function init(){
    // Handle existing anchors

    document.querySelectorAll('a').forEach(handleAnchor);
    
    // Create an observer instance
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            // Check newly added nodes
            mutation.addedNodes.forEach((node) => {
                // Check if the added node is an anchor
                if (node.nodeName === 'A') {
                    handleAnchor(node);
                }
                // Check for anchors inside added nodes
                if (node.querySelectorAll) {
                    node.querySelectorAll('a').forEach(handleAnchor);
                }
            });
        });
    });

    // Configure and start the observer
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

init();


