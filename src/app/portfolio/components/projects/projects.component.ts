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
      alt: 'Projeto da calculadora',
      title: 'Calculadora',
      width: '80px',
      height: '80px',
      description: `Teste  a calculadora feita por mim, do zero, usando Angular e suas funcionalidades!
        <br>
        <br>
        Ela <b>ainda</b> é uma calculadora simples, com todas as operações básicas, mas feita com muito carinho e dedicação.  `,
      links: [
        {
          name: 'Conheça a calculadora',
          href: 'https://cyberafa.github.io/calculator-angular/',
        },
      ],
    },
    {
      src: 'img/projects/todo-list.png',
      alt: 'Projeto da Lista de tarefas',
      title: 'To-do List',
      width: '80px',
      height: '80px',
      description: `(WIP) Um projeto futuro, mas bem interessante e completo! Utilizando, obviamente, angular e suas funcionalidades.`,
      links: [
        {
          name: 'WIP',
          href: '',
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
