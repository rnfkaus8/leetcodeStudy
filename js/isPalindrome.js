/**
 * @param {number} x
 * @return {boolean}
 */
 const isPalindrome = function(x) {
    if(x < 0){
        return false;
    }else{
        const defaultNum = x;
        let reverseNum = 0;
        while(x > 0){
            reverseNum = (reverseNum * 10) +  (x % 10);
            x = parseInt(x / 10);
        }
        return reverseNum === defaultNum;
    }

};