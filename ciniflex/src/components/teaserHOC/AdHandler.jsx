import React from "react";
const AdHandler = (OriginalComponent) => {
    class HOC extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                timer: 0,
                message: undefined,
                showAd: false,
                adsNotification: false,
            }
        };
        displayContentorAd = (timer, message, isContentDispayed) => {
            if (isContentDispayed) {
                this.setState({ timer: timer, message: message, adsNotification: true });
            }
            else {
                this.setState({ timer: timer, message: message, showAd: true });

            }
        };
        stopAd = () => {
            this.setState({ message: undefined, showAd: false, adsNotification: false });
        }

        render() {
            return (
                <>
                    <OriginalComponent {...this.props} {...this.state} displayContentorAd={this.displayContentorAd} displayAd={this.displayAd} stopAd={this.stopAd} />
                </>);
        }

    }
    return HOC;
}

export default AdHandler;