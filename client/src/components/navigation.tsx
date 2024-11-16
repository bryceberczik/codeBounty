import { useLocation, useNavigate } from "react-router-dom";
import '../css/navigation.css';

interface INavigationButtons {
    label: string;
}

const NavigationLinks = ( props: INavigationButtons & { isActive: boolean, onClick:() => void }  ) => {

    return (
        
        <button onClick={props.onClick} type="button" className="btn btn-primary btn-lg">{props.label}</button>
            
    );
};

export default function navigation() {

    const navigate = useNavigate();
    const currentPage = useLocation().pathname;

    const pageNavigation = [

        {label: 'Home', path:() => navigate('/'), location: '/'},
        {label: 'Explore', path:() => navigate('/explore'), location: '/explore'},
        {label: 'Find Work', path:() => navigate('/findwork'), location: '/findwork'},
        {label: 'Post a Job', path:() => navigate('/postajob'), location: '/postajob'},
        {label: 'About', path:() => navigate('/about'), location: '/about'},
    ];

    return (

        <>
            <div className="navigationContainer">

            <ul>

                {
                    pageNavigation.map(( navigateLinks ) => (
                        <NavigationLinks
                            key={ navigateLinks.label }
                            onClick={ navigateLinks.path }
                            label={ navigateLinks.label }
                            isActive={ currentPage === navigateLinks.location }
                        />
                    ))
                }

            </ul>

            </div>
        
        </>

    )
}
