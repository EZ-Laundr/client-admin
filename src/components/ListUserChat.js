import '../index.css'

export default function ListUserChat({ el }) {
    return (
        <>
            <li class="flex justify-between border-2 items-center bg-white mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition">
                <div class="flex ml-2"> <img src="https://i.ibb.co/G9TWJY9/Batch-14-Ahmad-Azzam-S.png" width="40" height="40" class="rounded-full" />
                    <div class="flex items-center ml-2">
                        <span class="font-medium text-black">{el.email}</span>
                        {/* <span class="text-sm text-gray-400 truncate w-32">Ini buat Pesan</span> */}
                    </div>
                </div>
                <div class="flex flex-col items-center">
                    <span class="text-gray-300">11:26</span>
                </div>
            </li>
        </>
    )
}