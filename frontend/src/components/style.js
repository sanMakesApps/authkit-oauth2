const styles = {
    container: {
        minWidth: "100vw",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #ece9e6, #ffffff)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Poppins', sans-serif",
    },
    card: {
        backgroundColor: "#ffffff",
        padding: "2rem 3rem",
        borderRadius: "12px",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        maxWidth: "400px",
        width: "100%",
    },
    title: {
        fontSize: "1.8rem",
        marginBottom: "1.5rem",
        color: "#333",
    },
    subTitle: {
        fontSize: "1.2rem",
        marginBottom: "1rem",
        color: "#666",
    },
    infoSection: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.75rem",
    },
    avatar: {
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        objectFit: "cover",
        marginBottom: "0.75rem",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    },
    infoText: {
        fontSize: "1rem",
        color: "#444",
    },
    loading: {
        color: "#888",
        fontSize: "1rem",
    },
    buttonGroup: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
    },
    button: {
        padding: "0.75rem 1.5rem",
        border: "none",
        borderRadius: "8px",
        fontSize: "1rem",
        fontWeight: 500,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
    },
    google: {
        backgroundColor: "#ffffff",
        color: "#444",
        border: "1px solid #ccc",
    },
    github: {
        backgroundColor: "#24292e",
        color: "#ffffff",
    },
    icon: {
        marginRight: "0.5rem",
    },
};

export default styles;


