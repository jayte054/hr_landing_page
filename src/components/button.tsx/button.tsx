import "./button.css"
interface GenericButtonProps {
    label: string;
    onClick: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    variant?: "primary" | "secondary" | "danger"
}

export const GenericButton: React.FC<GenericButtonProps> = ({
    label,
    onClick,
    type="button",
    disabled=false,
    variant = "primary"
}) => {
    return (
    <>
        <button 
            className={`generic-button ${variant}`}
            onClick={onClick}
            type={type}
            disabled={disabled}
        > 
        {label}
        </button>
    </>
)
}