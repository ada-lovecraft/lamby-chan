/** @format */

import test from "ava"
import lamby from "../src/index.js"

test("id", t => {
  t.is(lamby.id(1), 1)
})

test("reduce", t => {
  t.is(
    lamby.reduce((a, b) => a + b, 0, [1, 2, 3]),
    6
  )
})

test("pipe", t => {
  const add1 = x => x + 1
  const multiplyBy2 = x => x * 2
  const add1ThenMultiplyBy2 = lamby.pipe(add1, multiplyBy2)
  t.is(add1ThenMultiplyBy2(1), 4)
})

test("compose", t => {
  const add1 = x => x + 1
  const multiplyBy2 = x => x * 2
  const multiplyBy2ThenAdd1 = lamby.compose(add1, multiplyBy2)
  t.is(multiplyBy2ThenAdd1(1), 3)
})

test("curry", t => {
  const multiply = (a, b) => a * b
  const multiplyBy2 = lamby.curry(multiply)(2)
  t.is(multiplyBy2(4), 8)
})

test("map", t => {
  const add1 = x => x + 1
  t.deepEqual(lamby.map(add1, [1, 2, 3]), [2, 3, 4])
})

test("filter", t => {
  const isEven = x => x % 2 === 0
  t.deepEqual(lamby.filter(isEven, [1, 2, 3, 4, 5]), [2, 4])
})

test("find", t => {
  const isEven = x => x % 2 === 0
  t.is(lamby.find(isEven, [1, 2, 3, 4, 5]), 2)
})

test("select", t => {
  const obj = {
    a: 1,
    b: 2,
    c: 3,
  }
  t.deepEqual(lamby.select(["a", "c"], obj), { a: 1, c: 3 })
})

test("reverse", t => {
  t.deepEqual(lamby.reverse([1, 2, 3]), [3, 2, 1])
})

test("pick", t => {
  const arr = [
    { id: 1, name: "foo" },
    { id: 2, name: "bar" },
    { id: 3, name: "baz" },
  ]
  t.deepEqual(lamby.pick("name", arr), ["foo", "bar", "baz"])
})

test("uniq", t => {
  t.deepEqual(lamby.uniq([1, 2, 3, 3, 2, 1]), [1, 2, 3])
})

test("trim", t => {
  t.is(lamby.trim("  foo  "), "foo")
})

test("compact", t => {
  t.deepEqual(lamby.compact([0, 1, 2, false, 3, null, 4]), [1, 2, 3, 4])
})

test("concat", t => {
  t.deepEqual(lamby.concat([1, 2, 3], [4, 5, 6]), [1, 2, 3, 4, 5, 6])
})

test("flatten", t => {
  t.deepEqual(lamby.flatten([1, [2, 3, 4], 5]), [1, 2, 3, 4, 5])
  t.deepEqual(lamby.flatten([1, [2, 3, [4]], 5]), [1, 2, 3, [4], 5])
})

test("flatMap", t => {
  const f = n => [n, n * 2]
  t.deepEqual(lamby.flatMap(f, [1, 2, 3]), [1, 2, 2, 4, 3, 6])
})

test("flattenDeep", t => {
  t.deepEqual(lamby.flattenDeep([1, [2, 3, 4], 5]), [1, 2, 3, 4, 5])
  t.deepEqual(
    lamby.flattenDeep([1, [2, 3, [4, 5, [6, [7], 8, [9, [0]]]]]]),
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  )
})
