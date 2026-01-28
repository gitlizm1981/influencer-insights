(self["webpackChunkinfluencer_insights"] = self["webpackChunkinfluencer_insights"] || []).push([["main"],{

/***/ 289
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appConfig: () => (/* binding */ appConfig)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 6264);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 698);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routes */ 2181);




const appConfig = {
  providers: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.provideBrowserGlobalErrorListeners)(), (0,_angular_router__WEBPACK_IMPORTED_MODULE_1__.provideRouter)(_app_routes__WEBPACK_IMPORTED_MODULE_3__.routes, (0,_angular_router__WEBPACK_IMPORTED_MODULE_1__.withHashLocation)()), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.provideHttpClient)()]
};

/***/ },

/***/ 722
/*!***************************************************************************!*\
  !*** ./src/app/components/summarizer/summarizer.component.css?ngResource ***!
  \***************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.search-container {
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 15px;
}

.form-group {
  flex: 1;
}

.thumbnail-preview {
  width: 160px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.thumbnail-preview img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  object-fit: cover;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.btn {
  background-color: #ff0000;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.btn:disabled {
  background-color: #ccc;
}

.error {
  color: red;
  margin-top: 10px;
}

.results {
  margin-top: 30px;
}

.ai-analysis {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.analysis-card {
  flex: 1;
  min-width: 300px;
  background-color: #e8f4fd;
  border: 1px solid #b6d4fe;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.analysis-card h3 {
  margin-top: 0;
  color: #0d6efd;
}

.analysis-card p {
  white-space: pre-wrap; /* Preserve formatting from AI */
}


.comment-card {
  border: 1px solid #eee;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 4px;
  background-color: #f9f9f9;
}

.comment-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 0.9em;
  color: #666;
}

.author {
  font-weight: bold;
  color: #333;
}

.likes {
  margin-top: 10px;
  font-size: 0.9em;
  color: #666;
}

/* New Table Styles */
.comments-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;
}

.comments-table th, .comments-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.comments-table th {
  background-color: #f2f2f2;
  font-weight: bold;
}

