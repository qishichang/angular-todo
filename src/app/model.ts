export class Model {
    user: string;
    items: TodoItem[];

    constructor() {
        this.user = 'Echo';
        this.items = [new TodoItem('Buy Flowers', false),
                      new TodoItem('Get Shoes', false),
                      new TodoItem('Collect Tickets', true),
                      new TodoItem('Call Joe', false)];
    }
}

export class TodoItem {
    action: string;
    done: boolean;

    constructor(action, done) {
        this.action = action;
        this.done = done;
    }
}
