class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            receipts
        }
    }

    setAsPaid = idx => {
        console.log(idx);
        const newReceipts = this.state.receipts.map((receipt, index) =>{
            if (index === idx) receipt.paid = true;
            return receipt;
        });
        this.setState({ receipts: newReceipts });
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
                                    <p><button className="receipt-button" onClick={() => this.setAsPaid(idx)}>Pay Now</button></p>
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