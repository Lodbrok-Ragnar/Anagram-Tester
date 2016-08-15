
// Anagram tester
function getUserInput()
{
    var firstWord = document.getElementById('firstWord').value;
    var secondWord = document.getElementById('secondWord').value;
    var result = document.getElementById('result');

    if (/\d/.test(firstWord) || /\d/.test(secondWord)) //prevents numbers from being entered
    {
        result.textContent = 'You must only submit words or phrases, no numbers please.';
    }
    else
    {
      //normalizes to regular expression
      var regex = /[\W ]/gi;
      var normalizedFirstWord = firstWord.replace(regex, '')
      var normalizedSecondWord = secondWord.replace(regex, '');

      //case when user enters duplicate word/phrases or empty string
      if(normalizedFirstWord === normalizedSecondWord || normalizedFirstWord === '' || normalizedSecondWord === '')
      {
      result.textContent = 'You submitted identical words or nothing at all, try again.';
      }
      //This is the core logic for anagram test:
      // 1. Ensure that the first normalized string is at least 1 character in length AND
      // 2. The length of both normalized strings is the same AND
      // 3. We determine if the split, sorted, and joined characters of each string is equal
      else if(
        normalizedFirstWord.length > 0 &&
        normalizedFirstWord.length === normalizedSecondWord.length &&
        normalizedFirstWord.toLowerCase().split('').sort().join('') === normalizedSecondWord.toLowerCase().split('').sort().join('')
      // In the future I may want to optimize this with a histogram approach (e.g. two dimensional array of each character - character + count)
      )
      {
      result.textContent = 'Your input, ' + firstWord + ' // ' + secondWord + ', is an anagram';
      }
      else
      {
      result.textContent = 'Your input, ' + firstWord + ' // ' + secondWord + ', is not an anagram, try again!';
      }
    }
};

//event listener for user submission
var subButton = document.getElementById('subButton');
subButton.addEventListener('click', getUserInput, false);
