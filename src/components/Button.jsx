export default function Button(props){
return(

    <button 
    className={`

        rounded-lg

        ${props.color === "pink" && " bg-[#c92071] text-[#f5f5f5] text-center text-base text-bold"}

        ${props.color ==="orange" && 'bg-[#ffb31f] text-[#f5f5f5] text-center text-base text-bold'}

        ${props.size === 'sm' && "w-28 h-12 !text-sm"}
        ${props.size === 'md' && 'w-56 h-12'}
    `}
    onClick={props.handleClick}>
        {props.value}
    </button>
)



}