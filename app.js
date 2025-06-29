// アプリケーションデータ
const appData = {
  "user_profile": {
    "name": "佐藤 優奈",
    "plan": "プレミアムプラン",
    "member_since": "2024-10-01",
    "barcode_image": "assets/barcode.svg"
  },
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
      "area": "駅前地区",
      "pods": [
        {"type": "エグゼクティブポッド", "price": 1800, "amenities": ["Wi-Fi", "USB充電", "アロマディフューザー", "高級寝具"], "image": "assets/pod1.png"}
      ],
      "utilization": [5, 4, 3, 4, 5, 6, 5, 4, 3, 4, 5, 6, 4],
      "shop_image": "assets/shop1.png"
    },
    {
      "area": "一番町周辺地区",
      "pods": [
        {"type": "リラックスポッド", "price": 1200, "amenities": ["自然音BGM", "調光ライト", "ブランケット"], "image": "assets/pod2.png"}
      ],
      "utilization": [2, 3, 2, 3, 4, 3, 2, 3, 4, 3, 2, 3, 4],
      "shop_image": "assets/shop2.png"
    },
    {
      "area": "県庁・市役所周辺地区",
      "pods": [
        {"type": "プライベートポッド", "price": 1500, "amenities": ["完全個室", "遮音設計", "マッサージ機能"], "image": "assets/pod3.png"}
      ],
      "utilization": [3, 4, 3, 4, 5, 4, 3, 4, 5, 4, 3, 4, 5],
      "shop_image": "assets/shop3.png"
    },
    {
      "area": "駅東地区",
      "pods": [
        {"type": "コンパクトポッド", "price": 900, "amenities": ["コンパクト設計", "基本アメニティ"], "image": "assets/pod4.png"}
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
const subscriptionBtn = document.getElementById('subscriptionBtn');
const subscriptionModal = document.getElementById('subscriptionModal');
const closeSubscriptionModal = document.getElementById('closeSubscriptionModal');
const articleModal = document.getElementById('articleModal');
const closeArticleModal = document.getElementById('closeArticleModal');
const loadingOverlay = document.getElementById('loadingOverlay');

// チャート変数
let sleepChart = null;

// 初期化
document.addEventListener('DOMContentLoaded', function() {
    showLoading();
    
    setTimeout(() => {
        initializeApp();
        hideLoading();
    }, 1500);
});

// ローディング表示/非表示
function showLoading() {
    loadingOverlay.classList.add('active');
}

function hideLoading() {
    loadingOverlay.classList.remove('active');
}

// アプリ初期化
function initializeApp() {
    setupTabNavigation();
    setupModals();
    renderSleepChart();
    renderPodCards();
    renderUsageCards();
    renderArticleCards();
    renderSubscriptionPlans();
    renderMembershipPage();
}

// タブナビゲーション設定
function setupTabNavigation() {
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            switchTab(targetTab);
            
            // ボタンアニメーション
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = '';
            }, 150);
        });
    });
}

