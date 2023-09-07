export type Todo = {
  name: string;
  notes: string;
  createdAt: Date;
  completedAt: Date | null;
};

export type TodoList = {
  id: string;
  name: string;
  todos: Todo[];
};

export interface TodoStorage {
  load: () => TodoList[];
  save: (lists: TodoList[]) => void;
}

/**
 * Storage implementation for users that are authenticated with Firebase.
 * Data is stored in Firebase.
 */
export class TodoStorageFirebase implements TodoStorage {
  load() {
    // TODO
    return [];
  }

  save(lists: TodoList[]) {
    // TODO
    return;
  }
}

/**
 * Storage implementation for users that continued as guests.
 * Data is stored locally on the device.
 */
export class TodoStorageLocal implements TodoStorage {
  load() {
    // TODO
    return [];
  }

  save(lists: TodoList[]) {
    // TODO
    return;
  }
}
