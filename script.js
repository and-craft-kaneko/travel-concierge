// ============================================
// トップページのフォーム送信処理
// ============================================
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('concierge-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const data = {
      companion: formData.get('companion') || '',
      area: formData.get('area') || '',
      season: formData.get('season') || '',
      preference: formData.get('preference') || ''
    };

    // 必須項目チェック
    if (!data.area) {
      alert('行きたいエリアを選択してください');
      return;
    }

    // sessionStorageに保存して結果ページへ遷移
    sessionStorage.setItem('conciergeData', JSON.stringify(data));
    window.location.href = 'result.html';
  });
});
