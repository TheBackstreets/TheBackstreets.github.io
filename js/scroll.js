document.getElementById("TopButton").addEventListener("click", scrollToTop);
document.getElementById("HomeButton").addEventListener("click", scrollToHome);
document.getElementById("StatButton").addEventListener("click", scrollToStatistics);
document.getElementById("FeButton").addEventListener("click", scrollToFeatures);
document.getElementById("VoteButton").addEventListener("click", scrollToVote);
document.getElementById("FaqButton").addEventListener("click", scrollToFaqs);
document.getElementById("StatButton2").addEventListener("click", scrollToStatistics);
document.getElementById("FeButton2").addEventListener("click", scrollToFeatures);

function scrollToTop(){
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  function scrollToHome() {
    const targetDiv = document.getElementById('Home');
    targetDiv.scrollIntoView({ behavior: 'smooth' });
}

function scrollToFeatures() {
  const targetDiv = document.getElementById('Features');
  targetDiv.scrollIntoView({ behavior: 'smooth' });
}

function scrollToStatistics() {
  const targetDiv = document.getElementById('Statistics');
  targetDiv.scrollIntoView({ behavior: 'smooth' });
}

function scrollToFaqs() {
  const targetDiv = document.getElementById('Faqs');
  targetDiv.scrollIntoView({ behavior: 'smooth' });
}

function scrollToVote() {
  const targetDiv = document.getElementById('Vote');
  targetDiv.scrollIntoView({ behavior: 'smooth' });
}
