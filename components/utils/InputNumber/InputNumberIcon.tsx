

interface InputIconProps {
    icon: React.ReactNode
}

export  function InputIcon({icon}: InputIconProps) {
    return (
        <div className="px-3">
            {icon}
        </div>
    )
}