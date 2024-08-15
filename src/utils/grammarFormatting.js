export const getIndefiniteArticle = (str) => {
    if (!str) return 'a';
    const startsWithVowel = /^[aeiouAEIOU]/.test(str);
    return startsWithVowel ? 'an' : 'a';
  }