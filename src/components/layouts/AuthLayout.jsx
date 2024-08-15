import { Outlet } from "react-router-dom";

const AuthLayout = ({  }) => {
	return (
    <div className="flex p-40 justify-center items-center">
     
        <main >
          <Outlet />
        </main>
    
    </div>);
};

export default AuthLayout;
