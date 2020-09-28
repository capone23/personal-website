import { Component, OnInit } from '@angular/core';
import {timestamp} from 'rxjs/operators';


interface Divertissement {
  title: string;
  technology: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})

export class WorksComponent implements OnInit {

  public divertissements: Array<Divertissement>;
  constructor() { }

  ngOnInit() {
    this.divertissements = [
      {
        title: 'File Upload Service',
        technology: 'AWS Services, Node, Angular, Material Design. HTML 5, SCSS, Typescript, Docker, Java',
        image: 'upload_service',
        link: 'http://upload-service-front-end.s3-website-us-west-2.amazonaws.com/create-job',
      },
      {
        title: 'The Kardashians Quote Game',
        technology: 'AWS, Node.js, Dynomo DB, HTML5',
        image: 'kuwtk',
        link: 'https://www.amazon.com/Keeping-Up-Kardashians-Quote-Game/dp/B075K1WF7T',
      },
      {
        title: 'SYFY Wire',
        technology: 'AWS, Node.js, Dynomo DB',
        image: 'syfy',
        link: 'https://www.syfy.com/apps/syfy-wire-for-amazon-alexa',
      },
      {
        title: 'AR Rotten Tomatoes - Fandango',
        technology: 'Node, AR Studio, Swift',
        image: 'ar',
        link: 'https://demos23.s3.amazonaws.com/IMG_1927.mp4',
      },
      {
        title: 'Golf Now Amazon Alexa Skill',
        technology: 'AWS Services, Node, Dynomo DB',
        image: 'golf',
        link: 'https://demos23.s3.amazonaws.com/golf_now_demo.mp4',
      },

      {
        title: 'NBC News Podcasts',
        technology: 'React, SCSS, HTML5, GraphQL',
        image: 'news',
        link: 'https://www.nbcnews.com/podcasts',
      },
      {
        title: 'Civilian Military Combine',
        technology: 'HTML5, Angular, CSS3',
        image: 'cm',
        link: 'https://www.civilianmilitarycombine.com/',
      }
    ];
  }
}
