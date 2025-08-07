(function(){
  const byClass = (c, el=document) => Array.from(el.getElementsByClassName(c));
  const bySel = (s, el=document) => el.querySelector(s);
  const bySelAll = (s, el=document) => Array.from(el.querySelectorAll(s));

  // Year
  const year = bySel('#year');
  if (year) year.textContent = String(new Date().getFullYear());

  // IntersectionObserver for fade-ins
  const observer = new IntersectionObserver((entries)=>{
    for (const entry of entries){
      if (entry.isIntersecting){ entry.target.classList.add('in-view'); observer.unobserve(entry.target); }
    }
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
  bySelAll('.fade-in').forEach(el=>observer.observe(el));

  // Simple parallax on hero media
  const parallaxEl = bySel('[data-parallax] img');
  if (parallaxEl){
    const onScroll = () => {
      const y = window.scrollY * 0.08;
      parallaxEl.style.transform = `translateY(${y}px) scale(1.02)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Countdown
  const countdownEl = bySel('.countdown');
  if (countdownEl){
    const targetIso = countdownEl.getAttribute('data-countdown-to');
    const targetTime = targetIso ? Date.parse(targetIso) : Date.now() + 7*24*60*60*1000;
    const pad = (n) => String(n).padStart(2,'0');
    const tick = () => {
      const diff = Math.max(0, targetTime - Date.now());
      const d = Math.floor(diff/86400000);
      const h = Math.floor((diff%86400000)/3600000);
      const m = Math.floor((diff%3600000)/60000);
      const s = Math.floor((diff%60000)/1000);
      countdownEl.textContent = (d>0? d+':':'') + `${pad(h)}:${pad(m)}:${pad(s)}`;
    };
    tick();
    setInterval(tick, 1000);
  }

  // Before/After slider
  const slider = bySel('.ba-range');
  const overlay = bySel('.ba-overlay');
  if (slider && overlay){
    const onInput = () => {
      const v = Number(slider.value); // 0..100
      overlay.style.width = v + '%';
    };
    onInput();
    slider.addEventListener('input', onInput);
  }

  // FAQ details keyboard affordance (already accessible by default, just smoothing)
  bySelAll('.accordion-item summary').forEach(sum=>{
    sum.addEventListener('click', ()=>{
      const details = sum.parentElement;
      if (!details) return;
      bySelAll('.accordion-item').forEach(d=>{ if (d!==details) d.removeAttribute('open'); });
    });
  });

  // Email capture (stub)
  const form = bySel('.email-capture');
  if (form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const email = bySel('input[name="email"]', form)?.value.trim();
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        alert('Please enter a valid email.');
        return;
      }
      try { localStorage.setItem('lead_email', email); } catch(_){}
      form.reset();
      alert('Thanks! Check your inbox for tips and resources.');
    });
  }

  // Support widget minimal action
  const supportBtn = bySel('.support-widget');
  if (supportBtn){
    supportBtn.addEventListener('click', ()=>{
      const mail = 'support@yourdomain.com';
      window.location.href = `mailto:${mail}?subject=Support%20Request`;
    });
  }
})();