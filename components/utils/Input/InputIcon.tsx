

interface InputIconProps {
    icon: React.ReactNode
}

export  function InputIcon({icon}: InputIconProps) {
    return (
        <div className="p-3  rounded
        text-neon_purple
        h-full flex items-center justify-center">
            {icon}
        </div>
    )
}