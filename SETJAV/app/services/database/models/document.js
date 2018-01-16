export class Document {
    constructor(document, docType, synced = false) {
        this.document = document;
        this.docType = docType;
        this.synced = synced;
    }

    setUserKey(key) {
        this.userKey = key;
    }

    get toJsObject() {
        return this.document;
    }

    get updateParams() {
        if (!this.userKey) throw 'Missing userKey';
        if (!this.docType) throw 'Missing docType';

        this.document.docType = this.docType;
        this.document.userKey = this.userKey;
        this.document.timestamp = new Date();

        if (!this.document.id) {
            this.document.id = `${this.userKey}_${this.docType}`.toLowerCase();
        } else if (!this.document.id.startsWith(this.userKey)) {
            this.document.id = `${this.userKey}_${this.document.id}`.toLowerCase();
        }

        return {
            filter: [{field: 'id', value: this.document.id.toLowerCase()}, {field: 'userKey', value: this.document.userKey}],
            data: [
                {field: 'id', value: this.document.id.toLowerCase()},
                {field: 'docType', value: this.document.docType},
                {field: 'userKey', value: this.document.userKey},
                {field: 'data', value: JSON.stringify(this.document)},
                {field: 'synced', value: this.synced ? 1 : 0}
            ]
        }
    }
}

Document.tableName = 'document';
Document.includeUserKey = true;
Document.createSchema = 'CREATE TABLE IF NOT EXISTS document (id text primary key, docType text, userKey text, data text, synced integer)';
