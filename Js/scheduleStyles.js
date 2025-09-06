document.addEventListener('DOMContentLoaded', function() {
const styleEl = document.createElement('style');
styleEl.setAttribute('data-origin', 'schedule-styles');
styleEl.textContent = `
/* Sechedule Section */
.schedule {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Makes section fill full screen height */
  text-align: center;
}

/* Schedule Section */
.schedule {
    padding: 2rem 1rem;
    text-align: center;
}

.schedule h2 {
    font-size: 1.8rem;
    margin: 0.5rem 0;
}

.schedule-timeline {
    max-width: 800px;
    margin: 2rem auto;
    background: #fffaf5;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 6px 20px rgba(255, 102, 0, 0.15);
}

.schedule-timeline h3 {
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
    color: #ff6600;
    font-weight: 700;
}

.schedule-item {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;
    padding: 1rem;
    background: #fff;
    border-left: 4px solid #ff6600;
    border-radius: 8px;
    margin-bottom: 1rem;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

.schedule-time {
    flex-shrink: 0;
    font-weight: 600;
    color: #ff6600;
    min-width: 120px;
}

.schedule-event {
    flex: 1;
    color: #333;
}

/* Mobile-friendly layout */
@media (max-width: 600px) {
  .schedule-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .schedule-time {
    min-width: auto;
    margin-bottom: 0.5rem;
  }
}
`;
document.head.appendChild(styleEl);
});



