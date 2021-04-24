function lookupKanjiSingle(kanjiChar) {
  return DICTIONARY.filter(it=>it.kanji === kanjiChar)[0];
}
function firstVietWord(viet) {
  return viet.trim().split(',')[0].trim();
}
