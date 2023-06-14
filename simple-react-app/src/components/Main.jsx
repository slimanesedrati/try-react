
export default function Main(props) {

    return (
        <div className={props.darkMode ? 'main-container dark p-6' : 'main-container p-6'}>
            <div className="container flex flex-col space-y-10 mt-20  mx-auto">
                <h1 className='text-4xl font-extrabold '>Fun facts about React</h1>
                <ul className=' custom-list space-y-2 font-medium pl-4 z-10'>
                    <li>Was first in 2013</li>
                    <li>Was originally created by Jordan Wallke</li>
                    <li>Has well over 100k stars on github</li>
                    <li>Is maintaind by Facebook</li>
                    <li>Powers thousands of entrprice apps, including mobile apps</li>
                </ul>
            </div>
        </div>
    )
}