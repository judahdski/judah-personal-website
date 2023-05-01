const NavText = ({textContent}) => {
    return (
        <div className="nav-text w-24 h-full hidden md:flex justify-center items-end md:pb-28 order-3">
            <p id="navText" className="mb-0 text-white font-semibold rotate-90">
                {textContent}
            </p>
        </div>
    );
}


export default NavText;
