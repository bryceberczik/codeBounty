import Navigation from './navigation.tsx';
import '../css/header.css';

interface IHeader {
    text: string;
}

export default function Header({ text }: IHeader) {

    return (
        
        <>
        
            <div>
                <h1 className='header'>{text}</h1>
                <Navigation />
            </div>
        
        </>
    )
}
