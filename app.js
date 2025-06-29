// アプリケーションデータ
const appData = {
  "user_profile": {
    "name": "吉田　陸人",
    "plan": "プレミアムプラン",
    "member_since": "2024-10-01",
    "member_id": "KMN-20241001-001" // バーコード生成用のID
  },
  "usage_history": [
    {"date": "2025-06-25", "area": "駅前地区", "type": "エグゼクティブポッド", "duration": 60, "cost": 1800},
    {"date": "2025-06-18", "area": "一番町周辺地区", "type": "リラックスポッド", "duration": 45, "cost": 900},
    {"date": "2025-06-10", "area": "駅前地区", "type": "エグゼクティブポッド", "duration": 90, "cost": 2700}
  ],
  "coupons": [
    {"title": "【プレミアム限定】ポッド利用料20%OFF", "description": "すべてのポッドでご利用いただける割引クーポンです。", "expiry": "2025-07-31"},
    {"title": "【雨の日限定】30分延長無料クーポン", "description": "雨の日にご予約いただくと、30分の延長料金が無料になります。", "expiry": "2025-08-31"},
    {"title": "【新規様歓迎】初回利用500円OFF", "description": "初めてのご利用に限り、会計から500円割引いたします。", "expiry": "2025-12-31"}
  ],
  "sleep_data": [
    {"date": "2025-06-01", "sleep_hours": 7.5, "quality_score": 85, "deep_sleep": 25, "rem_sleep": 22},
    {"date": "2025-06-02", "sleep_hours": 6.8, "quality_score": 78, "deep_sleep": 22, "rem_sleep": 20},
    {"date": "2025-06-03", "sleep_hours": 8.2, "quality_score": 92, "deep_sleep": 28, "rem_sleep": 25},
    {"date": "2025-06-04", "sleep_hours": 7.1, "quality_score": 82, "deep_sleep": 24, "rem_sleep": 21},
    {"date": "2025-06-05", "sleep_hours": 6.5, "quality_score": 75, "deep_sleep": 20, "rem_sleep": 18},
    {"date": "2025-06-06", "sleep_hours": 8.5, "quality_score": 95, "deep_sleep": 30, "rem_sleep": 26},
    {"date": "2025-06-07", "sleep_hours": 7.8, "quality_score": 88, "deep_sleep": 26, "rem_sleep": 23}
  ],
  "pod_areas": [
    {
      "area": "仙台駅店",
      "pods": [
        {"type": "コンパクトポッド", "price": 800, "amenities": ["自然音BGM", "調光ライト", "アロマディフューザー", "高級寝具"], "image": "assets/pod1.png"}
      ],
      "utilization": [5, 4, 3, 4, 5, 6, 5, 4, 3, 4, 5, 6, 4],
      "shop_image": "assets/shop1.png"
    },
    {
      "area": "一番町店",
      "pods": [
        {"type": "リラックスポッド", "price": 800, "amenities": ["自然音BGM", "調光ライト", "アロマディフューザー", "高級寝具"], "image": "assets/pod2.png"}
      ],
      "utilization": [2, 3, 2, 3, 4, 3, 2, 3, 4, 3, 2, 3, 4],
      "shop_image": "assets/shop2.png"
    },
    {
      "area": "県庁前店",
      "pods": [
        {"type": "ラグジュアリーポッド", "price": 1000, "amenities": ["自然音BGM", "調光ライト", "アロマディフューザー", "高級寝具"], "image": "assets/pod3.png"}
      ],
      "utilization": [3, 4, 3, 4, 5, 4, 3, 4, 5, 4, 3, 4, 5],
      "shop_image": "assets/shop3.png"
    },
    {
      "area": "仙台駅東口店",
      "pods": [
        {"type": "エグゼクティブポッド", "price": 1200, "amenities": ["自然音BGM", "調光ライト", "アロマディフューザー", "高級寝具"], "image": "assets/pod4.png"}
      ],
      "utilization": [1, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3],
      "shop_image": "assets/shop4.png"
    }
  ],
  "articles": [
    {
      "title": "質の良い睡眠のための5つの習慣",
      "category": "睡眠改善",
      "thumbnail": "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=80&h=80&fit=crop",
      "content": "良質な睡眠を得るための実践的なアドバイスをご紹介します。規則正しい睡眠スケジュール、適切な睡眠環境、就寝前のルーティンなど、今日から始められる5つの習慣を詳しく解説します。睡眠の質を向上させるためには、まず一定の就寝・起床時間を保つことが重要です。体内時計を整えることで、自然な眠気を感じやすくなります。また、寝室の温度は18-22度に保ち、遮光カーテンで光を遮断することで、より深い眠りに入ることができます。"
    },
    {
      "title": "マインドフルネス瞑想で深い眠りを",
      "category": "メンタルヘルス", 
      "thumbnail": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=80&h=80&fit=crop",
      "content": "マインドフルネス瞑想が睡眠の質に与える驚くべき効果について解説します。簡単な呼吸法から始める瞑想テクニックで、心を落ち着かせ、深いリラクゼーション状態を体験しましょう。研究によると、定期的な瞑想は睡眠の質を大幅に改善し、入眠時間を短縮することが分かっています。就寝前の10分間の瞑想は、日中のストレスを解放し、心身をリラックス状態に導きます。"
    },
    {
      "title": "スリープテック活用ガイド",
      "category": "デジタルヘルス",
      "thumbnail": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=80&h=80&fit=crop",
      "content": "最新のスリープテクノロジーを活用して睡眠の質を向上させる方法をご紹介。睡眠追跡デバイス、スマートマットレス、睡眠アプリの効果的な使い方を詳しく解説します。スマートウォッチやフィットネストラッカーを使用した睡眠モニタリングは、睡眠パターンの可視化を可能にし、改善点を明確にします。また、AIを活用した睡眠分析アプリは、個人の睡眠データに基づいたパーソナライズされたアドバイスを提供します。"
    },
    {
      "title": "【PR】究極の眠りを追求する「kaminスマートピロー」",
      "category": "PR",
      "thumbnail": "assets/pr1.png",
      "content": "kaminが自信を持ってお届けする「スマートピロー」が登場。あなたの寝返りやいびきをAIが検知し、ピローの高さを自動調整。常に最適な寝姿勢をキープし、これまでにない深い眠りへと誘います。\n\n素材には低反発素材と通気性に優れたゲル素材を組み合わせ、快適な温度と湿度を保ちます。専用アプリと連携すれば、睡眠スコアの向上をリアルタイムで確認可能。今ならプレミアム会員様限定で20%OFFクーポンをプレゼント中！最高の睡眠投資を、ぜひこの機会に。"
    },
    {
      "title": "【PR】心安らぐ香りの空間「kaminアロマディフューザー」",
      "category": "PR",
      "thumbnail": "assets/pr2.png",
      "content": "寝室を最高の癒やし空間に変える、kaminオリジナル「アロマディフューザー」。超音波式で熱を使わないため、エッセンシャルオイル本来の香りをお楽しみいただけます。\n\nラベンダー、カモミールなど、睡眠に効果的とされる天然由来のオイルもセットでご用意。タイマー機能やLEDライトの調光機能も搭載しており、就寝前のリラックスタイムに最適です。コンパクトで洗練されたデザインは、どんなインテリアにも馴染みます。今夜から、香りに包まれて眠りにつきませんか？"
    },
    {
      "title": "睡眠と食事の密接な関係",
      "category": "栄養学",
      "thumbnail": "assets/article4.png",
      "content": "「夜中に目が覚めてしまう」「朝すっきり起きられない」その原因、実は食事にあるかもしれません。トリプトファンやGABAなど、睡眠の質を高める栄養素を多く含む食材（バナナ、乳製品、ナッツ類など）を積極的に摂取することが推奨されます。\n\n逆に、就寝前のカフェインやアルコール、高脂肪食は睡眠を妨げる原因となります。夕食は就寝の3時間前までに済ませ、消化の良いメニューを心がけることが、快適な睡眠への第一歩です。"
    }
  ],
  "subscription_plans": [
    {
      "name": "ベーシックプラン",
      "price_monthly": 0,
      "price_yearly": 0,
      "features": ["基本的な睡眠記録", "7日間のデータ保存", "基本的なポッド検索"]
    },
    {
      "name": "プレミアムプラン", 
      "price_monthly": 1200,
      "price_yearly": 9800,
      "features": ["詳細な睡眠分析", "無制限のデータ保存", "優先ポッド予約", "専門家記事", "パーソナライズ機能"]
    },
    {
      "name": "ファミリープラン",
      "price_monthly": 1800,
      "price_yearly": 14800,
      "features": ["最大6アカウント", "プレミアム機能全て", "家族睡眠レポート", "専門サポート"]
    }
  ]
};

