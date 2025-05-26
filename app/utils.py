# Sensitive keywords
SENSITIVE_KEYWORDS = [
    "çocuk", "pornografi", "cinsel", "istismar", "taciz", "şiddet",
    "çıplak", "mahrem", "gizlilik", "tehdit", "uyuşturucu",
    "hakaret", "nefret", "intihar", "tecavüz", "şantaj", "veri", "suç"
]

def is_sensitive_keyword(text):
    text_lc = text.lower()
    return any(kw in text_lc for kw in SENSITIVE_KEYWORDS)
