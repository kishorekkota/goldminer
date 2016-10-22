"use strict";
var router_1 = require('@angular/router');
var miner_component_1 = require('./miner/shared/miner.component');
var faq_component_1 = require('./faq/faq.component');
var appRoutes = [
    {
        path: 'startgame',
        component: miner_component_1.MinerComponent
    },
    {
        path: 'faq',
        component: faq_component_1.FaqComponent
    },
    {
        path: '',
        redirectTo: '/faq',
        pathMatch: 'full'
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map