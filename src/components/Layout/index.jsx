import "./style.css";

export const Layout = (props) => {
    return (
            <section className="container">
                <div className="container-login">
                    <div className="wrap-login">
                    {props.children}
                    </div>
                </div>
            </section>
    );
};