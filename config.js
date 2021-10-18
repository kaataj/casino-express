module.exports =function(){

    const development = {
        dbUri: 'localhost',
        dbUser: '',
        dbPwd: ''
    }

    const production = {
        dbUri: 'localhost',
        dbUser: '',
        dbPwd: ''
    }


    return process.env.NODE_ENV === 'production' ? production : development;
}