// タブ切り替え
function switchTab(targetTab) {
    // アクティブタブボタンの更新
    tabButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-tab="${targetTab}"]`).classList.add('active');
    
    // タブコンテンツの更新
    tabContents.forEach(content => {
        content.classList.remove('active');
    });
    
    setTimeout(() => {
        document.getElementById(targetTab).classList.add('active');
    }, 150);
}

// モーダル設定
function setupModals() {
    // サブスクリプションモーダル
    subscriptionBtn.addEventListener('click', () => {
        subscriptionModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    closeSubscriptionModal.addEventListener('click', () => {
        subscriptionModal.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // 記事モーダル
    closeArticleModal.addEventListener('click', () => {
        articleModal.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // モーダル外クリックで閉じる
    [subscriptionModal, articleModal].forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
}

// 睡眠チャート描画
function renderSleepChart() {
    const ctx = document.getElementById('sleepChart').getContext('2d');
    
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
                borderWidth: 4,
                pointRadius: 6,
                pointBackgroundColor: '#4ECDC4',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                fill: true,
                tension: 0.4
            },
            {
                label: '睡眠の質（点）',
                data: appData.sleep_data.map(d => d.quality_score / 10), // スケール調整
                borderColor: '#FF6B6B',
                backgroundColor: 'rgba(255, 107, 107, 0.1)',
                borderWidth: 4,
                pointRadius: 6,
                pointBackgroundColor: '#FF6B6B',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                fill: true,
                tension: 0.4
            },
            {
                label: '深い眠り（%）',
                data: appData.sleep_data.map(d => d.deep_sleep / 4), // スケール調整
                borderColor: '#9B59B6',
                backgroundColor: 'rgba(155, 89, 182, 0.1)',
                borderWidth: 4,
                pointRadius: 6,
                pointBackgroundColor: '#9B59B6',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                fill: true,
                tension: 0.4
            }
        ]
    };
    
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: 'white',
                    font: {
                        size: 14,
                        family: 'var(--font-family-base)'
                    },
                    usePointStyle: true,
                    pointStyle: 'circle'
                }
            }
        },
        scales: {
            x: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)',
                    borderColor: 'rgba(255, 255, 255, 0.2)'
                },
                ticks: {
                    color: 'rgba(255, 255, 255, 0.8)',
                    font: {
                        size: 12
                    }
                }
            },
            y: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)',
                    borderColor: 'rgba(255, 255, 255, 0.2)'
                },
                ticks: {
                    color: 'rgba(255, 255, 255, 0.8)',
                    font: {
                        size: 12
                    }
                },
                beginAtZero: true,
                max: 10
            }
        },
        animation: {
            duration: 2000,
            easing: 'easeInOutQuart'
        }
    };
    
    if(sleepChart) sleepChart.destroy();
    sleepChart = new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: chartOptions
    });
}

// ポッドカード描画
function renderPodCards() {
    const podGrid = document.getElementById('podGrid');
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
                    <div class="pod-price">¥${pod.price.toLocaleString()}/60分</div>
                    <div class="area-location">📍 ${area.area}</div>
                    <ul class="pod-amenities">
                        ${pod.amenities.map(amenity => `<li>${amenity}</li>`).join('')}
                    </ul>
                    <button class="reserve-btn" onclick="reservePod('${pod.type}', '${area.area}')">
                        予約する
                    </button>
                </div>
            `;
            
            podGrid.appendChild(podCard);
        });
    });
}

// ポッド予約処理
function reservePod(podType, area) {
    showLoading();
    
    setTimeout(() => {
        hideLoading();
        alert(`${area}の${podType}の予約を受け付けました！\n確認メールをお送りします。`);
    }, 1500);
}

// 利用状況カード描画
function renderUsageCards() {
    const usageGrid = document.getElementById('usageGrid');
    usageGrid.innerHTML = '';
    
    appData.pod_areas.forEach((area, index) => {
        const usageCard = document.createElement('div');
        usageCard.className = 'usage-card';
        usageCard.style.setProperty('--delay', `${index * 0.1}s`);
        
        const podStatusHTML = Array.from({length: 6}, (_, i) => {
            const isOccupied = area.utilization[i] > 3;
            const statusClass = isOccupied ? 'occupied' : 'available';
            const statusText = isOccupied ? '使用中' : '空室';
            return `<div class="pod-status ${statusClass}" title="${statusText}">${i + 1}</div>`;
        }).join('');
        
        usageCard.innerHTML = `
            <div class="usage-info">
                <div class="area-name">${area.area}</div>
                <img src="${area.shop_image}" alt="${area.area}の内装" class="usage-card-image" loading="lazy">
                <div class="pod-status-grid">
                    ${podStatusHTML}
                </div>
                <div class="usage-stats">
                    <div class="stat-item">
                        <span class="stat-label">現在の利用率:</span>
                        <span class="stat-value">${Math.round((area.utilization.filter(u => u > 3).length / 6) * 100)}%</span>
                    </div>
                </div>
            </div>
        `;
        
        usageGrid.appendChild(usageCard);
    });
}

