import './SignUpBtn.scss';
interface SignUpBtnProps {
    isDisabled: boolean;
}

export const SignUpBtn: React.FC<SignUpBtnProps> = ({ isDisabled }) => {
    // Your SignUpBtn component implementation
    return (
        <button disabled={isDisabled} id='sign-up-btn'>Sign Up</button>
    );
};

export default SignUpBtn;