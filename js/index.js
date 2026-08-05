document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('communityToggleBtn');
  const communitySection = document.querySelector('.community_section');
  const campaignLabel = document.querySelector('.campaign-label');
  const storyLabel = document.querySelector('.story-label');

  if (toggleBtn && communitySection) {
    toggleBtn.addEventListener('click', () => {
      const isCampaign = communitySection.classList.contains('is-campaign');
      
      if (isCampaign) {
        communitySection.classList.remove('is-campaign');
        communitySection.classList.add('is-story');
        campaignLabel.classList.remove('active');
        storyLabel.classList.add('active');
      } else {
        communitySection.classList.remove('is-story');
        communitySection.classList.add('is-campaign');
        storyLabel.classList.remove('active');
        campaignLabel.classList.add('active');
      }
    });
  }
});