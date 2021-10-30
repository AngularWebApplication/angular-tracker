import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { IconDefinition, faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Input() icon: IconDefinition;
  @Output() onDeleteTask: EventEmitter<Task>;
  @Output() onToggleReminder: EventEmitter<Task>;
  constructor() { 
    this.task = { text:'', day:'', reminder:false};
    this.icon = faCoffee;
    this.onDeleteTask = new EventEmitter<Task>();
    this.onToggleReminder = new EventEmitter<Task>();
  }

  ngOnInit(): void {
   
  }

  onDelete(task: Task): void {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task): void {
    this.onToggleReminder.emit(task);
  }

}
