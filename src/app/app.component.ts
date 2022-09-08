import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Titre de la page
  title = 'todo-list';

  tasks: Task[] = [
    new Task("Visit Ann"),
    new Task("Call dad"),
    new Task("Go to gym"),
    new Task("Wash the dishes"),
    new Task("Shop of the party")
  ]

  // Delaration d'une method pour ajouter un todo
  add(newtask: string){
    this.tasks.push(new Task(newtask))
  }

  // Delaration d'une method pour supprimer un todo existant
  remove(existingTask: Task){
    var userConfirmed = confirm(`Are you sure to remove this task \n This task ? "\n ${existingTask.title}" `)

    if(userConfirmed){
      this.tasks = this.tasks.filter(task => task != existingTask);
    }
  }

  // Delaration d'une method pour marquer un todo
  markAsDone(task: Task){
    //alert('The task:   "'+ task +'"   is done' )

    task.isDone = true;
  }

}

// Déclaration d'un constructeur Task
class Task {
  constructor(public title: string){

  }

  public isDone = false;

}