.comments-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.comments-table tr:hover {
  background-color: #f5f5f5;
}
`, "",{"version":3,"sources":["webpack://./src/app/components/summarizer/summarizer.component.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,cAAc;EACd,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,qCAAqC;EACrC,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,OAAO;EACP,gBAAgB;EAChB,yBAAyB;EACzB,yBAAyB;EACzB,aAAa;EACb,kBAAkB;EAClB,qCAAqC;AACvC;;AAEA;EACE,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,qBAAqB,EAAE,gCAAgC;AACzD;;;AAGA;EACE,sBAAsB;EACtB,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,WAAW;AACb;;AAEA,qBAAqB;AACrB;EACE,WAAW;EACX,yBAAyB;EACzB,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B","sourcesContent":[".container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n  font-family: Arial, sans-serif;\n}\n\n.search-container {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  margin-bottom: 15px;\n}\n\n.form-group {\n  flex: 1;\n}\n\n.thumbnail-preview {\n  width: 160px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.thumbnail-preview img {\n  width: 100%;\n  height: auto;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n  object-fit: cover;\n}\n\nlabel {\n  display: block;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\n\n.form-control {\n  width: 100%;\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n\n.btn {\n  background-color: #ff0000;\n  color: white;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 16px;\n}\n\n.btn:disabled {\n  background-color: #ccc;\n}\n\n.error {\n  color: red;\n  margin-top: 10px;\n}\n\n.results {\n  margin-top: 30px;\n}\n\n.ai-analysis {\n  display: flex;\n  gap: 20px;\n  margin-bottom: 30px;\n  flex-wrap: wrap;\n}\n\n.analysis-card {\n  flex: 1;\n  min-width: 300px;\n  background-color: #e8f4fd;\n  border: 1px solid #b6d4fe;\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n}\n\n.analysis-card h3 {\n  margin-top: 0;\n  color: #0d6efd;\n}\n\n.analysis-card p {\n  white-space: pre-wrap; /* Preserve formatting from AI */\n}\n\n\n.comment-card {\n  border: 1px solid #eee;\n  padding: 15px;\n  margin-bottom: 10px;\n  border-radius: 4px;\n  background-color: #f9f9f9;\n}\n\n.comment-header {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  font-size: 0.9em;\n  color: #666;\n}\n\n.author {\n  font-weight: bold;\n  color: #333;\n}\n\n.likes {\n  margin-top: 10px;\n  font-size: 0.9em;\n  color: #666;\n}\n\n/* New Table Styles */\n.comments-table {\n  width: 100%;\n  border-collapse: collapse;\n  margin-top: 15px;\n}\n\n.comments-table th, .comments-table td {\n  border: 1px solid #ddd;\n  padding: 8px;\n  text-align: left;\n}\n\n.comments-table th {\n  background-color: #f2f2f2;\n  font-weight: bold;\n}\n\n.comments-table tr:nth-child(even) {\n  background-color: #f9f9f9;\n}\n\n.comments-table tr:hover {\n  background-color: #f5f5f5;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ },

/***/ 2181
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
const routes = [];

/***/ },

/***/ 4429
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 4967);
/* harmony import */ var _app_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.config */ 289);
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app */ 5517);



(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.bootstrapApplication)(_app_app__WEBPACK_IMPORTED_MODULE_2__.App, _app_app_config__WEBPACK_IMPORTED_MODULE_1__.appConfig).catch(err => console.error(err));

/***/ },

/***/ 4947
/*!*************************************!*\
  !*** ./src/app/app.html?ngResource ***!
  \*************************************/
(module) {

"use strict";
module.exports = "<main class=\"main\">\n  <app-summarizer></app-summarizer>\n</main>\n<router-outlet />\n";

/***/ },

/***/ 5517
/*!************************!*\
  !*** ./src/app/app.ts ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   App: () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _app_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.html?ngResource */ 4947);
/* harmony import */ var _app_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.css?ngResource */ 7920);
/* harmony import */ var _app_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3305);
/* harmony import */ var _components_summarizer_summarizer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/summarizer/summarizer.component */ 6325);






let App = class App {
  title = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.signal)('influencer-insights');
};
App = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-root',
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _components_summarizer_summarizer_component__WEBPACK_IMPORTED_MODULE_6__.SummarizerComponent],
  template: _app_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_app_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], App);


/***/ },

/***/ 6325
/*!***************************************************************!*\
  !*** ./src/app/components/summarizer/summarizer.component.ts ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SummarizerComponent: () => (/* binding */ SummarizerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _summarizer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./summarizer.component.html?ngResource */ 7495);
/* harmony import */ var _summarizer_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./summarizer.component.css?ngResource */ 722);
/* harmony import */ var _summarizer_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_summarizer_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _services_youtube_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/youtube.service */ 6979);
/* harmony import */ var _services_gemini_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/gemini.service */ 9537);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 1873);









let SummarizerComponent = class SummarizerComponent {
  youtubeService;
  geminiService;
  cdr;
  youtubeLink = '';
  apiKey = 'AIzaSyBn3gG7iSoS72VALBpwOE2BovEof2QE4Fk';
  geminiApiKey = 'AIzaSyC4ELvstARkxMFXikoP1H3UIdAjMN1Q30c';
  comments = [];
  insights = '';
  suggestions = '';
  thumbnailUrl = null;
  loading = false;
  error = null;
  constructor(youtubeService, geminiService, cdr) {
    this.youtubeService = youtubeService;
    this.geminiService = geminiService;
    this.cdr = cdr;
  }
  summarize() {
    this.error = null;
    this.comments = [];
    this.insights = '';
    this.suggestions = '';
    this.thumbnailUrl = null;
    if (!this.youtubeLink) {
      this.error = 'Please enter a YouTube link';
      this.cdr.detectChanges();
      return;
    }
    if (!this.apiKey) {
      this.error = 'Please enter a YouTube Data API Key';
      this.cdr.detectChanges();
      return;
    }
    const videoId = this.extractVideoId(this.youtubeLink);
    if (!videoId) {
      this.error = 'Invalid YouTube URL';
      this.cdr.detectChanges();
      return;
    }
    this.loading = true;
    this.cdr.detectChanges();
    (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.forkJoin)({
      video: this.youtubeService.getVideoDetails(videoId, this.apiKey),
      comments: this.youtubeService.getComments(videoId, this.apiKey)
    }).subscribe({
      next: results => {
        const videoItem = results.video.items[0];
        const ownerChannelId = videoItem?.snippet?.channelId;
        if (videoItem?.snippet?.thumbnails) {
          this.thumbnailUrl = videoItem.snippet.thumbnails.medium?.url || videoItem.snippet.thumbnails.default?.url;
        }
        this.comments = results.comments.items.map(item => {
          const topLevel = item.snippet.topLevelComment.snippet;
          const replies = item.replies ? item.replies.comments : [];
          let isOwnerReplied = false;
          if (ownerChannelId && replies.length > 0) {
            isOwnerReplied = replies.some(reply => reply.snippet.authorChannelId.value === ownerChannelId);
          }
          return {
            username: topLevel.authorDisplayName,
            publishedAt: topLevel.publishedAt,
            textDisplay: topLevel.textDisplay,
            likeCount: topLevel.likeCount,
            isOwnerReplied: isOwnerReplied
          };
        });
        // Call Gemini API for insights
        this.geminiService.generateInsights(this.comments, this.geminiApiKey).subscribe({
          next: geminiResponse => {
            try {
              const text = geminiResponse.candidates[0].content.parts[0].text;
              // Clean up markdown code blocks if present
              const cleanText = text.replace(/```json\n?|\n?```/g, '');
              const parsed = JSON.parse(cleanText);
              this.insights = parsed.insights;
              this.suggestions = parsed.suggestions;
            } catch (e) {
              console.error('Failed to parse Gemini response', e);
              this.insights = 'Failed to generate insights.';
              this.suggestions = 'Failed to generate suggestions.';
            }
            this.loading = false;
            this.cdr.detectChanges();
          },
          error: err => {
            console.error('Gemini API Error', err);
            this.loading = false; // Stop loading even if Gemini fails, but we have comments
            this.cdr.detectChanges();
          }
        });
        console.log(this.comments);
        // Don't stop loading here, wait for Gemini
      },
      error: err => {
        console.error(err);
        this.error = 'Failed to fetch data. Please check your API key and Quota.';
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
  extractVideoId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  }
  static ctorParameters = () => [{
    type: _services_youtube_service__WEBPACK_IMPORTED_MODULE_7__.YouTubeService
  }, {
    type: _services_gemini_service__WEBPACK_IMPORTED_MODULE_8__.GeminiService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef
  }];
};
SummarizerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-summarizer',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule],
  template: _summarizer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_summarizer_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], SummarizerComponent);


/***/ },

/***/ 6979
/*!*********************************************!*\
  !*** ./src/app/services/youtube.service.ts ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   YouTubeService: () => (/* binding */ YouTubeService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 698);



let YouTubeService = class YouTubeService {
  http;
  apiUrl = 'https://www.googleapis.com/youtube/v3/commentThreads';
  videoUrl = 'https://www.googleapis.com/youtube/v3/videos';
  constructor(http) {
    this.http = http;
  }
  getVideoDetails(videoId, apiKey) {
    const params = {
      part: 'snippet',
      id: videoId,
      key: apiKey
    };
    return this.http.get(this.videoUrl, {
      params
    });
  }
  getComments(videoId, apiKey) {
    const params = {
      part: 'snippet,replies',
      videoId: videoId,
      key: apiKey,
      textFormat: 'plainText',
      maxResults: '200'
    };
    return this.http.get(this.apiUrl, {
      params
    });
  }
  static ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
  }];
};
YouTubeService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
  providedIn: 'root'
})], YouTubeService);


/***/ },

/***/ 7495
/*!****************************************************************************!*\
  !*** ./src/app/components/summarizer/summarizer.component.html?ngResource ***!
  \****************************************************************************/
(module) {

"use strict";
module.exports = "<div class=\"container\">\n  <h2>YouTube Comment Summarizer</h2>\n  \n\n  <div class=\"search-container\">\n    <div class=\"form-group\">\n      <label for=\"youtubeLink\">YouTube Video Link:</label>\n      <input type=\"text\" id=\"youtubeLink\" [(ngModel)]=\"youtubeLink\" placeholder=\"https://www.youtube.com/watch?v=...\" class=\"form-control\">\n    </div>\n\n    <div class=\"thumbnail-preview\" *ngIf=\"thumbnailUrl\">\n      <img [src]=\"thumbnailUrl\" alt=\"Video Thumbnail\">\n    </div>\n  </div>\n\n  <button (click)=\"summarize()\" [disabled]=\"loading\" class=\"btn\">\n    {{ loading ? 'Loading...' : 'Summarize' }}\n  </button>\n\n  <div *ngIf=\"error\" class=\"error\">\n    {{ error }}\n  </div>\n\n  <div *ngIf=\"comments.length > 0\" class=\"results\">\n    <div *ngIf=\"insights || suggestions\" class=\"ai-analysis\">\n      <div class=\"analysis-card\" *ngIf=\"insights\">\n        <h3>🤖 AI Insights</h3>\n        <p>{{ insights }}</p>\n      </div>\n      <div class=\"analysis-card\" *ngIf=\"suggestions\">\n        <h3>💡 Suggestions for Creator</h3>\n        <p>{{ suggestions }}</p>\n      </div>\n    </div>\n\n    <h3>Top Comments</h3>\n    <table class=\"comments-table\">\n      <thead>\n        <tr>\n          <th>Username</th>\n          <th>Timestamp</th>\n          <th>Comments</th>\n          <th>Thumb Up Numbers</th>\n          <th>Is Video Owner Replied</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let comment of comments\">\n          <td>{{ comment.username }}</td>\n          <td>{{ comment.publishedAt | date:'short' }}</td>\n          <td>{{ comment.textDisplay }}</td>\n          <td>{{ comment.likeCount }}</td>\n          <td>{{ comment.isOwnerReplied ? 'Yes' : 'No' }}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n";

/***/ },

/***/ 7920
/*!************************************!*\
  !*** ./src/app/app.css?ngResource ***!
  \************************************/
(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ },

/***/ 9537
/*!********************************************!*\
  !*** ./src/app/services/gemini.service.ts ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeminiService: () => (/* binding */ GeminiService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 698);



let GeminiService = class GeminiService {
  http;
  // 建议先使用 flash-exp 测试连通性
  modelName = 'gemini-3-pro-preview';
  apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${this.modelName}:generateContent`;
  constructor(http) {
    this.http = http;
  }
  generateInsights(comments, apiKey) {
    const requestBody = {
      contents: [{
        parts: [{
          text: `You are a YouTube audience analyst. Analyze the following YouTube comments and extract:1. Top 5 recurring themes 2. Main viewer frustrations or confusion points 3. What viewers expected but did not get 4. What viewers liked most and want more of

Summarize insights and suggestions for future videos based on this analysis.
          
          Important: Detect the dominant language of the comments. Provide the response (both insights and suggestions) in that same language.
          
          Comments:
          ${JSON.stringify(comments.map(c => c.textDisplay).slice(0, 50))}
          
          Return the result in valid JSON format with this structure:
          {
            "insights": "Key insights about audience sentiment, demographics, etc. (in dominant language)",
            "suggestions": "Actionable advice for future videos (in dominant language)"
          }
          `
        }]
      }]
    };
    return this.http.post(`${this.apiUrl}?key=${apiKey}`, requestBody);
  }
  static ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
  }];
};
GeminiService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
  providedIn: 'root'
})], GeminiService);


/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map