// 記事カード描画
function renderArticleCards() {
    const articleGrid = document.getElementById('articleGrid');
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
        
        articleCard.addEventListener('click', () => {
            openArticleModal(article);
        });
        
        articleGrid.appendChild(articleCard);
    });
}

// 記事モーダル開く
function openArticleModal(article) {
    document.getElementById('articleModalTitle').textContent = article.title;
    document.getElementById('articleModalImage').src = article.thumbnail;
    const categoryBadge = document.getElementById('articleModalCategory');
    categoryBadge.textContent = article.category;
    categoryBadge.className = 'article-category';
    if(article.category === 'PR') {
      categoryBadge.classList.add('pr-badge');
    }
    
    document.getElementById('articleModalContent').textContent = article.content;
    
    articleModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// サブスクリプションプラン描画
function renderSubscriptionPlans() {
    const plansGrid = document.getElementById('plansGrid');
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

// 会員ページ描画
function renderMembershipPage() {
    const membershipContent = document.getElementById('membershipContent');
    const user = appData.user_profile;

    membershipContent.innerHTML = `
        <div class="membership-barcode-container">
            <p>チェックイン時にご提示ください</p>
            <img src="${user.barcode_image}" alt="会員バーコード" class="membership-barcode">
        </div>
        
        <div class="profile-card">
            <div class="profile-info">
                <div class="profile-name">${user.name}</div>
                <div class="profile-plan">${user.plan}</div>
            </div>
            <div class="profile-meta">
                会員登録日: ${user.member_since}
            </div>
        </div>
        
        <div class="membership-grid">
            <div class="membership-grid-item">
                <div class="membership-item-icon">📜</div>
                <h3>利用履歴</h3>
                <p>過去の利用履歴を確認</p>
            </div>
            <div class="membership-grid-item">
                <div class="membership-item-icon">🎟️</div>
                <h3>特典クーポン</h3>
                <p>限定クーポンをチェック</p>
            </div>
            <div class="membership-grid-item">
                <div class="membership-item-icon">⚙️</div>
                <h3>設定</h3>
                <p>アカウント情報を編集</p>
            </div>
            <div class="membership-grid-item">
                <div class="membership-item-icon">❓</div>
                <h3>ヘルプ</h3>
                <p>よくある質問はこちら</p>
            </div>
        </div>
    `;
}

// プラン選択処理
function selectPlan(planName) {
    if (planName === 'ベーシックプラン') {
        alert('現在ベーシックプランをご利用中です。');
        return;
    }
    
    showLoading();
    
    setTimeout(() => {
        hideLoading();
        subscriptionModal.classList.remove('active');
        document.body.style.overflow = '';
        alert(`${planName}の7日間無料トライアルを開始しました！\nアップグレードが完了しました。`);
    }, 2000);
}

// キーボードナビゲーション
document.addEventListener('keydown', (e) => {
    // Escapeキーでモーダルを閉じる
    if (e.key === 'Escape') {
        if (subscriptionModal.classList.contains('active')) {
            subscriptionModal.classList.remove('active');
            document.body.style.overflow = '';
        }
        if (articleModal.classList.contains('active')) {
            articleModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
    
    // 数字キーでタブ切り替え
    if (e.key >= '1' && e.key <= '5') {
        e.preventDefault();
        const tabIndex = parseInt(e.key) - 1;
        const targetTab = ['sleep-data', 'pod-reservation', 'usage-status', 'article-feed', 'membership-page'][tabIndex];
        if (targetTab) {
            switchTab(targetTab);
        }
    }
});

// リサイズ時のチャート調整
window.addEventListener('resize', () => {
    if (sleepChart) {
        sleepChart.resize();
    }
});

// (以下、その他の補助関数は変更なし)

// アプリのメタデータ
const APP_VERSION = '1.1.0';
const BUILD_DATE = '2025-06-27';

console.log(`🌙 kamin App v${APP_VERSION} (${BUILD_DATE})`);
console.log('✨ アニメーション豊富な睡眠管理アプリへようこそ！');
