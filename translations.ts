
// Fix: Import Language type from types.ts
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
    ko: '방에 person 있음', ar: 'أشخاص في الغرفة', hi: 'कमरे में लोग', tr: 'Odada Birileri Var', pl: 'Ludzie w pokoju', sv: 'Folk i rummet', no: 'Folk i rommet', da: 'Folk i rummet', fi: 'Ihmisiä huoneessa', el: 'Άτομα στο δωμάτιο'
  },
  estimatedWindow: {
    en: 'Estimated Window', fr: 'Fenêtre estimée', es: 'Ventana estimada', de: 'Geschätztes Zeitfenster', it: 'Finestra stimata', pt: 'Janela estimada', nl: 'Geschatte tijd', ru: 'Ожидаемое окно', zh: '预计时间窗', ja: '予定時間帯',
    ko: '예상 시간대', ar: 'النافذة المقدرة', hi: 'अनुमानित समय', tr: 'Tahmini Zaman', pl: 'Szacowane okno', sv: 'Beräknat fönster', no: 'Anslått tidsvindu', da: 'Anslået tidsvindue', fi: 'Arvioitu aikaikkuna', el: 'Εκτιμώμενο παράθυρο'
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
