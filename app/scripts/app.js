'use strict';

var app = angular.module('pillfinder', ['ui.router', 
										'ui.bootstrap', 
										'infinite-scroll']);

app.config(["$stateProvider", "$urlRouterProvider", "$httpProvider", 
	function ($stateProvider, $urlRouterProvider, $httpProvider) {
//		$httpProvider.interceptors.push('httpInterceptor');
		$urlRouterProvider.otherwise("index");

		$stateProvider
			.state("index", {
				//abstract: false,
				url: "/index",
				views: {
					"pillWizard": { templateUrl: "components/pillWizard/index.html" },
					"pillSearch": { 
						templateUrl: "components/pillSearch/index.html", 
						controller: 'pillAutoCompleteCtrl',
						controllerAs: 'vm'
					}
				}
			})
			.state("pillImprint", {
				url: "/pillImprint",
				views: {
					"pillWizard": { templateUrl: "components/pillWizard/pill-imprint.html" },
					"pillSearch": { 
						templateUrl: "components/pillSearch/index.html",
						controller: 'pillAutoCompleteCtrl',
						controllerAs: 'vm'
					 }
				}
			})
			.state("pillShapeColor", {
				url: "/pillShapeColor",
				views: {
					"pillWizard": { templateUrl: "components/pillWizard/pill-shape-color.html" },
					"pillSearch": { 
						templateUrl: "components/pillSearch/index.html",
						controller: 'pillAutoCompleteCtrl',
						controllerAs: 'vm'
					 }
				}
			})
			.state("pillSearch", {
				url: "/pillSearchResults/:searchQuery",
				views: {
					"pillWizard": { 
						templateUrl: "components/pillSearch/results-header.html",
						controller: 'pillSearchResultsHeaderController',
						controllerAs: 'vm'
					 },
					"pillSearch": { 
						templateUrl: "components/pillSearch/results.html",
						controller: 'pillSearchResultsController',
						controllerAs: 'vm'
					 }
				},
				resolve: {
					getPillResults: function ($stateParams, pillSearchService) {
						return pillSearchService.fetchPillResults($stateParams.searchQuery);
					}
 				},
				controller: 'pillSearchResultsController',
				controllerAs: 'vm'
			})
	}
]);