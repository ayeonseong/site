document.addEventListener('DOMContentLoaded', () => {
  // Community Section Toggle & Slider
  const commToggle = document.getElementById('communityToggle');
  const campaignPanel = document.querySelector('.campaign-panel');
  const storyPanel = document.querySelector('.story-panel');
  const commCta = document.getElementById('communityCta');
  const toggleBtns = document.querySelectorAll('.toggle-switch .toggle-btn');
  const commPrevBtn = document.getElementById('commPrevBtn');
  const commNextBtn = document.getElementById('commNextBtn');

  let activeTab = 'campaign';
  let campaignIndex = 0;
  let storyIndex = 0;
  const cardStep = 693; // 669px card width + 24px gap

  function updateCommunityTab(tab) {
    activeTab = tab;
    toggleBtns.forEach(btn => {
      if (btn.dataset.tab === tab) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    if (tab === 'campaign') {
      commToggle.classList.remove('is-story');
      campaignPanel.classList.add('active');
      storyPanel.classList.remove('active');
      commCta.innerHTML = '캠페인 더보기 <i>&gt;</i>';
    } else {
      commToggle.classList.add('is-story');
      storyPanel.classList.add('active');
      campaignPanel.classList.remove('active');
      commCta.innerHTML = '스토리 더보기 <i>&gt;</i>';
    }
  }

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      updateCommunityTab(btn.dataset.tab);
    });
  });

  // Carousel Direction Buttons
  if (commPrevBtn && commNextBtn) {
    commPrevBtn.addEventListener('click', () => {
      if (activeTab === 'campaign') {
        const campaignTrack = document.querySelector('.campaign-panel .card-track');
        if (campaignTrack && campaignIndex > 0) {
          campaignIndex--;
          campaignTrack.style.transform = `translateX(-${campaignIndex * cardStep}px)`;
        }
      } else {
        const storyTrack = document.querySelector('.story-panel .card-track');
        if (storyTrack && storyIndex > 0) {
          storyIndex--;
          storyTrack.style.transform = `translateX(-${storyIndex * cardStep}px)`;
        }
      }
    });

    commNextBtn.addEventListener('click', () => {
      if (activeTab === 'campaign') {
        const campaignTrack = document.querySelector('.campaign-panel .card-track');
        const campaignTotal = campaignTrack ? campaignTrack.children.length : 0;
        if (campaignTrack && campaignIndex < campaignTotal - 1) {
          campaignIndex++;
          campaignTrack.style.transform = `translateX(-${campaignIndex * cardStep}px)`;
        }
      } else {
        const storyTrack = document.querySelector('.story-panel .card-track');
        const storyTotal = storyTrack ? storyTrack.children.length : 0;
        if (storyTrack && storyIndex < storyTotal - 1) {
          storyIndex++;
          storyTrack.style.transform = `translateX(-${storyIndex * cardStep}px)`;
        }
      }
    });
  }

  // Heart button on/off toggle
  const heartBtns = document.querySelectorAll('.pet-card .heart-btn');
  heartBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      btn.classList.toggle('is-active');
      const img = btn.querySelector('img');

      if (img) {
        const isMobile = window.matchMedia('(max-width: 563px)').matches;
        const iconDirectory = isMobile
          ? './images/3.mobile/icon_m'
          : './images/1.pc/icon';
        const iconName = btn.classList.contains('is-active')
          ? 'card_heart_on.svg'
          : 'card_heart_off.svg';

        img.src = `${iconDirectory}/${iconName}`;
      }
    });
  });

  // Adoption Section tab switching
  const tabBtns = document.querySelectorAll('.adoption_section .tabs button');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
    });
  });
});
