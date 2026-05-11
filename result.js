// ============================================
// 結果ページの表示処理
// ============================================
document.addEventListener('DOMContentLoaded', function () {
  // sessionStorageからデータ取得
  const stored = sessionStorage.getItem('conciergeData');

  let data;
  if (!stored) {
    // データがない場合はデフォルト（北信エリア）で表示
    data = { area: 'hokushin' };
  } else {
    data = JSON.parse(stored);
  }

  const area = data.area || 'hokushin';
  const spotData = SPOT_DATA[area];

  if (!spotData) {
    console.error('Invalid area:', area);
    return;
  }

  // 各カテゴリのスポットを描画
  renderSpots('spots-scenery', spotData.scenery, area);
  renderSpots('spots-culture', spotData.culture, area);
  renderSpots('spots-food', spotData.food, area);
});

function renderSpots(containerId, spots, area) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const tagClass = `tag-${area}`;
  const areaLabel = AREA_LABELS[area];

  let html = '';
  for (const spot of spots) {
    html += `
      <div class="spot-card">
        <div class="spot-photo" style="background-image: url('${spot.photo}')">
          <span class="spot-area-tag ${tagClass}">${areaLabel}</span>
        </div>
        <div class="spot-info">
          <h4>${escapeHtml(spot.name)}</h4>
          <p>${escapeHtml(spot.desc)}</p>
        </div>
      </div>
    `;
  }
  container.innerHTML = html;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
