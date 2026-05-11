// ============================================
// 長野県4エリア × 3カテゴリのスポットデータ
// ※ Google Places API取得時にこのデータを差し替え予定
// ============================================

const SPOT_DATA = {
  // 北信エリア（長野市・善光寺・戸隠・小布施・志賀高原など）
  hokushin: {
    scenery: [
      {
        name: "戸隠連峰",
        desc: "北信を代表する雄大な山並み。鏡池に映る紅葉は絶景として知られています。",
        photo: "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?w=600&q=80"
      },
      {
        name: "志賀高原",
        desc: "標高1,500mを超える高原リゾート。四季折々の景観と高山植物が楽しめます。",
        photo: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=600&q=80"
      },
      {
        name: "野尻湖",
        desc: "信濃町にあるナウマンゾウ化石で有名な湖。周辺には原生林が広がります。",
        photo: "https://images.unsplash.com/photo-1502495856053-e92ce20a7c45?w=600&q=80"
      }
    ],
    culture: [
      {
        name: "善光寺",
        desc: "1400年の歴史を持つ無宗派の寺院。「一生に一度は善光寺参り」と言われる名刹。",
        photo: "https://images.unsplash.com/photo-1545569310-a974ad22fc94?w=600&q=80"
      },
      {
        name: "戸隠神社",
        desc: "創建2000年以上の歴史を持つ古社。杉並木の参道と奥社が神秘的な雰囲気。",
        photo: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=600&q=80"
      },
      {
        name: "北斎館",
        desc: "葛飾北斎の作品を展示する小布施の美術館。晩年の傑作を間近で鑑賞できます。",
        photo: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=600&q=80"
      }
    ],
    food: [
      {
        name: "戸隠そば",
        desc: "日本三大そばの一つ。ぼっち盛りと呼ばれる独特の盛り付けが特徴。",
        photo: "https://images.unsplash.com/photo-1516560054-22da3d83a35c?w=600&q=80"
      },
      {
        name: "小布施の栗菓子",
        desc: "栗の名産地・小布施で作られる栗あんや栗おこわ。秋の朱雀モンブランは絶品。",
        photo: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&q=80"
      },
      {
        name: "おやき",
        desc: "小麦粉の生地に野菜やあんこを包んで焼いた長野の郷土料理。",
        photo: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80"
      }
    ]
  },

  // 中信エリア（松本・安曇野・上高地・木曽など）
  chushin: {
    scenery: [
      {
        name: "上高地",
        desc: "穂高連峰を望む山岳リゾート。河童橋から見る梓川と山々の景色は日本屈指の絶景。",
        photo: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=600&q=80"
      },
      {
        name: "安曇野",
        desc: "北アルプスを背景に広がる田園風景。わさび田と清流が美しい癒しのエリア。",
        photo: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=600&q=80"
      },
      {
        name: "白骨温泉",
        desc: "乳白色の湯が湧く秘湯。深い山あいに佇む温泉地で四季を感じられます。",
        photo: "https://images.unsplash.com/photo-1583416750470-965b2707b355?w=600&q=80"
      }
    ],
    culture: [
      {
        name: "松本城",
        desc: "現存12天守の一つで国宝。黒漆塗りの優美な姿から「烏城」とも呼ばれます。",
        photo: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80"
      },
      {
        name: "奈良井宿",
        desc: "中山道の宿場町として栄えた木曽路の街並み。江戸時代の風情が残ります。",
        photo: "https://images.unsplash.com/photo-1528164344705-47542687000d?w=600&q=80"
      },
      {
        name: "安曇野ちひろ美術館",
        desc: "いわさきちひろの作品を展示する美術館。北アルプスを望む静かな環境にあります。",
        photo: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=600&q=80"
      }
    ],
    food: [
      {
        name: "信州そば",
        desc: "松本・安曇野エリアの名店で味わう本格的な信州そば。新そばの香りは格別。",
        photo: "https://images.unsplash.com/photo-1516560054-22da3d83a35c?w=600&q=80"
      },
      {
        name: "山賊焼き",
        desc: "鶏肉を醤油・にんにくで漬け込んで揚げた松本の郷土料理。豪快な一品。",
        photo: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&q=80"
      },
      {
        name: "安曇野わさび",
        desc: "清流で育った本わさび。生わさびを使った料理やわさびソフトクリームが人気。",
        photo: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80"
      }
    ]
  },

  // 東信エリア（小諸・上田・佐久・軽井沢など）
  toshin: {
    scenery: [
      {
        name: "軽井沢",
        desc: "高原の避暑地として知られるリゾート地。白糸の滝や雲場池など自然スポットが豊富。",
        photo: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=600&q=80"
      },
      {
        name: "浅間山",
        desc: "東信を象徴する活火山。麓の高峰高原からは四季折々の絶景が望めます。",
        photo: "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?w=600&q=80"
      },
      {
        name: "懐古園",
        desc: "小諸城址を整備した公園。約500本の桜と紅葉の名所として有名。",
        photo: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=600&q=80"
      }
    ],
    culture: [
      {
        name: "上田城跡",
        desc: "真田氏ゆかりの名城。徳川軍を二度退けた歴史を持つ難攻不落の城跡です。",
        photo: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80"
      },
      {
        name: "別所温泉・安楽寺",
        desc: "信州最古の温泉郷と、国宝の八角三重塔を持つ古刹。「信州の鎌倉」と呼ばれます。",
        photo: "https://images.unsplash.com/photo-1545569310-a974ad22fc94?w=600&q=80"
      },
      {
        name: "島崎藤村ゆかりの地",
        desc: "小諸義塾で教鞭をとった藤村ゆかりの記念館。文学の世界に浸れます。",
        photo: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=600&q=80"
      }
    ],
    food: [
      {
        name: "信州くるみそば",
        desc: "小諸名物のくるみダレで食べるそば。香ばしいくるみの風味が特徴。",
        photo: "https://images.unsplash.com/photo-1516560054-22da3d83a35c?w=600&q=80"
      },
      {
        name: "マンズワイン",
        desc: "小諸の老舗ワイナリー。長野の気候で育てたぶどうから生まれる本格ワイン。",
        photo: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&q=80"
      },
      {
        name: "軽井沢の高原野菜",
        desc: "標高1,000mで育った新鮮野菜を使った地元レストランの料理が人気。",
        photo: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80"
      }
    ]
  },

  // 南信エリア（飯田・伊那・駒ヶ根・諏訪・天竜峡など）
  nanshin: {
    scenery: [
      {
        name: "天竜峡",
        desc: "天竜川が刻んだ渓谷美。舟下りで眺める奇岩と渓谷の景観は一見の価値あり。",
        photo: "https://images.unsplash.com/photo-1502495856053-e92ce20a7c45?w=600&q=80"
      },
      {
        name: "駒ヶ岳ロープウェイ",
        desc: "標高2,612mの千畳敷カールへ。日本屈指の高山植物の宝庫。",
        photo: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=600&q=80"
      },
      {
        name: "諏訪湖",
        desc: "信州最大の湖。夏は花火、冬は御神渡りなど四季を通して景色が楽しめます。",
        photo: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=600&q=80"
      }
    ],
    culture: [
      {
        name: "諏訪大社",
        desc: "全国に約25,000ある諏訪神社の総本社。御柱祭で全国に知られる古社です。",
        photo: "https://images.unsplash.com/photo-1545569310-a974ad22fc94?w=600&q=80"
      },
      {
        name: "高遠城址公園",
        desc: "「天下第一の桜」と称される桜の名所。樹齢130年を超えるタカトオコヒガンザクラが咲き誇ります。",
        photo: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=600&q=80"
      },
      {
        name: "飯田の人形浄瑠璃",
        desc: "300年以上の歴史を持つ伝統芸能。飯田市内の各地で上演されています。",
        photo: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=600&q=80"
      }
    ],
    food: [
      {
        name: "ソースかつ丼",
        desc: "駒ヶ根・伊那地域のご当地丼。サクサクのカツに特製ソースが絶妙にマッチ。",
        photo: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&q=80"
      },
      {
        name: "信州サーモン",
        desc: "伊那谷の清流で育った大型ニジマス。刺身や寿司で味わう絶品の地魚です。",
        photo: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80"
      },
      {
        name: "五平餅",
        desc: "ご飯を串に刺して甘辛いタレで焼いた郷土食。南信の道の駅で広く味わえます。",
        photo: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80"
      }
    ]
  }
};

// エリア表示名
const AREA_LABELS = {
  hokushin: "北信エリア",
  chushin: "中信エリア",
  toshin: "東信エリア",
  nanshin: "南信エリア"
};

// カテゴリ表示名
const CATEGORY_LABELS = {
  scenery: "景色",
  culture: "文化",
  food: "食"
};

// シーズン表示名
const SEASON_LABELS = {
  spring: "春",
  summer: "夏",
  autumn: "秋",
  winter: "冬"
};

// 同行者表示名
const COMPANION_LABELS = {
  solo: "1人旅",
  couple: "2人旅",
  group: "グループ旅",
  family: "家族旅"
};

// 旅の好み表示名
const PREFERENCE_LABELS = {
  history: "歴史伝統景観",
  culture: "寺社仏閣文化",
  garden: "庭園景観",
  nature: "雄大な自然",
  onsen: "温泉地温泉",
  gourmet: "ご当地美食"
};
