# Sensitive keywords
SENSITIVE_KEYWORDS = [
    "pornografi", "cinsel", "istismar", "taciz", "şiddet",
    "çıplak", "mahrem", "gizlilik", "tehdit", "uyuşturucu",
    "hakaret", "nefret", "intihar", "tecavüz", "şantaj", "suç",
    "çocuk pornografisi", "çocuk istismarı", "çocuk tacizi", "çocuk şiddeti", "çocuğa şiddet", "çocuğa zarar"
]

def is_sensitive_keyword(text):
    text_lc = text.lower()
    return any(kw in text_lc for kw in SENSITIVE_KEYWORDS)
