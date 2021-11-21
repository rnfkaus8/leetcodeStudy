/**
 * @param {string} s
 * @return {number}
 */
 const romanToInt = function(s) {
    const romanMap = {
        "I" : 1
        ,"V" : 5
        ,"X" : 10
        ,"L" : 50
        ,"C" : 100
        ,"D" : 500
        ,"M" : 1000
    };
    const splitS = s.split("");
    let resultNum = 0;
    let beforeNum = 0;
    splitS.forEach(roman => {
        let sum = 0;
        if(beforeNum < romanMap[roman]){
            sum = romanMap[roman] - (beforeNum * 2);
        }else{
            sum = romanMap[roman];
        }
        resultNum += sum ;
        beforeNum = romanMap[roman];
    });
    return resultNum;
};
