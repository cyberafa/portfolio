import { Component, signal, inject } from '@angular/core';

// interface
import { IProjects } from '../../interface/IProjects.interface';

// material
import { MatDialog } from '@angular/material/dialog';

// enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

// dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'img/projects/calculator.png',
      alt: 'Calculator',
      title: 'Calculator',
      width: '80px',
      height: '80px',
      description: `Test the calculator built by me from scratch, using Angular and its features!
        <br>
        <br>
        It's <b>still</b> a simple calculator, with all the basic operations, but made with a lot of care and dedication.  `,
      links: [
        {
          name: 'Enjoy the Calculator',
          href: 'https://cyberafa.github.io/calculator-angular/',
        },
      ],
    },
    {
      src: 'img/projects/todo-list.png',
      alt: 'Todo-list',
      title: 'Todo-list',
      width: '80px',
      height: '80px',
      description: `Welcome to my Todo-list!
      <br>
      <br>
      Made entirely with Angular 19 and its features, explore and manage your own to-do list. Add, delete, edit, mark as pending, or completed each task however you want!`,
      links: [
        {
          name: 'Explore the Todo-list',
          href: 'https://cyberafa.github.io/todo-list/',
        },
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
