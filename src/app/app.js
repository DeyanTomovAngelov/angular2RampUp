var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="/node_modules/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
var Article = (function () {
    function Article(title, link) {
        this.title = title;
        this.link = link;
        this.votes = 10;
    }
    Article.prototype.voteUp = function () {
        this.votes += 1;
        return false;
    };
    Article.prototype.voteDown = function () {
        this.votes -= 1;
        return false;
    };
    Article.prototype.domain = function () {
        var link = this.link.split('//')[1];
        return link.split('/')[0];
    };
    return Article;
})();
var RedditArticle = (function () {
    function RedditArticle() {
    }
    RedditArticle = __decorate([
        angular2_1.Component({
            selector: 'reddit-article',
            inputs: ['article'],
        }),
        angular2_1.View({
            template: "\n        <article>\n            <div class=\"votes\">{{ article.votes }}</div>\n            <div class=\"main\">\n                <h2>\n                    <a href=\"{{ article.link }}\">{{ article.title }}</a>\n                    <span>({{ article.domain() }})</span>\n                </h2>\n                <ul>\n                    <li><a href (click)='article.voteUp()'>upvote</a></li>\n                    <li><a href (click)='article.voteDown()'>downvote</a></li>\n                </ul>\n            </div>\n        </article>\n        "
        }), 
        __metadata('design:paramtypes', [])
    ], RedditArticle);
    return RedditArticle;
})();
var RedditApp = (function () {
    function RedditApp() {
        this.articles = [
            new Article('Angular 2', 'http://angular.io'),
            new Article('Fullstack', 'http://fullstack.io'),
            new Article('Deyan', 'http://d.angelov.uchenici.bg')
        ];
    }
    RedditApp.prototype.addArticle = function (title, link) {
        this.articles.push(new Article(title.value, link.value));
        title.value = '';
        link.value = '';
    };
    RedditApp = __decorate([
        angular2_1.Component({
            selector: 'reddit'
        }),
        angular2_1.View({
            template: "\n        <section class=\"new-link\">\n            <div class=\"control-group\">\n                <div><label for=\"title\">Title:</label></div>\n                <div><input name=\"title\" #new-title/></div>\n            </div>\n            <div class=\"control-group\">\n                <div><label for=\"link\">Link:</label></div>\n                <div><input name=\"link\" #new-link/></div>\n            </div>\n\n            <button (click)=\"addArticle(newTitle, newLink)\">Submit Link</button>\n        </section>\n\n        <reddit-article\n            *ng-for=\"#article of articles\"\n            [article]=\"article\">\n\n        </reddit-article>\n        ",
            directives: [RedditArticle, angular2_1.NgFor]
        }), 
        __metadata('design:paramtypes', [])
    ], RedditApp);
    return RedditApp;
})();
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
angular2_1.bootstrap(RedditApp);
//# sourceMappingURL=app.js.map