import './SignUpBtn.scss';
interface SignUpBtnProps {
    isDisabled: boolean;
}

export const SignUpBtn: React.FC<SignUpBtnProps> = ({ isDisabled }) => {
    return (
        <button type='submit' disabled={isDisabled} id='sign-up-btn'>Sign Up</button>
    );
};

export default SignUpBtn;