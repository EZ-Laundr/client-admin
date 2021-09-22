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
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="flex-none justify-self-end">
                        <div>{localStorage.getItem('email')}</div>
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