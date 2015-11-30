/// <reference path="/node_modules/angular2/angular2.d.ts" />
import {
    Component,
    NgFor,
    View,
    bootstrap,
} from 'angular2/angular2';

class Article {
    title: string;
    link: string;
    votes: number;

    constructor(title, link) {
        this.title = title;
        this.link = link;
        this.votes = 10;
    }
    voteUp() {
        this.votes += 1;
        return false;
    }
    voteDown() {
        this.votes -= 1;
        return false;
    }

    domain() {
        var link = this.link.split('//')[1];
        return link.split('/')[0];
    }
}

@Component({
    selector: 'reddit-article',
    inputs: ['article'],
})
@View({
    template: `
        <article>
            <div class="votes">{{ article.votes }}</div>
            <div class="main">
                <h2>
                    <a href="{{ article.link }}">{{ article.title }}</a>
                    <span>({{ article.domain() }})</span>
                </h2>
                <ul>
                    <li><a href (click)='article.voteUp()'>upvote</a></li>
                    <li><a href (click)='article.voteDown()'>downvote</a></li>
                </ul>
            </div>
        </article>
        `
})
class RedditArticle {
    article: Article;
}


@Component({
    selector: 'reddit'
})
@View({
    template: `
        <section class="new-link">
            <div class="control-group">
                <div><label for="title">Title:</label></div>
                <div><input name="title" #new-title/></div>
            </div>
            <div class="control-group">
                <div><label for="link">Link:</label></div>
                <div><input name="link" #new-link/></div>
            </div>

            <button (click)="addArticle(newTitle, newLink)">Submit Link</button>
        </section>

        <reddit-article
            *ng-for="#article of articles"
            [article]="article">

        </reddit-article>
        `,
    directives: [RedditArticle, NgFor]
})
class RedditApp {
    articles: Array<Article>;

    constructor() {
        this.articles = [
            new Article('Angular 2', 'http://angular.io'),
            new Article('Fullstack', 'http://fullstack.io'),
            new Article('Deyan', 'http://d.angelov.uchenici.bg')
        ];
    }

    addArticle(title, link) {
        this.articles.push(new Article(title.value, link.value));
        title.value = '';
        link.value = '';
    }
}

//class Person {
//    constructor (public firstName: string,
//                 public lastname: string,
//                 public age: number) {}
//
//    greet() {
//        console.log('Hello', this.firstName);
//    }
//
//    ageInYears(years:number): number {
//        return console.log(this.age + years);
//    }
//}
//
//var Pesho: Person = new Person('Pesho', 'Peshev', 12);
//
//Pesho.greet();
//Pesho.ageInYears(12);
//
//
//class Report {
//    data: Array<string>;
//
//    constructor(data: Array<string>) {
//        this.data = data;
//    }
//
//    run() {
//        this.data.forEach((line) => console.log(line));
//    }
//}
//
//class ExtendedReport extends  Report {
//    headers: Array<string>;
//
//    constructor(headers: Array<string>, values: Array<string>) {
//        this.headers = headers;
//        super(values);
//    }
//
//    run() {
//        console.log(this.headers);
//        super.run();
//    }
//}
//
//var headersS: Array<string> = ['Name', 'Age', 'Address'];
//var data: Array<string> = ['Pesho Peshev', 'Ala Bala', 'Huba Buba'];
//
//var someExtendedReport: ExtendedReport = new ExtendedReport(headersS, data);
//someExtendedReport.run();
//
//var someReport: Report = new Report(['First line', 'Second line', 'Third line', 'Guess the line number']);
//someReport.run();


bootstrap(RedditApp);
