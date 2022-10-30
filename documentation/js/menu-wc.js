'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">github-backend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-8fc98aedcee82f7058821325c42c32d076de9596f9c0b172022184b5f25f9eac2f2a2f4f6a388db1a18476cbfd2b99bac328d9f14df4e66dadcd5d1b6df1da85"' : 'data-target="#xs-controllers-links-module-AppModule-8fc98aedcee82f7058821325c42c32d076de9596f9c0b172022184b5f25f9eac2f2a2f4f6a388db1a18476cbfd2b99bac328d9f14df4e66dadcd5d1b6df1da85"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-8fc98aedcee82f7058821325c42c32d076de9596f9c0b172022184b5f25f9eac2f2a2f4f6a388db1a18476cbfd2b99bac328d9f14df4e66dadcd5d1b6df1da85"' :
                                            'id="xs-controllers-links-module-AppModule-8fc98aedcee82f7058821325c42c32d076de9596f9c0b172022184b5f25f9eac2f2a2f4f6a388db1a18476cbfd2b99bac328d9f14df4e66dadcd5d1b6df1da85"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-8fc98aedcee82f7058821325c42c32d076de9596f9c0b172022184b5f25f9eac2f2a2f4f6a388db1a18476cbfd2b99bac328d9f14df4e66dadcd5d1b6df1da85"' : 'data-target="#xs-injectables-links-module-AppModule-8fc98aedcee82f7058821325c42c32d076de9596f9c0b172022184b5f25f9eac2f2a2f4f6a388db1a18476cbfd2b99bac328d9f14df4e66dadcd5d1b6df1da85"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-8fc98aedcee82f7058821325c42c32d076de9596f9c0b172022184b5f25f9eac2f2a2f4f6a388db1a18476cbfd2b99bac328d9f14df4e66dadcd5d1b6df1da85"' :
                                        'id="xs-injectables-links-module-AppModule-8fc98aedcee82f7058821325c42c32d076de9596f9c0b172022184b5f25f9eac2f2a2f4f6a388db1a18476cbfd2b99bac328d9f14df4e66dadcd5d1b6df1da85"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GithubApiModule.html" data-type="entity-link" >GithubApiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-GithubApiModule-07d892839d2935ffb6c953bf01ee47723bcc12d7ed1a2e38138a03d6819db2fbfd34b4f4fa1a69f68dea1ad7adf5a5d0ba5fe74a10a234cb14d130b5bc0186df"' : 'data-target="#xs-controllers-links-module-GithubApiModule-07d892839d2935ffb6c953bf01ee47723bcc12d7ed1a2e38138a03d6819db2fbfd34b4f4fa1a69f68dea1ad7adf5a5d0ba5fe74a10a234cb14d130b5bc0186df"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-GithubApiModule-07d892839d2935ffb6c953bf01ee47723bcc12d7ed1a2e38138a03d6819db2fbfd34b4f4fa1a69f68dea1ad7adf5a5d0ba5fe74a10a234cb14d130b5bc0186df"' :
                                            'id="xs-controllers-links-module-GithubApiModule-07d892839d2935ffb6c953bf01ee47723bcc12d7ed1a2e38138a03d6819db2fbfd34b4f4fa1a69f68dea1ad7adf5a5d0ba5fe74a10a234cb14d130b5bc0186df"' }>
                                            <li class="link">
                                                <a href="controllers/GithubApiController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GithubApiController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-GithubApiModule-07d892839d2935ffb6c953bf01ee47723bcc12d7ed1a2e38138a03d6819db2fbfd34b4f4fa1a69f68dea1ad7adf5a5d0ba5fe74a10a234cb14d130b5bc0186df"' : 'data-target="#xs-injectables-links-module-GithubApiModule-07d892839d2935ffb6c953bf01ee47723bcc12d7ed1a2e38138a03d6819db2fbfd34b4f4fa1a69f68dea1ad7adf5a5d0ba5fe74a10a234cb14d130b5bc0186df"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GithubApiModule-07d892839d2935ffb6c953bf01ee47723bcc12d7ed1a2e38138a03d6819db2fbfd34b4f4fa1a69f68dea1ad7adf5a5d0ba5fe74a10a234cb14d130b5bc0186df"' :
                                        'id="xs-injectables-links-module-GithubApiModule-07d892839d2935ffb6c953bf01ee47723bcc12d7ed1a2e38138a03d6819db2fbfd34b4f4fa1a69f68dea1ad7adf5a5d0ba5fe74a10a234cb14d130b5bc0186df"' }>
                                        <li class="link">
                                            <a href="injectables/GithubApiService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GithubApiService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Branch.html" data-type="entity-link" >Branch</a>
                            </li>
                            <li class="link">
                                <a href="classes/Commit.html" data-type="entity-link" >Commit</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConfigService.html" data-type="entity-link" >ConfigService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});