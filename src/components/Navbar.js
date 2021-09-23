import '../index.css'

export default function Navbar() {
    return (
        <>
            <div className="flex-none h-16">
                <div style={{ backgroundColor: '#107CF1' }} className="navbar mb-2 shadow-xl text-neutral-content">
                    <div className="flex-none flex">
                        <button className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1 hidden px-2 mx-2 lg:flex">

                    </div>
                    <div className="flex-none">
                        <button className="btn btn-square btn-ghost">

                        </button>
                    </div>
                    <div className="flex-none justify-self-end">
                        <div className="mr-3">{localStorage.getItem('email')}</div>
                        <div className="avatar">
                            <div className="rounded-full w-10 h-10 m-1">
                                <img src="https://i.ibb.co/G9TWJY9/Batch-14-Ahmad-Azzam-S.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}