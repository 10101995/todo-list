import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // Titre de la page
  title = 'todo-list';

  tasks = [
    "Visit Ann",
    "Call dad",
    "Go to gym",
    "Wash the dishes",
    "Shop of the party"
  ]
  // Delaration d'une method pour ajouter un todo
  add(newtask: string){
    this.tasks.push(newtask)
  }


  // Delaration d'une method pour supprimer un todo
  remove(existingTask: string){
    var userConfirmed = confirm(`Are you sure to remove this task \n This task ? "\n ${existingTask}" `)

    if(userConfirmed){
      this.tasks = this.tasks.filter(task => task != existingTask);
    }
  }
}
