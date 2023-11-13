import LogoContainer from "./LogoConatiner";
import KanbasNavItem from "./KanbasNavItem";

function KanbasNavigation(data){
    const fragment = window.location.hash;
    const nav_items = data.nav_items;
    if(!nav_items || nav_items.length === 0) return <></>;
    return(
        <div className={`col-1 app-nav-col ${fragment.includes("Courses")? "d-none d-lg-block":""}`}>
            <LogoContainer />
            <ul id="nav-menu" className="nav-menu">
                {
                    nav_items.map((nav_item) => (
                        <KanbasNavItem nav_item={nav_item} key={nav_item._id} />
                    )
                        
                    )
                }
            </ul>
        </div>
    );
}   

export default KanbasNavigation;