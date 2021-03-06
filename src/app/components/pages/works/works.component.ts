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
        title: 'File Upload Service - Web app',
        technology: 'AWS Services, Node, Angular, Material Design. HTML 5, SCSS, Typescript, Docker, Java',
        image: 'upload_service',
        link: 'http://upload-service-front-end.s3-website-us-west-2.amazonaws.com/create-job',
      },
      {
        title: 'The Kardashians Quote Game - Alexa Skill',
        technology: 'Ask CLI, AWS, Node.js, Dynomo DB, HTML5',
        image: 'kuwtk',
        link: 'https://sweetiessweeps.com/2018/08/keeping-up-with-the-kardashians-quote-game.html',
      },
      {
        title: 'CNBC - Alexa Skill',
        technology: 'Ask CLI, AWS, Node.js, Dynomo DB, HTML5',
        image: 'cnbc',
        link: 'https://www.amazon.com/NBCUniversal-Media-LLC-CNBC/dp/B01KUGK3QE',
      },
      {
        title: 'SYFY Wire - Alexa Skill',
        technology: 'Ask CLI, AWS, Node.js, Dynomo DB',
        image: 'syfy',
        link: 'https://www.syfy.com/apps/syfy-wire-for-amazon-alexa',
      },
      {
        title: 'AR Rotten Tomatoes - Fandango Mobile Concept',
        technology: 'Node, AR Studio, Swift',
        image: 'ar',
        link: 'https://demos23.s3.amazonaws.com/IMG_1927.mp4',
      },
      {
        title: 'Golf Now Amazon - Alexa Skill',
        technology: 'AWS Services, Node, Dynomo DB',
        image: 'golf',
        link: 'https://demos23.s3.amazonaws.com/golf_now_demo.mp4',
      },
      {
        title: 'NBC News Podcasts',
        technology: 'React.js, Rudux, SCSS, HTML5, GraphQL',
        image: 'news',
        link: 'https://www.nbcnews.com/podcasts',
      },
      {
        title: 'Civilian Military Combine',
        technology: 'HTML5, Angular, CSS3, Mongodb',
        image: 'cm',
        link: 'https://www.civilianmilitarycombine.com',
      },
      {
        title: 'BFG Financial Service',
        technology: 'React.js, HTML5, CSS3, Java, Node.js, GraphQL',
        image: 'bfg',
        link: 'https://www.bfgny.com',
      },
      {
        title: 'Grater NY Nursing',
        technology: 'JavaScript, HTML5, Angular, CSS3, PHP, jQuery, Node.js, mySql',
        image: 'gnyn',
        link: 'https://gnyservices.com',
      },
      {
        title: 'Dagim Fish Products',
        technology: 'HTML5, CSS3, PHP, jQuery, Node.js, mySql',
        image: 'dfpfish',
        link: 'https://dagimfish.com',
      },
      {
        title: 'Hold & Storage - Ecommerce',
        technology: 'HTML5, CSS3, PHP, jQuery, Node.js, mySql',
        image: 'hns',
        link: 'https://holdnstorage.com',
      },
      {
        title: 'Disposable Ware - Ecommerce',
        technology: 'HTML5, CSS3, PHP, jQuery, Node.js, React, mySQL',
        image: 'bst',
        link: 'https://blueskyny.com',
      },
      {
        title: 'Oasis Tile - Ecommerce',
        technology: 'HTML5, CSS3, PHP, jQuery, Node.js, React, mySQL',
        image: 'oasis',
        link: 'https://oasistile.com',
      },
      {
        title: 'Fabuwood - Informational',
        technology: 'HTML5, CSS3, PHP, jQuery, Node.js, React, mySQL',
        image: 'fabu',
        link: 'https://www.fabuwood.com',
      }
    ];
  }
}
