
/* Below Kilometer To Meter Convert Part */

function kilometerToMeter(num) {
    if (num >= 1) {
        var meter = num * 1000;
        return meter;
    }
    else {
        return 'Sorry ! Please input your exact value.'
    }
}
var result = kilometerToMeter(10);
console.log(result);


/* Below budgetCalculator Part */

function budgetCalculator(watch, phone, laptop) {

    var watch = watch * 50;
    var phone = phone * 100;
    var laptop = laptop * 500;
    var sum = watch + phone + laptop;
    return sum;
}
var totalCost = budgetCalculator(6, 2, 3);
console.log(totalCost);


/* Below HotelCost Part */

function hotelCost(num) {
    var sum = 0;
    if (num <= 10 && num >= 1) {
        sum = num * 100;
    }
    else if (num <= 20 && num >= 1) {
        var firstOffer = 10 * 100;
        var remainingDays = num - 10;
        var secondOffer = remainingDays * 80;
        sum = firstOffer + secondOffer;
    }
    else {
        if (num >= 21 && num >= 1) {
            var firstOffer = 10 * 100;
            var secondOffer = 10 * 80;
            var remainingDays = num - 20;
            var thirdOffer = remainingDays * 50;
            sum = firstOffer + secondOffer + thirdOffer;
        }
        else {
            return 'Please remove your negative number or remove (-) negative sign.'
        }
    }
    return sum;
}
var totalHotelCost = hotelCost(25);
console.log(totalHotelCost);

/* Below MegaFridens Part */

function megaFriend(friends) {
    var largestWord = friends[0];
    for (var i = 0; i < friends.length; i++) {
        if (friends[i].length > largestWord.length) {
            largestWord = friends[i];
        }
    }
    return largestWord;
}
console.log(megaFriend(["Rahim", "Fardous", "Sagor", "Tamjid", "NayemKhan", "Akash", "Korim"]));
