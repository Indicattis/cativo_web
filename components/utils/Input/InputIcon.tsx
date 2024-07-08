

interface InputIconProps {
    icon: React.ReactNode
}

export  function InputIcon({icon}: InputIconProps) {
    return (
        <div className="px-2 bg-gradient-to-tr from-neon_purple to-neon_blue h-full flex items-center">
            {icon}
        </div>
    )
}