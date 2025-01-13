import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Estagiário de TI',
        p: 'PROCEM Centro de Especialidades Médicas | Novembro 2024 - Present',
      },
      text: '<p>Em meu período na PROCEM, meu trabalho é auxiliar todas as áreas da unidade com problemas relacionados a infraestrutura da TI, como checagem de conexão de servidores VPN, problemas técnicos em um computador, entre outros.</p>',
    },
  ]);
}