// DOM要素の取得
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const loadingOverlay = document.getElementById('loadingOverlay');
let sleepChart = null;

// 初期化
document.addEventListener('DOMContentLoaded', () => {
    showLoading();
    setTimeout(() => {
        initializeApp();
        hideLoading();
    }, 1500);
});

function showLoading() { loadingOverlay.classList.add('active'); }
function hideLoading() { loadingOverlay.classList.remove('active'); }

function initializeApp() {
    setupTabNavigation();
    setupModals();
    renderAllContent();
}

function renderAllContent() {
    renderSleepChart();
    renderPodCards();
    renderUsageCards();
    renderArticleCards();
    renderSubscriptionPlans();
    renderMembershipPage();
}

function setupModals() {
    const subscriptionBtn = document.getElementById('subscriptionBtn');
    if (subscriptionBtn) {
        subscriptionBtn.addEventListener('click', () => openModal('subscriptionModal'));
    }

    document.querySelectorAll('.modal-close').forEach(button => {
        const modalId = button.getAttribute('data-modal-id');
        if(modalId) {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                closeModal(modalId);
            });
        }
    });

    document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal.id);
            }
        });
    });
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if(modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if(modal) {
        modal.classList.remove('active');
    }
    if (!document.querySelector('.modal-overlay.active')) {
        document.body.style.overflow = '';
    }
}

