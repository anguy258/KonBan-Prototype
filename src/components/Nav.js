import React from 'react'
import Logo from './../assets/images/KonBan_logo.svg'

export default function Nav(props) {
    return (
        <nav className="bg-opacity-95 shadow-md text-gray-300 h-1/12">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between py-4">
                    <div className="flex items-center space-x-8 pl-6">
                        <a
                            href="/"
                            onClick={e => e.preventDefault()}
                            className="flex items-center space-x-2"
                        >
                            <img src={Logo} alt="KonBan Logo" className="w-24 h-12"/>
                        </a>
                        {/* <a href="/" onClick={e => e.preventDefault()} className="py-2 border-b-2 border-transparent hover:border-green-700 cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-90">My Boards</a>
                        <a href="/" onClick={e => e.preventDefault()} className="py-2 border-b-2 border-transparent hover:border-green-700 cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-90">Calendar</a> */}
                    </div>
                    <div className="flex items-center space-x-8 px-6">
                        <button onClick={() => props.setTheme(props.colorTheme)}>
                            {props.colorTheme === "light" ? (
                                <svg
                                    className="h-5 w-5
                                    transition duration-300
                                    transform ease-in-out hover:-translate-y-1 hover:scale-125"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                    />
                                </svg>
                            ): (
                                <svg
                                    className="h-5 w-5
                                    transition duration-300
                                    transform ease-in-out hover:-translate-y-1 hover:scale-125"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                </svg>
                            )}
                        </button>
                        <a href="https://github.com/anguy258/ListenIn">
                            <svg
                                className="w-5 h-5 fill-current transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-125"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>    
                        </a>
                        {/* <button>
                            <svg
                            className="h-5 w-5 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-125"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                />
                            </svg>
                        </button> */}
                    </div>
                </div>
            </div>
        </nav>
    )
}