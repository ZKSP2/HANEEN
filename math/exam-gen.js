// Practice-exam generator for Haneen Math — questions modeled on the MOE school book and assessment book (Primary 2, Term 1).
const mul = (seed) => () => { seed |= 0; seed = (seed + 0x6D2B79F5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
const hash = (s) => { let h = 2166136261; for (const c of s) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; };

function S(...parts) { return parts.map(p => Array.isArray(p) ? { t: String(p[0]), a: true } : { t: String(p), a: false }); }

const BOYS = ['Sayed', 'Omar', 'Fady', 'Ahmed', 'Khaled', 'Hazem', 'Ali', 'Samer'];
const GIRLS = ['Mona', 'Sara', 'Hana', 'Yara', 'Malak', 'Salma', 'Nour', 'Aya'];
const THINGS = ['pencils', 'stickers', 'apples', 'books', 'candies', 'balloons', 'flowers', 'cards'];
const SETS = { fruits: ['Banana', 'Strawberry', 'Orange', 'Grape', 'Apple'], vehicles: ['Car', 'Motorcycle', 'Train', 'Airplane', 'Boat'], animals: ['Camel', 'Crocodile', 'Lion', 'Goat', 'Giraffe'], toys: ['Bear', 'Ball', 'Robot', 'Car'], pets: ['Dog', 'Cat', 'Rabbit', 'Lizard', 'Parakeet'] };

function mk(r) {
  const ri = (a, b) => a + Math.floor(r() * (b - a + 1));
  const pick = (arr) => arr[Math.floor(r() * arr.length)];
  const person = () => r() < .5 ? { n: pick(BOYS), he: 'He', his: 'his', him: 'him' } : { n: pick(GIRLS), he: 'She', his: 'her', him: 'her' };
  const twoNoCarry = () => { const a = ri(1, 7) * 10 + ri(0, 6), b = ri(1, 9 - Math.floor(a / 10) - 0) * 10 + ri(0, 9 - (a % 10)); return [a, Math.min(b, 99 - a)]; };
  return { ri, pick, person, twoNoCarry };
}

const G = {
  1: [
    (r, u) => { const k = u.pick(Object.keys(SETS)); const names = SETS[k].slice(0, u.ri(4, SETS[k].length)); const vals = []; while (vals.length < names.length) { const v = u.ri(2, 10); if (!vals.includes(v)) vals.push(v); }
      const items = names.map((n, i) => ({ name: n, value: vals[i] })); const mx = items.reduce((a, b) => b.value > a.value ? b : a);
      return { code: '1-2', src: 'book', graph: [{ label: 'Favorite ' + k, items }], segs: S('The most chosen is ', [mx.name], '.'), choices: names }; },
    (r, u) => { const k = u.pick(Object.keys(SETS)); const names = SETS[k].slice(0, 4); const vals = []; while (vals.length < 4) { const v = u.ri(2, 10); if (!vals.includes(v)) vals.push(v); }
      const items = names.map((n, i) => ({ name: n, value: vals[i] })); const mn = items.reduce((a, b) => b.value < a.value ? b : a);
      return { code: '1-2', src: 'book', graph: [{ label: 'Favorite ' + k, items }], segs: S('The least chosen is ', [mn.name], '.'), choices: names }; },
    (r, u) => { const names = SETS.toys; const items = names.map(n => ({ name: n, value: u.ri(3, 10) })); const [x, y] = [items[0], items[1]].sort((p, q) => q.value - p.value);
      if (x.value === y.value) x.value++; return { code: '1-2', src: 'assess', graph: [{ label: 'Toys', items }], segs: S(`How many more ${x.name}s than ${y.name}s? `, [x.value - y.value]) }; },
    (r, u) => { const names = SETS.fruits.slice(0, 4); const items = names.map(n => ({ name: n, value: u.ri(2, 9) })); const [x, y] = [items[1], items[3]];
      return { code: '1-2', src: 'assess', graph: [{ label: 'Fruits', items }], segs: S(`${x.name}s and ${y.name}s together = `, [x.value + y.value]) }; },
  ],
  2: [
    (r, u) => { const [a, b] = u.twoNoCarry(); return { code: '2-1', src: 'book', segs: S(`${a} + ${b} = `, [a + b]) }; },
    (r, u) => { const a = u.ri(1, 8) * 10 + u.ri(0, 5), b = u.ri(1, 9 - (a % 10)); return { code: '2-2', src: 'book', segs: S(`${b} + ${a} = `, [a + b]) }; },
    (r, u) => { const o1 = u.ri(4, 9), o2 = u.ri(11 - o1, 9); const a = u.ri(1, 4) * 10 + o1, b = u.ri(1, 4) * 10 + o2; return { code: '2-3', src: 'book', segs: S(`${a} + ${b} = `, [a + b]) }; },
    (r, u) => { const o1 = u.ri(1, 9), a = u.ri(1, 5) * 10 + o1, b = u.ri(1, 3) * 10 + (10 - o1); return { code: '2-4', src: 'book', segs: S(`${a} + ${b} = `, [a + b]) }; },
    (r, u) => { const a = u.ri(12, 79), b = u.ri(11, 99 - a); return { code: '2-5', src: 'assess', segs: S(`${a} + ${b} = `, [b], ` + ${a}`) }; },
    (r, u) => { const p = u.person(), t = u.pick(THINGS), a = u.ri(15, 45), b = u.ri(11, 40); return { code: '2-3', src: 'assess', segs: S(`${p.n} has ${a} ${t}. ${p.his[0].toUpperCase() + p.his.slice(1)} friend gave ${p.him} ${b} ${t}. How many ${t} does ${p.n} have now? `, [a + b], ` ${t}`) }; },
    (r, u) => { const a = u.ri(2, 8) * 10 + u.ri(1, 4), b = u.ri(1, 5); const wrong = (Math.floor(a / 10) + b) * 10 + (a % 10); return { code: '2-2', src: 'assess', segs: S(`Ali wrote ${a} + ${b} = ${wrong}. The correct answer is `, [a + b], '.') }; },
  ],
  3: [
    (r, u) => { const a = u.ri(3, 9) * 10 + u.ri(3, 9), b = u.ri(1, Math.floor(a / 10) - 1) * 10 + u.ri(0, a % 10); return { code: '3-1', src: 'book', segs: S(`${a} − ${b} = `, [a - b]) }; },
    (r, u) => { const t = u.ri(2, 9), o = u.ri(1, 9); const a = t * 10 + o; const b = r() < .5 ? t * 10 + u.ri(0, o - 1) : u.ri(1, t - 1) * 10 + o; return { code: '3-2', src: 'book', segs: S(`${a} − ${b} = `, [a - b]) }; },
    (r, u) => { const o1 = u.ri(0, 6), o2 = u.ri(o1 + 1, 9), t1 = u.ri(3, 9), t2 = u.ri(1, t1 - 1); const a = t1 * 10 + o1, b = t2 * 10 + o2; return { code: '3-3', src: 'book', segs: S(`${a} − ${b} = `, [a - b]) }; },
    (r, u) => { const a = u.ri(2, 9) * 10 + u.ri(0, 4), b = u.ri((a % 10) + 1, 9); return { code: '3-4', src: 'book', segs: S(`${a} − ${b} = `, [a - b]) }; },
    (r, u) => { const a = u.ri(40, 95), b = u.ri(12, a - 10), d = a - b; return { code: '3-5', src: 'assess', segs: S(`${a} − ${b} = ${d}. Check: ${d} + `, [b], ` = ${a}`) }; },
    (r, u) => { const p = u.person(), a = u.ri(30, 90), b = u.ri(11, a - 8); return { code: '3-3', src: 'assess', segs: S(`${p.n} had ${a} pounds. ${p.he} spent ${b} pounds. How many pounds are left? `, [a - b], ' pounds') }; },
    (r, u) => { const tot = u.ri(30, 60), g = u.ri(12, tot - 10); return { code: '3-5', src: 'assess', segs: S(`There are ${tot} pupils in the class. ${g} are girls. How many boys are there? `, [tot - g], ' boys') }; },
  ],
  4: [
    (r, u) => { const m = u.ri(1, 11) * 5; return { code: '4-1', src: 'book', segs: S(`1 hour ${m} minutes = `, [60 + m], ' minutes') }; },
    (r, u) => { const m = u.ri(1, 11) * 5; return { code: '4-1', src: 'book', segs: S(`${60 + m} minutes = `, [1], ' hour ', [m], ' minutes') }; },
    (r, u) => { const h = u.ri(1, 11), m = u.ri(1, 11) * 5; return { code: '4-1', src: 'assess', segs: S(`The clock shows ${h}:00. After ${m} minutes it will be `, [`${h}:${String(m).padStart(2, '0')}`]) }; },
    (r, u) => { const n = u.ri(1, 4); return { code: '4-2', src: 'assess', segs: S(`${n} hour${n > 1 ? 's' : ''} before noon = `, [`${12 - n}:00`], ' AM') }; },
    (r, u) => { const f = u.pick([['1 day = ', 24, ' hours'], ['1 hour = ', 60, ' minutes'], ['The AM period = ', 12, ' hours'], ['The PM period = ', 12, ' hours'], ['The long hand goes around once in ', 60, ' minutes']]); return { code: f[1] === 60 ? '4-1' : '4-2', src: 'assess', segs: S(f[0], [f[1]], f[2]) }; },
    (r, u) => { const a = u.pick([['We wake up at 6:30 ', 'AM'], ['We have dinner at 8:00 ', 'PM'], ['We go to school at 7:00 ', 'AM'], ['We go to bed at 9:00 ', 'PM'], ['Math class is at 9:00 ', 'AM']]); return { code: '4-2', src: 'book', segs: S(a[0], [a[1]]), choices: ['AM', 'PM'] }; },
  ],
  5: [
    (r, u) => { const c = u.ri(2, 9); return { code: '5-3', src: 'book', segs: S(`${c} cm = `, [c * 10], ' mm') }; },
    (r, u) => { const c = u.ri(1, 9), m = u.ri(1, 9); return { code: '5-3', src: 'book', segs: S(`${c * 10 + m} mm = `, [c], ' cm ', [m], ' mm') }; },
    (r, u) => { const c = u.ri(1, 9), m = u.ri(1, 9); return { code: '5-3', src: 'book', segs: S(`${c} cm ${m} mm = `, [c * 10 + m], ' mm') }; },
    (r, u) => { const c1 = u.ri(2, 9), m1 = u.ri(1, 9), c2 = u.ri(3, 15); return { code: '5-5', src: 'assess', segs: S(`${c1} cm ${m1} mm + ${c2} cm = `, [c1 + c2], ' cm ', [m1], ' mm') }; },
    (r, u) => { const m = u.ri(1, 9); return { code: '5-5', src: 'assess', segs: S(`1 cm − ${m} mm = `, [10 - m], ' mm') }; },
    (r, u) => { const c1 = u.ri(10, 20), m1 = u.ri(3, 9), c2 = u.ri(2, 9), m2 = u.ri(1, m1); return { code: '5-5', src: 'book', segs: S(`${c1} cm ${m1} mm − ${c2} cm ${m2} mm = `, [c1 - c2], ' cm ', [m1 - m2], ' mm') }; },
    (r, u) => { const a = u.pick([['A grain of rice is measured in ', 'mm'], ['The length of a book is measured in ', 'cm'], ['The thickness of a coin is measured in ', 'mm'], ['The length of a pencil is measured in ', 'cm']]); return { code: '5-2', src: 'assess', segs: S(a[0], [a[1]]), choices: ['cm', 'mm'] }; },
  ],
  6: [
    (r, u) => { const h = u.ri(1, 9), t = u.ri(0, 9), o = u.ri(0, 9); return { code: '6-1', src: 'book', segs: S(`${h} hundreds, ${t} tens, ${o} ones = `, [h * 100 + t * 10 + o]) }; },
    (r, u) => { const h = u.ri(1, 9), o = u.ri(1, 9); return { code: '6-2', src: 'book', segs: S(`${h * 100 + o} = `, [h], ' hundreds and ', [o], ' ones') }; },
    (r, u) => { const h = u.ri(1, 9), t = u.ri(1, 9), o = u.ri(1, 9); return { code: '6-3', src: 'book', segs: S(`${h * 100 + t * 10 + o} = ${h * 100} + `, [t * 10], ` + ${o}`) }; },
    (r, u) => { const k = u.ri(11, 89); return r() < .5 ? { code: '6-4', src: 'book', segs: S(`${k} tens = `, [k * 10]) } : { code: '6-4', src: 'assess', segs: S(`${k * 10} = `, [k], ' tens') }; },
    (r, u) => { let x = u.ri(100, 999), y = r() < .5 ? x + u.pick([-10, -1, 1, 10, 100, -100]) : u.ri(100, 999); y = Math.min(999, Math.max(100, y)); const s = x > y ? '>' : x < y ? '<' : '='; return { code: '6-9', src: 'book', segs: S(`${x} `, [s], ` ${y}`), choices: ['>', '<', '='] }; },
    (r, u) => { const a = u.ri(15, 40) * 10, b = u.ri(1, 9) * 10, y = u.ri(10, 40) * 10; const v = a - b; const s = v > y ? '>' : v < y ? '<' : '='; return { code: '6-10', src: 'assess', segs: S(`${a} − ${b} `, [s], ` ${y}`), choices: ['>', '<', '='] }; },
    (r, u) => { const k = u.ri(1, 9) * 100; return { code: '6-6', src: 'assess', segs: S(`1000 − ${k} = `, [1000 - k]) }; },
    (r, u) => { const n = u.ri(10, 98) * 10 - u.ri(1, 4); const d = u.ri(1, 4); return { code: '6-6', src: 'assess', segs: S(`What number is over ${n} by ${d}? `, [n + d]) }; },
    (r, u) => { const h = u.ri(1, 8), t = u.ri(1, 9); const n = h * 100 + t * 10; return { code: '6-6', src: 'book', segs: S(`${n} = `, [(h + 1) * 100], ` − ${100 - t * 10}`) }; },
    (r, u) => { const a = u.ri(2, 9), b = u.ri(2, 9); return { code: '6-7', src: 'book', segs: S(`${a * 10} + ${b * 10} = `, [(a + b) * 10]) }; },
    (r, u) => { const h = u.ri(1, 9), t = u.ri(1, 9); return r() < .5 ? { code: '6-8', src: 'book', segs: S(`${h * 100} + ${t * 10} = `, [h * 100 + t * 10]) } : { code: '6-8', src: 'book', segs: S(`${h * 100 + t * 10} − ${t * 10} = `, [h * 100]) }; },
  ],
  7: [
    (r, u) => { const L = u.ri(2, 9); return { code: '7-2', src: 'book', segs: S(`${L} L = `, [L * 10], ' dL') }; },
    (r, u) => { const L = u.ri(1, 9), d = u.ri(1, 9); return { code: '7-2', src: 'book', segs: S(`${L * 10 + d} dL = `, [L], ' L ', [d], ' dL') }; },
    (r, u) => { const L = u.ri(1, 9), d = u.ri(1, 9); return { code: '7-2', src: 'assess', segs: S(`${L} L ${d} dL = `, [L * 10 + d], ' dL') }; },
    (r, u) => { const m = u.ri(1, 9) * 10; return { code: '7-3', src: 'assess', segs: S(`1 dL ${m} mL = `, [100 + m], ' mL') }; },
    (r, u) => { const L1 = u.ri(1, 6), d1 = u.ri(1, 5), d2 = u.ri(1, 9 - d1); return { code: '7-3', src: 'book', segs: S(`${L1} L ${d1} dL + ${d2} dL = `, [L1], ' L ', [d1 + d2], ' dL') }; },
    (r, u) => { const L1 = u.ri(5, 9), d1 = u.ri(4, 9), L2 = u.ri(1, L1 - 1), d2 = u.ri(1, d1); return { code: '7-3', src: 'assess', segs: S(`${L1} L ${d1} dL − ${L2} L ${d2} dL = `, [L1 - L2], ' L ', [d1 - d2], ' dL') }; },
    (r, u) => { const d = u.ri(2, 6), m = d * 100 + u.pick([-87, -13, 13, 87]); const s = m > d * 100 ? '>' : '<'; return { code: '7-3', src: 'assess', segs: S(`${m} mL `, [s], ` ${d} dL`), choices: ['>', '<', '='] }; },
  ],
  8: [
    (r, u) => { const a = u.ri(41, 89), b = u.ri(101 - a, 99); return { code: a % 10 + b % 10 >= 10 ? '8-2' : '8-1', src: 'book', segs: S(`${a} + ${b} = `, [a + b]) }; },
    (r, u) => { const a = u.ri(110, 189), b = u.ri(21, 99); return { code: '8-4', src: 'book', segs: S(`${a} − ${b} = `, [a - b]) }; },
    (r, u) => { const a = 100 + u.ri(0, 9), b = u.ri(a % 10 + 1, 9) + (r() < .5 ? u.ri(1, 8) * 10 : 0); return { code: '8-5', src: 'book', segs: S(`${a} − ${b} = `, [a - b]) }; },
    (r, u) => { const a = u.ri(120, 870), b = u.ri(11, 99); return r() < .5 ? { code: '8-6', src: 'assess', segs: S(`${a} + ${b} = `, [a + b]) } : { code: '8-6', src: 'assess', segs: S(`${a} − ${b} = `, [a - b]) }; },
    (r, u) => { const p = u.person(), a = u.ri(55, 95), b = u.ri(56, 95); return { code: '8-2', src: 'assess', segs: S(`${p.n} read ${a} pages on Friday and ${b} pages on Saturday. How many pages did ${p.he.toLowerCase()} read? `, [a + b], ' pages') }; },
    (r, u) => { const a = u.ri(130, 190), b = u.ri(45, 95); return { code: '8-4', src: 'assess', segs: S(`A bus had ${a} people. ${b} people got off. How many people are left? `, [a - b], ' people') }; },
  ],
  9: [
    (r, u) => { const a = u.ri(11, 38), b = 10 * Math.ceil((a + 1) / 10) - a, c = u.ri(11, 29); return { code: '9-1', src: 'book', segs: S(`(${a} + ${b}) + ${c} = `, [a + b + c]) }; },
    (r, u) => { const b = u.ri(3, 17), c = 10 * Math.ceil((b + 1) / 10) - b, a = u.ri(4, 9); return { code: '9-1', src: 'assess', segs: S(`${a} + (${b} + ${c}) = `, [a + b + c]) }; },
    (r, u) => { const a = u.ri(1, 8) * 10 + u.ri(6, 9), b = u.ri(5, 9); return { code: '9-2', src: 'book', segs: S(`${a} + ${b} = `, [a + b]) }; },
    (r, u) => { const a = u.ri(2, 9) * 10 + u.ri(1, 5), b = u.ri(6, 9); return { code: '9-2', src: 'book', segs: S(`${a} − ${b} = `, [a - b]) }; },
  ],
};

const SCOPES = [
  { key: 'unit', label: 'اختبارات الوحدات' },
  { key: 'm1', label: 'الامتحان الشهري الأول' },
  { key: 'nov', label: 'امتحان نوفمبر' },
  { key: 'm2', label: 'الامتحان الشهري الثاني' },
  { key: 'final', label: 'امتحان نهاية الفصل' },
];
export { SCOPES };

export const EXAMS = (() => {
  const list = []; let n = 0;
  for (let ch = 1; ch <= 9; ch++) for (let k = 1; k <= 3; k++) list.push({ id: `u${ch}-${k}`, scope: 'unit', chapters: [ch], count: 10, minutes: 15, model: k });
  [['m1', [1, 2, 3, 4], 5], ['nov', [4, 5, 6], 5], ['m2', [5, 6, 7], 5], ['final', [1, 2, 3, 4, 5, 6, 7, 8, 9], 8]].forEach(([scope, chapters, models]) => {
    for (let k = 1; k <= models; k++) list.push({ id: `${scope}-${k}`, scope, chapters, count: scope === 'final' ? 30 : 20, minutes: scope === 'final' ? 60 : 40, model: k });
  });
  list.forEach(e => { e.no = ++n; });
  return list;
})();

export function buildExam(def, attempt) {
  const r = mul(hash(def.id + '#' + (attempt || 0)));
  const u = mk(r);
  const qs = []; const seen = new Set(); let guard = 0;
  while (qs.length < def.count && guard++ < 600) {
    const ch = def.chapters[qs.length % def.chapters.length];
    const gen = G[ch][Math.floor(r() * G[ch].length)];
    const q = gen(r, u);
    const key = q.segs.map(s => s.t).join('');
    if (seen.has(key)) continue;
    seen.add(key);
    qs.push({ ...q, ch, i: qs.length });
  }
  return qs;
}
