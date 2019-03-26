import { observable, computed, action, decorate } from "mobx";

class TaskStore {
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

export default decorate(TaskStore, {
    tasks: observable,
    checkedTasksCount: computed,
    addTask: action,
});