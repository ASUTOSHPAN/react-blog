import { useState } from "react";

function Class33() {
    const [grid, setGrid] = useState(true)
    const [cardStyle, setCardStyle] = useState(
        {
            border: "1px solid grey",
            width: "220px",
            borderRadius: "10px",
            textAlign: "center",
            padding: "10px",
            margin: "10px"
        }
    )
    const updateTheme = (bgColor, textColor, fntSize) => {
        setCardStyle({ ...cardStyle, backgroundColor: bgColor, color: textColor, fontSize: fntSize })
    }
    return (
        <div>
            <h1>Dynamic Inline Style #33</h1>
            <button style={{ backgroundColor: "blue", padding: "6px", borderRadius: "6px", margin: "10px", fontWeight: "600" }} onClick={() => updateTheme("grey", "black", "20px")}>Update Theme</button>
            <button style={{ backgroundColor: "red", padding: "6px", borderRadius: "6px", margin: "10px", fontWeight: "600" }} onClick={() => updateTheme("black", "white")}>Default Theme</button>
            <button style={{ backgroundColor: "grey", padding: "6px", margin: "10px", borderRadius: "10px" }} onClick={() => setGrid(!grid)}>Change Style</button>
            < div style={{ display: grid ? "flex" : "block", flexWrap: "wrap" }}>
                <div style={cardStyle}>
                    <img src="My-Pic.jpg" alt="My Pic" style={{ width: '200px', border: "1px solid grey", borderRadius: "10px" }} />
                    <div>
                        <h3>Asutosh Panda</h3>
                        <h3>Software Developer</h3>
                    </div>
                </div>
                <div style={cardStyle}>
                    <img src="My-Pic.jpg" alt="My Pic" style={{ width: '200px', border: "1px solid grey", borderRadius: "10px" }} />
                    <div>
                        <h3>Asutosh Panda</h3>
                        <h3>Software Developer</h3>
                    </div>
                </div>
                <div style={cardStyle}>
                    <img src="My-Pic.jpg" alt="My Pic" style={{ width: '200px', border: "1px solid grey", borderRadius: "10px" }} />
                    <div>
                        <h3>Asutosh Panda</h3>
                        <h3>Software Developer</h3>
                    </div>
                </div>
                <div style={cardStyle}>
                    <img src="My-Pic.jpg" alt="My Pic" style={{ width: '200px', border: "1px solid grey", borderRadius: "10px" }} />
                    <div>
                        <h3>Asutosh Panda</h3>
                        <h3>Software Developer</h3>
                    </div>
                </div>
                <div style={cardStyle}>
                    <img src="My-Pic.jpg" alt="My Pic" style={{ width: '200px', border: "1px solid grey", borderRadius: "10px" }} />
                    <div>
                        <h3>Asutosh Panda</h3>
                        <h3>Software Developer</h3>
                    </div>
                </div>
                <div style={cardStyle}>
                    <img src="My-Pic.jpg" alt="My Pic" style={{ width: '200px', border: "1px solid grey", borderRadius: "10px" }} />
                    <div>
                        <h3>Asutosh Panda</h3>
                        <h3>Software Developer</h3>
                    </div>
                </div>
                <div style={cardStyle}>
                    <img src="My-Pic.jpg" alt="My Pic" style={{ width: '200px', border: "1px solid grey", borderRadius: "10px" }} />
                    <div>
                        <h3>Asutosh Panda</h3>
                        <h3>Software Developer</h3>
                    </div>
                </div>
                <div style={cardStyle}>
                    <img src="My-Pic.jpg" alt="My Pic" style={{ width: '200px', border: "1px solid grey", borderRadius: "10px" }} />
                    <div>
                        <h3>Asutosh Panda</h3>
                        <h3>Software Developer</h3>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Class33;