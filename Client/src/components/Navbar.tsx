import { NavLink } from "react-router-dom";
import { useAuthContext } from "../utils/useAuthContext";


export default function Navbar() {
    const {authorized} = useAuthContext();
  return (
    <div className='flex flex-row flex-wrap items-center justify-between md:justify-normal p-1 w-screen  bg-slate-950'>
            
            <svg className="mx-auto my-2 md:m-2 lg:ml-4" width="160px" height="60px"viewBox="0 0 566 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.94 6.09375V21.7188C6.79417 21.7188 8.55459 21.7396 11.2213 21.7812C13.9088 21.8229 15.9817 21.8438 17.44 21.8438C21.4192 21.8438 24.19 21.1875 25.7525 19.875C27.315 18.5417 28.0963 16.4375 28.0963 13.5625C28.0963 11.0417 27.3463 9.16667 25.8463 7.9375C24.3463 6.70833 21.8358 6.09375 18.315 6.09375H5.94ZM35.565 48H29.315L22.94 33.5C21.2108 29.6042 20.1067 27.2604 19.6275 26.4688C18.1067 26.5729 16.3046 26.625 14.2213 26.625L5.94 26.375V48H0.408752V1.25H15.19C16.8983 1.25 18.4088 1.29167 19.7213 1.375C21.0338 1.45833 22.3358 1.61458 23.6275 1.84375C24.94 2.05208 26.0754 2.35417 27.0338 2.75C27.9921 3.125 28.8879 3.625 29.7213 4.25C30.5546 4.85417 31.2213 5.58333 31.7213 6.4375C32.2421 7.29167 32.6483 8.3125 32.94 9.5C33.2317 10.6667 33.3775 11.9896 33.3775 13.4688C33.3775 16.3854 32.6067 18.8958 31.065 21C29.5442 23.1042 27.3775 24.5625 24.565 25.375C24.565 25.4167 24.7733 25.7917 25.19 26.5C25.6067 27.2083 26.0963 28.0833 26.6588 29.125C27.2421 30.1458 27.69 31 28.0025 31.6875L35.565 48ZM51.0238 48H45.6175V1.78125H51.0238V48ZM84.7637 5.75C81.2846 5.75 78.2846 6.59375 75.7637 8.28125C73.2637 9.96875 71.3992 12.2396 70.17 15.0938C68.9408 17.9479 68.3262 21.2292 68.3262 24.9375C68.3262 27.7083 68.6596 30.2396 69.3262 32.5312C69.9929 34.8021 70.9929 36.8021 72.3262 38.5312C73.6596 40.2396 75.3887 41.5729 77.5137 42.5312C79.6596 43.4688 82.1179 43.9375 84.8887 43.9375C88.4512 43.9375 92.1387 43.0104 95.9512 41.1562L96.8575 45.75C93.7533 47.7083 89.5554 48.6875 84.2637 48.6875C80.7846 48.6875 77.6596 48.1146 74.8887 46.9688C72.1387 45.8021 69.8575 44.1667 68.045 42.0625C66.2533 39.9375 64.8887 37.4167 63.9512 34.5C63.0137 31.5625 62.545 28.3021 62.545 24.7188C62.545 21.2604 63.0554 18.0729 64.0762 15.1562C65.0971 12.2396 66.5346 9.73958 68.3887 7.65625C70.2637 5.55208 72.5971 3.91667 75.3887 2.75C78.1804 1.58333 81.2846 1 84.7012 1C89.8887 1 94.2637 2.14583 97.8262 4.4375L95.7012 8.84375C92.2846 6.78125 88.6387 5.75 84.7637 5.75ZM142.66 48H137.254V26.375H112.441V48H107.035V1.78125H112.441V21.625H137.254V1.78125H142.66V48ZM194.265 45.1562L180.077 12.1562L178.89 9L179.109 20.3125V48H174.046V1.78125H181.046L197.14 38.5938L213.077 1.78125H219.89V48H214.64V20.1875L214.859 9.125L213.702 12.2812L199.546 45.1562H194.265ZM255.505 28.8125C251.109 16.0417 248.682 8.86458 248.224 7.28125C248.224 7.28125 245.693 14.4583 240.63 28.8125H255.505ZM262.661 48L257.255 33.3438H238.818L233.224 48H227.724L245.474 1.6875H251.005L268.224 48H262.661ZM280.682 6.09375V21.7188C281.537 21.7188 283.297 21.7396 285.964 21.7812C288.651 21.8229 290.724 21.8438 292.182 21.8438C296.162 21.8438 298.932 21.1875 300.495 19.875C302.057 18.5417 302.839 16.4375 302.839 13.5625C302.839 11.0417 302.089 9.16667 300.589 7.9375C299.089 6.70833 296.578 6.09375 293.057 6.09375H280.682ZM310.307 48H304.057L297.682 33.5C295.953 29.6042 294.849 27.2604 294.37 26.4688C292.849 26.5729 291.047 26.625 288.964 26.625L280.682 26.375V48H275.151V1.25H289.932C291.641 1.25 293.151 1.29167 294.464 1.375C295.776 1.45833 297.078 1.61458 298.37 1.84375C299.682 2.05208 300.818 2.35417 301.776 2.75C302.735 3.125 303.63 3.625 304.464 4.25C305.297 4.85417 305.964 5.58333 306.464 6.4375C306.985 7.29167 307.391 8.3125 307.682 9.5C307.974 10.6667 308.12 11.9896 308.12 13.4688C308.12 16.3854 307.349 18.8958 305.807 21C304.287 23.1042 302.12 24.5625 299.307 25.375C299.307 25.4167 299.516 25.7917 299.932 26.5C300.349 27.2083 300.839 28.0833 301.401 29.125C301.985 30.1458 302.432 31 302.745 31.6875L310.307 48ZM340.36 45.1562L326.173 12.1562L324.985 9L325.204 20.3125V48H320.141V1.78125H327.141L343.235 38.5938L359.173 1.78125H365.985V48H360.735V20.1875L360.954 9.125L359.798 12.2812L345.641 45.1562H340.36ZM382.975 24.9062C382.975 30.8438 384.34 35.5104 387.069 38.9062C389.798 42.2812 393.829 43.9688 399.163 43.9688C404.496 43.9688 408.506 42.2812 411.194 38.9062C413.902 35.5312 415.256 30.8646 415.256 24.9062C415.256 18.8229 413.892 14.1042 411.163 10.75C408.454 7.39583 404.465 5.71875 399.194 5.71875C393.923 5.71875 389.902 7.39583 387.131 10.75C384.36 14.1042 382.975 18.8229 382.975 24.9062ZM421.038 24.9062C421.038 28.4271 420.548 31.6458 419.569 34.5625C418.61 37.4792 417.215 39.9896 415.381 42.0938C413.569 44.1771 411.277 45.8021 408.506 46.9688C405.735 48.1146 402.621 48.6875 399.163 48.6875C394.496 48.6875 390.496 47.6979 387.163 45.7188C383.85 43.7188 381.36 40.9479 379.694 37.4062C378.048 33.8438 377.225 29.6667 377.225 24.875C377.225 17.4792 379.152 11.6458 383.006 7.375C386.86 3.10417 392.256 0.96875 399.194 0.96875C406.027 0.96875 411.371 3.125 415.225 7.4375C419.1 11.7292 421.038 17.5521 421.038 24.9062ZM432.215 48V1.78125H437.652V43.1875H457.996L457.809 48H432.215ZM466.393 48V1.78125H492.893L492.674 6.5625H471.799V21.6875H491.643V26.4062H471.799V43.2188H493.361L493.111 48H466.393ZM506.008 42.3438V1.25H511.539V40.4688C511.539 41.9896 511.508 43.2708 511.445 44.3125C511.383 45.3542 511.258 46.4167 511.07 47.5C510.883 48.5625 510.601 49.4375 510.226 50.125C509.872 50.8125 509.403 51.4688 508.82 52.0938C508.237 52.7396 507.508 53.2292 506.633 53.5625C505.778 53.9167 504.758 54.1875 503.57 54.375C502.383 54.5833 501.008 54.6875 499.445 54.6875H498.351L497.695 50.25H500.008C501.112 50.25 502.039 50.1146 502.789 49.8438C503.56 49.5729 504.153 49.2292 504.57 48.8125C504.987 48.4167 505.299 47.8438 505.508 47.0938C505.737 46.3438 505.872 45.6458 505.914 45C505.976 44.3333 506.008 43.4479 506.008 42.3438ZM527.622 24.9062C527.622 30.8438 528.987 35.5104 531.716 38.9062C534.445 42.2812 538.477 43.9688 543.81 43.9688C549.143 43.9688 553.154 42.2812 555.841 38.9062C558.55 35.5312 559.904 30.8646 559.904 24.9062C559.904 18.8229 558.539 14.1042 555.81 10.75C553.102 7.39583 549.112 5.71875 543.841 5.71875C538.57 5.71875 534.55 7.39583 531.779 10.75C529.008 14.1042 527.622 18.8229 527.622 24.9062ZM565.685 24.9062C565.685 28.4271 565.195 31.6458 564.216 34.5625C563.258 37.4792 561.862 39.9896 560.029 42.0938C558.216 44.1771 555.925 45.8021 553.154 46.9688C550.383 48.1146 547.268 48.6875 543.81 48.6875C539.143 48.6875 535.143 47.6979 531.81 45.7188C528.497 43.7188 526.008 40.9479 524.341 37.4062C522.695 33.8438 521.872 29.6667 521.872 24.875C521.872 17.4792 523.8 11.6458 527.654 7.375C531.508 3.10417 536.904 0.96875 543.841 0.96875C550.675 0.96875 556.018 3.125 559.872 7.4375C563.747 11.7292 565.685 17.5521 565.685 24.9062Z" fill="white"/>
            </svg>

            <div className="flex-wrap-reverse flex justify-center items-center md:items-evenly md:justify-center md:flex-grow racking-wide uppercase">           
                
                <ul className='flex flex-row justify-between text-md m-4 text-center mx-auto'>
                    <li className='px-2'>
                        <NavLink 
                            to='/' 
                            className={({ isActive }) => isActive ? 'text-blue-400 py-2 border-b-2 border-blue-400' : 'text-sky-200 hover:text-sky-50'}>
                            Home
                        </NavLink>
                    </li>
                    <li className='px-2'>
                        <NavLink 
                            to="/PayTracker"
                            className={({ isActive }) => isActive ? 'text-blue-400 py-2 border-b-2 border-blue-400' : 'text-sky-200 hover:text-sky-50'}>
                            PayTracker
                        </NavLink>
                    </li>
                    <li className='px-2'>
                        <NavLink 
                            to="/Dev"
                            className={({ isActive }) => isActive ? 'text-blue-400 py-2 border-b-2 border-blue-400' : 'text-sky-200 hover:text-sky-50'}>           
                            Dev
                        </NavLink>
                    </li>
                    <li className='px-2'>
                        <NavLink 
                            to="/Hvac"
                            className={({ isActive }) => isActive ? 'text-blue-400 py-2 border-b-2 border-blue-400' : 'text-sky-200 hover:text-sky-50'}>           
                            HVAC
                        </NavLink>
                    </li>
                </ul>
            
                <div className='flex flex-wrap sm:p-2 text-sm tracking-wide text-sky-200 max-w-max text-center md:text-right md:ml-0'>
                   { 
                   authorized === true ? 
                    <NavLink 
                        to="/Logout"
                        className={({ isActive }) => isActive ? 'text-blue-400 border-b-2 border-blue-400 m-2' : 'text-sky-200 m-2 hover:cursor-pointer hover:text-sky-50'}>           
                        Logout
                    </NavLink>
                    : 
                    <NavLink 
                        to="/Login"
                        className={({ isActive }) => isActive ? 'text-blue-400 border-b-2 border-blue-400 m-2' : 'text-sky-200 m-2 hover:cursor-pointer hover:text-sky-50'}>           
                        Login
                    </NavLink>
                    }
                    <NavLink 
                        to="/Register"
                        className={({ isActive }) => isActive ? 'text-blue-400 border-b-2 border-blue-400 m-2' : 'text-sky-200 m-2 hover:cursor-pointer hover:text-sky-50'}>           
                        Create Account
                    </NavLink>
                </div>
            </div>
        </div>
  )
}
