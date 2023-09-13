import { Link } from "react-router-dom";

export default function Error() {
    return (
        <div className='h-screen text-xl flex flex-col justify-center items-center text-[#111827]'>
                <p className="mb-4 text-4xl">😩</p>
                <pre>!Page Not Found 404</pre>
                <Link to="/" className="bg-[#111827] text-white/80 py-2 px-4 rounded-md mt-4 hover:bg-[#1e2b46]">Return to Home</Link>
        </div>
    )
}
