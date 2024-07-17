

interface InputIconProps {
    icon: React.ReactNode
}

export  function InputIcon({icon}: InputIconProps) {
    return (
        <div className="w-14  rounded shadow-lg shadow-purple
        text-white bg-contrast_color_2
        h-full flex items-center justify-center">
            {icon}
        </div>
    )
}