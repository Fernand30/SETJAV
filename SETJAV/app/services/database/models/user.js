export class User {
    constructor(user, synced = false) {
        this.user = user;
        this.synced = synced;
    }

    setUserKey(key) {
        this.userKey = key;
    }

    get toJsObject() {
        return this.user;
    }

    get updateParams() {
        if (!this.userKey) throw 'Missing userKey';

        this.user.userKey = this.userKey;
        this.user.timestamp = new Date();

        return {
            filter: [{field: 'userKey', value: this.user.userKey}],
            data: [
                {field: 'userKey', value: this.user.userKey},
                {field: 'active', value: 1},
                {field: 'data', value: JSON.stringify(this.user)}
            ]
        }
    }
}

User.tableName = 'user';
User.includeUserKey = false;
User.createSchema = 'CREATE TABLE IF NOT EXISTS user (userKey text primary key, active integer, data text)';
