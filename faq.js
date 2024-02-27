function toggleAnswer(questionNumber) {
    const answer = document.querySelector(`.faq-question:nth-child(${questionNumber}) .faq-answer`);
    answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
}