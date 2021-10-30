import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task>;
  text: string;
  day: string;
  reminder: boolean;
  showAddTask: boolean | undefined;
  subscription: Subscription;
  
  constructor(private uiService: UiService) { 
    this.text = '';
    this.day = '';
    this.reminder = false;
    this.onAddTask = new EventEmitter<Task>();
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));  
  }

  ngOnInit(): void {
    this.uiService.setAddTask();
  }

  onSubmit(): void {
    if(!this.text){
      alert("Please add a task!");
      return;
    }
    const newTask: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    };
    this.onAddTask.emit(newTask);
    this.text = '';
    this.day = '';
    this.reminder = false;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
