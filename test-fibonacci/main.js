/**
 * Created by Palash on 11/25/2016.
 */
function calculateFibWithAOP(num) {
    if (num == 0){
        return 0;
    } else if (num == 1) {
        return 1;
    } else {
        return calculateFibWithAOP(num - 1) + calculateFibWithAOP(num - 2);
    }
}

function calculateFibWithoutAOP(num) {
    if (num == 0){
        return 0;
    } else if (num == 1) {
        return 1;
    } else {
        return calculateFibWithoutAOP(num - 1) + calculateFibWithoutAOP(num - 2);
    }
}