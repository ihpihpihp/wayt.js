function wayt(ms){
    var start = new Date().getTime();
    var end = 0;
    while((end - start) < ms){
        end = new Date().getTime();
    };
};

module.exports = wayt;