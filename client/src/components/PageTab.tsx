import { useEffect } from 'react';

function PageTab(props: { title: string, children: React.ReactNode }) {


    useEffect (() => {

        document.title = `codeBounty | ${props.title} `;
        window.scrollTo(0, 0);

      }, []);

      return (

        <>

        <div>
            {props.children}
        </div>

        </>

      )

}

export default PageTab;