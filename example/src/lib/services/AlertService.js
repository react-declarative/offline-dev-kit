import { makeAutoObservable } from 'mobx';


const randomString = () => (Math.random() + 1).toString(36).substring(7);

export class AlertService {

    alerts = [];

    get current() {
        const [alert = null] = this.alerts;
        return alert;
    };

    constructor() {
        makeAutoObservable(this);
    };

    hideCurrent = () => {
        if (this.alerts.length > 0) {
            this.alerts.shift();
        }
    };

    push = (message) => {
        this.hideCurrent();
        this.alerts.push({
            key: randomString(),
            message,
        });
    };

};

export default AlertService;
