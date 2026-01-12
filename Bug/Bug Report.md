### 🐞 Defect Report

Bug ID : BUG-001  
Issue : AI Not Consistence when test TCP06_Successfully Search movies genre horror, bad rating, and released in 2020 consistence in 3 times searching on \tests\AISpesificBehaviours_test.spec.js.
Description : The AI not consistence by showing horror movies not only in 2020, because the user is asking horror movies only in 2020.
Expected result : AI must be consistence showing the horror movies only in 2020.
Actual Result : [Bug-001.jpg] (https://github.com/QA-Yusuf/PopulixAIMovie/blob/2c7f684f63b28c18b7d99d35a5ee31a16b41166d/Bug/Bug-001.jpg)

Bug ID : BUG-002
Issue : AI give fiction answer (hallucination) when test TCN04_Unsuccessfully Search horror movies and released in 2099 on \tests\AISpesificBehaviours_test.spec.js.
Description : The AI giving fiction answer about horror movies and released in 2099 by showing the movies that not released in 2099.
Expected result : AI must not showing the result for horror movies and released in 2099, because 2099 is still far and we don't know what the horror movies will be released on that year.
Actual Result : [Bug-002.jpg](https://github.com/QA-Yusuf/PopulixAIMovie/blob/2c7f684f63b28c18b7d99d35a5ee31a16b41166d/Bug/Bug-002.jpg)

Bug ID : BUG-003
Issue : AI give the wrong answer for the year when test TCP07_Successfully Search comedy movies last year on \tests\AISpesificBehaviours_test.spec.js.
Description : The AI giving wrong answer about comedy movies last year by showing comedy movies in not 2024, because now is 2025 so last year is 2024.
Expected result : AI must showing comedy movies in 2024.
Actual Result : [Bug-003.jpg](https://github.com/QA-Yusuf/PopulixAIMovie/blob/2c7f684f63b28c18b7d99d35a5ee31a16b41166d/Bug/Bug-003.jpg)
