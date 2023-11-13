import { forwardRef, useId } from "react"

function Button({
    Icon,
    text = '',
    className = '',
    ...props
}, ref) {

    const id = useId()

    return (
        <button ref={ref} className={`bg-primary-500 rounded-md text-white px-4 py-2 font-roboto h-fit w-fit ${Icon ? 'flex': ''} ${className}`} id={id} {...props}>
            {
                Icon && (
                    <span key={`${text} icon`}>
                        <Icon />
                    </span>
                )
            }
            <span>
                {text}
            </span>
        </button>
    )
}

export default forwardRef(Button);
