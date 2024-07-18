import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
export default function Footer () {
    return (
        <footer className="text-gray-500  px-4 py-5 max-w-screen-xl mx-auto md:px-8">
            <div className="max-w-lg sm:mx-auto sm:text-center">
                <h1>Todo App</h1>
                <p className="leading-relaxed mt-2 text-[15px]">
                 App creada utilizando React, Node.js y Tailwind CSS para mejorar mis habilidades en desarrollo web.
                </p>
            </div>
            
            <div className="mt-8 items-center justify-between sm:flex">
                <div className="mt-4 sm:mt-0">
                    &copy; 2024 Valentino Copperi.
                </div>
                <div className="mt-6 sm:mt-0">
                    <ul className="flex items-center space-x-4">
                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <a href="https://www.linkedin.com/in/valentinocopperi/">
                                <LinkedInIcon/>
                            </a>
                        </li>

                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <a href="https://github.com/ValentinoCopperi?tab=repositories">
                                <GitHubIcon/>
                            </a>
                        </li>

                        

                       
                    </ul>
                </div>
            </div>
            <style jsx>{`
                .svg-icon path,
                .svg-icon polygon,
                .svg-icon rect {
                    fill: currentColor;
                }
            `}</style>
        </footer>
    )
}
