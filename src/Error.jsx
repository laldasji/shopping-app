import { Link } from "react-router-dom"

export default function ErrorPage() {
    return <div className="w-dvw h-dvh flex flex-col justify-center items-center">
        <h1>OH NO! this is an invalid page</h1>
        <br />
        <Link to='/' className="text-blue-800 underline">Click here to go back!</Link>
    </div>
}