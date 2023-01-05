/**
 * accessing a nested property of the prototype
 */

const grandParent = {
  name: {
    firstName: 'gp first',
    lastName: 'gp last',
  },
  age: 80,
};

const parent = Object.create(grandParent);
parent.name = {
  firstName: 'p first',
  lastName: 'p last',
};
parent.age = 40;

const child = Object.create(parent);

child.age = 'child added his age';
child.name = 'name';
child.name.firstName = 'child wanted to add his own name.';

console.log(
  '🚀 ~ getNestedPrototypeOf(child, 3)',
  getNestedPrototypeOf(child, 3)
);

function getNestedPrototypeOf(target, level = 1) {
  return level > 0
    ? getNestedPrototypeOf(Object.getPrototypeOf(target), level - 1)
    : target;
}
