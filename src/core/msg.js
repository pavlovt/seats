import * as alertify from 'alertifyjs';
import '../../node_modules/alertifyjs/build/css/alertify.min.css';
import '../../node_modules/alertifyjs/build/css/themes/default.min.css';

export class Notify {
    constructor() {
        this.alertify = alertify;
        // change the log template if needed
        /*alertify
        .setLogTemplate(function (input) {
            return input;
        });*/
        // alertify.set('notifier', 'position', 'bottom-right');
        // alertify.set('notifier', 'delay', 10);
        // alertify.defaults.glossary.title = '';
    }

    info(msg, placeholderArgs) {
        // alertify.success(this.t.instant(msg, placeholderArgs));
        alertify.success(msg);
    }

    error(msg, placeholderArgs) {
        // alertify.error(this.t.instant(msg, placeholderArgs));
        alertify.error(msg);
    }

    confirm(msg, title = '', okFn, cancelFn = null, placeholderArgs) {
        // confirm dialog
        alertify.defaults.glossary.title = title;
        // alertify.confirm(this.t.instant(msg, placeholderArgs), okFn, cancelFn);        
    }
}

export default new Notify();