import styles from './button.module.css';

type Props = {
    text: string;
    onClick: () => void;
};

const Button = ({ text, onClick }: Props) => {
    return (
            <button className={styles.container} 
            onClick={onClick}
            >
                {text}
            </button>

    );
}
export default Button;