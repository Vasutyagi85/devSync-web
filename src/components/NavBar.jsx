import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { removeUser } from "../utils/userSlice";
import { Navigate } from "react-router-dom";

const NavBar=()=>{

    const user=useSelector((store)=>store.user);//we have user in app store
    const dispatch=useDispatch();
    const navigate=useNavigate();
    

    const handleLogout=async()=>{
        try{
            const res=await axios.post(BASE_URL + "/logout" ,{},{withCredentials:true});
            dispatch(removeUser());
            return navigate("/login");
        }
        catch(err){
            console.log(err.message)
        }
    }
    return (
        <div className="navbar bg-base-300 shadow-sm">
        <div className="flex-1">
            <Link to="/feed"className="btn btn-ghost text-xl">DevSync🧑‍💻</Link>
        </div>
        <div className="flex gap-2">
           <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto px-2" />
        {user && user._id &&(
        <div className="dropdown dropdown-end mx-5">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
            <img
               alt="User Avatar"
               src={"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
               className="rounded-full w-10 h-10 object-cover"
            />
        </div>

        </div>
            <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li>
                <Link  to="/profile" className="justify-between">
                Profile
                <span className="badge">New</span>
                </Link>
            </li>
            <li><a>Settings</a></li>
            <li><a onClick={handleLogout}>Logout</a></li>
        </ul>
        </div>)}
        </div>
        </div>
    );
};

export default NavBar;