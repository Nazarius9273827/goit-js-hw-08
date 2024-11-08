class CountdownTimer {
    constructor({ selector, targetDate }) {
      this.selector = selector;
      this.targetDate = targetDate;
      this.start();
    }
  
    start() {
      const timerElement = document.querySelector(this.selector);
      if (!timerElement) return;
  
      this.intervalId = setInterval(() => {
        const currentTime = new Date();
        const time = this.targetDate - currentTime;
  
        if (time <= 0) {
          clearInterval(this.intervalId);
          this.updateTimerDisplay(timerElement, 0, 0, 0, 0);
          return;
        }
  
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((time % (1000 * 60)) / 1000);
  
        this.updateTimerDisplay(timerElement, days, hours, mins, secs);
      }, 1000);
    }
  
    updateTimerDisplay(timerElement, days, hours, mins, secs) {
      timerElement.querySelector('[data-value="days"]').textContent = String(days).padStart(2, '0');
      timerElement.querySelector('[data-value="hours"]').textContent = String(hours).padStart(2, '0');
      timerElement.querySelector('[data-value="mins"]').textContent = String(mins).padStart(2, '0');
      timerElement.querySelector('[data-value="secs"]').textContent = String(secs).padStart(2, '0');
    }
  }
  
  new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Aug 24, 2025'),
  });
  