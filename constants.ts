import { DayItinerary, ActivityType } from './types';

export const ITINERARY_DATA: DayItinerary[] = [
  {
    date: '1/1',
    weekday: '四',
    title: '出發！福岡大冒險',
    highlightColor: 'bg-chiikawa-blue',
    weatherForecast: { temp: '6°C - 11°C', condition: '多雲時晴', type: 'cloudy' },
    items: [
      { time: '10:32', title: '高鐵 嘉義出發', type: ActivityType.TRANSPORT },
      { time: '11:38', title: '抵達 高鐵桃園', type: ActivityType.TRANSPORT },
      { 
        time: '14:45', 
        title: '飛機起飛 ✈️', 
        description: '記得提早 2-3 小時到機場報到！可以在飛機上先填好入境卡 (Visit Japan Web)，這樣出關會快很多喔！(｡•̀ᴗ-)✧', 
        type: ActivityType.TRANSPORT
      },
      { 
        time: '18:00', 
        title: '抵達福岡機場', 
        description: '福岡機場離市區超近！出關後推薦搭計程車 (約 15 分鐘，車資約 2000 日圓)，一家人有行李這樣最輕鬆。', 
        link: 'https://www.google.com/maps/search/?api=1&query=Fukuoka+Airport',
        type: ActivityType.TRANSPORT
      },
      { time: '19:00', title: '出關', type: ActivityType.ACTIVITY },
      { 
        time: '19:11', 
        title: '抵達飯店', 
        description: 'ランドーホテル福岡アネックス (Randor Hotel Fukuoka Annex)。寬敞的公寓式酒店，有小廚房與洗衣機，非常適合親子！Check-in 時記得確認隔天早餐的安排喔。', 
        link: 'https://www.google.com/maps/search/?api=1&query=Randor+Hotel+Fukuoka+Annex', 
        type: ActivityType.HOTEL
      },
      { 
        time: '20:00', 
        title: '附近覓食 🍜', 
        description: '博多車站周邊美食攻略：\n1. 「博多拉麵 Shin-Shin」：在地人也愛的豚骨拉麵，麵條細滑！\n2. 「牛腸鍋 おおやま (Oyama)」：想吃道地九州味就選這個，味噌口味最推。\n3. 如果太累，去車站內的「Il Forno del Mignon」買剛出爐的小可頌，再去超商買炸雞與布丁回飯店開派對！(* >ω<)', 
        link: 'https://www.google.com/maps/search/?api=1&query=Hakata+Station+Food',
        type: ActivityType.FOOD 
      },
    ]
  },
  {
    date: '1/2',
    weekday: '五',
    title: '熊本熊與麵包超人',
    highlightColor: 'bg-chiikawa-pink',
    weatherForecast: { temp: '5°C - 12°C', condition: '晴朗舒適', type: 'sunny' },
    items: [
      { time: '09:40', title: '出發取車', type: ActivityType.ACTIVITY },
      { 
        time: '10:00', 
        title: '取車', 
        description: 'オリックスレンタカー (ORIX Rent-A-Car) 博多駅博多口店。\n⚠️ 重要提醒：\n1. 必帶：台灣駕照正本 + 日文譯本 + 護照。\n2. 取車時請仔細檢查車身刮痕並拍照留底。\n3. 設定導航到麵包超人博物館停車場。', 
        link: 'https://www.google.com/maps/search/?api=1&query=Orix+Rent-A-Car+Hakata+Station+Hakataguchi', 
        type: ActivityType.TRANSPORT
      },
      { 
        time: '10:30', 
        title: '麵包超人博物館', 
        description: '位於博多 Riverain Mall 的 5-6 樓。\n🎈 必玩重點：\n1. 每天定時的角色歌舞表演 (請先看官網時刻表)。\n2. 「果醬爺爺的麵包工廠」：必買角色造型麵包！雖然有點貴但做工超精緻，拍照一百分。\n3. 戶外球場區可以玩巨大的彈力球。', 
        link: 'https://www.google.com/maps/search/?api=1&query=Fukuoka+Anpanman+Children%27s+Museum+in+Mall',
        type: ActivityType.ACTIVITY
      },
      { 
        time: '13:30', 
        title: '出發前往熊本', 
        description: '🚗 車程約 1.5 - 2 小時 (約 100 公里)。\n沿途走九州自動車道。推薦停靠「廣川 SA」或「北熊本 SA」休息站，那裡有賣好吃的九州土產和熱食。', 
        type: ActivityType.TRANSPORT 
      },
      { 
        time: '15:00', 
        title: 'Check in', 
        description: 'fav KUMAMOTO。\n這間飯店走時尚居家風，房間通常很大，甚至有簡易廚房。離新町電車站很近，可以體驗一下熊本的路面電車！', 
        link: 'https://www.google.com/maps/search/?api=1&query=fav+KUMAMOTO', 
        type: ActivityType.HOTEL
      },
      { 
        time: '15:30', 
        title: '櫻之馬場 城彩苑', 
        description: '位於熊本城山腳下的江戶風情商店街。\n😋 必吃推薦：\n1. 「菅乃屋」馬肉可樂餅：不敢吃生馬肉的可以試試這個，很香！\n2. 「五木屋本舖」：特製山海膽豆腐 (口感像起司)。\n3. 「香梅庵」：陣太鼓霜淇淋。\n吃飽後可以搭免費接駁車上去熊本城入口逛逛 (天守閣最後入場通常是 16:30)。', 
        link: 'https://www.google.com/maps/search/?api=1&query=Sakuranobaba+Johsaien', 
        type: ActivityType.ACTIVITY
      },
      { 
        time: '17:30', 
        title: '下通商店街 逛街吃飯', 
        description: '熊本最熱鬧的拱廊商店街。\n🍽️ 晚餐選擇：\n1. 「勝烈亭」：超厚切的鹿兒島黑豚炸豬排，排隊名店！\n2. 「桂花拉麵」：熊本拉麵代表，蒜油味很重很香。\n3. 「紅蘭亭」：源自熊本的太平燕 (像粉絲湯)，清爽好吃。', 
        link: 'https://www.google.com/maps/search/?api=1&query=Kumamoto+Shimotori+Shopping+Arcade',
        type: ActivityType.FOOD 
      },
    ]
  },
  {
    date: '1/3',
    weekday: '六',
    title: '高千穗神話與由布院',
    highlightColor: 'bg-chiikawa-yellow',
    weatherForecast: { temp: '-1°C - 8°C', condition: '乾冷晴天', type: 'sunny' },
    items: [
      { 
        time: '08:30', 
        title: '出發高千穗', 
        description: '🚗 車程約 2 小時 (約 80 公里)。\n這段路會進入山區，風景壯麗，但路況較蜿蜒，請小心駕駛。早點出發是為了避開人潮！', 
        type: ActivityType.TRANSPORT 
      },
      { 
        time: '10:00', 
        title: '高千穗小火車', 
        description: 'Amaterasu Railway (高千穗天照鐵道)。\n這是一輛超可愛的露天小火車 (Super Cart)！最精彩的是會停在 105 公尺高的鐵橋上，司機還會吹泡泡，非常夢幻。因為是露天的，冬天請務必戴帽子圍巾保暖！', 
        link: 'https://www.google.com/maps/search/?api=1&query=Takachiho+Amaterasu+Railway',
        type: ActivityType.ACTIVITY
      },
      { 
        time: '11:00', 
        title: '高千穗峽', 
        description: '被指定為國家名勝的柱狀節理峽谷。\n🛶 划船資訊：非常熱門，通常需要提前一個月在網上預約。如果沒約到，走步道欣賞真名井瀑布也非常美，沿途有「幸福的黃色郵筒」可以拍照。', 
        link: 'https://www.google.com/maps/search/?api=1&query=Takachiho+Gorge',
        type: ActivityType.ACTIVITY
      },
      { 
        time: '12:00', 
        title: '午餐時光', 
        description: '兩家風格截然不同的選擇：\n1. 「御食事処 田舎屋」：體驗流水麵！麵會從竹子流下來，考驗筷子功力，小朋友會很愛。\n2. 「高千穂 鶏の炭火焼 吾平店」：自己動手烤土雞，肉質有嚼勁，炭火香氣十足。', 
        link: 'https://www.google.com/maps/search/?api=1&query=Takachiho+Nagashi+Somen',
        type: ActivityType.FOOD 
      },
      { 
        time: '14:00', 
        title: '前往由布院', 
        description: '🚗 車程約 2 小時 (約 90 公里)。\n這段路程會經過阿蘇山周邊，運氣好的話可以看到壯闊的草原與火山景觀。', 
        type: ActivityType.TRANSPORT 
      },
      { 
        time: '16:30', 
        title: '入住 Rakuten STAY', 
        description: 'Rakuten STAY HOUSE x WILL STYLE 湯布院川上。\n這是一棟獨棟別墅！隱私性極佳，有私人半露天溫泉池，可以全家一起泡湯。房間內有現代化的客廳和廚房，非常舒適。', 
        link: 'https://www.google.com/maps/search/?api=1&query=Rakuten+STAY+HOUSE+x+WILL+STYLE+Yufuin+Kawakami', 
        type: ActivityType.HOTEL
      },
      { 
        time: '18:00', 
        title: '晚餐：超市火鍋派對', 
        description: '去附近的「MaxValu 湯布院店」或「A-Coop」掃貨！\n🥩 必買清單：大分縣產的豐後牛 (Bungo Beef)、當地產的香菇、日本草莓、以及各式火鍋料。回到別墅自己煮火鍋，溫暖又自在。', 
        link: 'https://www.google.com/maps/search/?api=1&query=MaxValu+Yufuin',
        type: ActivityType.FOOD 
      },
    ]
  },
  {
    date: '1/4',
    weekday: '日',
    title: '動物園狂想曲',
    highlightColor: 'bg-green-100',
    weatherForecast: { temp: '2°C - 9°C', condition: '陰天微涼', type: 'cloudy' },
    items: [
      { time: '08:00', title: '早餐', description: '享受別墅早晨，把昨晚沒吃完的食材做成美味早餐。整理行李準備退房。', type: ActivityType.FOOD },
      { 
        time: '09:00', 
        title: '九州自然動物園', 
        description: '🚗 車程約 30 分鐘。African Safari。\n🦁 攻略重點：\n1. 一定要搭「Jungle Bus (叢林巴士)」，可以用長夾子直接餵獅子、熊和大象！非常刺激。\n2. 也有「自駕區」，開著自己的車進入動物區 (不可開窗)，近距離看長頸鹿從車旁走過。\n3. 「接觸區」可以抱天竺鼠、看袋鼠，非常療癒。', 
        link: 'https://www.google.com/maps/search/?api=1&query=Kyushu+African+Safari',
        type: ActivityType.ACTIVITY
      },
      { 
        time: '12:00', 
        title: '湯布院老街', 
        description: '🚗 車程約 30 分鐘。湯之坪街道。\n🛍️ 必逛：\n1. 「Yufuin Floral Village」：像童話村一樣，有愛麗絲夢遊仙境店、貓頭鷹之森。\n2. 「Snoopy 茶屋」與「Miffy Kitchen」：滿滿的角色周邊與造型麵包。\n3. 「金賞可樂餅」：排隊小吃。\n4. 「B-Speak」：超人氣生乳捲 (建議一早就去買，下午常完售)。', 
        link: 'https://www.google.com/maps/search/?api=1&query=Yufuin+Floral+Village',
        type: ActivityType.ACTIVITY
      },
      { 
        time: '16:00', 
        title: '回程福岡', 
        description: '🚗 車程約 1.5 - 2 小時 (約 110 公里)。\n週日傍晚回福岡的高速公路可能會塞車，建議預留充裕時間。可以聽聽音樂，讓孩子在車上補眠。', 
        type: ActivityType.TRANSPORT 
      },
      { 
        time: '17:30', 
        title: '入住 VJ House', 
        description: '位於福岡市區的住宿。稍微整理行李休息一下。', 
        link: 'https://www.google.com/maps/search/?api=1&query=VJ+House+Fukuoka', 
        type: ActivityType.HOTEL
      },
      { 
        time: '18:30', 
        title: '晚餐：屋台體驗', 
        description: '來到福岡一定要體驗屋台 (路邊攤) 文化！\n推薦去「中洲川端」或「天神」一帶的屋台。\n🍢 必點：關東煮 (蘿蔔必吃！)、烤明太子、豚骨拉麵。記得先上廁所再去，部分屋台不提供洗手間喔。', 
        link: 'https://www.google.com/maps/search/?api=1&query=Nakasu+Yatai',
        type: ActivityType.FOOD 
      },
    ]
  },
  {
    date: '1/5',
    weekday: '一',
    title: '太宰府祈福與購物',
    highlightColor: 'bg-purple-100',
    weatherForecast: { temp: '5°C - 11°C', condition: '陽光普照', type: 'sunny' },
    items: [
      { time: '09:30', title: '吃早餐', type: ActivityType.FOOD },
      { time: '10:00', title: '出門', type: ActivityType.ACTIVITY },
      { 
        time: '10:30', 
        title: '太宰府天滿宮', 
        description: '🚗 車程約 30 分鐘。供奉學問之神菅原道真。\n⛩️ 參拜重點：\n1. 摸摸「御神牛」的頭，據說會變聰明。\n2. 欣賞著名的「飛梅」。\n3. 參道商店街：必看「星巴克太宰府天滿宮表參道店」(隈研吾設計的木造建築)。\n4. 必吃：剛烤好的「梅枝餅」，外皮酥脆內餡香甜，推薦「かさの家 (Kasanoya)」。', 
        link: 'https://www.google.com/maps/search/?api=1&query=Dazaifu+Tenmangu',
        type: ActivityType.ACTIVITY
      },
      { 
        time: '12:20', 
        title: '鳥栖 Premium Outlets', 
        description: '🚗 車程約 30 分鐘。九州最大的 Outlet！\n🛍️ 購物攻略：\n1. 抵達後先去 Information Center 憑護照領取外國人專屬折價券。\n2. 品牌推薦：Nike, Adidas, Coach, Kate Spade, BEAMS, Lego。\n3. 午餐可在美食街解決，選擇很多。', 
        link: 'https://www.google.com/maps/search/?api=1&query=Tosu+Premium+Outlets',
        type: ActivityType.SHOPPING
      },
      { 
        time: '16:00', 
        title: '天神逛街', 
        description: '🚗 車程約 40 分鐘。回到福岡最繁華的天神區。\n1. 「天神地下街」：氣氛優雅，有很多日系女裝和雜貨。\n2. 「Parco」：年輕潮流品牌聚集。\n3. 「大名 (Daimyo)」區域：有很多古著店和特色咖啡廳 (如 Alice on Wednesday)。', 
        link: 'https://www.google.com/maps/search/?api=1&query=Tenjin+Underground+Shopping+Center',
        type: ActivityType.SHOPPING
      },
      { 
        time: '19:30', 
        title: '一蘭拉麵 總店', 
        description: '「一蘭本社総本店」。\n這棟樓掛著巨大的紅燈籠，非常壯觀！20:00-20:15 會有燈光表演音樂秀。總店限定：用「方碗」裝的拉麵！吃完看到碗底的字會很感動喔。', 
        link: 'https://www.google.com/maps/search/?api=1&query=Ichiran+Main+Office',
        type: ActivityType.FOOD
      },
    ]
  },
  {
    date: '1/6',
    weekday: '二',
    title: '再見九州',
    highlightColor: 'bg-red-100',
    weatherForecast: { temp: '7°C - 13°C', condition: '偶有陣雨', type: 'rain' },
    items: [
      { time: '10:00', title: '退房', type: ActivityType.HOTEL },
      { 
        time: '10:20', 
        title: '天神最後衝刺', 
        description: '把握最後機會補貨！\n🎁 伴手禮推薦：\n1. 「博多通りもん」：西洋風的饅頭，奶香濃郁 (必買 No.1)。\n2. 「明太子」：Fukuya 或 Yamaya 都是老牌子。\n3. 「Menbei」：明太子仙貝，鹹香酥脆，適合當辦公室伴手禮。', 
        type: ActivityType.SHOPPING 
      },
      { time: '16:00', title: '開車前往機場', description: '🚗 車程約 30 分鐘。記得預留時間塞車。', type: ActivityType.TRANSPORT },
      { 
        time: '16:30', 
        title: '還車', 
        description: '前往「オリックスレンタカー 福岡機場國際線航廈店」還車。\n⚠️ 提醒：\n1. 還車前請在附近的加油站把油加滿，並保留收據給店員檢查。\n2. 檢查車上有無遺留物品 (手機、充電線、伴手禮)。\n3. 搭乘租車公司的接駁車前往航廈。', 
        link: 'https://www.google.com/maps/search/?api=1&query=Orix+Rent-A-Car+Fukuoka+Airport+International+Terminal',
        type: ActivityType.TRANSPORT
      },
      { 
        time: '19:10', 
        title: '飛機起飛 ✈️', 
        description: '帶著滿滿的回憶回家囉！在飛機上好好休息吧。(つд⊂)', 
        type: ActivityType.TRANSPORT
      },
      { time: '20:50', title: '抵達台灣', type: ActivityType.TRANSPORT },
      { time: '22:35', title: '高鐵 桃園', type: ActivityType.TRANSPORT },
      { time: '23:30', title: '高鐵 嘉義', description: '甜蜜的家，好好休息！🏠 期待下次的旅行！', type: ActivityType.TRANSPORT },
    ]
  }
];