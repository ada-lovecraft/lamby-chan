/** @format */

// id :: a -> a
export const id = x => x

// curry :: ((a, b, ...) -> c) -> a -> b -> ... -> c
export const curry =
  fn =>
  (...args) => {
    if (args.length >= fn.length) return fn(...args)
    return curry(fn.bind(null, ...args))
  }

// reduce :: ((a, b) -> a) -> a -> [b] -> a
export const reduce = curry((fn, agg, arr) => arr.reduce(fn, agg))

// pipe :: ((a -> b), (b -> c), ..., (y -> z)) -> a -> z
export const pipe =
  (...fns) =>
  x =>
    reduce((v, f) => f(v), x, fns)

// compose :: ((y -> z), (x -> y), ..., (b -> c), (a -> b)) -> a -> z
export const compose = (...fns) => pipe(...reverse(fns))

// map :: (a -> b) -> [a] -> [b]
export const map = curry((fn, arr) => arr.map(fn))

// filter :: (a -> Bool) -> [a] -> [a]
export const filter = curry((fn, arr) => arr.filter(fn))

// find :: [a] -> a
export const find = curry((fn, arr) => arr.find(fn))

// select :: [String] -> Object -> Object
export const select = curry((propNames, obj) => {
  const newObj = {}
  propNames.forEach(propName => {
    newObj[propName] = obj[propName]
  })
  return newObj
})

// reverse :: [a] -> [a]
export const reverse = arr => [...arr].reverse()

// pick :: String -> [Object] -> a
export const pick = curry((propName, arr) => arr.map(obj => obj[propName]))

// uniq :: [a] -> [a]
export const uniq = arr => [...new Set(arr)]

// trim :: String -> String
export const trim = s => s.trim()

// compact :: [a] -> [a]
export const compact = arr => arr.filter(Boolean)

// concat :: [a] -> [a] -> [a]
export const concat = curry((arr1, arr2) => arr1.concat(arr2))

// flatten :: [[a]] -> [a]
export function flatten(arr) {
  return reduce(
    (acc, val) => (Array.isArray(val) ? concat(acc, val) : [...acc, val]),
    [],
    arr
  )
}

// flatMap :: (a -> [b]) -> [a] -> [b]
export const flatMap = curry((fn, arr) => flatten(map(fn, arr)))

export const flattenDeep = arr =>
  flatMap(d => (Array.isArray(d) ? flattenDeep(d) : d), arr)

export default {
  id,
  reverse,
  pipe,
  compose,
  curry,
  reduce,
  map,
  filter,
  find,
  select,
  compact,
  pick,
  trim,
  uniq,
  concat,
  flatten,
  flatMap,
  flattenDeep,
}