function setupTabNavigation() {
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            switchTab(targetTab);
        });
    });
}

function switchTab(targetTab) {
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
    
    const activeTabButton = document.querySelector(`[data-tab="${targetTab}"]`);
    const activeTabContent = document.getElementById(targetTab);

    if (activeTabButton) activeTabButton.classList.add('active');
    if (activeTabContent) activeTabContent.classList.add('active');
}

function reservePod(podType, area, price) {
    const modalBody = document.getElementById('reservationModalBody');
    if (!modalBody) return;

    modalBody.innerHTML = `
        <div class="reservation-details">
            <p><strong>施設:</strong> ${area}</p>
            <p><strong>ポッドタイプ:</strong> ${podType}</p>
        </div>
        <div class="form-group">
            <label for="reservation-time" class="form-label">利用時間 (分)</label>
            <select id="reservation-time" class="form-control">
                <option value="30">30分</option>
                <option value="60" selected>60分</option>
                <option value="90">90分</option>
                <option value="120">120分</option>
            </select>
        </div>
        <div class="reservation-price">
            <p>料金: <span id="reservation-price-value">¥${price.toLocaleString()}</span></p>
        </div>
        <button class="btn btn--primary btn--full-width" id="confirm-reservation-btn">この内容で予約を確定する</button>
    `;

    const timeSelect = modalBody.querySelector('#reservation-time');
    const priceValue = modalBody.querySelector('#reservation-price-value');
    const confirmBtn = modalBody.querySelector('#confirm-reservation-btn');
    const basePricePer60Min = price;

    if (timeSelect && priceValue) {
        timeSelect.addEventListener('change', () => {
            const selectedTime = parseInt(timeSelect.value, 10);
            const newPrice = (basePricePer60Min / 60) * selectedTime;
            priceValue.textContent = `¥${newPrice.toLocaleString()}`;
        });
    }

    if(confirmBtn) {
        confirmBtn.addEventListener('click', () => {
            showLoading();
            setTimeout(() => {
                hideLoading();
                closeModal('reservationModal');
                alert(`${area}の${podType}の予約が完了しました！`);
            }, 1500);
        });
    }

    openModal('reservationModal');
}

