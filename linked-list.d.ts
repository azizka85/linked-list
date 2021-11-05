export class ListItem<T> {
  protected prev: ListItem<T>;
  protected next: ListItem<T>;
  
  constructor(
    data: T,
    root?: ListItem<T>
  );

  get prevItem();
  get nextItem();

  protected unlink();
  protected insertBefore(newItem: ListItem<T>);
  protected insertAfter(newItem: ListItem<T>);  
}

export class LinkedList<T> implements Iterable<ListItem<T>> {
  protected count;
  
  root?: ListItem<T>;  

  get length();

  add(data: T): ListItem<T>;
  insertBefore(newItem: ListItem<T>, item?: ListItem<T>);
  insertAfter(newItem: ListItem<T>, item?: ListItem<T>);
  remove(item: ListItem<T>);
  [Symbol.iterator](): Iterator<ListItem<T>, any, undefined>;
}