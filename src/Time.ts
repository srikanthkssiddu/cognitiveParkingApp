import moment from 'moment'

export function calculatePayment(startDate: string, endDate: string){
    var start = moment(startDate); 
    var end = moment(endDate); 

    var duration = moment.duration(end.diff(start));
    var asMinutes = duration.asMinutes()
    var asHours = duration.asHours()

    

    var baseAmount : number = 10;
    var paymentAmount = 0;
    if(asMinutes <= 60) {
        paymentAmount = baseAmount;
    } else {
        var hour = Math.floor(asHours);
        hour = hour - 2
        if(hour >= 1) {
            paymentAmount = baseAmount + (hour * 10);
        } else {
            paymentAmount = baseAmount;
        }
    }
    return paymentAmount;
}

