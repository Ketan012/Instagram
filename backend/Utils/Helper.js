const moment = require('moment');
const constants = require('./Constants');
class Helper{
    
    toLowerCase(str){
        return str.toLowerCase();        
    }

    toUpperCase(str){
        return str.toUpperCase();        
    }

    toIsoFormat(date){
        return date.toISOString();
    }

    toDateFormat(date, format){
        return moment(date, "DD/MM/YYYY").format(String(format));
    }

    toIsoFormatWithoutTime(date){
        return date.toISOString().substring(0,10);
    }

    generateRandomNumber(){
        return Math.floor(100000 + Math.random() * 900000);
    }

    isValidEmail(email){
        return constants.isValidEmail.test(email);
    }
}

module.exports = new Helper();
