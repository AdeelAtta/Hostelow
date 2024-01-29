const Loader = () => {
    return <>
    <div className="z-[1] fixed top-[0] left-[0] w-full h-full backdrop-blur-xl"></div>
    <div className="z-[100] fixed top-[50%] left-[50%] loader scale-[1.5] ml-auto mr-auto"></div>
    </>
}

export default Loader;