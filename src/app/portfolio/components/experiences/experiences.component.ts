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
        strong: 'IT Intern',
        p: 'PROCEM Centro de Especialidades Médicas | 11/2024 - Present',
      },
      text: '<p>I assist all areas of the unit with IT infrastructure-related issues, such as VPN server checks, technical problems, and more.</p>',
    },
    {
      summary: {
        strong: 'Freelance Web Developer',
        p: 'Freelance | 2021 - 2022',
      },
      text: '<p>I have developed a variety of freelance projects in the front-end area using mainly VueJS, ReactJS and TypeScript always striving for an innovative and efficient interface.</p>',
    },
  ]);
}
