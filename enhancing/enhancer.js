module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed({ name, enhancement, durability }) {
  if (enhancement === 20) {
    return enhancement;
  } else if (enhancement < 20) {
    return enhancement + 1;
  }

  const newItem = { name, enhancement: enhancement + 1, durability };
  return newItem;
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  const newItem = { ...item, durability: 100 };
  return newItem;
}

function get(item) {
  return { ...item };
}
