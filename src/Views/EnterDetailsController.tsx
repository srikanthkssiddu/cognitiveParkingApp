import { Component } from 'react'

interface props {
    navigation: any
}

interface state {
    slot: string;
    error: string;
}

export default class EnterDetailsController extends Component<props, state> {
    constructor(props: any) {
        super(props);
        this.state = {
            slot: '',
            error: '',
        }
    }

    validateInput = (slot: string) => {
        if (slot === '') {
            this.setState({ error: "Please enter Slot Number" })
        } else {
            let isnum = /^\d+$/.test(slot);

            if (isnum) {
                let num = Number(slot);

                if (num < 0) {
                    this.setState({ error: "Lot number should be greater than 0" })
                    return false;
                } else if (num > 20) {
                    this.setState({ error: "Slot number should be less than 20" })
                    return false;
                }
                this.setState({ error: "" })
                return true;

            } else {
                this.setState({ error: "Slot number accepts numbers only." })
                return false;
            }
        }
    }


    onChangeTextNumLot = (val: string) => {
        this.setState({ slot: val });
    }

    onPressSubmit = () => {
        let Slot = this.state.slot
        let success = this.validateInput(Slot);
        if (success) {
            let numSlot = Number(Slot);
            this.setState({ error: "", slot: '' })
            this.props.navigation.navigate('Home', { item: numSlot })
        }
    }
}