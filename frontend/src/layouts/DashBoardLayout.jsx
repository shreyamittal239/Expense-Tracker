import Navbar from "../components/Navbar";

const DashboardLayout = ({ children }) => {
    return (
        <div>
            <Navbar/>
                <main>
                    {children}
                </main>
          
        </div>
    )
}
export default DashboardLayout;