
import { TranslationDictionary, Language } from './types';

export const translations: TranslationDictionary = {
  appTitle: {
    en: 'SleighTracker 3000', fr: 'Traqueur de Traîneau 3000', es: 'Rastreador de Trineo 3000', de: 'Schlitten-Tracker 3000', it: 'Tracker della Slitta 3000',
    pt: 'Rastreador de Trenó 3000', nl: 'Slee Tracker 3000', ru: 'Трекер Саней 3000', zh: '雪橇追踪器 3000', ja: 'そりトラッカー 3000',
    ko: '썰매 추적기 3000', ar: 'متتبع الزلاجة 3000', hi: 'स्ली ट्रैकर 3000', tr: 'Kızak Takipçisi 3000', pl: 'Śledzik Sań 3000',
    sv: 'Slädspårare 3000', no: 'Sledetrakter 3000', da: 'Slædesporer 3000', fi: 'Rekiseuranta 3000', el: 'Ιχνηλάτης Έλκηθρου 3000'
  },
  households: {
    en: 'Households', fr: 'Foyers', es: 'Hogares', de: 'Haushalte', it: 'Famiglie', pt: 'Lares', nl: 'Huishoudens', ru: 'Домохозяйства', zh: '住户', ja: '世帯',
    ko: '가구', ar: 'منازل', hi: 'परिवार', tr: 'Haneler', pl: 'Gospodarstwa', sv: 'Hushåll', no: 'Husholdninger', da: 'Husstande', fi: 'Kotitaloudet', el: 'Νοικοκυριά'
  },
  kidsVisited: {
    en: 'Kids Visited', fr: 'Enfants visités', es: 'Niños visitados', de: 'Besuchte Kinder', it: 'Bambini visitati', pt: 'Crianças visitadas', nl: 'Kinderen bezocht', ru: 'Посещено детей', zh: '已拜访儿童', ja: '訪問した子供たち',
    ko: '방문한 아이들', ar: 'الأطفال المزارون', hi: 'देखे गए बच्चे', tr: 'Ziyaret Edilen Çocuklar', pl: 'Odwiedzone dzieci', sv: 'Besökta barn', no: 'Besøkte barn', da: 'Besøgte børn', fi: 'Vieraillut lapset', el: 'Παιδιά που επισκέφθηκαν'
  },
  giftsSent: {
    en: 'Gifts Delivered', fr: 'Cadeaux livrés', es: 'Regalos entregados', de: 'Geschenke geliefert', it: 'Regali consegnati', pt: 'Presentes entregues', nl: 'Geschenken bezorgd', ru: 'Подарков доставлено', zh: '送达礼物', ja: '届けられたギフト',
    ko: '배달된 선물', ar: 'الهدايا المسلمة', hi: 'उपहार वितरित', tr: 'Teslim Edilen Hediyeler', pl: 'Dostarczone prezenty', sv: 'Levererade presenter', no: 'Leverte gaver', da: 'Leverede gaver', fi: 'Toimitetut lahjat', el: 'Δώρα που παραδόθηκαν'
  },
  completion: {
    en: 'Progress', fr: 'Progression', es: 'Progreso', de: 'Fortschritt', it: 'Progresso', pt: 'Progresso', nl: 'Voortgang', ru: 'Прогресс', zh: '进度', ja: '進行状況',
    ko: '진행 상황', ar: 'التقدم', hi: 'प्रगति', tr: 'İlerleme', pl: 'Postęp', sv: 'Framsteg', no: 'Fremdrift', da: 'Fremskridt', fi: 'Edistyminen', el: 'Πρόοδος'
  },
  target: {
    en: 'Target', fr: 'Objectif', es: 'Objetivo', de: 'Ziel', it: 'Traguardo', pt: 'Meta', nl: 'Doel', ru: 'Цель', zh: '目标', ja: '目標',
    ko: '목표', ar: 'الهدف', hi: 'लक्ष्य', tr: 'Hedef', pl: 'Cel', sv: 'Mål', no: 'Mål', da: 'Mål', fi: 'Tavoite', el: 'Στόχος'
  },
  nextTarget: {
    en: 'Next Target', fr: 'Cible suivante', es: 'Próximo objetivo', de: 'Nächstes Ziel', it: 'Prossimo obiettivo', pt: 'Próximo alvo', nl: 'Volgende doel', ru: 'Следующая цель', zh: '下一个目标', ja: '次の目的地',
    ko: '다음 목표', ar: 'الهدف التالي', hi: 'अगला लक्ष्य', tr: 'Sıradaki Hedef', pl: 'Następny cel', sv: 'Nästa mål', no: 'Neste mål', da: 'Næste mål', fi: 'Seuraava kohde', el: 'Επόμενος στόχος'
  },
  setDestination: {
    en: 'Set Your Home', fr: 'Définir votre maison', es: 'Configurar tu hogar', de: 'Zuhause festlegen', it: 'Imposta la tua casa', pt: 'Definir sua casa', nl: 'Stel je huis in', ru: 'Указать ваш дом', zh: '设置您的家', ja: '自宅を設定',
    ko: '집 설정', ar: 'حدد منزلك', hi: 'अपना घर सेट करें', tr: 'Evinizi Ayarlayın', pl: 'Ustaw swój dom', sv: 'Ange ditt hem', no: 'Angi ditt hjem', da: 'Indstil dit hjem', fi: 'Aseta kotisi', el: 'Ορισμός σπιτιού'
  },
  locate: {
    en: 'LOCATE', fr: 'LOCALISER', es: 'LOCALIZAR', de: 'LOKALISIEREN', it: 'LOCALIZZA', pt: 'LOCALIZAR', nl: 'LOKALISEREN', ru: 'НАЙТИ', zh: '定位', ja: '特定する',
    ko: '위치 찾기', ar: 'تحديد الموقع', hi: 'पता लगाएं', tr: 'KONUMLANDIR', pl: 'ZLOKALIZUJ', sv: 'LOKALISERA', no: 'LOKALISER', da: 'LOKALISER', fi: 'PAIKANNA', el: 'ΕΝΤΟΠΙΣΜΟΣ'
  },
  everyoneAsleep: {
    en: 'Everyone Asleep', fr: 'Tout le monde dort', es: 'Todos duermen', de: 'Alle schlafen', it: 'Tutti dormono', pt: 'Todos dormindo', nl: 'Iedereen slaapt', ru: 'Все спят', zh: '大家都在睡觉', ja: 'みんな寝ている',
    ko: '모두 취침 중', ar: 'الجميع نائم', hi: 'सब सो रहे हैं', tr: 'Herkes Uyuyor', pl: 'Wszyscy śpią', sv: 'Alla sover', no: 'Alle sover', da: 'Alle sover', fi: 'Kaikki nukkuvat', el: 'Όλοι κοιμούνται'
  },
  peopleInRoom: {
    en: 'People in Room', fr: 'Gens dans la pièce', es: 'Gente en la sala', de: 'Leute im Raum', it: 'Persone nella stanza', pt: 'Pessoas na sala', nl: 'Mensen in kamer', ru: 'Люди в комнате', zh: '房间里有人', ja: '部屋に人がいる',
    ko: '방에 사람 있음', ar: 'أشخاص في الغرفة', hi: 'कमरे में लोग', tr: 'Odada Birileri Var', pl: 'Ludzie w pokoju', sv: 'Folk i rummet', no: 'Folk i rommet', da: 'Folk i rummet', fi: 'Ihmisiä huoneessa', el: 'Άτομα στο δωμάτιο'
  },
  estimatedWindow: {
    en: 'Estimated Window', fr: 'Fenêtre estimée', es: 'Ventana estimada', de: 'Geschätztes Zeitfenster', it: 'Finestra stimata', pt: 'Janela estimada', nl: 'Geschatte tijd', ru: 'Ожидаемое окно', zh: '预计时间窗', ja: '予定時間帯',
    ko: '예상 시간대', ar: 'النافذة المقدرة', hi: 'अनुमानित समय', tr: 'Tahmini Zaman', pl: 'Szacowane okno', sv: 'Beräknat fönster', no: 'Anslått tidsvindu', da: 'Anslået tidsvindue', fi: 'Arvioitu aikaikkuna', el: 'Εκτιμώμενο παράθυρο'
  },
  successRate: {
    en: 'Success Rate', fr: 'Taux de réussite', es: 'Tasa de éxito', de: 'Erfolgsquote', it: 'Tasso di successo', pt: 'Taxa de sucesso', nl: 'Succespercentage', ru: 'Успешность', zh: '成功率', ja: '成功率',
    ko: '성공률', ar: 'معدل النجاح', hi: 'सफलता दर', tr: 'Başarı Oranı', pl: 'Wskaźnik sukcesu', sv: 'Framgångsgrad', no: 'Suksessrate', da: 'Succesrate', fi: 'Onnistumisprosentti', el: 'Ποσοστό επιτυχίας'
  },
  remaining: {
    en: 'Remaining', fr: 'Restant', es: 'Restante', de: 'Verbleibend', it: 'Rimanente', pt: 'Restante', nl: 'Resterend', ru: 'Осталось', zh: '剩余', ja: '残り',
    ko: '남음', ar: 'المتبقي', hi: 'शेष', tr: 'Kalan', pl: 'Pozostało', sv: 'Kvar', no: 'Gjenstår', da: 'Tilbage', fi: 'Jäljellä', el: 'Απομένουν'
  },
  alertActivity: {
    en: 'ALERT: ACTIVITY DETECTED', fr: 'ALERTE : ACTIVITÉ DÉTECTÉE', es: 'ALERTA: ACTIVIDAD DETECTADA', de: 'ALARM: AKTIVITÄT ERKANNT', it: 'ALLERTA: ATTIVITÀ RILEVATA', pt: 'ALERTA: ATIVIDADE DETECTADA', nl: 'ALARM: ACTIVITEIT GEDETECTEERD', ru: 'ВНИМАНИЕ: ОБНАРУЖЕНА АКТИВНОСТЬ', zh: '警告：检测到活动', ja: 'アラート：活動を検知',
    ko: '경고: 활동 감지됨', ar: 'تنبيه: تم اكتشاف نشاط', hi: 'चेतावनी: गतिविधि का पता चला', tr: 'UYARI: HAREKET TESPİT EDİLDİ', pl: 'ALARM: WYKRYTO AKTYWNOŚĆ', sv: 'VARNING: AKTIVITET UPPTÄCKT', no: 'VARSEL: AKTIVITET OPPDAGET', da: 'ADVARSEL: AKTIVITET REGISTRERET', fi: 'HÄLYTYS: AKTIIVISUUTTA HAVAITTU', el: 'ΣΥΝΑΓΕΡΜΟΣ: ΑΝΙΧΝΕΥΘΗΚΕ ΔΡΑΣΤΗΡΙΟΤΗΤΑ'
  },
  santaHolding: {
    en: 'Santa is holding position until all kids are in bed.', fr: 'Santa attend que tous les enfants soient au lit.', es: 'Papá Noel espera hasta que todos los niños estén en la cama.', de: 'Weihnachtsmann wartet, bis alle Kinder im Bett sind.', it: 'Babbo Natale sta aspettando che tutti i bambini vadano a letto.', pt: 'Papai Noel está aguardando até que todas as crianças estejam na cama.', nl: 'Santa wacht tot alle kinderen in bed liggen.', ru: 'Санта ждет, пока все дети лягут спать.', zh: '圣诞老人正等待所有孩子上床睡觉。', ja: 'サンタは子供たちが全員寝るまで待機しています。',
    ko: '산타는 모든 아이들이 잠들 때까지 대기 중입니다.', ar: 'سانتا ينتظر حتى ينام جميع الأطفال.', hi: 'सांता तब तक प्रतीक्षा कर रहे हैं जब तक सभी बच्चे बिस्तर पर न चले जाएं।', tr: 'Noel Baba tüm çocuklar uyuyana kadar bekliyor.', pl: 'Mikołaj czeka, aż wszystkie dzieci pójdą spać.', sv: 'Tomten väntar tills alla barn har lagt sig.', no: 'Julenissen venter til alle barna har lagt seg.', da: 'Julemanden venter, til alle børn er i seng.', fi: 'Joulupukki odottaa, kunnes kaikki lapset ovat sängyssä.', el: 'Ο Άγιος Βασίλης περιμένει μέχρι όλα τα παιδιά να κοιμηθούν.'
  },
  myHouse: {
    en: 'MY HOUSE', fr: 'MA MAISON', es: 'MI CASA', de: 'MEIN HAUS', it: 'CASA MIA', pt: 'MINHA CASA', nl: 'MIJN HUIS', ru: 'МОЙ ДОМ', zh: '我的家', ja: '自宅',
    ko: '우리 집', ar: 'منزلي', hi: 'मेरा घर', tr: 'EVİM', pl: 'MÓJ DOM', sv: 'MITT HUS', no: 'MITT HUS', da: 'MIT HUS', fi: 'MINUN KOTINI', el: 'ΤΟ ΣΠΙΤΙ ΜΟΥ'
  },
  completed: {
    en: 'COMPLETED', fr: 'TERMINÉ', es: 'COMPLETADO', de: 'ABGESCHLOSSEN', it: 'COMPLETATO', pt: 'CONCLUÍDO', nl: 'VOLTOOID', ru: 'ЗАВЕРШЕНО', zh: '已完成', ja: '完了',
    ko: '완료됨', ar: 'مكتمل', hi: 'पूरा हुआ', tr: 'TAMAMLANDI', pl: 'UKOŃCZONO', sv: 'KLART', no: 'FULLFØRT', da: 'FÆRDIG', fi: 'VALMIS', el: 'ΟΛΟΚΛΗΡΩΘΗΚΕ'
  },
  targets: {
    en: 'TARGETS', fr: 'CIBLES', es: 'OBJETIVOS', de: 'ZIELE', it: 'OBIETTIVI', pt: 'ALVOS', nl: 'DOELEN', ru: 'ЦЕЛИ', zh: '目标', ja: '目的地',
    ko: '목표 지점', ar: 'الأهداف', hi: 'लक्ष्य', tr: 'HEDEFLER', pl: 'CELE', sv: 'MÅL', no: 'MÅL', da: 'MÅL', fi: 'KOHTEET', el: 'ΣΤΟΧΟΙ'
  },
  metrics: {
    en: 'Gift Delivery Metrics', fr: 'Mesures de livraison', es: 'Métricas de entrega', de: 'Lieferstatistiken', it: 'Metriche di consegna', pt: 'Métricas de entrega', nl: 'Bezorgstatistieken', ru: 'Метрики доставки', zh: '礼物送达指标', ja: '配送指標',
    ko: '배달 지표', ar: 'مقاييس تسليم الهدايا', hi: 'उपहार वितरण मीट्रिक', tr: 'Hediye Teslimat Verileri', pl: 'Statystyki dostaw', sv: 'Leveransstatistik', no: 'Leveringsmålinger', da: 'Leveringsstatistik', fi: 'Toimitustilastot', el: 'Στατιστικά παράδοσης'
  },
  coverage: {
    en: 'Household Coverage', fr: 'Couverture des foyers', es: 'Cobertura de hogares', de: 'Haushaltsabdeckung', it: 'Copertura famiglie', pt: 'Cobertura de lares', nl: 'Dekking huishoudens', ru: 'Охват домохозяйств', zh: '住户覆盖率', ja: '世帯カバー率',
    ko: '가구 보급률', ar: 'تغطية المنازل', hi: 'परिवार कवरेज', tr: 'Hane Kapsama Oranı', pl: 'Zasięg gospodarstw', sv: 'Hushållstäckning', no: 'Husholdningsdekning', da: 'Husstandsdækning', fi: 'Kotitalouskattavuus', el: 'Κάλυψη νοικοκυριών'
  }
};

export const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', label: 'Português', flag: '🇧🇷' },
  { code: 'nl', label: 'Nederlands', flag: '🇳🇱' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
  { code: 'ko', label: '한국어', flag: '🇰🇷' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦' },
  { code: 'hi', label: 'हिन्दी', flag: '🇮🇳' },
  { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
  { code: 'pl', label: 'Polski', flag: '🇵🇱' },
  { code: 'sv', label: 'Svenska', flag: '🇸🇪' },
  { code: 'no', label: 'Norsk', flag: '🇳🇴' },
  { code: 'da', label: 'Dansk', flag: '🇩🇰' },
  { code: 'fi', label: 'Suomi', flag: '🇫🇮' },
  { code: 'el', label: 'Ελληνικά', flag: '🇬🇷' }
];
