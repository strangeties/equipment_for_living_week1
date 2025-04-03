const span = document.getElementById('who');
const originalText = span.textContent;

const otherText = [
    "Whose voice can my rage embolden?", "Whose grief can my tears transform?",
    "Whose guilt can my anxieties assuage?",
    "Whose outlook can my joy brighten?",
    "Whose curiosity can my wonder pique?",
    "Whose wilderness can my flights awaken?"
];

span.addEventListener('mousemove', (e) => {
    let v = Math.floor(e.offsetX / 20.0) + Math.floor(e.offsetY / 4.0);
    let i = v % otherText.length;
    span.textContent = otherText[i];
});

span.addEventListener('mouseout', () => { span.textContent = originalText; });
