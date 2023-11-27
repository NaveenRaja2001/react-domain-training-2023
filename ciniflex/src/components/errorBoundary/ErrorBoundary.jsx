import { Component } from "react";
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false, errorMessage: '' };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ hasError: true, errorMessage: error.message });
    }
    render() {
        if (this.state.hasError) {
            return (
                <div className={this.props.style}>
                    <p>{this.state.errorMessage}</p>
                </div>
            )
        }
        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    style: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default ErrorBoundary;