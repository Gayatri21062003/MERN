export const CommonButton = ({label, type, onClick}) => {
    return (
        <button
            className="border border-black-500 rounded-md text-center justify-center hover:bg-cyan-300 px-5"
            type={type}
            onClick={onClick}
        >
            {label}
        </button>
    );
};
