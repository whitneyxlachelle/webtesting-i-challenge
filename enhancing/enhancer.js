module.exports = {
  succeed,
  fail,
  repair,
  get,
};

// - The item's enhancement increases by 1.
// - If the item enhancement level is 20, the enhancement level is not changed.
// - The durability of the item is not changed.
function succeed(item) {
  if (item.enhancement >= 0 && item.enhancement <= 19) {
    return { ...item, enhancement: item.enhancement + 1 }
  } else if (item.enhancement === 20) {
    return { ...item }
  } else {
    return { ...item }
  }
}

// - If the item's enhancement is less than 15, the durability of the item is decreased by 5.
// - If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
// - If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).
function fail(item) {
  if (item.enhancement > 15) {
    return { ...item, durability: item.durability - 5 }
  } else if (item.enhancement >= 15) {
    return { ...item, durability: item.durability - 10 }
  } else if (item.enhancement > 16) {
    return { ...item, durability: item.durability - 1 }
  } else {
    return { ...item }
  }
}

// - Items have `name`, `durability` and `enhancement`.
// - The item's `enhancement` it's a number from 0 to 20.
// - The item's `durability` it's a number from 0 to 100.
function repair(item) {
  const newItem = {
    ...item,
    durability: 100
  };
  console.log(newItem)
}

function get(item) {
  return { ...item };
}