function renderUsageCards() {
    const usageGrid = document.getElementById('usageGrid');
    if(!usageGrid) return;
    usageGrid.innerHTML = '';
    
    appData.pod_areas.forEach((area, index) => {
        const usageCard = document.createElement('div');
        usageCard.className = 'usage-card';
        usageCard.style.setProperty('--delay', `${index * 0.1}s`);
        
        const podStatusHTML = Array.from({length: 6}, (_, i) => {
            const isOccupied = area.utilization[i] > 3;
            return `<div class="pod-status ${isOccupied ? 'occupied' : 'available'}" title="${isOccupied ? '使用中' : '空室'}">${i + 1}</div>`;
        }).join('');
        
        usageCard.innerHTML = `
            <div class="usage-info">
                <div class="area-name">${area.area}</div>
                <img src="${area.shop_image}" alt="${area.area}の内装" class="usage-card-image" loading="lazy">
                <div class="pod-status-grid">
                    ${podStatusHTML}
                </div>
            </div>
        `;
        
        usageGrid.appendChild(usageCard);
    });
}

function renderMembershipPage() {
    const membershipContent = document.getElementById('membershipContent');
    if(!membershipContent) return;
    const user = appData.user_profile;

    membershipContent.innerHTML = `
        <div class="membership-barcode-container">
            <p>チェックイン時にご提示ください</p>
            <svg id="barcode"></svg>
        </div>
        <div class="profile-card">
            <div class="profile-info">
                <div class="profile-name">${user.name}</div>
                <div class="profile-plan">${user.plan}</div>
            </div>
            <div class="profile-meta">会員登録日: ${user.member_since}</div>
        </div>
        <div class="membership-grid">
            <div class="membership-grid-item" onclick="openHistoryModal()">
                <div class="membership-item-icon">📜</div>
                <h3>利用履歴</h3>
                <p>過去の利用履歴を確認</p>
            </div>
            <div class="membership-grid-item" onclick="openCouponModal()">
                <div class="membership-item-icon">🎟️</div>
                <h3>特典クーポン</h3>
                <p>限定クーポンをチェック</p>
            </div>
            <div class="membership-grid-item" onclick="openModal('settingsModal')">
                <div class="membership-item-icon">⚙️</div>
                <h3>設定</h3>
                <p>アカウント情報を編集</p>
            </div>
            <div class="membership-grid-item" onclick="openModal('helpModal')">
                <div class="membership-item-icon">❓</div>
                <h3>ヘルプ</h3>
                <p>よくある質問はこちら</p>
            </div>
        </div>
    `;
    
    try {
      if(typeof JsBarcode === 'function'){
        JsBarcode("#barcode", user.member_id, {
          format: "CODE128",
          lineColor: "#000",
          width: 2,
          height: 60,
          displayValue: false
        });
      }
    } catch (e) {
      console.error("Barcode generation failed:", e);
    }
}

function openHistoryModal() {
    const modalBody = document.getElementById('historyModalBody');
    if(!modalBody) return;
    let content = '<ul class="history-list">';
    if (appData.usage_history.length === 0) {
        content += '<li><p>利用履歴はまだありません。</p></li>';
    } else {
        appData.usage_history.forEach(item => {
            content += `
                <li class="history-item">
                    <div class="history-item-main">
                        <span class="history-date">${item.date}</span>
                        <span class="history-area">${item.area}</span>
                    </div>
                    <div class="history-item-sub">
                        <span>${item.type} (${item.duration}分)</span>
                        <span class="history-cost">¥${item.cost.toLocaleString()}</span>
                    </div>
                </li>
            `;
        });
    }
    content += '</ul>';
    modalBody.innerHTML = content;
    openModal('historyModal');
}

function openCouponModal() {
    const modalBody = document.getElementById('couponModalBody');
    if(!modalBody) return;
    let content = '<ul class="coupon-list">';
    if (appData.coupons.length === 0) {
        content += '<li><p>現在利用可能なクーポンはありません。</p></li>';
    } else {
        appData.coupons.forEach(item => {
            content += `
                <li class="coupon-item">
                    <div class="coupon-icon">🎟️</div>
                    <div class="coupon-details">
                        <h4 class="coupon-title">${item.title}</h4>
                        <p class="coupon-description">${item.description}</p>
                        <p class="coupon-expiry">有効期限: ${item.expiry}</p>
                    </div>
                    <button class="btn btn--sm btn--primary">使用する</button>
                </li>
            `;
        });
    }
    content += '</ul>';
    modalBody.innerHTML = content;
    openModal('couponModal');
}

