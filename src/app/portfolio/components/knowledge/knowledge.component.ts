import { Component, signal } from '@angular/core';

import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss',
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimento de Angular',
      width: '22',
      height: '24',
    },
    {
      src: 'icons/knowledge/react.svg',
      alt: 'Ícone de conhecimento de React',
      width: '22',
      height: '24',
    },
    {
      src: 'icons/knowledge/java.svg',
      alt: 'Ícone de conhecimento de Angular',
      width: '22',
      height: '24',
    },
    {
      src: 'icons/knowledge/javascript.svg',
      alt: 'Ícone de conhecimento de JavaScript',
      width: '22',
      height: '24',
    },
    {
      src: 'icons/knowledge/typescript.svg',
      alt: 'Ícone de conhecimento de TypeScript',
      width: '26',
      height: '28',
    },
    {
      src: 'icons/knowledge/html5.svg',
      alt: 'Ícone de conhecimento de HTML5',
      width: '22',
      height: '24',
    },
    {
      src: 'icons/knowledge/css3.svg',
      alt: 'Ícone de conhecimento de CSS3',
      width: '22',
      height: '24',
    },
  ]);
}
