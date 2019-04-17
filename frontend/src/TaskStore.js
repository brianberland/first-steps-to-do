import React from 'react';
import { observable, computed, action, decorate } from "mobx";

class TaskListBase {
    constructor(title, tasks) {
        this.title = title || 'New List';
        this.tasks = tasks || [];
    }

    title = '';
    tasks = [];

    addTask = text => {
        this.tasks.push({
            text,
            isChecked: false,
        });
    };

    get completedTasks() {
        return this.tasks.reduce((acc, item) => acc + item.isChecked ? 1 : 0, 0);
    }
}

export const TaskList = decorate(
    TaskListBase,
    {
        title: observable,
        tasks: observable,
        addTask: action,
        completedTasks: computed,
    },
);

class ListStoreBase {
    lists = [];

    get numLists() {
        return this.lists.length;
    }

    addList = (title, tasks) => this.lists.push(new TaskList(title, tasks));
}

export const ListStore = decorate(
    ListStoreBase,
    {
        lists: observable,
        addList: action,
        numLists: computed,
    }
);

export const ListContext = React.createContext(new ListStore());