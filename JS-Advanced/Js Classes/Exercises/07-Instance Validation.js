class CheckingAccount{
    constructor(clientId, email, firstName, lastName){
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.products = [];
    }

    get clientId(){
        return this._clientId;
    }

    set clientId(id){
        let validPattern = /^[0-9]{6}$/g;

        if (validPattern.test(id)) {
            this._clientId = id;
        } else {
            throw new TypeError('Client ID must be a 6-digit number');
        }
    }

    get email(){
        return this._email;
    }

    set email(email){
        let validPattern = /^[a-z0-9A-Z]+@[a-zA-Z.]+$/g;

        if (validPattern.test(email)) {
            this._email = email;
        } else {
            throw new TypeError('Invalid e-mail');
        }
    }

    get firstName(){
        return this._firstName;
    }

    set firstName(name){
        if (name.length < 3) {
            throw new TypeError('First name must be between 3 and 20 characters long');
        } else if (name.length > 20) {
            throw new TypeError('First name must be between 3 and 20 characters long');
        }

        if (![...name].find(l => !this._isLatinLetter(l))) {
            this._firstName = name;
        } else {
            throw new TypeError('First name must contain only Latin characters');
        }
    }

    get lastName(){
        return this._lastName;
    }

    set lastName(name){
        if (name.length < 3) {
            throw new TypeError('Last name must be between 3 and 20 characters long');
        } else if (name.length > 20) {
            throw new TypeError('Last name must be between 3 and 20 characters long');
        }

        if (![...name].find(l => !this._isLatinLetter(l))) {
            this._lastName = name;
        } else {
            throw new TypeError('Last name must contain only Latin characters');
        }
    }

    _isLatinLetter(letter){
        return (letter >= 'a' && letter <= 'z') || (letter >= 'A' && letter <= 'Z');
    }
}

//let acc1 = new CheckingAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov');
//let acc2 = new CheckingAccount('131455', 'ivan@', 'Ivan', 'Petrov');
let acc3 = new CheckingAccount('423414', 'petkan@another.co.uk', 'Петкан', 'Dragomir');