import '../assets/css/SkipLink.css';

function Skiplink({onNav}){
    return(
            <a 
            href={`#ToursPackage`}
            onClick={onNav}
            data-page={'ToursPackage'}
            className="Skiplink"
        >
            Skip to main content
        </a>  
    )
}
export default Skiplink;