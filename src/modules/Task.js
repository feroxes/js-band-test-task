export default class Task {
  constructor(title, description, priority, id) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.id = id;
    this.isDone = false;
    this.isControlsOpened = false;
  }

  toggleTaskStatus() {
    this.isDone = !this.isDone;
  }

  editTitle(text) {
    this.title = text;
  }

  editDescription(text) {
    this.description = text;
  }

  editPriority(text) {
    this.priority = text;
  }

  toggleControls() {
    this.isControlsOpened = !this.isControlsOpened
  }
}
