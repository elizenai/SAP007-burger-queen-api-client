import "./style.css";

export const Layout = ({children}) => {
    return (
            <section className="container">
                <div className="container-login">
                    <div className="wrap-login">
                    {children}
                    </div>
                </div>
            </section>
    );
};