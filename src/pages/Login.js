import '../index.css'

export default function Login() {
    return (
        <>
            <div class="min-h-screen bg-indigo-500 flex items-center justify-center sm:py-12">
                <div class="bg-white p-16 rounded shadow-2xl w-1/2">
                    <h2 class="text-3xl font-bold mb-10 text-center">Login</h2>
                    <form class="space-y-8">
                        <div>
                            <label class="block mb-2" for="email">Email</label>
                            <input class="border-2 border-gray-200 p-3 w-full rounded outline-none focus:border-blue-500"
                                type="text" id="email" />
                        </div>
                        <div>
                            <label class="block mb-2" for="password">Password</label>
                            <input class="border-2 border-gray-200 p-3 w-full rounded outline-none focus:border-blue-500"
                                type="password" id="password" />
                        </div>
                        <button class="block w-full bg-indigo-500 p-4 rounded text-white font-bold"
                            type="submit">Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}