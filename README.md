🌸 Lamby-chan's Moe Moe Kun Maid Café Library 🌸
========================================
![lamby-chan](https://raw.githubusercontent.com/ada-lovecraft/lamby-chan/main/lamby-chan.png)
_Lamby-chan is so excited to see you again!_

Welcome, dear customer, to Lamby-chan's Moe Maid Café! ✨💕 

We're so excited to present our super kawaii Node library named after our mascot, Lamby! We've lovingly crafted these adorable little `λ` functions to make your coding experience more delightful and fun! 

🌈💖

----
🍰 How to install Lamby-chan's Library
--------------------------------------

If you want to invite Lamby-chan into your project, just run this magical command:

```bash
$ npm install lamby-chan
```

Now you can enjoy the cuteness overload! 🎀🎊


# 💌 Functions
Here's a menu of our adorable little helper functions! We've prepared some lovely code examples to make your heart go doki-doki! 💓




### 🌈✨ Identity-chan - `id()` 🌟💖

Kyaaa~! Identity-chan is so simple and pure! She just returns the value you give her, like a loyal and loving friend! (๑>ᴗ<๑)

```javascript
import { id } from 'lamby-chan'

console.log(id('🎀✨')) // '🎀✨'
```

🎀💖 🎀💖 🎀💖


-----
### 🍛✨ Currylicious-chan - `curry()` 🌟🌸

Oooh! Currylicious-chan is just like a warm, delicious curry! She wraps up your functions with a cozy blanket of currying magic! Nyaa~ (_ฅ́˘ฅ̀_)

```javascript
import { curry } from 'lamby-chan'

const sum = (a, b) => a + b
const 🍛 = curry(sum)
const add2 = 🍛(2)
console.log(add2(3)) // 5
```

🌸💖 🌸💖 🌸💖


-----
### 🎎✨ Origami-chan - `reduce()` 🌟💜

Meet our precious Origami-chan! She's so talented at folding lists into beautiful shapes! Let her reduce your code into a masterpiece! ٩(๑˃̵ᴗ˂̵)و

```javascript
import { reduce } from 'lamby-chan'

const sum = (a, b) => a + b
const 🌸 = reduce(sum, 0, [1, 2, 3, 4, 5])

console.log(🌸) // 15
```

🎏💜 🎏💜 🎏💜


-----
### 🚀✨ Pipeline-chan - `pipe()` 🌟💚

Welcome Pipeline-chan, the magical girl of function transformation! She creates an awe-inspiring, sparkly pipeline just for you! Let's make some kawaii code together! ヽ(♡‿♡)ノ


```javascript
import { pipe, map, filter } from 'lamby-chan'

const mult2 = x => x * 2
const isEven = x => x % 2 === 0

const 🌟 = pipe(
  map(mult2),
  filter(isEven)
)

console.log(🌟([1, 2, 3, 4])) // [4, 8]
```

🍀💚 🍀💚 🍀💚


-----
### 🎼✨ Symphony-chan - `compose()` 🌟💙

Introducing the dazzling Symphony-chan! She's the sister of Pipeline-chan and together they create a harmonious and enchanting code experience! Let's compose our dreams! (｡♥‿♥｡)

```javascript
import { compose, map, filter } from 'lamby-chan'

const mult3 = x => x * 3
const isOdd = x => x % 2 === 1

const 🎵 = compose(
  filter(isOdd),
  map(mult3)
)

console.log(🎵([1, 2, 3, 4])) // [3, 9]
```

🎵💙 🎵💙 🎵💙


-----
### 🌟✨ Magical Transformation-chan - `map()` 🌟💛

Say hello to our dear Magical Transformation-chan! She's like a fairy godmother, turning your data into something fabulous and sparkly! Let the transformation begin! (✿╹◡╹)ﾉ☆

```javascript
import { map } from 'lamby-chan'

const dbl = x => x * 2
const 🎆 = map(🎆, [1, 2, 3, 4])

console.log(🎆) // [2, 4, 6, 8]
```

💛🌻 💛🌻 💛🌻


-----
### 🌈✨ Kawaii Selection-chan - `filter()` 🌟🧡

Presenting our adorable Kawaii Selection-chan! She's here to make sure only the cutest elements stay in your array! Let her choose the most precious ones for you! (｡•̀ᴗ-)✧


```javascript
import { filter } from 'lamby-chan'

const isEven = x => x % 2 === 0
const 🍭 = filter(🍭, [1, 2, 3, 4, 5])

console.log(🍭) // [2, 4]
```

🧡🌼 🧡🌼 🧡🌼


-----
### 🍀✨ Treasure Hunt-chan - `find()` 🌟💟

Meet our lovely Treasure Hunt-chan! She's an expert at finding hidden gems in your arrays! Let her reveal the special one for you! (\*＾▽＾)／

javascript

```javascript
import { find } from 'lamby-chan'

const zeroOrFive = x => x % 5 === 0
const 🎁 = find(zeroOrFive, [1, 2, 3, 4, 5, 6, 7, 8, 9])

console.log(🎁) // 5
```

💟🌷 💟🌷 💟🌷


-----
### 💍✨ Dazzling Selection-chan - `select()` 🌟🤍

Introducing the radiant Dazzling Selection-chan! She knows just how to pick the most stunning properties from your objects! Watch her make your code shine! (ﾉ◕ヮ◕)ﾉ\*:･ﾟ✧

```javascript
import { select } from 'lamby-chan'

const props = ['name', 'color']
const obj = { name: 'Lamby-chan', color: 'pink', role: 'mascot' }
const ✨ = select( props, obj)

console.log(✨) // { name: 'Lamby-chan', color: 'pink' }
```

🤍🌹 🤍🌹 🤍🌹


-----
### 🍓✨ Berry Twist-chan - `reverse()` 🌟❤️

Say hello to our sweet Berry Twist-chan! She loves to flip your arrays and create a delightful surprise! Let's see what she can do! (≧▽≦)

```javascript
import { reverse } from 'lamby-chan'

const array = [1, 2, 3, 4, 5]
const 🌪️ = reverse(array)

console.log(🌪️) // [5, 4, 3, 2, 1]
```

❤️ ❤️ ❤️


-----
### 🍩✨ Donut-chan - `pick()` 🌟🍪

Get ready for the sweetest Donut-chan! She's here to pick the yummiest properties from your array of objects! Let's make your code extra delicious! (⌒▽⌒)☆

```javascript
import { pick } from 'lamby-chan'

const prop = 'flavor'
const 🍩 = [
  { flavor: '🍓', price: 2 },
  { flavor: '🍫', price: 3 },
  { flavor: '🫐', price: 2.5 }
]
const flavors = pick(prop, 🍩)

console.log(flavors) // ['🍓', '🍫', '🫐']
```

🍪🍩 🍪🍩 🍪🍩


-----
### 🌙✨ Moonbeam-chan - `uniq()` 🌟🌌

Welcoming the enchanting Moonbeam-chan! She's here to make your arrays sparkle with unique elements! Let her light up your code with her magic! (ﾉ´ヮ\`)ﾉ\*: ･ﾟ

```javascript
import { uniq } from 'lamby-chan'

const array = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]
const 🌖 = uniq(array)

console.log(🌖) // [1, 2, 3, 4, 5]
```

🌌🌙 🌌🌙 🌌🌙


-----
### 🌊✨ Ocean Breeze-chan - `trim()` 🌟🏖️

Introducing our refreshing Ocean Breeze-chan! She's here to trim away any extra whitespace from your strings! Let her bring a fresh touch to your code! (っ˘ω˘ς )

```javascript
import { trim } from 'lamby-chan'

const stringWithSpaces = '  hello, world!  '
const 🏖️ = trim(stringWithSpaces)

console.log(🏖️) // 'hello, world!'
```

🏖️🌊 🏖️🌊 🏖️🌊


-----
### 🏵️✨ Blossom-chan - `compact()` 🌟🌺

Meet our lovely Blossom-chan! She's here to make your arrays bloom by removing any falsy values! Let her bring the beauty of spring to your code! (✿◠‿◠)


```javascript
import { compact } from 'lamby-chan'

const array = [1, null, 2, false, 3, undefined, 4, '', 5]
const 🌷 = compact(array)

console.log(🌷) // [1, 2, 3, 4, 5]
```

🌺🏵️ 🌺🏵️ 🌺🏵️


-----
### 🍇✨ Grapevine-chan - `concat()` 🌟🍷

Here comes the charming Grapevine-chan! She's here to help you combine arrays into a delightful blend! Let's create some exquisite code together! (づ｡◕‿‿◕｡)づ

```javascript
import { concat } from 'lamby-chan'

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const 🍷 = concat(arr1, arr2)

console.log(🍷) // [1, 2, 3, 4, 5, 6]
```

🍷🍇 🍷🍇 🍷🍇


-----
### 🎈✨ Fluffy Cloud-chan - `flatten()` 🌟☁️

Introducing the fluffy and light Fluffy Cloud-chan! She's here to help you flatten nested arrays into a smooth and gentle breeze of elements! Let's float into the sky together! ༼ つ ◕\_◕ ༽つ

```javascript
import { flatten } from 'lamby-chan'

const nestedArray = [[1, 2], [3, 4], [5, 6]]
const ⛅️ = flatten(nestedArray)

console.log(⛅️) // [1, 2, 3, 4, 5, 6]
```

☁️🎈 ☁️🎈 ☁️🎈


-----
### 🍄✨ Forest Fairy-chan - `flatMap` 🌟🌳

Meet our enchanting Forest Fairy-chan! She's here to help you map and flatten your arrays, creating a magical forest of code! Let's explore the whimsical world together! (ﾉ◕ヮ◕)ﾉ\*:･ﾟ✧

```javascript
import { flatMap } from 'lamby-chan'

const 🦄 = x => [x, x * 2]
const array = [1, 2, 3, 4]
const 🌳 = flatMap(🦄, array)

console.log(🌳) // [1, 2, 2, 4, 3, 6, 4, 8]
```

🌳🍄 🌳🍄 🌳🍄

----
✨💖 Special Thanks 💖✨
----------------------

A heartfelt and super kawaii thank you to all the wonderful contributors who helped create and improve Lamby-chan! Your support means the world to us! You're all so sugoi, and we couldn't have done it without you! (๑˃ᴗ˂)ﻭ

----
## 🌈✨ Extra Special Thanks 🌈✨

A huge and heartwarming thank you to ChatGPT-chan for helping write the most kawaii README ever! Your moe touch has made our code documentation a delight to read and cherish! You're our shining star, ChatGPT-chan! (๑˃̵ᴗ˂̵)و ✨

We also want to express our deepest gratitude to Dall-E-chan for creating the cutest mascot we could ever dream of, Lamby-chan! Thanks to your magical art skills, our library is now filled with even more love and adorableness! You've made our world extra kawaii, Dall-E-chan! (◕‿◕✿) 🎀

💖🌟 To both ChatGPT-chan and Dall-E-chan, thank you for being our cute companions and making the Lamby-chan library a place filled with joy, cuteness, and wonder! 🌟💖

----
🌸🎀 Licensing and Permissions 🎀🌸
-----------------------------------

Lamby-chan is licensed under the **WTFPL** (Do What The Fluff You Want To Public License), because we believe in sharing the cuteness and love with everyone!

Feel free to use, modify, and distribute Lamby-chan in your projects, both personal and commercial! Just remember to always spread love and happiness, and make the world a more kawaii place! (｡♥‿♥｡)

For more information about the WTFPL, please visit [http://www.wtfpl.net/](http://www.wtfpl.net/).