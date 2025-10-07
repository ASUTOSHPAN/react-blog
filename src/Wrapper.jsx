

function Wrapper({ children, color = "green" }) {
    return (
        <div style={{ color: color, border: "3px solid grey", width: "350px", margin: "10px", padding: "10px" }}>
            {children}
        </div>
    )
}
export default Wrapper;