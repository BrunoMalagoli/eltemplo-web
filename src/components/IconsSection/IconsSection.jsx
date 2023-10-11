import IconsSectionStyles from "./styles/iconsSection.module.css"

const IconsSection = () =>{
    return(
        <>
            <section id={IconsSectionStyles.iconsWrapper}>
                <div id={IconsSectionStyles.iconsContainer}>
                    <img src="/catena-logo.jpg" alt="Catena Zapata" height={"100px"} width={"200px"}/>
                    <img src="/chandon-logo.jpg" alt="Chandon" height={"120px"} width={"200px"}/>
                    <img src="/rutini-logo.jpg" alt="Rutini Wines" height={"150px"} width={"200px"}/>
                    <img src="/casaspirque-logo.jpg" alt="Catena Zapata" height={"150px"} width={"200px"}/>
                </div>
            </section>
        </>
    )

}

export default IconsSection