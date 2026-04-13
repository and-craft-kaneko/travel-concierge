document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('travel-form');
  const resultSection = document.getElementById('result-section');
  const resultTitle = document.getElementById('result-title');
  const resultSubtitle = document.getElementById('result-subtitle');
  const courseTimeline = document.getElementById('course-timeline');
  const courseTips = document.getElementById('course-tips');

  // Set default dates
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  document.getElementById('checkin').value = formatDate(today);
  document.getElementById('checkout').value = formatDate(tomorrow);

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const accommodation = document.getElementById('accommodation').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const preferences = document.getElementById('preferences').value;

    if (!accommodation) {
      alert('宿泊施設を選択してください');
      return;
    }

    const course = generateCourse(accommodation, checkin, checkout, preferences);
    displayCourse(course);
  });

  function formatDate(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  function getSeason(dateStr) {
    const month = new Date(dateStr).getMonth() + 1;
    if (month >= 3 && month <= 5) return 'spring';
    if (month >= 6 && month <= 8) return 'summer';
    if (month >= 9 && month <= 11) return 'autumn';
    return 'winter';
  }

  function getSeasonLabel(season) {
    const labels = { spring: '春', summer: '夏', autumn: '秋', winter: '冬' };
    return labels[season] || '';
  }

  function detectHobbies(text) {
    const detected = [];
    for (const [category, keywords] of Object.entries(HOBBY_KEYWORDS)) {
      for (const keyword of keywords) {
        if (text.includes(keyword)) {
          detected.push(category);
          break;
        }
      }
    }
    return detected;
  }

  function calculateNights(checkin, checkout) {
    const d1 = new Date(checkin);
    const d2 = new Date(checkout);
    const diff = Math.ceil((d2 - d1) / (1000 * 60 * 60 * 24));
    return Math.max(1, diff);
  }

  function generateCourse(accommodationId, checkin, checkout, preferences) {
    const data = COURSE_DATA[accommodationId];
    const season = getSeason(checkin);
    const seasonData = data.seasons[season];
    const hobbies = detectHobbies(preferences);
    const nights = calculateNights(checkin, checkout);

    // Select the best matching course variant
    let day1;
    if (hobbies.length > 0) {
      // Try to find a hobby-specific course
      for (const hobby of hobbies) {
        if (seasonData[hobby]) {
          day1 = seasonData[hobby];
          break;
        }
      }
    }
    if (!day1) {
      day1 = seasonData.default;
    }

    const day2 = seasonData.day2 || seasonData.default;

    // Format dates for display
    const checkinDate = new Date(checkin);
    const checkoutDate = new Date(checkout);

    return {
      accommodation: data.name,
      area: data.area,
      season: season,
      seasonLabel: getSeasonLabel(season),
      nights: nights,
      hobbies: hobbies,
      checkinDate: checkinDate,
      checkoutDate: checkoutDate,
      day1: day1,
      day2: day2
    };
  }

  function formatDisplayDate(date) {
    const m = date.getMonth() + 1;
    const d = date.getDate();
    const days = ['日', '月', '火', '水', '木', '金', '土'];
    const day = days[date.getDay()];
    return `${m}月${d}日（${day}）`;
  }

  function displayCourse(course) {
    resultTitle.textContent = `${course.accommodation}（${course.area}）の${course.seasonLabel}のモデルコース`;
    resultSubtitle.textContent = `${formatDisplayDate(course.checkinDate)} 〜 ${formatDisplayDate(course.checkoutDate)}・${course.nights}泊${course.nights + 1}日`;

    // Build timeline HTML
    let html = '';

    // Day 1
    html += `<div class="day-header">1日目 - ${formatDisplayDate(course.checkinDate)}</div>`;
    html += '<div class="timeline">';
    for (const item of course.day1) {
      html += createTimelineItem(item);
    }
    html += '</div>';

    // Day 2
    html += `<div class="day-header">2日目 - ${formatDisplayDate(course.checkoutDate)}</div>`;
    html += '<div class="timeline">';
    for (const item of course.day2) {
      html += createTimelineItem(item);
    }
    html += '</div>';

    courseTimeline.innerHTML = html;

    // Tips section
    let tipsHtml = '<div class="tips-section">';
    tipsHtml += '<h3>このコースのポイント</h3>';

    const seasonTips = {
      spring: '桜・新緑',
      summer: '避暑・高原',
      autumn: '紅葉・新そば',
      winter: '温泉・雪景色'
    };
    tipsHtml += `<span class="tip-tag">${seasonTips[course.season]}</span>`;
    tipsHtml += `<span class="tip-tag">${course.area}</span>`;

    const hobbyLabels = {
      outdoor: 'アウトドア',
      onsen: '温泉',
      gourmet: 'グルメ',
      history: '歴史・文化',
      nature: '自然・景色',
      family: 'ファミリー'
    };

    for (const hobby of course.hobbies) {
      tipsHtml += `<span class="tip-tag">${hobbyLabels[hobby]}</span>`;
    }

    if (course.hobbies.length === 0) {
      tipsHtml += '<span class="tip-tag">おすすめ定番コース</span>';
    }

    tipsHtml += '</div>';
    courseTips.innerHTML = tipsHtml;

    // Show result
    resultSection.style.display = 'block';
    resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function createTimelineItem(item) {
    if (!item.desc && !item.place) return '';
    return `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-time">${item.time}</div>
        <div class="timeline-place">${item.place}</div>
        ${item.desc ? `<div class="timeline-desc">${item.desc}</div>` : ''}
      </div>
    `;
  }
});
