import logo from '../media/logo.png'

function Navbar() {
    return (
        <div>
            <nav>
                <div 
                class="flex flex-wrap items-center justify-between h-20 px-20 shadow-md max-w-screen-2xl mx-auto">
                    <div>
                        <img className='h-10 flex justify-start' src={logo} />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;