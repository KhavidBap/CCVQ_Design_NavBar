import Header from "../Header/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className="w-fill select-none">
                <Header />
            </div>
            <div className="flex-none w-full">
                <div className="md:container mx-4 md:mx-auto">{children}</div>
            </div>
        </>
    );
};

export default Layout;