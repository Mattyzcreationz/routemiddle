class ExpressEorror extends Error {
    constructor(message, status) {
        super();
        this.message = message;
        this.status = status;
        console.error(this.stack);
    }
}

module.exports = ExpressEorror;