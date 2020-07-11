class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            receipts
        }

        this.setAsPaid = this.setAsPaid.bind(this);
    }

    setAsPaid = idx => {
        console.log(idx);
        
        // this.setState(this.state.receipts[idx].paid: !this.state.receipts[idx].paid);
    }

    render() {
        return (
            <div>
                <div className="all-receipts">
                    {this.state.receipts.map((receipt,idx) => {
                        if (!receipt.paid) {
                            return (
                                <div className="receipt-slip">
                                    <h2>{receipt.person}</h2>
                                    <p>
                                        <span className="order-title">Main: </span>
                                        <span className="order-detail">{receipt.order.main}</span>
                                    </p>
                                    <p>
                                        <span className="order-title">Protein: </span>
                                        <span className="order-detail">{receipt.order.protein}</span>
                                    </p>
                                    <p>
                                        <span className="order-title">Rice: </span>
                                        <span className="order-detail">{receipt.order.rice}</span>
                                    </p>
                                    <p>
                                        <span className="order-title">Sauce: </span>
                                        <span className="order-detail">{receipt.order.sauce}</span>
                                    </p>
                                    <p>
                                        <span className="order-title">Drink: </span>
                                        <span className="order-detail">{receipt.order.drink}</span>
                                    </p>
                                    <p>
                                        <span className="order-title">Cost: </span>
                                        <span className="order-detail">{receipt.order.cost}</span>
                                    </p>
                                    <p><button className="receipt-button" onClick={(event) => this.setAsPaid(idx)}>Make Payment {idx}</button></p>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('.container')
)