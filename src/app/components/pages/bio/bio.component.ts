import { Component, OnInit } from '@angular/core';

interface Work {
  companyImage: string;
  title: string;
  companyName: string;
  description: string;
  startDate: number;
  endDate: number;
  isCurrent?: boolean;
}

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {
  public works: Array<Work>;
  constructor() { }

  ngOnInit() {
    const d = new Date();
    this.works = [
      {
        companyImage: '/assets/images/works/nbcu.png',
        title: 'Software Engineer UX/UI Lead',
        companyName: 'NBC Universal.',
        description: 'Responsible for developing, designing and maintaining a large-scale CMS related app for content distribution and streaming services, developing front-end components using angular material design part of an agile scrum team, developing and integrating API’s, services reusable components, deployed code using UDeploy and preforming code merges, and daily code reviews.',
        startDate: 1538402356000,
        endDate: d.getTime(),
        isCurrent: true,
      },
      {
        companyImage: '/assets/images/works/nbcu.png',
        title: 'Technical SPC Software Lead (Media Labs)',
        companyName: 'NBC Universal',
        description: 'Develop technical solutions for variety of applications, in agile environment utilizing varying programming languages and technologies such as, Google Machine Learning Services, Amazon Alexa SDK, Samsung Smart TV API, Golf Now API, Comcast X1 API, Google Home SDK, and more highly focused on mobile apps, voice, and marketing solutions, emerging media, VR AR, UX/UI research and development.',
        startDate: 1375330356000,
        endDate: 1535810356000,
      },
      {
        companyImage: '/assets/images/works/wgsn.png',
        title: 'Lead UI/UX Software-Engineer',
        companyName: 'WGSN.com',
        description: 'Responsible for building complex, beautiful web applications desktop and mobile in a dynamic agile environment, bringing both the design and back-end functionality to work well in all modern browsers including internet explorer. Develop and lead the implementation of front-end web coding and design standards, writing clear, clean, and concise code.',
        startDate: 1322111156000,
        endDate: 1332111156000,
      },
      {
        companyImage: '/assets/images/works/bfm.png',
        title: 'Sr.Web-Developer/UI Designer',
        companyName: 'BlueFountainMedia.com',
        description: 'Design mockups, wireframes, write markup, and maintain existing web sites and internal CMS. Develop and web sites and web-based applications using a variety of tools such as, HTML/HTML5/XHTML/CSS/CSS3, jQuery, JavaScript, Photoshop, Illustrator, Flash, Adobe AIR, SQL Enterprise, Chrome Developer Tools.',
        startDate: 1272111156000,
        endDate: 1322111156000,
      }
    ];
  }

  public formatDuration(start, end): string {
    const exactYears = (start - end) / (1000 * 3600 * 24 * 365);
    const years = Math.floor(exactYears)
    const exactMonths = (exactYears - years) * 12;
    const months = Math.round(exactMonths);

    let finalString = (years > 0 ? `${years} year` : '');
    finalString += (years  > 1 ? `s` : '');
    finalString += (years > 0 && months > 0 ? ' and ' : '');
    finalString += (months > 0 ? `${months} month` : '');
    finalString += (months > 1 ? `s` : '');

    return finalString;

  }

}
