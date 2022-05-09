const Button = ({item, children, click}) => {

    return (
        <button item={item} onClick={click}>{children}</button>
    )
}
export default Button