import '../index.css'

export default function ListUserChat({ el }) {
    return (
        <>
            <li class="flex justify-between border-2 items-center bg-white mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition">
                <div class="flex ml-2 items-center">
                    {/* <img src="https://w7.pngwing.com/pngs/419/473/png-transparent-computer-icons-user-profile-login-user-heroes-sphere-black-thumbnail.png" width="40" height="40" class="rounded-full" /> */}
                    <div className="p-4 rounded-full">
                        <i style={{ color: '#107CF1' }} class="fas fa-user fa-lg"></i>
                    </div>
                    <div class="flex items-center ml-2">
                        <span class="font-medium text-black">{el.email}</span>
                        {/* <span class="text-sm text-gray-400 truncate w-32">Ini buat Pesan</span> */}
                    </div>
                </div>
            </li>
        </>
    )
}