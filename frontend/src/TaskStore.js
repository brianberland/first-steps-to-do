import React from 'react';
import { observable, computed, action, decorate } from "mobx";

class TaskStoreBase {
    tasks = [];

    get checkedTasksCount() {
        return this.tasks.filter(task => task.isChecked === true).length;
    }

    addTask(text) {
        this.tasks.push({
            text,
            isChecked: false,
        });
    }
}

export const TaskStore = decorate(TaskStoreBase, {
    tasks: observable,
    checkedTasksCount: computed,
    addTask: action,
});

export const TaskContext = React.createContext(new TaskStore());