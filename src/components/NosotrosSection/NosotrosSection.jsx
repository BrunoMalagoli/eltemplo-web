import UbiMap from "./components/MapContainer";
import NosotrosStyles from "./styles/index.module.css"

const NosotrosSection = () =>{
    return(
    <>
        <section id={NosotrosStyles.nosotrosWrapper}>
            <div className={NosotrosStyles.nosotrosInfo}>

            </div>
            <div className={NosotrosStyles.map}>
                <UbiMap/>
            </div>
        </section>
    </>
    )

}

export default NosotrosSection;