function renderSleepChart() {
    const ctx = document.getElementById('sleepChart')?.getContext('2d');
    if (!ctx) return;
    
    const chartData = {
        labels: appData.sleep_data.map(d => {
            const date = new Date(d.date);
            return `${date.getMonth() + 1}/${date.getDate()}`;
        }),
        datasets: [
            {
                label: '睡眠時間（時間）',
                data: appData.sleep_data.map(d => d.sleep_hours),
                borderColor: '#4ECDC4',
                backgroundColor: 'rgba(78, 205, 196, 0.1)',
                borderWidth: 4, pointRadius: 6, pointBackgroundColor: '#4ECDC4', pointBorderColor: '#ffffff', pointBorderWidth: 2, fill: true, tension: 0.4
            },
            {
                label: '睡眠の質（点）',
                data: appData.sleep_data.map(d => d.quality_score / 10),
                borderColor: '#FF6B6B',
                backgroundColor: 'rgba(255, 107, 107, 0.1)',
                borderWidth: 4, pointRadius: 6, pointBackgroundColor: '#FF6B6B', pointBorderColor: '#ffffff', pointBorderWidth: 2, fill: true, tension: 0.4
            },
            {
                label: '深い眠り（%）',
                data: appData.sleep_data.map(d => d.deep_sleep / 4),
                borderColor: '#9B59B6',
                backgroundColor: 'rgba(155, 89, 182, 0.1)',
                borderWidth: 4, pointRadius: 6, pointBackgroundColor: '#9B59B6', pointBorderColor: '#ffffff', pointBorderWidth: 2, fill: true, tension: 0.4
            }
        ]
    };
    
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: 'top', labels: { color: 'white', font: { size: 14, family: 'var(--font-family-base)' }, usePointStyle: true, pointStyle: 'circle' } }
        },
        scales: {
            x: { grid: { color: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(255, 255, 255, 0.2)' }, ticks: { color: 'rgba(255, 255, 255, 0.8)', font: { size: 12 } } },
            y: { grid: { color: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(255, 255, 255, 0.2)' }, ticks: { color: 'rgba(255, 255, 255, 0.8)', font: { size: 12 } }, beginAtZero: true, max: 10 }
        },
        animation: { duration: 2000, easing: 'easeInOutQuart' }
    };
    
    if(sleepChart) sleepChart.destroy();
    sleepChart = new Chart(ctx, { type: 'line', data: chartData, options: chartOptions });
}

function renderPodCards() {
    const podGrid = document.getElementById('podGrid');
    if(!podGrid) return;
    podGrid.innerHTML = '';
    
    appData.pod_areas.forEach((area, index) => {
        area.pods.forEach(pod => {
            const podCard = document.createElement('div');
            podCard.className = 'pod-card';
            podCard.style.setProperty('--delay', `${index * 0.1}s`);
            
            podCard.innerHTML = `
                <img src="${pod.image}" alt="${pod.type}" class="pod-image" loading="lazy">
                <div class="pod-info">
                    <div class="pod-type">${pod.type}</div>
                    <div class="pod-price">¥${pod.price.toLocaleString()}/30分~60分</div>
                    <div class="area-location">📍 ${area.area}</div>
                    <ul class="pod-amenities">
                        ${pod.amenities.map(amenity => `<li>${amenity}</li>`).join('')}
                    </ul>
                    <button class="reserve-btn" onclick="reservePod('${pod.type}', '${area.area}', ${pod.price})">
                        予約する
                    </button>
                </div>
            `;
            
            podGrid.appendChild(podCard);
        });
    });
}

function renderArticleCards() {
    const articleGrid = document.getElementById('articleGrid');
    if(!articleGrid) return;
    articleGrid.innerHTML = '';
    
    appData.articles.forEach((article, index) => {
        const articleCard = document.createElement('div');
        articleCard.className = 'article-card';
        articleCard.style.setProperty('--delay', `${index * 0.1}s`);
        
        let categoryBadgeClass = 'article-category-badge';
        if (article.category === 'PR') {
            categoryBadgeClass += ' pr-badge';
        }
        
        articleCard.innerHTML = `
            <div class="article-header">
                <img src="${article.thumbnail}" alt="${article.title}" class="article-thumbnail" loading="lazy">
                <div class="article-meta">
                    <div class="article-title">${article.title}</div>
                    <div class="${categoryBadgeClass}">${article.category}</div>
                </div>
            </div>
        `;
        
        articleCard.addEventListener('click', () => openArticleModal(article));
        
        articleGrid.appendChild(articleCard);
    });
}

function openArticleModal(article) {
    const titleEl = document.getElementById('articleModalTitle');
    const imageEl = document.getElementById('articleModalImage');
    const categoryEl = document.getElementById('articleModalCategory');
    const contentEl = document.getElementById('articleModalContent');

    if (titleEl) titleEl.textContent = article.title;
    if (imageEl) imageEl.src = article.thumbnail;
    if (contentEl) contentEl.textContent = article.content;
    
    if (categoryEl) {
        categoryEl.textContent = article.category;
        categoryEl.className = 'article-category';
        if(article.category === 'PR') {
          categoryEl.classList.add('pr-badge');
        }
    }
    
    openModal('articleModal');
}

function renderSubscriptionPlans() {
    const plansGrid = document.getElementById('plansGrid');
    if(!plansGrid) return;
    plansGrid.innerHTML = '';
    
    appData.subscription_plans.forEach((plan, index) => {
        const planCard = document.createElement('div');
        planCard.className = 'plan-card';
        
        if (plan.name === 'プレミアムプラン') {
            planCard.classList.add('recommended');
        }
        
        const monthlyPrice = plan.price_monthly === 0 ? '無料' : `¥${plan.price_monthly.toLocaleString()}`;
        const yearlyPrice = plan.price_yearly === 0 ? '無料' : `¥${plan.price_yearly.toLocaleString()}`;
        const savings = plan.price_yearly > 0 ? Math.round(((plan.price_monthly * 12 - plan.price_yearly) / (plan.price_monthly * 12)) * 100) : 0;
        
        planCard.innerHTML = `
            <div class="plan-name">${plan.name}</div>
            <div class="plan-price">
                ${monthlyPrice}
                ${plan.price_monthly > 0 ? '<small>/月</small>' : ''}
            </div>
            ${plan.price_yearly > 0 ? `
                <div class="plan-yearly">
                    年額: ${yearlyPrice} 
                    ${savings > 0 ? `<span style="color: #4ECDC4;">(${savings}%お得)</span>` : ''}
                </div>
            ` : ''}
            <ul class="plan-features">
                ${plan.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <button class="select-plan-btn" onclick="selectPlan('${plan.name}')">
                ${plan.name === 'ベーシックプラン' ? '現在のプラン' : 'プランを選択'}
            </button>
        `;
        
        plansGrid.appendChild(planCard);
    });
}

function selectPlan(planName) {
    if (planName === 'ベーシックプラン') {
        alert('現在ベーシックプランをご利用中です。');
        return;
    }
    
    showLoading();
    
    setTimeout(() => {
        hideLoading();
        closeModal('subscriptionModal');
        alert(`${planName}の7日間無料トライアルを開始しました！\nアップグレードが完了しました。`);
    }, 2000);
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.active').forEach(modal => {
            closeModal(modal.id);
        });
    }
    if (e.key >= '1' && e.key <= '5') {
        e.preventDefault();
        const tabIndex = parseInt(e.key) - 1;
        const targetTab = ['sleep-data', 'pod-reservation', 'usage-status', 'article-feed', 'membership-page'][tabIndex];
        if (targetTab) {
            switchTab(targetTab);
        }
    }
});

window.addEventListener('resize', () => {
    if (sleepChart) {
        sleepChart.resize();
    }
});
