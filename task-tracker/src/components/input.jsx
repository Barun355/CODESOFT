import { forwardRef, useId } from "react"

function Input({
    label,
    layout=true,
    className = "",
    placeholder = "",
    type = "text",
    ...props
}, ref) {

    const id = useId()

    return (
        <div className={`flex ${layout ? 'flex-row': 'flex-col'} gap-2 justify-center ${layout ? 'items-center': 'items-start'}`}>
            <label className="text-sm font-ubuntu font-bold" htmlFor={label} id={id}>{label}</label>
            <input className={`outline-none bg-primary-200 py-1 px-2 w-fit rounded-sm font-bricolage-grotesque focus:border focus:border-tertiary-500 ${className}`} type={type} placeholder={placeholder} id={id} ref={ref} {...props} />
        </div>
    )
}

export default forwardRef(Input);
