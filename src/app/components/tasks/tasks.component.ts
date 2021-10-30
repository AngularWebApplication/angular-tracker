import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task'
import { TaskService } from '../../services/task.service';
import { faTimes, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  icon: IconDefinition

  constructor(private taskService: TaskService) {
    this.tasks = [];
    this.icon = faTimes;
   }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }

  deleteTask(task: Task): void {
    this.taskService
    .deleteTask(task)
    .subscribe(() =>
      (this.tasks = this.tasks.filter((t) => t.id !== task.id)));
  }

  toggleReminder(task: Task): void {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task): void {
    let id = this.tasks[this.tasks.length - 1].id;
    if(id)
      id += 1;
    task.id = id;
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task));
  }
}
