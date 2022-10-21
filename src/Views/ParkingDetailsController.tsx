import { Component } from 'react'
import { slot } from '../Models/Slot';
import moment from 'moment'
import {calculatePayment} from '../Time';

interface props {
    navigation: any;
}

interface state {
    numLots: number;
    arrLot: Array<slot>;
    showDialog: boolean;
    showPaymentDialog: boolean;
    carNumber: string;
    error: string;
    dialogTitle: string;
    dialogMsg: string;
    
}

export default class HomeController extends Component<props, state> {
    constructor(props: any) {
        super(props);

        this.state = {
            numLots: props.route ? props.route.params.item : 5,
            arrLot: [],
            showDialog: false,
            carNumber: '',
            showPaymentDialog:false,
            error: '',
            dialogTitle: '',
            dialogMsg: '',
           
        }
    }

    componentDidMount() {
        this.setupAnArray();
    }

    setupAnArray = () => {
        const { numLots, arrLot } = this.state;

        for (let i = 0; i < numLots; i++) {
            let dic: slot = {
                id: `${i}`,
                carNum: "",
                isAlloted: false,
                inTime: new Date(),
            }
            arrLot.push(dic);
        }

        this.setState({});
    }

    onChangeTextNumLot = (val: string) => {
        this.setState({ carNumber: val });
    }

    validateInput = (strLot: string) => {
        let filter = this.state.arrLot.filter(function (item) {
            return item.carNum === strLot;
        });
        if (strLot === '') {
            this.setState({ error: "Please enter Vehicle number" })
            return false;
        } else if(filter.length > 0) {
            this.setState({ error: "Car number already exists." })
            return false;
        } else {
            this.setState({ error: "" })
            return true;
        }
    }

    onPressAddCar = () => {
        let name: string = this.state.carNumber;
        let validate = this.validateInput(name);
        if (validate) {

            let filter = this.state.arrLot.filter(function (item) {
                return item.isAlloted == false;
            });

            if (filter.length > 0) {

                let min: number = 0;
                let max: number = (filter.length - 1);

                let random: number = min + (Math.random() * (max - min))
                
                var index = Math.floor(random);; //10

                var tmp: slot = filter[index];
                let arrIndex = Number(tmp.id);

                tmp.isAlloted = true;
                tmp.carNum = name;
                tmp.inTime = new Date();
                console.log(" new Date()",  new Date())

                this.state.arrLot[arrIndex] = tmp
                this.setState({ carNumber: "" });

            } else {
                this.setState({ showDialog: true, carNumber: "" });
            }
        }
    }

    onPressExitCar = (index: number) => {

        let obj = this.state.arrLot[index];
        let endDate = new Date();
        let strStart : string = `${obj.inTime}`
        let strEnd : string = `${endDate}`
       

        let paymentAmt = calculatePayment(strStart, strEnd);
      

        obj.isAlloted = false;
        obj.carNum = '';
        obj.inTime = new Date();

        let msg = `Parking Charge -    ${paymentAmt} $`

        this.state.arrLot[index] = obj;
        this.setState({dialogMsg: msg, showPaymentDialog: true});
    }

    onPressPay = () => {
        this.setState({ showPaymentDialog: false });
    }
}