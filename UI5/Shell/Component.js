'use strict'
jQuery
    .sap
    .require('SapUI5Tutorial.Router')
sap
    .ui
    .define([
        'sap/ui/core/UIComponent', 'sap/ui/model/json/JSONModel'
    ], function (UIComponent, JSONModel) {
        return UIComponent.extend('SapUI5Tutorial.Component', {
            metadata: {
                routing: {
                    config: {
                        routerClass: SapUI5Tutorial.Router,
                        viewType: 'XML',
                        targetAggregation: 'pages',
                        clearTarget: false
                    },
                    routes: [
                        {
                            pattern: 'Doktorbilgileri',
                            viewPath: 'SapUI5Tutorial.Application.Main.views.StartUp.view',
                            name: 'StartUpView',
                            view: 'StartUp',
                            targetControl: 'masterAppView',
                            

                        }, {
                            pattern: 'Hastakayitlari',
                            viewPath: 'SapUI5Tutorial.Application.Main.views.StartUp.view',
                            name: 'hastakayitlariView',
                            view: 'hastakayitlari',
                            targetControl: 'masterAppView'
                          
                        },
                        {
                            pattern: 'Changelog',
                            viewPath: 'SapUI5Tutorial.Application.Main.views.StartUp.view',
                            name: 'changelogView',
                            view: 'changelog',
                            targetControl: 'masterAppView'
                          
                        },
                        {
                            pattern: 'Chat',
                            viewPath: 'SapUI5Tutorial.Application.Main.views.StartUp.view',
                            name: 'chatView',
                            view: 'chat',
                            targetControl: 'masterAppView'
                          
                        },  {
                            pattern: 'dashboard',
                            viewPath: 'SapUI5Tutorial.Application.Main.views.StartUp.view',
                            name: 'dashboardView',
                            view: 'dashboard',
                            targetControl: 'masterAppView'
                          
                        }, {
                            pattern: 'clock',
                            viewPath: 'SapUI5Tutorial.Application.Main.views.StartUp.view',
                            name: 'cssView',
                            view: 'clock',
                            targetControl: 'masterAppView'
                          
                        },{
                            pattern: 'moveuı',
                            viewPath: 'SapUI5Tutorial.Application.Main.views.StartUp.view',
                            name: 'moveuıView',
                            view: 'moveuı',
                            targetControl: 'masterAppView'
                          
                        },{
                        pattern: 'bookstore',
                        viewPath: 'SapUI5Tutorial.Application.Main.views.StartUp.view',
                        name: 'bookstoreView',
                        view: 'bookstore',
                        targetControl: 'masterAppView'
                      
                    },{
                        pattern: 'profil',
                        viewPath: 'SapUI5Tutorial.Application.Main.views.StartUp.view',
                        name: 'profilView',
                        view: 'profil',
                        targetControl: 'masterAppView'
                      
                    }
                       
                    ]
                }

            },
            init: function () {
                sap
                    .ui
                    .core
                    .UIComponent
                    .prototype
                    .init
                    .apply(this, arguments);
                var mConfig = this
                    .getMetadata()
                    .getConfig();
                this
                    .getRouter()
                    .initialize();
            },
            createContent: function () {
                var oViewData = {
                    component: this
                }
                return sap
                    .ui
                    .view(
                        {viewName: 'SapUI5Tutorial.RootApp', type: sap.ui.core.mvc.ViewType.XML, id: 'app', viewData: oViewData}
                    )
            }
        })
    })