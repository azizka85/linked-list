export class ListItem {
	prev;
	next;
	data;

	constructor(data, root) {
		this.data = data;

		if(!root) {
			this.prev = this;
			this.next = this;
		} else {
			const previous = root.prev;

			root.prev = this;

			this.next = root;
			this.prev = previous;

			previous.next = this;
		}
	}

	get prevItem() {
		return this.prev;
	}

	get nextItem() {
		return this.next;
	}

	unlink() {
		const nextElem = this.next;
		const prevElem = this.prev;

		prevElem.next = nextElem;
		nextElem.prev = prevElem;

		this.next = this;
		this.prev = this;
	}

	insertBefore(newItem) {
		const prevElem = this.prev;

		prevElem.next = newItem;
		this.prev = newItem;

		newItem.prev = prevElem;
		newItem.next = this;
	}

	insertAfter(newItem) {
		const nextElem = this.next;

		nextElem.prev = newItem;
		this.next = newItem;

		newItem.prev = this;
		newItem.next = nextElem;
	}
}

export class LinkedList {
	count = 0;

	root;

	get length() {
		return this.count;
	}

	add(data) {
		const item = new ListItem(data, this.root);

		if(!this.root) {
			this.root = item;
		}

		this.count++;

		return item;
	}

	insertBefore(newItem, item) {
		newItem.unlink();

		if(item) {
			item.insertBefore(newItem);

			if(this.root === item) {
				this.root = newItem;
			}
		} else {
			if(this.root) {
				this.root.insertBefore(newItem);
			}

			this.root = newItem;
		}

		this.count++;
	}

	insertAfter(newItem, item) {
		newItem.unlink();

		if(item) {
			item.insertAfter(newItem);
		} else {
			if(this.root) {
				this.root.insertAfter(newItem);
			} else {
				this.root = newItem;
			}
		}

		this.count++;
	}

	remove(item) {
		const next = item.nextItem;

		item.unlink();

		if(item === this.root) {
			if(next === this.root) {
				this.root = undefined;
			} else {
				this.root = next;
			}
		}

		this.count--;
	}

	[Symbol.iterator]() {
		let current;

		return {
			next: () => {
				let value = undefined;

        if(!current) {
          current = this.root;
    
          value = current;
        } else {
          if(current.nextItem === this.root) {
            value = undefined;
          }
          else {
            current = current.nextItem;
    
            value = current;
          }
        }
    
        return {
          done: value === undefined,
          value
        };      
			}
		};
	}
}