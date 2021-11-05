import { LinkedList, ListItem } from './linked-list.js';

function test1() {
  const list = new LinkedList();

  const item1 = list.add(1);
  const item2 = list.add(2);
  const item3 = list.add(3);

  console.log(list.length, 3);

  let current = 1;

  for(let item of list) {
    console.log(item.data, current, item.data === current);

    current++;
  }

  list.remove(item2);

  console.log(list.length, 2);

  current = 1;

  for(let item of list) {
    console.log(item.data, current, item.data === current);

    current += 2;
  }

  list.remove(item1);

  console.log(list.length, 1);

  current = 3;

  for(let item of list) {
    console.log(item.data, current, item.data === current);

    current++;
  }

  list.remove(item3);

  console.log(list.length, 0);

  current = 1;

  for(let item of list) {
    current++;
  }

  console.log(current, 1);
  console.log(list.root, undefined);
}

function test2() {
  const list = new LinkedList();

  const item1 = list.add(1);

  console.log(list.length, 1);
  console.log('root === item1', list.root === item1);

  const item3 = new ListItem(3);

  list.insertBefore(item3, item1);

  console.log(list.length, 2);
  console.log('root === item3', list.root === item3);

  const item2 = new ListItem(2);

  list.insertAfter(item2, item3);

  console.log(list.length, 3);

  let current = 3;

  for(let item of list) {
    console.log(item.data, current, item.data === current);

    current--;
  }
}

function main() {
  test1();
  test2();
}

main();