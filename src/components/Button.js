
import { Link } from 'react-router-dom';
import "./Button.css"

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {

    const STYLES = ['btn--primary', 'btn--outline'];
    const SIZES = ['btn-medium', 'btn-larg'];

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : STYLES[1];

    return (
        <Link to="/sign-up">
            <button
                type={type}
                onClick={onClick}
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}>
                {children}
            </button>
        </Link>
    )
}
export default Button